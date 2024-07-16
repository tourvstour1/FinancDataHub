import { Injectable } from '@nestjs/common';
import { readFileSync,  readdirSync } from 'fs';
import { join } from 'path';
import { t_adp, t_aer, t_cha, t_cht, t_dru, t_idx, t_ins, t_iop, t_ipd, t_irf, t_lvd, t_odx, t_oop, t_opd, t_orf, t_pat } from 'prisma/generated/finanace-client';
import { AdpService } from 'src/f16/adp/adp.service';
import { AerService } from 'src/f16/aer/aer.service';
import { ChaService } from 'src/f16/cha/cha.service';
import { ChtService } from 'src/f16/cht/cht.service';
import { DruService } from 'src/f16/dru/dru.service';
import { IdxService } from 'src/f16/idx/idx.service';
import { InsService } from 'src/f16/ins/ins.service';
import { IopService } from 'src/f16/iop/iop.service';
import { IpdService } from 'src/f16/ipd/ipd.service';
import { IrfService } from 'src/f16/irf/irf.service';
import { LabfuService } from 'src/f16/labfu/labfu.service';
import { LvdService } from 'src/f16/lvd/lvd.service';
import { OdxService } from 'src/f16/odx/odx.service';
import { OopService } from 'src/f16/oop/oop.service';
import { OpdService } from 'src/f16/opd/opd.service';
import { OrfService } from 'src/f16/orf/orf.service';
import { PatService } from 'src/f16/pat/pat.service';
import { PrismaFinance } from 'src/prisma/prisma.service.finanec';
import { PrismaHospital } from 'src/prisma/prisma.service.hospital';

@Injectable()
export class ReProcressService {
    constructor(readonly hos: PrismaHospital,
        readonly fdh: PrismaFinance,
        readonly ins: InsService,
        readonly pat: PatService,
        readonly opd: OpdService,
        readonly orf: OrfService,
        readonly odx: OdxService,
        readonly oop: OopService,
        readonly ipd: IpdService,
        readonly irf: IrfService,
        readonly idx: IdxService,
        readonly iop: IopService,
        readonly cht: ChtService,
        readonly cha: ChaService,
        readonly aer: AerService,
        readonly adp: AdpService,
        readonly lvd: LvdService,
        readonly dru: DruService,
        readonly labfu: LabfuService,
    ) { }
    opdReProcess = async (seq: string) => {
        const pathOpd = join(__dirname, '..', '..', 'sql_opd')
        const files = await readdirSync(pathOpd)

        return await Promise.all(files.map(async (file) => {
            const queryString = (readFileSync(`${pathOpd}/${file}`).toString()).replaceAll(':seq', seq)
            const resulteQuery = await this.queryRow(queryString)
            switch (file) {
                case 'OPD_ADP.sql':
                    await this.adp.createAdp(resulteQuery as unknown as t_adp[])
                    break;
                case 'OPD_AER.sql':
                    await this.aer.createAer(resulteQuery as unknown as t_aer[])
                    break;
                case 'OPD_CHA.sql':
                    await this.cha.createCha(resulteQuery as unknown as t_cha[])
                    break;
                case 'OPD_CHT.sql':
                    await this.cht.createCht(resulteQuery as unknown as t_cht[])
                    break;
                case 'OPD_DRU.sql':
                    await this.dru.createDru(resulteQuery as unknown as t_dru[])
                    break;
                case 'OPD_ODX.sql':
                    await this.odx.createOdx(resulteQuery as unknown as t_odx[])
                    break;
                case 'OPD_INS.sql':
                    await this.ins.createIns(resulteQuery as unknown as t_ins[])
                    break;
                case 'OPD_OOP.sql':
                    await this.oop.createOop(resulteQuery as unknown as t_oop[])
                    break;
                case 'OPD_OPD.sql':
                    await this.opd.createOpd(resulteQuery as unknown as t_opd[])
                    break;
                case 'OPD_ORF.sql':
                    await this.orf.createOrf(resulteQuery as unknown as t_orf[])
                    break;
                case 'OPD_PAT.sql':
                    await this.pat.createPat(resulteQuery as unknown as t_pat[])
                    break;

                default:
                    //   console.log(file);

                    break;
            }
        })).then(async () => {
            console.log('re process opd compless');

            const getClaim = await this.fdh.opd_claim_status.findMany({
                where: {
                    seq: seq
                }
            })

            if (getClaim.length > 0) {
                await this.fdh.opd_claim_status.updateMany({
                    data: {
                        status_code: '0'
                    }, where: {
                        seq: seq
                    }
                })
            } else {
                const loggerOpd: {
                    seq: string,
                    opd_claim_date: string,
                    status_code: string,
                    opd_claim_number: string,
                    staff_number_claim?: string
                    sent_date: string
                }[] = [{
                    seq: seq,
                    opd_claim_date: '',
                    opd_claim_number: '',
                    sent_date: '',
                    status_code: '0',
                    staff_number_claim: ''
                }]
                await this.fdh.opd_claim_status.createMany({
                    data: loggerOpd
                })
            }

            const resultReProcrss = {
                message: 'ประมวลผลใหม่สำเร็จ',
                data: [],
                status: 200
            }
            return resultReProcrss
        })
    }

