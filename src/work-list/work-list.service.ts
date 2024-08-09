import { Injectable } from '@nestjs/common';
import { PrismaFinance } from 'src/prisma/prisma.service.finanec';
import { IpdResponstModel, IpdSearchModel, OpdResponstModel, OpdSearchModel } from './work-list.entity';

@Injectable()
export class WorkListService {
  constructor(readonly finance: PrismaFinance) { }
  opdListSerive = async (startDate: string, endDate: string, pageSize: number, pageOffset: number): Promise<OpdResponstModel> => {

    pageSize = pageSize === undefined ? 15 : pageSize === null ? 15 : pageSize;
    pageOffset = pageOffset === undefined ? 1 : pageOffset === null ? 1 : pageOffset;

    console.log({ pageSize, pageOffset });

    const start = startDate.replaceAll('-', '');
    const end = endDate.replaceAll('-', '');

    const countOpd = await this.finance.t_opd.count({
      where: {
        dateopd: {
          gte: start,
          lte: end,
        },
      }
    })

    const opd = await this.finance.t_opd.findMany({
      select: {
        id: true,
        hn: true,
        seq: true,
        dateopd: true,
        uuc: true,
      },
      where: {
        dateopd: {
          gte: start,
          lte: end,
        },
      },
      orderBy: {
        dateopd: 'asc'
      },
    })
      .then((res) => {
        return res.map((item) => {
          Object.assign(item, {
            error: [],
          });
          return item;
        });
      });

    const listSeq = opd.map((i) => i.seq).reduce((pre, cur) => pre.includes(cur) ? pre : pre.concat(cur), []);
    const listHn = opd.map((i) => i.hn).reduce((pre, cur) => pre.includes(cur) ? pre : pre.concat(cur), []);

    const pat = await this.finance.t_pat.findMany({
      select: {
        id: true,
        hn: true,
        title: true,
        fname: true,
        lname: true,
        person_id: true,
      },
      where: { hn: { in: listHn } },
    });

    const ins = await this.finance.t_ins.findMany({
      select: {
        id: true,
        cid: true,
        inscl: true,
        subtype: true,
        seq: true,
      },
      where: {
        seq: {
          in: listSeq,
        },
      },
    });

    const opdLog = await this.finance.opd_claim_status.findMany({
      select: {
        seq: true,
        status: {
          select: {
            description: true
          }
        },
        opd_claim_date: true,
        status_code: true
      },
      where: {
        seq: {
          in: listSeq
        }
      }
    })

    const patMapIns = pat.map((item) => {
      const pat_ins = ins.filter((i) => i.cid === item.person_id);

      if (pat_ins.length > 0) {
        Object.assign(item, {
          pat_ins,
        });
      }
      return item;
    });


    const opdMapPat = opd.map((item) => {
      const opd_pat = patMapIns.filter((i) => i.hn === item.hn);
      if (opd_pat.length > 0) {
        Object.assign(item, {
          work_pat: opd_pat[0],
        });
      }
      return item;
    })

    const opdMapLog = opdMapPat.map(item => {
      const opd_log = opdLog.filter((i) => i.seq === item.seq);
      if (opd_log.length > 0) {
        Object.assign(item, {
          claim_log: opd_log,
        });
      } else {
        Object.assign(item, {
          claim_log: [],
        });
      }
      return item;
    })

    const opds = opdMapLog as unknown as OpdSearchModel[];

    const result: OpdResponstModel = {
      data: opds,
      rowCount: countOpd,
      pageIndex: 0
    }
    return result;
  };

