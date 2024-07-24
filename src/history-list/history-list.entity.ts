import { ApiProperty } from "@nestjs/swagger";
import { t_opd, t_pat, t_ins, t_adp, t_aer, t_cht, t_cha, t_dru, t_labfu, t_odx, t_oop, t_orf, t_ipd, t_idx, t_iop, t_irf, t_lvd } from "prisma/generated/finanace-client";

export class OpdClaimNumber {
    @ApiProperty()
    startDate: string;

    @ApiProperty()
    endDate: string;
}
export class OpdClaimService {
    @ApiProperty()
    seq: string[];
}

export class IpdClaimNumber {
    @ApiProperty()
    startDate: string;

    @ApiProperty()
    endDate: string;
}
export class IpdClaimService {
    @ApiProperty()
    an: string[];
}


export interface OpdServiceType {
    opd?: t_opd[];
    pat?: t_pat[];
    ins?: t_ins[];
    adp?: t_adp[];
    aer?: t_aer[];
    cht?: t_cht[];
    cha?: t_cha[];
    dru?: t_dru[];
    labfu?: t_labfu[];
    odx?: t_odx[];
    oop?: t_oop[];
    orf?: t_orf[];
    fdh?: any[]
}

export interface IpdServiceType {
    ipd?: t_ipd[];
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
    fdh?: any[]
}
