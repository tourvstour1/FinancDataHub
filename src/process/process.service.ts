import { Injectable } from '@nestjs/common';
import { readdir } from 'fs';
import { QueryService } from 'src/query/query.service';
import { PrismaHospital } from 'src/prisma/prisma.service.hospital';
import { InsService } from 'src/f16/ins/ins.service';
import { PatService } from 'src/f16/pat/pat.service';
import { OpdService } from 'src/f16/opd/opd.service';
import {
  t_adp,
  t_aer,
  t_cha,
  t_cht,
  t_dru,
  t_idx,
  t_ins,
  t_iop,
  t_ipd,
  t_irf,
  t_labfu,
  t_lvd,
  t_odx,
  t_oop,
  t_opd,
  t_orf,
  t_pat,
} from 'prisma/generated/finanace-client';
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
  ) {}

  async create16F(startDate: string, endDate: string) {
    this.runSqlFiles(startDate, endDate);
  }

  runSqlFiles = async (startDate: string, endDate: string) => {
    const path = './sql/';
    readdir(path, (err, files) => {
      const process = {
        max: 17,
        min: 0,
      };
      files.forEach(async (file) => {
        try {
          const sqlString = this.rowQuery.genQueryReport(
            file,
            startDate,
            endDate,
          );

          const logs = (file: string, result: number) => {
            console.log('file: ' + file + '\n' + 'compless:' + result);
            Object.assign(process, {
              min: process.min + 1,
            });

            if (process.min === process.max) {
              console.log({ process });
              console.log('proces success.');
            } else {
              console.log({ process });
              
            }
          };

          const resultQuery = await this.resultQuery(sqlString, file);
          switch (file) {
            case 'PAT.sql':
              const pat = await this.pat.createPat(resultQuery as t_pat[]);
              logs(file, pat);
              break;
            case 'OPD.sql':
              const opd = await this.opd.createOpd(resultQuery as t_opd[]);
              logs(file, opd);
              break;
            case 'IPD.sql':
              const ipd = await this.ipd.createIpd(resultQuery as t_ipd[]);
              logs(file, ipd);
              break;
            case 'INS.sql':
              const ins = await this.ins.createIns(resultQuery as t_ins[]);
              logs(file, ins);
              break;
            case 'ORF.sql':
              const orf = await this.orf.createOrf(resultQuery as t_orf[]);
              logs(file, orf);
              break;
            case 'ODX.sql':
              const odx = await this.odx.createOdx(resultQuery as t_odx[]);
              logs(file, odx);
              break;
            case 'OOP.sql':
              const oop = await this.oop.createOop(resultQuery as t_oop[]);
              logs(file, oop);
              break;
            case 'IRF.sql':
              const irf = await this.irf.createIrf(resultQuery as t_irf[]);
              logs(file, irf);
              break;
            case 'IDX.sql':
              const idx = await this.idx.createIdx(resultQuery as t_idx[]);
              logs(file, idx);
              break;
            case 'IOP.sql':
              const iop = await this.iop.createIop(resultQuery as t_iop[]);
              logs(file, iop);
              break;
            case 'CHT.sql':
              const cht = await this.cht.createCht(resultQuery as t_cht[]);
              logs(file, cht);
              break;
            case 'CHA.sql':
              const cha = await this.cha.createCha(resultQuery as t_cha[]);
              logs(file, cha);
              break;
            case 'AER.sql':
              const aer = await this.aer.createAer(resultQuery as t_aer[]);
              logs(file, aer);
              break;
            case 'ADP.sql':
              const adp = await this.adp.createAdp(resultQuery as t_adp[]);
              logs(file, adp);
              break;
            case 'LVD.sql':
              const lvd = await this.lvd.createLvd(resultQuery as t_lvd[]);
              logs(file, lvd);
              break;
            case 'DRU.sql':
              const dru = await this.dru.createDru(resultQuery as t_dru[]);
              logs(file, dru);
              break;
            case 'LABFU.sql':
              const labfu = await this.labfu.createLabfu(
                resultQuery as t_labfu[],
              );
              logs(file, labfu);
              break;
            default:
              console.log(file);

              console.error('not query>?');
              break;
          }
        } catch (err) {
          console.error('err file' + file + '\n' + err);
        }
        // return sqlString;
      });
    });
  };

  resultQuery = async (sql: string, sqlName: string) => {
    console.log('run query: ' + sqlName);
    return await this.hos.$queryRawUnsafe(`${sql}`);
  };
}