  //#region ipdListSerive
  ipdListSerive = async (startDate: string, endDate: string, pageSize: number, pageOffset: number): Promise<IpdResponstModel> => {
    pageSize = pageSize === undefined ? 15 : pageSize === null ? 15 : pageSize
    pageOffset = pageOffset === undefined ? 0 : pageOffset === null ? 0 : pageOffset
    const start = startDate.replaceAll('-', '');
    const end = endDate.replaceAll('-', '');

    const countIpd = await this.finance.t_ipd.count({
      where: {
        datedsc: {
          gte: start,
          lte: end,
        },
      },
    })


    const ipd = await this.finance.t_ipd.findMany({
      select: {
        id: true,
        hn: true,
        an: true,
        datedsc: true,
        uuc: true,
      },
      where: {
        datedsc: {
          gte: start,
          lte: end,
        },
      },
      orderBy: {
        datedsc: "asc"
      },
      take: pageSize,
      skip: (pageSize * pageOffset)
    }).then((ipdItem) => {

      return ipdItem.map((item) => {
        Object.assign(item, {
          error: [],
        });
        for (const e in item) {
          if (typeof item[e] === 'bigint') {
            Object.assign(item, {
              [e]: item[e].toString(),
            });
          }
        }
        return item;
      });
    });

    const pat = await this.finance.t_pat.findMany({
      select: {
        id: true,
        hn: true,
        title: true,
        fname: true,
        lname: true,
        person_id: true,
      },
      where: { hn: { in: ipd.map((i) => i.hn) } },
    }).then((patItem) => {
      return patItem.map((item) => {
        for (const event in item) {
          if (typeof item[event] === 'bigint') {
            Object.assign(item, {
              [event]: item[event].toString(),
            });
          }
        }
        return item;
      });
    });
    const listAn = ipd.map(item => item.an).reduce((pre, cur) => pre.includes(cur) ? pre : pre.concat(cur), [])

    const ins = await this.finance.t_ins.findMany({
      select: {
        id: true,
        cid: true,
        inscl: true,
        subtype: true,
      },
      where: {
        an: {
          in: listAn
        },
      },
    }).then((itemPat) => {
      return itemPat.map((item) => {
        for (const event in item) {
          if (typeof item[event] === 'bigint') {
            Object.assign(item, {
              [event]: item[event].toString(),
            });
          }
        }
        return item;
      });
    });

    const ipdLog = await this.finance.ipd_claim_status.findMany({
      select: {
        an: true,
        status: {
          select: {
            description: true
          }
        },
        ipd_claim_date: true,
        status_code: true
      },
      where: {
        an: {
          in: listAn
        },
      }
    })

    const patMapIns = pat.map((item) => {
      const pat_ins = ins.filter((i) => i.cid === item.person_id)
      if (pat_ins.length > 0) {
        Object.assign(item, {
          pat_ins,
        });
      }
      return item;
    });

    const ipdMapPat = await ipd.map((item) => {
      const ipd_pat = patMapIns.filter((i) => i.hn === item.hn);
      if (ipd_pat.length > 0) {
        Object.assign(item, {
          work_pat: ipd_pat[0],
        });
      }
      return item;
    });

    const ipdMapLog = await ipdMapPat.map(item => {
      const ipd_log = ipdLog.filter((i) => i.an === item.an);


      if (ipd_log.length > 0) {
        Object.assign(item, {
          claim_log: ipd_log,
        });
      } else {
        Object.assign(item, {
          claim_log: [],
        });
      }
      return item;
    })

    const ipds = ipdMapLog as unknown as IpdSearchModel[];

    const result: IpdResponstModel = {
      data: ipds,
      pageIndex: pageOffset,
      rowCount: countIpd
    }

    return result;
  };
  //#endregion ipdListSerive

  //#region mapping error
  mapOpdError = (opdList: OpdResponstModel, resultError: any[]): OpdResponstModel => {
    const opd = opdList.data
    resultError.forEach((f16) => {
      const isFile16 = Object.keys(f16)[0];
      const fileError = f16[isFile16];
      if (fileError.length > 0) {
        fileError.forEach((item) => {
          opd.map((i) => {
            if (i.seq === item.seq) {
              i.error.push(item);
              return i;
            } else {
              return i;
            }
          });
        });
      }
    });

    opdList.data = opd
    return opdList

  }
  //#endregion mapping error

