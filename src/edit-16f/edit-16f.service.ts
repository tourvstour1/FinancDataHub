import { Injectable } from '@nestjs/common';
import { PrismaFinance } from 'src/prisma/prisma.service.finanec';
import { OpdServiceType, IpdServiceType } from './edit-16f.entity';
import { ChtModifyService } from 'src/cht-modify/cht-modify.service';

@Injectable()
export class Edit16fService {
  constructor(
    readonly prisma: PrismaFinance,
    readonly modifyCht: ChtModifyService,
  ) { }

  getWithSeq = async (seq: string[]): Promise<OpdServiceType> => {
    if (seq[0] === undefined) return;
    const opd = await this.prisma.t_opd.findMany({
      where: {
        seq: {
          in: seq,
        },
      },
    });
    const hnList: string[] = [];
    const seqList: string[] = [];

    opd.forEach((i) => {
      if (i.hn !== '') {
        hnList.push(i.hn);
      }
    });

    opd.forEach((i) => {
      if (i.seq !== '') {
        seqList.push(i.seq);
      }
    });

    const pat = await this.prisma.t_pat.findMany({
      where: {
        hn: {
          in: hnList,
        },
      },
    });

    const listTables = [
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

    const ins = await this.prisma.t_ins.findMany({
      where: {
        seq: {
          in: seqList,
        },
      },
    });

    const adp = await this.prisma.t_adp.findMany({
      where: {
        seq: {
          in: seqList,
        },
      },
    });

    const aer = await this.prisma.t_aer.findMany({
      where: {
        seq: {
          in: seqList,
        },
      },
    });

    const cht = await this.prisma.t_cht.findMany({
      where: {
        seq: {
          in: seqList,
        },
      },
    });

    const cha = await this.prisma.t_cha.findMany({
      where: {
        seq: {
          in: seqList,
        },
        amount: {
          not: '0',
        },
      },
    });

    const dru = await this.prisma.t_dru.findMany({
      where: {
        seq: {
          in: seqList,
        },
      },
    });

    const labfu = await this.prisma.t_labfu.findMany({
      where: {
        seq: {
          in: seqList,
        },
      },
    });

    const odx = await this.prisma.t_odx.findMany({
      where: {
        seq: {
          in: seqList,
        },
      },
    });

    const oop = await this.prisma.t_oop.findMany({
      where: {
        seq: {
          in: seqList,
        },
      },
    });

    const orf = await this.prisma.t_orf.findMany({
      where: {
        seq: {
          in: seqList,
        },
      },
    });

    const opdServive: OpdServiceType = {
      opd,
      pat,
      ins,
      adp,
      aer,
      cht,
      cha,
      dru,
      labfu,
      odx,
      oop,
      orf,
    };

    return opdServive;
  };

  getWithAn = async (an: string[]): Promise<IpdServiceType> => {
    const anList: string[] = [];
    const hnList: string[] = [];

    const ipd = await this.prisma.t_ipd.findMany({
      where: {
        an: {
          in: an,
        },
      },
    });

    const ipdServive: IpdServiceType = {
      ipd,
    };

    ipd.forEach((i) => {
      if (i.an !== '') {
        anList.push(i.an);
      }

      if (i.hn !== '') {
        hnList.push(i.hn);
      }
    });

    const pat = await this.prisma.t_pat.findMany({
      where: {
        hn: {
          in: hnList,
        },
      },
    });

    Object.assign(ipdServive, {
      pat,
    });

    const listTabls = [
      't_lvd',
      't_irf',
      't_iop',
      't_ins',
      't_adp',
      't_aer',
      't_cht',
      't_cha',
      't_idx',
      't_dru',
    ];

    await Promise.all(
      listTabls.map(async (table) => {
        const replaceTable = table.replaceAll('t_', '');
        const result = await this.prisma[table].findMany({
          where: {
            an: {
              in: anList,
            },
          },
        });

        Object.assign(ipdServive, {
          [replaceTable]: result,
        });
      }),
    );

    return ipdServive;
  };

  updateOpdService = async (value: OpdServiceType) => {
    return await new Promise(async (resolve, reject) => {
      try {
        let rowOpd = 0;
        const reslutData = [];
        const visit = value['opd'].map((item) => item.seq)[0];
        for (const table in value) {
          const isTable = 't_' + table;
          const result = await this.edit(
            value[table],
            isTable,
            visit,
            undefined,
          );
          reslutData.push(result);
          rowOpd += 1;
          if (Object.keys(value).length === rowOpd) {
            resolve(reslutData);
            this.updateLogOpd(value['opd'][0]);
          }
        }
        await this.modifyCht.opdModifyCht([visit]);
      } catch (err) {
        console.log(err);
        throw err;
      }
    });
  };

  updateIpdservice = async (value: IpdServiceType) => {
    return await new Promise(async (resolve, reject) => {
      try {
        let rowIpd = 0;
        const reslutData = [];
        const visit = value['ipd'].map((i) => i.an)[0];
        for (const table in value) {
          const isTable = 't_' + table;

          if (table !== 'labfu') {
            const result = await this.edit(
              value[table],
              isTable,
              undefined,
              visit,
            );
            reslutData.push(result);
            rowIpd += 1;
          } else {
            rowIpd += 1;
          }

          if (Object.keys(value).length === rowIpd) {
            resolve(reslutData);
            this.updateLogIpd(value['ipd'][0]);
          }
        }
        await this.modifyCht.ipdModifyCht([visit]);
      } catch (err) {
        console.log(err);
        throw err;
      }
    });
  };

  edit = async (
    value: any,
    table: string,
    visitVN: string,
    visitAN: string,
  ) => {
    return await new Promise(async (resolve, reject) => {
      try {
        const an = { an: visitAN };
        const seq = { seq: visitVN };
        let rowCount = 0;
        const isConditions =
          an.an !== undefined ? { an: an.an } : { seq: seq.seq };

        if (value.length === 0) {
          try {
            if (table === 't_opd') return;
            if (table === 't_ipd') return;
            if (table === 't_pat') return;

            console.log(
              'run delete ' +
              table +
              '=> ' +
              isConditions.an +
              isConditions.seq,
            );

            const deleteTableManys = async () => {
              console.log(table);

              const resultDelete = await this.prisma[table].deleteMany({
                where: isConditions,
              });
              console.log(resultDelete);
            };

            if (
              isConditions.seq !== undefined &&
              isConditions.an === undefined
            ) {
              if (isConditions.seq !== '') {
                deleteTableManys();
              }
            }

            if (
              isConditions.an !== undefined &&
              isConditions.seq === undefined
            ) {
              console.log(isConditions.an);

              if (isConditions.an !== '') {
                deleteTableManys();
              }
            }

            rowCount += 0;
          } catch (err) {
            rowCount += 0;
          }

          if (rowCount === value.length) {
            resolve(`Update แฟ้ม ${table} สำเร็จ`);
          }
        }

        value.forEach(async (item) => {
          if (item['typeEditor']) {
            delete item['typeEditor'];
          }
          if (item['chargeDetail']) {
            delete item['chargeDetail'];
          }
          if (item['feeDrug']) {
            delete item['feeDrug'];
          }
          if (item['validError']) {
            delete item['validError'];
          }

          for (const i in item) {
            if (table === 't_adp') {
              if (!item['status1']) {
                Object.assign(item, {
                  status1: '',
                });
              }
              if (!item['bi']) {
                Object.assign(item, {
                  bi: '',
                });
              }
              if (!item['provider']) {
                Object.assign(item, {
                  provider: '',
                });
              }
            }

            if (typeof item[i] !== 'string') {
              const newItem = item[i] === null ? '' : item[i].toString();
              Object.assign(item, {
                [i]: newItem,
              });
            }
          }

          const findId = await this.prisma[table].findMany({
            where: {
              id: item.id,
            },
          });

          if (item.id === null) {
            if (item.id !== '') {
              console.log(
                'createItem+ ' +
                table +
                ' ' +
                (isConditions.an !== undefined
                  ? isConditions.an
                  : isConditions.seq),
              );
              console.log(item);

              await this.prisma[table].createMany({
                data: item,
              });
            }

            rowCount += 1;
          } else if (findId.length === 0) {
            delete item['id'];
            console.log(
              'createItem+ ' +
              table +
              ' ' +
              +(isConditions.an !== undefined
                ? isConditions.an
                : isConditions.seq),
            );

            if (item.id !== '') {
              if (item.hn === undefined) {
                // console.log(item);
              } else {
                console.log(item);

                await this.prisma[table].createMany({
                  data: item,
                });
              }
            }
            rowCount += 1;
          } else {
            console.log(
              'update+ ' +
              table +
              ' ' +
              item.id +
              ' ' +
              (isConditions.an !== undefined
                ? isConditions.an
                : isConditions.seq),
            );
            if (item.id !== undefined) {
              if (item.id !== '') {
                await this.prisma[table].updateMany({
                  data: item,
                  where: {
                    id: item.id,
                  },
                });
              }
            }
            rowCount += 1;
          }

          if (rowCount === value.length) {
            resolve(`Update แฟ้ม ${table} สำเร็จ`);
          }
        });

        try {
          if (table === 't_opd') return;
          if (table === 't_ipd') return;
          if (table === 't_pat') return;

          const defaultData = await this.prisma[table].findMany({
            select: {
              id: true,
            },
            where: isConditions,
          });

          defaultData.forEach(async (item) => {
            const find = value.findIndex((i) => i.id === item.id);
            const delMany = async (find) => {
              if (find === -1) {
                if (item.id !== '') {
                  console.log(
                    'delete+ ' +
                    table +
                    ' ' +
                    item.id +
                    ' ' +
                    (isConditions.an !== undefined
                      ? isConditions.an
                      : isConditions.seq),
                  );
                  if (item.id !== undefined) {
                    await this.prisma[table].deleteMany({
                      where: {
                        ...isConditions,
                        id: item.id,
                      },
                    });
                  }
                }
              }
            };

            const referOpd = async (seq: string) => {
              const orf = await this.prisma.t_orf.count({
                where: {
                  seq: seq,
                },
              });

              const aer = await this.prisma.t_aer.count({
                where: {
                  seq: seq,
                  oreftype: '',
                },
              });

              if (orf > 0 && aer === 0) {
                await this.prisma.t_orf.deleteMany({
                  where: {
                    seq: seq,
                  },
                });
              }
            };

            const referIpd = async (an: string) => {
              const irf = await this.prisma.t_irf.count({
                where: {
                  an: an,
                },
              });

              const aer = await this.prisma.t_aer.count({
                where: {
                  an: an,
                  oreftype: '',
                },
              });

              if (irf > 0 && aer === 0) {
                await this.prisma.t_irf.deleteMany({
                  where: {
                    an: an,
                  },
                });
              }
            };

            if (
              isConditions.seq !== undefined &&
              isConditions.an === undefined
            ) {
              if (isConditions.seq !== '') {
                delMany(find);
                referOpd(isConditions.seq);
              }
            }

            if (
              isConditions.an !== undefined &&
              isConditions.seq === undefined
            ) {
              if (isConditions.an !== '') {
                delMany(find);
                referIpd(isConditions.an);
              }
            }
          });
        } catch (err) {
          console.log('table =' + table);
          console.log('default delete = ' + err);
        }
      } catch (err) {
        reject('err');
        //  throw (err)
      }
    });
  };

  async updateLogOpd(opd) {
    const findLog = await this.prisma.opd_claim_status.findMany({
      where: {
        seq: opd.seq,
      },
    });

    if (findLog.length > 0) {
      await this.prisma.opd_claim_status.updateMany({
        data: {
          status_code: '2',
        },
        where: {
          seq: opd.seq,
        },
      });
    } else {
      await this.prisma.opd_claim_status.create({
        data: {
          seq: opd.seq,
          status_code: '2',
          opd_claim_date: opd.dateopd,
        },
      });
    }
  }

  async updateLogIpd(ipd) {
    const findLog = await this.prisma.ipd_claim_status.findMany({
      where: {
        an: ipd.an,
      },
    });

    if (findLog.length > 0) {
      await this.prisma.ipd_claim_status.updateMany({
        data: {
          status_code: '2',
        },
        where: {
          an: ipd.an,
        },
      });
    } else {
      await this.prisma.ipd_claim_status.create({
        data: {
          an: ipd.an,
          status_code: '2',
          ipd_claim_date: ipd.datedsc,
        },
      });
    }
  }
}
