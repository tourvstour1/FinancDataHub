import { Injectable } from '@nestjs/common';
import { ConnectMophService } from 'src/connect-moph/connect-moph.service';

@Injectable()
export class ScheduleService {
    constructor(readonly fdh: ConnectMophService) {
        this.timer()
    }
    timer = () => {
        const timers = (process.env['TIMEING'] as unknown as string).split(',')
        setInterval(() => {
            const getTime = new Date().toLocaleTimeString('th-TH', { hour: '2-digit', minute: '2-digit' })
            const findIndex = timers.indexOf(getTime)

            if (findIndex > -1) {
                this.updateOpdFdhStatus()
                this.updateIpdFdhStatus()
            }

        }, 1000)
    }

    updateOpdFdhStatus = async () => {
        const getSeq = await this.fdh.finance.opd_claim_status.findMany({
            where: {
                fdh_process_status: {
                    notIn: ['4', '5', '6']
                },
                seq: {
                    not: ""
                },
                hn: {
                    not: null
                }
            },
        })

        for (let opd in getSeq) {
            const hn = getSeq[opd].hn
            const vn = getSeq[opd].seq
            const respons = await this.fdh.getResponstStatus(hn, '', vn)
         
            if (respons !== undefined) {
                const checkData = respons?.data
                if (checkData !== undefined) {
                    const value = respons.data.slice(-1)[0]
                    const messageStatus = value.status !== undefined ? value.status : ''
                    const messageThai = value.status_message_th !== undefined ? value.status_message_th : ''
                    const processStatus = value.process_status !== undefined ? value.process_status : ''
                    await this.fdh.finance.opd_claim_status.updateMany({
                        where: {
                            seq: vn,
                            hn: hn
                        },
                        data: {
                            fdh_process_status: processStatus,
                            fdh_status_message: messageStatus,
                            fdh_status_message_th: messageThai
                        }
                    })
                        .then(res => {
                            console.log("OPD." + (+opd + 1) + "/" + getSeq.length + " update hn/vn: " + hn + '/' + vn + "update: " + processStatus + " | " + messageStatus + ' | ' + messageThai);

                        })
                        .catch(err => {
                            console.log(hn + '/' + vn + "update err");
                        })
                }
            }
        }
        return getSeq
    }

    updateIpdFdhStatus = async () => {
        const getAn = await this.fdh.finance.ipd_claim_status.findMany({
            where: {
                fdh_process_status: {
                    notIn: ['4', '5', '6']
                },
                an: {
                    not: ""
                },
                hn: {
                    not: null
                }
            },
        })


        for (let ipd in getAn) {
            const hn = getAn[ipd].hn
            const vn = getAn[ipd].an

            const respons = await this.fdh.getResponstStatus(hn, vn, '')
            if (respons !== undefined) {
                const checkData = respons?.data
                if (checkData !== undefined) {
                    const value = respons.data.slice(-1)[0]
                    const messageStatus = value.status !== undefined ? value.status : ''
                    const messageThai = value.status_message_th !== undefined ? value.status_message_th : ''
                    const processStatus = value.process_status !== undefined ? value.process_status : ''
                    await this.fdh.finance.ipd_claim_status.updateMany({
                        where: {
                            an: vn,
                            hn: hn
                        },
                        data: {
                            fdh_process_status: processStatus,
                            fdh_status_message: messageStatus,
                            fdh_status_message_th: messageThai
                        }
                    }).then(res => {
                        console.log("IPD." + (+ipd + 1) + "/" + getAn.length + " update hn/vn: " + hn + '/' + vn + "update: " + processStatus + " | " + messageStatus + ' | ' + messageThai);
                    }).catch(err => {
                        console.log(hn + '/' + vn + "update err");
                    })
                }

            }
        }
    }
}