  //#region mapping error
  mapIpdError = (IpdList: IpdResponstModel, resultError: any[]): IpdResponstModel => {
    const ipd = IpdList.data
    resultError.forEach((f16) => {
      const isFile16 = Object.keys(f16)[0];
      const fileError = f16[isFile16];

      if (fileError.length > 0) {
        fileError.forEach((item) => {
          ipd.map((i) => {
            if (i.an === item.an) {
              i.error.push(item);
              return i;
            } else {
              return i;
            }
          });
        });
      }
    });

    IpdList.data = ipd
    return IpdList
  }
  //#endregion mapping error 

  //#region transfer ready
  opdListTransfer = async (startDate: string, endDate: string, pageSize: number, pageOffset: number): Promise<OpdResponstModel> => {
    pageSize = pageSize === undefined ? 15 : pageSize === null ? 15 : pageSize
    pageOffset = pageOffset === undefined ? 1 : pageOffset === null ? 1 : pageOffset
    console.log({ pageSize, pageOffset })
    const start = startDate.replaceAll('-', '');
    const end = endDate.replaceAll('-', '');

    const countOpd = await this.finance.t_opd.count({
      where: {
        dateopd: {
          gte: start,
          lte: end,
        },
      }
    })
    const opd = await this.finance.t_opd.findMany({
      select: {
        id: true,
        hn: true,
        seq: true,
        dateopd: true,
        uuc: true,
      },
      where: {
        dateopd: {
          gte: start,
          lte: end,
        },
      },
      orderBy: {
        dateopd: 'asc'
      },

    })
      .then((res) => {
        return res.map((item) => {
          Object.assign(item, {
            error: [],
          });
          return item;
        });
      });

    const listSeq = opd.map((i) => i.seq).reduce((pre, cur) => pre.includes(cur) ? pre : pre.concat(cur), []);
    const listHn = opd.map((i) => i.hn).reduce((pre, cur) => pre.includes(cur) ? pre : pre.concat(cur), []);

    const pat = await this.finance.t_pat.findMany({
      select: {
        id: true,
        hn: true,
        title: true,
        fname: true,
        lname: true,
        person_id: true,
      },
      where: { hn: { in: listHn } },
    });

    const ins = await this.finance.t_ins.findMany({
      select: {
        id: true,
        cid: true,
        inscl: true,
        subtype: true,
        seq: true,
      },
      where: {
        seq: {
          in: listSeq,
        },
      },
    });

    const opdLog = await this.finance.opd_claim_status.findMany({
      select: {
        seq: true,
        status: {
          select: {
            description: true
          }
        },
        opd_claim_date: true,
        status_code: true
      },
      where: {
        seq: {
          in: listSeq
        }
      }
    })

    const patMapIns = pat.map((item) => {
      const pat_ins = ins.filter((i) => i.cid === item.person_id);

      if (pat_ins.length > 0) {
        Object.assign(item, {
          pat_ins,
        });
      }
      return item;
    });


    const opdMapPat = opd.map((item) => {
      const opd_pat = patMapIns.filter((i) => i.hn === item.hn);
      if (opd_pat.length > 0) {
        Object.assign(item, {
          work_pat: opd_pat[0],
        });
      }
      return item;
    })

    const opdMapLog = opdMapPat.map(item => {
      const opd_log = opdLog.filter((i) => i.seq === item.seq);
      if (opd_log.length > 0) {
        Object.assign(item, {
          claim_log: opd_log,
        });
      } else {
        Object.assign(item, {
          claim_log: [],
        });
      }
      return item;
    })

    const opds = opdMapLog as unknown as OpdSearchModel[];

    const result: OpdResponstModel = {
      data: opds,
      rowCount: countOpd,
      pageIndex: 0
    }
    return result;
  };