    ipdReProcess = async (an: string) => {
        console.log(an);
        
        const pathIpd = join(__dirname, '..', '..', 'sql_ipd')
        const files = await readdirSync(pathIpd);

        return await Promise.all(files.map(async (file) => {
            const queryString = (readFileSync(`${pathIpd}/${file}`).toString()).replaceAll(':an', an)
            const resulteQuery = await this.queryRow(queryString)
            switch (file) {
                case 'IPD_ADP.sql':
                    await this.adp.createAdp(resulteQuery as unknown as t_adp[])
                    break;
                case 'IPD_AER.sql':
                    await this.aer.createAer(resulteQuery as unknown as t_aer[])
                    break;
                case 'IPD_CHA.sql':
                    await this.cha.createCha(resulteQuery as unknown as t_cha[])
                    break;
                case 'IPD_CHT.sql':
                    await this.cht.createCht(resulteQuery as unknown as t_cht[])
                    break;
                case 'IPD_DRU.sql':
                    await this.dru.createDru(resulteQuery as unknown as t_dru[])
                    break;
                case 'IPD_IDX.sql':
                    await this.idx.createIdx(resulteQuery as unknown as t_idx[])
                    break;
                case 'IPD_INS.sql':
                    await this.ins.createIns(resulteQuery as unknown as t_ins[])
                    break;
                case 'IPD_IOP.sql':
                    await this.iop.createIop(resulteQuery as unknown as t_iop[])
                    break;
                case 'IPD_IPD.sql':
                    await this.ipd.createIpd(resulteQuery as unknown as t_ipd[])
                    break;
                case 'IPD_IRF.sql':
                    await this.irf.createIrf(resulteQuery as unknown as t_irf[])
                    break;
                case 'IPD_LVD.sql':
                    await this.lvd.createLvd(resulteQuery as unknown as t_lvd[])
                    break;
                case 'IPD_PAT.sql':
                    await this.pat.createPat(resulteQuery as unknown as t_pat[])
                    break;

                default:
                    //   console.log(file);

                    break;
            }
        })).then(async () => {
            console.log('re process ipd compless');

            const getClaim = await this.fdh.ipd_claim_status.findMany({
                where: {
                    an: an
                }
            })

            if (getClaim.length > 0) {
                await this.fdh.ipd_claim_status.updateMany({
                    data: {
                        status_code: '0'
                    }, where: {
                        an: an
                    }
                })
            } else {
                const loggerIpd: {
                    an: string,
                    ipd_claim_date: string,
                    status_code: string,
                    ipd_claim_number: string,
                    staff_number_claim?: string
                    sent_date: string
                }[] = [{
                    an: an,
                    ipd_claim_date: '',
                    ipd_claim_number: '',
                    sent_date: '',
                    status_code: '0',
                    staff_number_claim: ''
                }]
                await this.fdh.ipd_claim_status.createMany({
                    data: loggerIpd
                })
            }

            const resultReProcrss = {
                message: 'ประมวลผลใหม่สำเร็จ',
                data: [],
                status: 200
            }
            return resultReProcrss
        })
    }

    queryRow = async (sql: string) => {
        return await this.hos.$queryRawUnsafe(`${sql}`);
    }
}
