import { Injectable } from '@nestjs/common';
import { PrismaFinance } from 'src/prisma/prisma.service.finanec';
import {
    HistorysBody,
    IpdServiceType,
    OpdServiceType,
    PostHistorysIpdRespont,
    PostHistorysOpdRespont,
} from './history-list.entity';
import { ConnectMophService } from 'src/connect-moph/connect-moph.service';

@Injectable()
export class HistoryListService {
    constructor(
        readonly finance: PrismaFinance,
        readonly getFdh: ConnectMophService,
    ) { }
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
                opd_claim_date: true,
            },
            where: {
                AND: [
                    {
                        OR: [
                            {
                                opd_claim_number: {
                                    not: '',
                                },
                            },
                            {
                                opd_claim_number: {
                                    not: null,
                                },
                            },
                        ],
                    },
                    {
                        opd_claim_date: {
                            gte: start,
                            lte: end,
                        },
                    },
                ],
            },
        });

        const group = findOpdClaimNumber.reduce((pre, cur) => {
            const {
                opd_claim_number,
                seq,
                opd_claim_date,
                sent_date,
                staff_number_claim,
            } = cur;
            if (!pre[opd_claim_number]) {
                pre[opd_claim_number] = { opd_claim_number, sent_date, service: [] };
            }

            pre[opd_claim_number].service.push({
                staff_number_claim,
                opddate: opd_claim_date,
                seq: seq,
            });

            return pre;
        }, []);

        return Object.values(group);
    };

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
                                    not: '',
                                },
                            },
                            {
                                ipd_claim_number: {
                                    not: null,
                                },
                            },
                        ],
                    },
                    {
                        ipd_claim_date: {
                            gte: start,
                            lte: end,
                        },
                    },
                ],
            },
        });

        const gropIpd = findipdClaimNumber.reduce((pre, cur) => {
            const {
                an,
                ipd_claim_number,
                ipd_claim_date,
                sent_date,
                staff_number_claim,
            } = cur;
            if (!pre[ipd_claim_number]) {
                pre[ipd_claim_number] = {
                    ipd_claim_number,
                    sent_date,
                    service: [],
                };
            }

            pre[ipd_claim_number].service.push({
                staff_number_claim,
                ipddate: ipd_claim_date,
                an: an,
            });

            return pre;
        }, []);

        return Object.values(gropIpd);
    };

    //#endregion claim history opd & ipd

    //#region opd&ipd Service
    historyOpdClaimServices = async (services: { seq: string[] }) => {
        const vn = services.seq.map((i) => i);
        const listTabale = [
            't_opd',
            't_ins',
            't_adp',
            't_aer',
            't_cht',
            't_cha',
            't_dru',
            't_labfu',
            't_odx',
            't_oop',
            't_orf',
        ];
        const AllService: OpdServiceType = {};
        await Promise.all(
            listTabale.map(async (table) => {
                const res = await this.finance[table].findMany({
                    where: {
                        seq: {
                            in: vn,
                        },
                    },
                });
                const ser = table.replace('t_', '');
                Object.assign(AllService, {
                    [ser]: res,
                });
            }),
        );

        const getHn = AllService.opd.map((i) => i.hn);
        const pat = await this.finance.t_pat.findMany({
            where: {
                hn: {
                    in: getHn,
                },
            },
        });

        Object.assign(AllService, {
            pat: pat,
        });

        let fhdStatus: unknown[] = [];

        for (const opd of AllService.opd) {
            try {
                const getFhdStatus = await this.getFdh.getResponstStatus(
                    opd.hn,
                    '',
                    opd.seq,
                );
                if (getFhdStatus.data !== undefined) {
                    fhdStatus = fhdStatus.concat(getFhdStatus.data);
                }
            } catch (err) {
                console.log(err);
            }
        }

        Object.assign(AllService, {
            fdh: fhdStatus,
        });

        const reslut = AllService.opd.map((item) => {
            for (const floder in AllService) {
                if (floder !== 'opd') {
                    const findItem = AllService[floder].filter((i) => i.seq === item.seq);
                    Object.assign(item, {
                        [floder]: findItem,
                    });
                }
                if (floder === 'pat') {
                    const findItem = AllService[floder].filter((i) => i.hn === item.hn);
                    Object.assign(item, {
                        [floder]: findItem,
                    });
                }
            }
            return item;
        });

        return reslut;
    };

    historyIpdClaimServices = async (services: { an: string[] }) => {
        const an = services.an.map((i) => i);
        const listTables = [
            't_ipd',
            't_ins',
            't_adp',
            't_aer',
            't_cht',
            't_cha',
            't_dru',
            't_idx',
            't_iop',
            't_irf',
            't_lvd',
        ];
        const allIpdServiceClaim: IpdServiceType = {};

        await Promise.all(
            listTables.map(async (table) => {
                const res = await this.finance[table].findMany({
                    where: {
                        an: {
                            in: an,
                        },
                    },
                });
                const ser = table.replace('t_', '');
                Object.assign(allIpdServiceClaim, {
                    [ser]: res,
                });
            }),
        );

        const getHn = allIpdServiceClaim.ipd.map((i) => i.hn);

        const pat = await this.finance.t_pat.findMany({
            where: {
                hn: {
                    in: getHn,
                },
            },
        });
        Object.assign(allIpdServiceClaim, {
            pat: pat,
        });

        let fhdStatus: unknown[] = [];

        for (const ipd of allIpdServiceClaim.ipd) {
            try {
                const getFhdStatus = await this.getFdh.getResponstStatus(
                    ipd.hn,
                    ipd.an,
                    '',
                );
                if (getFhdStatus.data !== undefined) {
                    fhdStatus = fhdStatus.concat(getFhdStatus.data);
                }
            } catch (err) {
                console.log(err);
            }
        }

        // const getFhdStatus = await this.getFdh.getResponstStatus()

        Object.assign(allIpdServiceClaim, {
            fdh: fhdStatus,
        });

        const reslut = allIpdServiceClaim.ipd.map((item) => {
            for (const floder in allIpdServiceClaim) {
                if (floder !== 'ipd') {
                    const findItem = allIpdServiceClaim[floder].filter((i) => i.an === item.an,);
                    Object.assign(item, {
                        [floder]: findItem,
                    });
                }

                if (floder === 'pat') {
                    const findItem = allIpdServiceClaim[floder].filter(
                        (i) => i.hn === item.hn,
                    );
                    Object.assign(item, {
                        [floder]: findItem,
                    });
                }
            }
            return item;
        });
        return reslut;
    };
    //#endregion opd&ipd Services

    //#region historys

    getHistorys = async (service: HistorysBody) => {
        switch (service.serviceType) {
            case 'opd':
                return await this.getOpdHistory(service);

            case 'ipd':
                return await this.getIpdHistory(service);

            default:
                return undefined;
        }
    };

    private getOpdHistory = async (service: HistorysBody) => {
        const opdServive = await this.finance.t_opd.findMany({
            select: {
                hn: true,
                seq: true,
                dateopd: true,
                timeopd: true,
            },
            where: {
                dateopd: {
                    gte: service.startDate,
                    lte: service.endDate,
                },
            },
        });

        const seqs = opdServive
            .map((opd) => opd.seq)
            .reduce(
                (pre: string[], cur) => (pre.includes(cur) ? pre : pre.concat(cur)),
                [],
            );

        const row = Math.ceil(seqs.length / 1000);

        const newseq = [];

        let startmin = 0;
        let ennMax = 999;
        let a = 1;
        for (a; a <= row; a++) {
            //  console.log({ startmin, ennMax });
            newseq.push(seqs.slice(startmin, ennMax));
            startmin += 1000;
            ennMax += 1000;
        }

        //     console.log(newseq.length);

        let result = []
        for (const seq in newseq) {
            console.log(newseq[seq]);

            const getOpdClaimStatus = await this.finance.opd_claim_status.findMany({
                select: {
                    hn: true,
                    seq: true,
                    opd_claim_date: true,
                    fdh_process_status: true,
                    fdh_status_message: true,
                    fdh_status_message_th: true,
                },
                where: {
                    fdh_status_message: service.statusProcess,
                    seq: {
                        in: newseq[seq],
                    },
                },
            });

            const getOpdPat = await this.finance.t_pat.findMany({
                select: {
                    hn: true,
                    title: true,
                    fname: true,
                    lname: true,
                },
                where: {
                    hn: {
                        in: opdServive
                            .map((opd) => opd.hn)
                            .reduce(
                                (pre: string[], cur) =>
                                    pre.includes(cur) ? pre : pre.concat(cur),
                                [],
                            ),
                    },
                },
            });

            const getOpdIns = await this.finance.t_ins.findMany({
                where: {
                    seq: {
                        in: newseq[seq],
                    },
                },
                select: {
                    seq: true,
                    inscl: true,
                    subinscl: true,
                    subtype: true,
                },
            });

            const mergeServives = getOpdClaimStatus.reduce(
                (pre: PostHistorysOpdRespont[], cur) => {
                    const getPat = getOpdPat.find((p) => p.hn === cur.hn);
                    const getIns = getOpdIns.find((i) => i.seq === cur.seq);
                    const getOpd = opdServive.find((c) => c.seq === cur.seq);

                    if (pre.map((p) => p.seq).includes(cur.seq)) {
                        return pre;
                    } else {
                        const setObjHistory: PostHistorysOpdRespont = {
                            hn: getOpd.hn,
                            seq: getOpd.seq,
                            dateopd: getOpd.dateopd,
                            timeopd: getOpd.timeopd,
                            opd_claim_date: cur.opd_claim_date,
                            fdh_process_status: cur?.fdh_process_status,
                            fdh_status_message: cur?.fdh_status_message,
                            fdh_status_message_th: cur?.fdh_status_message_th,
                            title: getPat?.title,
                            fname: getPat?.fname,
                            lname: getPat?.lname,
                            inscl: getIns?.inscl,
                            subinscl: getIns?.subinscl,
                            subtype: getIns?.subtype,
                        };
                        return pre.concat(setObjHistory);
                    }
                },
                [],
            );

            result = result.concat(mergeServives)
        }

        return result
    };


    private getIpdHistory = async (service: HistorysBody) => {
        const getIpdServices = await this.finance.t_ipd.findMany({
            where: {
                datedsc: {
                    gte: service.startDate,
                    lte: service.endDate,
                },
            },
            select: {
                hn: true,
                an: true,
                datedsc: true,
                timedsc: true,
            },
        });


        const anLists = getIpdServices
            .map((ipd) => ipd.an)
            .reduce(
                (pre: string[], cur) => (pre.includes(cur) ? pre : pre.concat(cur)),
                [],
            );

        const row = Math.ceil(anLists.length / 1000);

        const newAn = [];

        let startmin = 0;
        let ennMax = 999;
        let a = 1;
        for (a; a <= row; a++) {
            //  console.log({ startmin, ennMax });
            newAn.push(anLists.slice(startmin, ennMax));
            startmin += 1000;
            ennMax += 1000;
        }

        let result = []
        for (const ipd in newAn) {


            const getIpdClaimService = await this.finance.ipd_claim_status.findMany({
                select: {
                    hn: true,
                    an: true,
                    ipd_claim_date: true,
                    fdh_process_status: true,
                    fdh_status_message: true,
                    fdh_status_message_th: true,
                },
                where: {
                    fdh_status_message: service.statusProcess,
                    an: {
                        in: newAn[ipd],
                    },
                },
            });

            const getIpdIns = await this.finance.t_ins.findMany({
                where: {
                    an: {
                        in: newAn[ipd],
                    },
                },
                select: {
                    an: true,
                    inscl: true,
                    subinscl: true,
                    subtype: true,
                },
            });

            const getIpdPat = await this.finance.t_pat.findMany({
                select: {
                    hn: true,
                    title: true,
                    fname: true,
                    lname: true,
                },
                where: {
                    hn: {
                        in: getIpdServices
                            .map((ipd) => ipd.hn)
                            .reduce(
                                (pre: string[], cur) =>
                                    pre.includes(cur) ? pre : pre.concat(cur),
                                [],
                            ),
                    },
                },
            });

            const mergeServives = getIpdClaimService.reduce(
                (pre: PostHistorysIpdRespont[], cur) => {
                    const getPat = getIpdPat.find((p) => p.hn === cur.hn);
                    const getIns = getIpdIns.find((i) => i.an === cur.an);
                    const getIpd = getIpdServices.find((c) => c.an === cur.an);

                    if (pre.map((ipd) => ipd.an).includes(cur.an)) {
                        return pre;
                    } else {
                        const setObjHistory: PostHistorysIpdRespont = {
                            hn: getIpd.hn,
                            an: getIpd.an,
                            datedsc: getIpd.datedsc,
                            timedsc: getIpd.timedsc,
                            ipd_claim_date: cur.ipd_claim_date,
                            fdh_process_status: cur?.fdh_process_status,
                            fdh_status_message: cur?.fdh_status_message,
                            fdh_status_message_th: cur?.fdh_status_message_th,
                            title: getPat?.title,
                            fname: getPat?.fname,
                            lname: getPat?.lname,
                            inscl: getIns?.inscl,
                            subinscl: getIns?.subinscl,
                            subtype: getIns?.subtype,
                        };
                        return pre.concat(setObjHistory);
                    }
                },
                [],
            );
            result = result.concat(mergeServives)
        }
        return result
    };

    //#endregion historys
}