  ipdListTransfer = async (startDate: string, endDate: string, pageSize: number, pageOffset: number): Promise<IpdResponstModel> => {
    pageSize = pageSize === undefined ? 15 : pageSize === null ? 15 : pageSize
    pageOffset = pageOffset === undefined ? 0 : pageOffset === null ? 0 : pageOffset
    const start = startDate.replaceAll('-', '');
    const end = endDate.replaceAll('-', '');
    console.log({ pageSize, pageOffset });

    const countIpd = await this.finance.t_ipd.count({
      where: {
        datedsc: {
          gte: start,
          lte: end,
        },
      },
    })

    const ipd = await this.finance.t_ipd.findMany({
      select: {
        id: true,
        hn: true,
        an: true,
        datedsc: true,
        uuc: true,
      },
      where: {
        datedsc: {
          gte: start,
          lte: end,
        },
      },
      orderBy: {
        datedsc: "asc"
      },
    }).then((ipdItem) => {

      return ipdItem.map((item) => {
        Object.assign(item, {
          error: [],
        });
        for (const e in item) {
          if (typeof item[e] === 'bigint') {
            Object.assign(item, {
              [e]: item[e].toString(),
            });
          }
        }
        return item;
      });
    });

    const pat = await this.finance.t_pat.findMany({
      select: {
        id: true,
        hn: true,
        title: true,
        fname: true,
        lname: true,
        person_id: true,
      },
      where: { hn: { in: ipd.map((i) => i.hn) } },
    }).then((patItem) => {
      return patItem.map((item) => {
        for (const event in item) {
          if (typeof item[event] === 'bigint') {
            Object.assign(item, {
              [event]: item[event].toString(),
            });
          }
        }
        return item;
      });
    });
    const listAn = ipd.map(item => item.an).reduce((pre, cur) => pre.includes(cur) ? pre : pre.concat(cur), [])

    const ins = await this.finance.t_ins.findMany({
      select: {
        id: true,
        cid: true,
        inscl: true,
        subtype: true,
        an: true
      },
      where: {
        an: {
          in: listAn
        },
      },
    }).then((itemPat) => {
      return itemPat.map((item) => {
        for (const event in item) {
          if (typeof item[event] === 'bigint') {
            Object.assign(item, {
              [event]: item[event].toString(),
            });
          }
        }
        return item;
      });
    });

    const ipdLog = await this.finance.ipd_claim_status.findMany({
      select: {
        an: true,
        status: {
          select: {
            description: true
          }
        },
        ipd_claim_date: true,
        status_code: true
      },
      where: {
        an: {
          in: listAn
        },
      }
    })

    const patMapIns = pat.map((item) => {
      const pat_ins = ins.filter((i) => i.cid === item.person_id)
      if (pat_ins.length > 0) {
        Object.assign(item, {
          pat_ins,
        });
      }
      return item;
    });

    const ipdMapPat = await ipd.map((item) => {
      const ipd_pat = patMapIns.filter((i) => i.hn === item.hn);
      if (ipd_pat.length > 0) {
        Object.assign(item, {
          work_pat: ipd_pat[0],
        });
      }
      return item;
    });

    const ipdMapLog = ipdMapPat.map(item => {
      const ipd_log = ipdLog.filter((i) => i.an === item.an);

      if (ipd_log.length > 0) {
        Object.assign(item, {
          claim_log: ipd_log,
        });
      } else {
        Object.assign(item, {
          claim_log: [],
        });
      }
      return item;
    })

    const ipds = ipdMapLog as unknown as IpdSearchModel[];
    const result: IpdResponstModel = {
      data: ipds,
      pageIndex: pageOffset,
      rowCount: countIpd
    }

    return result;
  };
  //#endregion

  //#region map ready to send
  opdReadySend = async (opds: OpdSearchModel[]) => {
    const opdRedyClaim: OpdSearchModel[] = []
    opds.forEach((i: OpdSearchModel) => {
      if (i.claim_log.length > 0) {
        const findIndexLog = i.claim_log.findIndex(i => i.status_code === '2')
        if (findIndexLog > -1) {
          opdRedyClaim.push(i)
        }
      }
    })
    return opdRedyClaim
  }

  ipdReadySend = async (ipds: IpdSearchModel[]) => {
    const ipdRedyClaim: IpdSearchModel[] = []
    ipds.forEach((i: IpdSearchModel) => {
      if (i.claim_log.length > 0) {

        const findIndexLog = i.claim_log.findIndex(i => i.status_code === '2')
        if (findIndexLog > -1) {
          ipdRedyClaim.push(i)
        }
      }
    })

    return ipdRedyClaim
  }
  //#endregion  map ready to send
}
