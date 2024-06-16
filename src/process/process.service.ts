import { Injectable } from '@nestjs/common';
import { readdir } from 'fs';
import { QueryService } from 'src/query/query.service';
import { PrismaHospital } from 'src/prisma/prisma.service.hospital';
import { InsService } from 'src/f16/ins/ins.service';
import { PatService } from 'src/f16/pat/pat.service';
import { OpdService } from 'src/f16/opd/opd.service';
import { t_adp, t_aer, t_cha, t_cht, t_dru, t_idx, t_ins, t_iop, t_ipd, t_irf, t_labfu, t_lvd, t_odx, t_oop, t_opd, t_orf, t_pat } from 'prisma/generated/finanace-client';
import { OrfService } from 'src/f16/orf/orf.service';
import { OdxService } from 'src/f16/odx/odx.service';
import { OopService } from 'src/f16/oop/oop.service';
import { IpdService } from 'src/f16/ipd/ipd.service';
import { IrfService } from 'src/f16/irf/irf.service';
import { IdxService } from 'src/f16/idx/idx.service';
import { IopService } from 'src/f16/iop/iop.service';
import { ChtService } from 'src/f16/cht/cht.service';
import { ChaService } from 'src/f16/cha/cha.service';
import { AerService } from 'src/f16/aer/aer.service';
import { AdpService } from 'src/f16/adp/adp.service';
import { LvdService } from 'src/f16/lvd/lvd.service';
import { DruService } from 'src/f16/dru/dru.service';
import { LabfuService } from 'src/f16/labfu/labfu.service';
import { EventService } from 'src/event/event.service';
import { join } from 'path';
import { PrismaFinance } from 'src/prisma/prisma.service.finanec';

@Injectable()
export class ProcessService {
  constructor(
    readonly rowQuery: QueryService,
    readonly hos: PrismaHospital,
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
    readonly emit: EventService,
    private prisma: PrismaFinance
  ) { }

  async create16F(startDate: string, endDate: string) {
    this.runSqlFiles(startDate, endDate);
  }

  runSqlFiles = async (startDate: string, endDate: string) => {
    const path = join(__dirname, '..', '..', 'sql')

    let procesStatus = {
      allProces: 0,
      process: [],
      status: 'proces',
    };

    readdir(path, (err, files) => {
      files.forEach(async (file) => {
        try {
          const sqlString = this.rowQuery.genQueryReport(
            file,
            startDate,
            endDate,
          );

          const logFirth = (file: string) => {
            const job = {
              procesName: file,
              procesStatus: 'GenQuery',
              procesNumber: 0,
            };
            Object.assign(procesStatus, {
              allProces: procesStatus.allProces + 1,
            });
            procesStatus.process.push(job);
            this.emit.eventEmit(procesStatus);
          };

          logFirth(file);
          const resultQuery = await this.resultQuery(sqlString, file);

          const logSec = (file: string) => {
            procesStatus.process.map((i) => {
              if (i.procesName === file) {
                i.procesStatus = 'Query';
                i.procesNumber = 1;
              }
            });
            this.emit.eventEmit(procesStatus);
          };

          const logFinal = (file: string, value: any) => {
            procesStatus.process.map((i) => {
              if (i.procesName === file) {
                i.procesStatus = 'Comples';
                i.procesNumber = 2;
              }
            });

            if (
              procesStatus.process.filter((e) => e.procesNumber === 2)
                .length === procesStatus.allProces
            ) {
              procesStatus.status = 'sucess';
              //   console.log(procesStatus);
              //   console.log('compless');
              this.emit.eventEmit(procesStatus);
            } else {
              this.emit.eventEmit(procesStatus);
            }
          };


          switch (file) {
            case 'PAT.sql':
              logSec(file);
              const sqlPat = resultQuery as t_pat[]
              const patData = await this.getClaim(sqlPat) as unknown as t_pat[]
              const pat = await this.pat.createPat(patData);
              logFinal(file, pat);
              break;
            case 'OPD.sql':
              logSec(file);
              const sqlOpd = resultQuery as t_opd[]
              const opdData = await this.getClaim(sqlOpd) as unknown as t_opd[]
              const opd = await this.opd.createOpd(opdData);
              logFinal(file, opd);
              break;
            case 'IPD.sql':
              logSec(file);
              const sqlIpd = resultQuery as t_ipd[]
              const ipdData = await this.getClaim(sqlIpd) as unknown as t_ipd[]
              const ipd = await this.ipd.createIpd(ipdData);
              logFinal(file, ipd);
              break;
            case 'INS.sql':
              logSec(file);
              const sqlIns = resultQuery as t_ins[]
              const insData = await this.getClaim(sqlIns) as unknown as t_ins[]
              const ins = await this.ins.createIns(insData);
              logFinal(file, ins);
              break;
            case 'ORF.sql':
              logSec(file);
              const sqlOrf = resultQuery as t_orf[]
              const orfData = await this.getClaim(sqlOrf) as unknown as t_orf[]
              const orf = await this.orf.createOrf(orfData);
              logFinal(file, orf);
              break;
            case 'ODX.sql':
              logSec(file);
              const sqlOdx = resultQuery as t_odx[]
              const odxData = await this.getClaim(sqlOdx) as unknown as t_odx[]
              const odx = await this.odx.createOdx(odxData);
              logFinal(file, odx);
              break;
            case 'OOP.sql':
              logSec(file);
              const sqlOop = resultQuery as t_oop[]
              const oopData = await this.getClaim(sqlOop) as unknown as t_oop[]
              const oop = await this.oop.createOop(oopData);
              logFinal(file, oop);
              break;
            case 'IRF.sql':
              logSec(file);
              const sqlIrf = resultQuery as t_irf[]
              const irfData = await this.getClaim(sqlIrf) as unknown as t_irf[]
              const irf = await this.irf.createIrf(irfData);
              logFinal(file, irf);
              break;
            case 'IDX.sql':
              logSec(file);
              const sqlIdx = resultQuery as t_idx[]
              const idxData = await this.getClaim(sqlIdx) as unknown as t_idx[]
              const idx = await this.idx.createIdx(idxData);
              logFinal(file, idx);
              break;
            case 'IOP.sql':
              logSec(file);
              const sqlIop = resultQuery as t_iop[]
              const iopData = await this.getClaim(sqlIop) as unknown as t_iop[]
              const iop = await this.iop.createIop(iopData);
              logFinal(file, iop);
              break;
            case 'CHT.sql':
              logSec(file);
              const sqlCht = resultQuery as t_cht[]
              const chtData = await this.getClaim(sqlCht) as unknown as t_cht[]
              const cht = await this.cht.createCht(chtData);
              logFinal(file, cht);
              break;
            case 'CHA.sql':
              logSec(file);
              const sqlCha = resultQuery as t_cha[]
              const chaData = await this.getClaim(sqlCha) as unknown as t_cha[]
              const cha = await this.cha.createCha(chaData);
              logFinal(file, cha);
              break;
            case 'AER.sql':
              logSec(file);
              const sqlAer = resultQuery as t_aer[]
              const AerData = await this.getClaim(sqlAer) as unknown as t_aer[]
              const aer = await this.aer.createAer(AerData);
              logFinal(file, aer);
              break;
            case 'ADP.sql':
              logSec(file);
              const sqlAdp = resultQuery as t_adp[]
              const adpData = await this.getClaim(sqlAdp) as unknown as t_adp[]
              const adp = await this.adp.createAdp(adpData);
              logFinal(file, adp);
              break;
            case 'LVD.sql':
              logSec(file);
              const sqlLvd = resultQuery as t_lvd[]
              const LvdData = await this.getClaim(sqlLvd) as unknown as t_lvd[]
              const lvd = await this.lvd.createLvd(LvdData);
              logFinal(file, lvd);
              break;
            case 'DRU.sql':
              logSec(file);
              const sqlDru = resultQuery as t_dru[]
              const druData = await this.getClaim(sqlDru) as unknown as t_dru[]
              const dru = await this.dru.createDru(druData);
              logFinal(file, dru);
              break;
            case 'LABFU.sql':
              logSec(file);
              const sqlLabfu = resultQuery as t_labfu[]
              const labData = await this.getClaim(sqlLabfu) as unknown as t_labfu[]
              const labfu = await this.labfu.createLabfu(labData);
              logFinal(file, labfu);
              break;
            default:
              console.log(file);
              console.error('not query>?');
              break;
          }
        } catch (err) {
          console.error('err file' + file + '\n' + err);
        }
      });
    });
  };

