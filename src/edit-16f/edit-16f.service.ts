import { Injectable } from '@nestjs/common';
import { PrismaFinance } from 'src/prisma/prisma.service.finanec';
import { OpdServiceTyep, IpdServiceType } from './edit-16f.entity';

@Injectable()
export class Edit16fService {
  constructor(readonly prisma: PrismaFinance) {}

  getWithSeq = async (seq: string): Promise<OpdServiceTyep> => {
    const opd = await this.prisma.t_opd.findMany({
      where: {
        seq: seq,
      },
    });
    const hnList: string[] = opd.map((i) => i.hn);
    const seqList: string[] = opd.map((i) => i.seq);

    const pat = await this.prisma.t_pat.findMany({
      where: {
        hn: {
          in: hnList,
        },
      },
    });

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

    const opdServive: OpdServiceTyep = {
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

  getWithAn = async (an: string): Promise<IpdServiceType> => {
    const ipd = await this.prisma.t_ipd.findMany({
      where: {
        an: an,
      },
    });
    const anList: string[] = ipd.map((i) => i.an);
    const hnList: string[] = ipd.map((i) => i.hn);

    const pat = await this.prisma.t_pat.findMany({
      where: {
        hn: {
          in: hnList,
        },
      },
    });

    const ins = await this.prisma.t_ins.findMany({
      where: {
        an: {
          in: anList,
        },
      },
    });

    const adp = await this.prisma.t_adp.findMany({
      where: {
        an: {
          in: anList,
        },
      },
    });

    const aer = await this.prisma.t_aer.findMany({
      where: {
        an: {
          in: anList,
        },
      },
    });

    const cht = await this.prisma.t_cht.findMany({
      where: {
        an: {
          in: anList,
        },
      },
    });

    const cha = await this.prisma.t_cha.findMany({
      where: {
        an: {
          in: anList,
        },
      },
    });

    const dru = await this.prisma.t_dru.findMany({
      where: {
        an: {
          in: anList,
        },
      },
    });

    const idx = await this.prisma.t_idx.findMany({
      where: {
        an: {
          in: anList,
        },
      },
    });

    const iop = await this.prisma.t_iop.findMany({
      where: {
        an: {
          in: anList,
        },
      },
    });

    const irf = await this.prisma['t_irf'].findMany({
      where: {
        an: {
          in: anList,
        },
      },
    });
    const opdServive: IpdServiceType = {
      ipd,
      pat,
      ins,
      adp,
      aer,
      cht,
      cha,
      dru,
      idx,
      iop,
      irf,
    };
    return opdServive;
  };
}
