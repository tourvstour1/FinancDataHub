import { Injectable } from '@nestjs/common';
import { PrismaFinance } from 'src/prisma/prisma.service.finanec';
import { IpdServiceType, OpdServiceType } from './history-list.entity';
import { ConnectMophService } from 'src/connect-moph/connect-moph.service';

@Injectable()
export class HistoryListService {
    constructor(readonly finance: PrismaFinance, readonly getFdh: ConnectMophService) { }
    //#region claim history opd & ipd
    getOpdClaimHistory = async (startDate: string, endDate: string) => {
        const start = startDate.replaceAll('-', '');
        const end = endDate.replaceAll('-', '');
        const findOpdClaimNumber = await this.finance.opd_claim_status.findMany({
            select: {
                sent_date: true,
                opd_claim_number: true,
                staff_number_claim: true,
                seq: true,
                opd_claim_date: true
            },
            where: {
                AND: [
                    {
                        OR: [
                            {
                                opd_claim_number: {
                                    not: ''
                                },
                            }, {
                                opd_claim_number: {
                                    not: null
                                }
                            }
                        ]
                    },
                    {
                        opd_claim_date: {
                            gte: start,
                            lte: end,
                        },
                    }
                ]
            }
        })

        const group = findOpdClaimNumber.reduce((pre, cur) => {
            const { opd_claim_number, seq, opd_claim_date, sent_date, staff_number_claim } = cur;
            if (!pre[opd_claim_number]) {
                pre[opd_claim_number] = { opd_claim_number, sent_date, service: [] };
            }

            pre[opd_claim_number].service.push({
                staff_number_claim,
                opddate: opd_claim_date,
                seq: seq,
            });

            return pre
        }, [])

        return Object.values(group)
    }

    getIpdClaimHistory = async (startDate: string, endDate: string) => {
        const start = startDate.replaceAll('-', '');
        const end = endDate.replaceAll('-', '');
        const findipdClaimNumber = await this.finance.ipd_claim_status.findMany({
            select: {
                ipd_claim_date: true,
                ipd_claim_number: true,
                sent_date: true,
                an: true,
                staff_number_claim: true,
            },
            where: {
                AND: [
                    {
                        OR: [
                            {
                                ipd_claim_number: {
                                    not: ''
                                },
                            }, {
                                ipd_claim_number: {
                                    not: null
                                }
                            }
                        ]
                    },
                    {
                        ipd_claim_date: {
                            gte: start,
                            lte: end,
                        },
                    }
                ]
            }
        })

        const gropIpd = findipdClaimNumber.reduce((pre, cur) => {
            const { an, ipd_claim_number, ipd_claim_date, sent_date, staff_number_claim } = cur
            if (!pre[ipd_claim_number]) {
                pre[ipd_claim_number] = {
                    ipd_claim_number,
                    sent_date,
                    service: []
                }
            }

            pre[ipd_claim_number].service.push({
                staff_number_claim,
                ipddate: ipd_claim_date,
                an: an,
            })

            return pre
        }, [])

        return Object.values(gropIpd)
    }

    //#endregion claim history opd & ipd

    //#region opd&ipd Service
    historyOpdClaimServices = async (services: { seq: string[] }) => {
        const vn = services.seq.map(i => i)
        const listTabale = ['t_opd', 't_ins', 't_adp', 't_aer', 't_cht', 't_cha', 't_dru', 't_labfu', 't_odx', 't_oop', 't_orf']
        let AllService: OpdServiceType = {}
        await Promise.all(listTabale.map(async (table) => {
            const res = await this.finance[table].findMany({
                where: {
                    seq: {
                        in: vn
                    }
                }
            })
            const ser = table.replace('t_', '')
            Object.assign(AllService, {
                [ser]: res
            })
        }))

        const getHn = AllService.opd.map(i => i.hn)
        const pat = await this.finance.t_pat.findMany({
            where: {
                hn: {
                    in: getHn
                }
            }
        })

        Object.assign(AllService, {
            pat: pat
        })

        let fhdStatus: any[] = []

        for (const opd of AllService.opd) {
            try {
                const getFhdStatus = await this.getFdh.getResponstStatus(opd.hn, '', opd.seq)
                if (getFhdStatus.data !== undefined) {
                    fhdStatus = fhdStatus.concat(getFhdStatus.data)
                }
            } catch (err) {
                //  console.log(opd.seq);
            }
        }

        Object.assign(AllService, {
            fdh: fhdStatus
        })

        const reslut = AllService.opd.map(item => {
            for (let floder in AllService) {
                if (floder !== 'opd') {
                    const findItem = AllService[floder].filter(i => i.seq === item.seq)
                    Object.assign(item, {
                        [floder]: findItem
                    })
                }
                if (floder === 'pat') {
                    const findItem = AllService[floder].filter(i => i.hn === item.hn)
                    Object.assign(item, {
                        [floder]: findItem
                    })
                }
            }
            return item
        })

        return reslut
    }

    historyIpdClaimServices = async (services: { an: string[] }) => {
        const an = services.an.map(i => i)
        const listTables = ['t_ipd', 't_ins', 't_adp', 't_aer', 't_cht', 't_cha', 't_dru', 't_idx', 't_iop', 't_irf', 't_lvd']
        let allIpdServiceClaim: IpdServiceType = {}

        await Promise.all(listTables.map(async (table) => {
            const res = await this.finance[table].findMany({
                where: {
                    an: {
                        in: an
                    }
                }
            })
            const ser = table.replace('t_', '')
            Object.assign(allIpdServiceClaim, {
                [ser]: res
            })
        }))


        const getHn = allIpdServiceClaim.ipd.map(i => i.hn)

        const pat = await this.finance.t_pat.findMany({
            where: {
                hn: {
                    in: getHn
                }
            }
        })
        Object.assign(allIpdServiceClaim, {
            pat: pat
        })

        let fhdStatus: any[] = []

        for (const ipd of allIpdServiceClaim.ipd) {
            try {
                const getFhdStatus = await this.getFdh.getResponstStatus(ipd.hn, ipd.an, '')
                if (getFhdStatus.data !== undefined) {
                    fhdStatus = fhdStatus.concat(getFhdStatus.data)
                }

            } catch (err) {
                // console.log(ipd.an);
            }
        }

        // const getFhdStatus = await this.getFdh.getResponstStatus()

        Object.assign(allIpdServiceClaim, {
            fdh: fhdStatus
        })


        const reslut = allIpdServiceClaim.ipd.map(item => {
            for (let floder in allIpdServiceClaim) {
                if (floder !== 'ipd') {
                    const findItem = allIpdServiceClaim[floder].filter(i => i.an === item.an)
                    Object.assign(item, {
                        [floder]: findItem
                    })
                }

                if (floder === 'pat') {
                    const findItem = allIpdServiceClaim[floder].filter(i => i.hn === item.hn)
                    Object.assign(item, {
                        [floder]: findItem
                    })
                }
            }
            return item
        })
        return reslut
    }
    //#endregion opd&ipd Services
}