  resultQuery = async (sql: string, sqlName: string) => {
    //    console.log('run query: ' + sqlName);
    return await this.hos.$queryRawUnsafe(`${sql}`);
  };

  getClaim = async (list: any[]) => {
    const listSplitSize = 1000
    const listData: any[] = []
    const newListdata: any[] = []
    const listSeq: string[] = []
    const listAn: string[] = []

    let seq: { seq: string }[] = []
    let an: { an: string }[] = []
    if (list.length > 0) {
      /*split array*/
      for (let i = 0; i < list.length; i += listSplitSize) {
        const item = list.slice(i, i + listSplitSize);
        listData.push(item);
      }

      await Promise.all(listData.map(async (serive) => {
        serive.forEach(item => {
          if (item.seq !== '') {
            if (item.seq !== undefined) {
              listSeq.push(item.seq)
            }
          }

          if (item.an !== '') {
            if (item.an !== undefined) {
              listAn.push(item.an)
            }
          }
        })

        const getOnly = (value, index, array) => {
          return array.indexOf(value) === index
        }

        const filterSeq = listSeq.filter(getOnly)
        const filterAn = listAn.filter(getOnly)

        if (filterSeq.length > 0) {
          seq = await this.prisma.opd_claim_status.findMany({
            select: {
              seq: true
            },
            where: {
              seq: {
                in: filterSeq
              },
              status_code: {
                in: ['1', '2']
              }
            }
          })
        }

        if (filterAn.length > 0) {
          an = await this.prisma.ipd_claim_status.findMany({
            select: {
              an: true
            },
            where: {
              an: {
                in: filterAn
              },
              status_code: {
                in: ['1', '2']
              }
            }
          })
        }

        serive.forEach(item => {
          const indexSeq = seq.map(i => i.seq).indexOf(item.seq)
          const indexAn = an.map(i => i.an).indexOf(item.an)

          if (indexSeq === -1 && indexAn === -1) {
            newListdata.push(item)
          }
        })

      })
      )
      console.log('old' + list.length)
      console.log('new' + newListdata.length);
      return newListdata
    }
    else {
      return newListdata
    }
  }
}
