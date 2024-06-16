import {
  t_adp, t_aer, t_cha, t_cht, t_dru, t_idx, t_ins, t_iop, t_ipd, t_irf, t_labfu, t_lvd, t_odx, t_oop,
  t_opd, t_orf, t_pat,
} from 'prisma/generated/finanace-client';

export interface OpdServiceType {
  opd: t_opd[];
  pat: t_pat[] | undefined;
  ins: t_ins[] | undefined;
  adp: t_adp[] | undefined;
  aer: t_aer[] | undefined;
  cht: t_cht[] | undefined;
  cha: t_cha[] | undefined;
  dru: t_dru[] | undefined;
  labfu: t_labfu[] | undefined;
  odx: t_odx[] | undefined;
  oop: t_oop[] | undefined;
  orf: t_orf[] | undefined;
}

export interface IpdServiceType {
  ipd: t_ipd[];
  pat?: t_pat[];
  ins?: t_ins[];
  adp?: t_adp[];
  aer?: t_aer[];
  cht?: t_cht[];
  cha?: t_cha[];
  dru?: t_dru[];
  idx?: t_idx[];
  iop?: t_iop[];
  irf?: t_irf[];
  lvd?: t_lvd[]
}
