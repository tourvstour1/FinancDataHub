import { Injectable } from '@nestjs/common';
import { PrismaFinance } from 'src/prisma/prisma.service.finanec';
import { IpdClaimType, OpdClaimTyep } from './claim-fdh.entity';
import { existsSync, mkdirSync, writeFile } from 'fs';
import { join, resolve } from 'path';
import { ConnectMophService } from 'src/connect-moph/connect-moph.service';
@Injectable()
export class ClaimFdhService {
  constructor(readonly prisma: PrismaFinance, readonly conn: ConnectMophService) { }

  toTextIpd = async (table: IpdClaimType) => {
    return new Promise(async (resolves, reject) => {
      const directory = resolve(__dirname, '../../out/ipd/');
      const rep = new Date()
        .toLocaleDateString('th', {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        })
        .replaceAll('/', '')
        .replaceAll(':', '')
        .replaceAll(' ', '');

      const pathName = directory + '/' + 'ipd' + rep;
      if (!existsSync(pathName)) {
        mkdirSync(pathName);
      }

      const rowMax = Object.keys(table).length;
      let rowCount = 0;
      for (let f in table) {
        try {
          if (table[f].length > 0) {
            const fileName = f.toUpperCase() + '.txt';
            const out = join(pathName, fileName);
            const setHead = [];

            for (let head in table[f][0]) {
              if (head !== 'id') {
                if (head === 'dcip_e_screen') {
                  setHead.push('DCIP/E_screen');
                } else {
                  setHead.push(head.toUpperCase());
                }
              }
            }
            const makeHead = setHead.join('|');

            const dataValue = [];
            table[f].map((data: any) => {
              const isList = [];
              for (let value in data) {
                if (value !== 'id') {
                  isList.push(data[value]);
                }
              }
              dataValue.push(isList.join('|'));
            });
            const content = makeHead + '\r\n' + dataValue.join('\r\n');
            writeFile(out, content, { encoding: 'utf-8' }, async (err) => {
              if (err) {
                console.log(err);
              } else {
                rowCount += 1;

                if (rowMax === rowCount) {
                  resolves(await this.conn.sentToClaim(pathName, 'ipd'));
                }
              }
            });
          } else {
            rowCount += 1;
            if (rowMax === rowCount) {
              resolves(await this.conn.sentToClaim(pathName, 'ipd'));
            }
          }
        } catch (err) {
          reject(err);
        }
      }
    });
  };

  toTextOpd = async (table: OpdClaimTyep) => {
    return new Promise(async (resolves, reject) => {
      const directory = resolve(__dirname, '../../out/opd');
      const rep = new Date()
        .toLocaleDateString('th', {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        })
        .replaceAll('/', '')
        .replaceAll(':', '')
        .replaceAll(' ', '');

      const pathName = directory + '/' + 'opd' + rep;

      if (!existsSync(pathName)) {
        mkdirSync(pathName);
      }

      const rowMax = Object.keys(table).length;
      let rowCount = 0;
      for (let f in table) {
        try {
          if (table[f].length > 0) {
            const fileName = f.toUpperCase() + '.txt';
            const out = join(pathName, fileName);
            const setHead = [];

            for (let head in table[f][0]) {
              if (head !== 'id') {
                if (head === 'dcip_e_screen') {
                  setHead.push('DCIP/E_screen');
                } else {
                  setHead.push(head.toUpperCase());
                }
              }
            }
            const makeHead = setHead.join('|');

            const dataValue = [];
            table[f].map((data: any) => {
              const isList = [];
              for (let value in data) {
                if (value !== 'id') {
                  isList.push(data[value]);
                }
              }
              dataValue.push(isList.join('|'));
            });

            const content = makeHead + '\r\n' + dataValue.join('\r\n');

            writeFile(out, content, { encoding: 'utf-8' }, async (err) => {
              if (err) {
                console.log(err);
              } else {
                rowCount += 1;
                if (rowMax === rowCount) {
                  //  console.log(table);
                  resolves(await this.conn.sentToClaim(pathName, 'opd'));
                }
              }
            });
          } else {
            rowCount += 1;
            if (rowMax === rowCount) {
              resolves(await this.conn.sentToClaim(pathName, 'ipd'));
            }
          }
        } catch (err) {
          reject(err);
        }
      }
    });
  };

