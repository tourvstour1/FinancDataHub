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
  t_odx,
  t_oop,
  t_opd,
  t_orf,
  t_pat,
} from 'prisma/generated/finanace-client';

export interface OpdServiceTyep {
  opd: t_opd[];
  pat: t_pat[];
  ins: t_ins[];
  adp: t_adp[];
  aer: t_aer[];
  cht: t_cht[];
  cha: t_cha[];
  dru: t_dru[];
  labfu: t_labfu[];
  odx: t_odx[];
  oop: t_oop[];
  orf: t_orf[];
}

export interface IpdServiceType {
  ipd: t_ipd[];
  pat: t_pat[];
  ins: t_ins[];
  adp: t_adp[];
  aer: t_aer[];
  cht: t_cht[];
  cha: t_cha[];
  dru: t_dru[];
  idx: t_idx[];
  iop: t_iop[];
  irf: t_irf[];
}
