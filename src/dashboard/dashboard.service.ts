import { Injectable } from '@nestjs/common';
import { PrismaFinance } from 'src/prisma/prisma.service.finanec';

@Injectable()
export class DashboardService {
    constructor(readonly finance: PrismaFinance) { }

    getOpdStatic = async () => {
        const groupedDataOpd = await this.finance.opd_claim_status.groupBy({
            by: ['fdh_status_message', 'fdh_status_message_th'],
            _count: {
                seq: true
            },
            where: {
                seq: {
                    not: ''
                },
                status_code: {
                    not: '0'
                }
            }
        });
        const opd = groupedDataOpd.map(item => {
            const newObj = {
                vn: item._count.seq,
                fdh_status_message: item.fdh_status_message,
                fdh_status_message_th: item.fdh_status_message_th === null || item.fdh_status_message_th === '0' ? 'อื่นๆ' : item.fdh_status_message_th
            }
            return newObj
        })
        return opd
    }
    getIpdStatic = async () => {
        const groupedDataIpd = await this.finance.ipd_claim_status.groupBy({
            by: ['fdh_status_message', 'fdh_status_message_th'],
            _count: {
                an: true
            },
            where: {
                an: {
                    not: ''
                },
                status_code: {
                    not: '0'
                }
            }
        });

        const ipd = groupedDataIpd.map(item => {
            const newObj = {
                vn: item._count.an,
                fdh_status_message: item.fdh_status_message,
                fdh_status_message_th: item.fdh_status_message_th === null || item.fdh_status_message_th === '0' ? 'อื่นๆ' : item.fdh_status_message_th
            }
            return newObj
        })
        return ipd
    }
}