  findsOpd = async (listSeq: Array<string>): Promise<OpdClaimTyep> => {
    const listOpd16F = [
      't_adp',
      't_aer',
      't_cha',
      't_cht',
      't_dru',
      't_ins',
      // 't_labfu',
      't_odx',
      't_oop',
      't_opd',
      't_orf',
      't_pat',
    ];
    // console.log(listSeq);

    return await new Promise(async (resolve, reject) => {
      const resultOpd: OpdClaimTyep = {
        adp: [],
        aer: [],
        cha: [],
        cht: [],
        dru: [],
        ins: [],
        odx: [],
        oop: [],
        opd: [],
        orf: [],
        pat: [],
      };
      let countRowTable = 0;
      listOpd16F.forEach(async (i) => {
        const table = i.replace('t_', '');
        if (i === 't_pat') {
          const opd_hn = await this.prisma['t_opd'].findMany({
            select: {
              hn: true,
            },
            where: {
              seq: {
                in: listSeq,
              },
            },
            distinct: 'hn',
          });

          const ins_hn = await this.prisma['t_ins'].findMany({
            select: {
              hn: true,
            },
            where: {
              seq: {
                in: listSeq,
              },
            },
            distinct: 'hn',
          });

          const result = await this.prisma[i].findMany({
            where: {
              hn: {
                in: [...ins_hn.map((a) => a.hn), ...opd_hn.map((i) => i.hn)],
              },
            },
          });

          Object.assign(resultOpd, {
            [table]: resultOpd[table].concat(result),
          });
        } else {
          const result = await this.prisma[i].findMany({
            where: { seq: { in: listSeq } },
          });
          Object.assign(resultOpd, {
            [table]: resultOpd[table].concat(result),
          });
        }

        countRowTable += 1;

        if (countRowTable === listOpd16F.length) {
          resolve(resultOpd);
        }
      });
    });
  };

  findsIpd = async (listAn: Array<string>): Promise<IpdClaimType> => {
    const listIpd16F = [
      't_ipd',
      't_pat',
      't_ins',
      't_adp',
      't_aer',
      't_cht',
      't_cha',
      't_dru',
      't_idx',
      't_iop',
      't_irf',
      't_lvd'
    ];

    return await new Promise(async (resolve, reject) => {
      const resultIpd: IpdClaimType = {
        adp: [],
        aer: [],
        cha: [],
        cht: [],
        dru: [],
        ins: [],
        idx: [],
        iop: [],
        ipd: [],
        irf: [],
        pat: [],
        lvd: []
      };
      let countRowTable = 0;
      listIpd16F.forEach(async (i) => {
        const table = i.replace('t_', '');
        if (i === 't_pat') {
          const ipd_hn = await this.prisma['t_ipd'].findMany({
            select: {
              hn: true,
            },
            where: {
              an: {
                in: listAn,
              },
            },
          });

          const hn: string[] = []
          ipd_hn.forEach((a: { hn: string }) => {
            if (a.hn !== '') {
              hn.push(a.hn)
            }
          })

          const result = await this.prisma[i].findMany({
            where: {
              hn: { in: hn },
            },
          });

          Object.assign(resultIpd, {
            [table]: resultIpd[table].concat(result),
          });
        } else {
          const result = await this.prisma[i].findMany({
            where: { an: { in: listAn } },
          });
          Object.assign(resultIpd, {
            [table]: resultIpd[table].concat(result),
          });
        }

        countRowTable += 1;

        if (countRowTable === listIpd16F.length) {
          resolve(resultIpd);
        }
      });
    });
  };
}
