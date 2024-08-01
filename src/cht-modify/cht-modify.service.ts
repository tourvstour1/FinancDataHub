import { Injectable } from '@nestjs/common';
import { PrismaFinance } from 'src/prisma/prisma.service.finanec';
import { AdpTypeModel, InitChtMasterModel, InitChtModel } from './cht-modify.entity';
import { ReProcressService } from 'src/re-procress/re-procress.service';

@Injectable()
export class ChtModifyService {
    constructor(
        readonly prisma: PrismaFinance,
        readonly re: ReProcressService
    ) { }

    opdModifyCht = async (seq: string[]) => {
        const getTypeAdp: AdpTypeModel[] = await this.prisma.adp_type.findMany({})
        for (let vn in seq) {
            let result: InitChtModel[] = []
            if (! await this.checkOpdNull(seq[vn])) return

            const getAdpCht = await this.getNewOpdAdpCht(seq[vn], getTypeAdp)
            const getDruCht = await this.getNewOpdDruCht(seq[vn], getTypeAdp)
            result = result.concat(getDruCht, getAdpCht)
            const cht: InitChtMasterModel[] = result.map(i => {
                const newItem: InitChtMasterModel = {
                    hn: i.hn,
                    an: i.an,
                    date: i.date,
                    chrgitem: i.chrgitem,
                    amount: i.amount.toFixed(2),
                    person_id: i.person_id,
                    seq: i.seq

                }
                return newItem
            })

            await this.prisma.$transaction([
                this.prisma.t_cha.deleteMany({
                    where: {
                        seq: {
                            not: '',
                            equals: seq[vn]
                        }
                    }
                }),
                this.prisma.t_cha.createMany({
                    data: cht
                })
            ])
        }
        console.log('Modify Opd cha compless');
    }

    private checkOpdNull = async (seq: string) => {
        const checkOpd = await this.prisma.t_opd.findFirst({ where: { seq: seq } })
        
        if (checkOpd !== null) {
            return false
        } else {
            await this.re.opdReProcess(seq)
            return true
        }
    }

    private getNewOpdDruCht = async (seq: string, tyepAdp: AdpTypeModel[]) => {
        const getDru = await this.prisma.t_dru.findMany({
            where: {
                seq: {
                    not: '',
                    equals: seq
                }
            }
        })
        const getOpd = await this.prisma.t_opd.findFirst({ where: { seq: seq } })
        const getPat = await this.prisma.t_pat.findFirst({ where: { hn: getOpd.hn } })
        const reduceGroupDru = getDru.reduce((pre: InitChtModel[], cur) => {
            const objTotal: InitChtModel = {
                hn: cur.hn,
                an: cur.an,
                date: getOpd.dateopd,
                chrgitem: '',
                amount: +cur.total,
                person_id: getPat.person_id,
                seq: cur.seq,
                adpType: cur.use_status
            }
            const objTotcopay: InitChtModel = {
                hn: cur.hn,
                an: cur.an,
                date: getOpd.dateopd,
                chrgitem: '',
                amount: +cur.totcopay,
                person_id: getPat.person_id,
                seq: cur.seq,
                adpType: cur.use_status
            }


            if (objTotal.amount > 0) {
                const chrgTotalType = objTotal.adpType === '1' ? '31' : '41'
                if (pre.map(i => i.chrgitem).includes(chrgTotalType)) {

                    pre.map(i => {
                        if (i.chrgitem === chrgTotalType) {
                            i.amount += objTotal.amount
                        }
                    })

                } else {
                    objTotal.chrgitem = chrgTotalType
                    pre.push(objTotal)
                }
            }

            if (objTotcopay.amount > 0) {
                const chrgTitcopayType = objTotcopay.adpType === '1' ? '32' : '42'

                if (pre.map(i => i.chrgitem).includes(chrgTitcopayType)) {
                    pre.map(i => {
                        if (i.chrgitem === chrgTitcopayType) {
                            i.amount += objTotcopay.amount
                        }
                    })
                } else {
                    objTotcopay.chrgitem = chrgTitcopayType
                    pre.push(objTotcopay)
                }
            }
            return pre
        }, [])
        return reduceGroupDru
    }

    private getNewOpdAdpCht = async (seq: string, typeAdp: AdpTypeModel[]) => {
        const getAdp = await this.prisma.t_adp.findMany({
            where: {
                seq: {
                    not: '',
                    equals: seq
                }
            }
        })
        const getOpd = await this.prisma.t_opd.findFirst({ where: { seq: seq } })
        const getPat = await this.prisma.t_pat.findFirst({ where: { hn: getOpd.hn } })

        const reduceGroup = getAdp.reduce((pre: InitChtModel[], cur) => {
            const objTotal: InitChtModel = {
                hn: cur.hn,
                an: '',
                date: cur.dateopd,
                chrgitem: '',
                amount: +cur.total,
                person_id: getPat.person_id,
                seq: cur.seq,
                adpType: cur.type
            }

            const objTotcopay: InitChtModel = {
                hn: cur.hn,
                an: '',
                date: cur.dateopd,
                chrgitem: '',
                amount: +cur.totcopay,
                person_id: getPat.person_id,
                seq: cur.seq,
                adpType: cur.type
            }

            if (objTotal.amount > 0) {
                const getType = typeAdp.find(t => t.adp_type_number.find(adp => adp === +objTotal.adpType))
                const curType = getType.adp_hospital_code + '1'
                if (pre.map(i => i.chrgitem).includes(curType)) {
                    pre.map(item => {
                        if (item.chrgitem === curType) {
                            item.chrgitem = getType.adp_hospital_code + '1'
                            item.amount += objTotal.amount
                        }
                    })
                } else {
                    objTotal.chrgitem = getType.adp_hospital_code + '1'
                    pre.push(objTotal)
                }
            }

            if (objTotcopay.amount > 0) {
                const getType = typeAdp.find(t => t.adp_type_number.find(ad => ad === +objTotcopay.adpType))
                const curType = getType.adp_hospital_code + '2'

                if (pre.map(i => i.chrgitem).includes(curType)) {
                    pre.map(item => {
                        if (item.chrgitem === curType) {
                            item.chrgitem = getType.adp_hospital_code + '2'
                            item.amount += objTotcopay.amount
                        }
                    })
                } else {
                    objTotcopay.chrgitem = getType.adp_hospital_code + '2'
                    pre.push(objTotcopay)
                }
            }
            return pre
        }, []);
        return reduceGroup
    }


    ipdModifyCht = async (an: string[]) => {
        const adpTypes = await this.prisma.adp_type.findMany({})

        for (let vn in an) {
            let result = []
            if (! await this.checkIpdNull(an[vn])) return
            const getIpdApdCht = await this.getNewIpdAdpCht(an[vn], adpTypes)
            const getIpdDruCht = await this.getNewIpdDruCht(an[vn])
            result = result.concat(getIpdApdCht, getIpdDruCht)
            const cht: InitChtMasterModel[] = result.map(i => {
                const newItem: InitChtMasterModel = {
                    hn: i.hn,
                    an: i.an,
                    date: i.date,
                    chrgitem: i.chrgitem,
                    amount: i.amount.toFixed(2),
                    person_id: i.person_id,
                    seq: i.seq
                }
                return newItem
            })

            await this.prisma.$transaction([
                this.prisma.t_cha.deleteMany({
                    where: {
                        an: {
                            not: '',
                            equals: an[vn]
                        }
                    }
                }),
                this.prisma.t_cha.createMany({
                    data: cht
                })
            ])
        }

        console.log('Modify Ipd cha compless');
    }


    private checkIpdNull = async (an: string) => {
        const checkIpd = await this.prisma.t_ipd.findFirst({ where: { an: an } })
        if (checkIpd !== null) {
            return false
        } else {
            await this.re.ipdReProcess(an)
            return true
        }
    }

    private getNewIpdAdpCht = async (an: string, typeAdp: AdpTypeModel[]) => {
        const getAdp = await this.prisma.t_adp.findMany({
            where: {
                an: {
                    not: '',
                    equals: an
                },
            }
        })
        const getIpd = await this.prisma.t_ipd.findFirst({ where: { an: an } })
        const getPid = await this.prisma.t_pat.findFirst({ where: { hn: getIpd.hn } })

        const reduceGroup = getAdp.reduce((pre: InitChtModel[], cur) => {
            let objTotal: InitChtModel = {
                hn: cur.hn,
                an: cur.an,
                date: cur.dateopd,
                chrgitem: '',
                amount: +cur.total,
                person_id: getPid.person_id,
                seq: cur.seq,
                adpType: cur.type
            }

            let objTotcopay: InitChtModel = {
                hn: cur.hn,
                an: cur.an,
                date: cur.dateopd,
                chrgitem: '',
                amount: +cur.totcopay,
                person_id: getPid.person_id,
                seq: cur.seq,
                adpType: cur.type
            }

            if (objTotal.amount > 0) {
                const getType = typeAdp.find(t => t.adp_type_number.find(adp => adp === +objTotal.adpType))
                const curType = getType.adp_hospital_code + '1'

                if (pre.map(i => i.chrgitem).includes(curType)) {
                    pre.map(item => {
                        if (item.chrgitem === curType) {
                            item.chrgitem = getType.adp_hospital_code + '1'
                            item.amount += objTotal.amount
                        }
                    })
                } else {
                    objTotal.chrgitem = getType.adp_hospital_code + '1'
                    pre.push(objTotal)
                }
            }

            if (objTotcopay.amount > 0) {
                const getType = typeAdp.find(t => t.adp_type_number.find(ad => ad === +objTotcopay.adpType))
                const curType = getType.adp_hospital_code + '2'

                if (pre.map(i => i.chrgitem).includes(curType)) {
                    pre.map(item => {
                        if (item.chrgitem === curType) {
                            item.chrgitem = getType.adp_hospital_code + '2'
                            item.amount += objTotcopay.amount
                        }
                    })
                } else {
                    objTotcopay.chrgitem = getType.adp_hospital_code + '2'
                    pre.push(objTotcopay)
                }
            }

            return pre
        }, []);
        return reduceGroup
    }

    private getNewIpdDruCht = async (an: string) => {
        const getDru = await this.prisma.t_dru.findMany({
            where: {
                an: {
                    not: '',
                    equals: an
                }
            }
        })
        const getIpd = await this.prisma.t_ipd.findFirst({ where: { an: an } })
        const getPid = await this.prisma.t_pat.findFirst({ where: { hn: getIpd.hn } })
        const reduceGroupDru = getDru.reduce((pre: InitChtModel[], cur) => {
            let objTotal: InitChtModel = {
                hn: cur.hn,
                an: cur.an,
                date: getIpd.dateadm,
                chrgitem: '',
                amount: +cur.total,
                person_id: getPid.person_id,
                seq: '',
                adpType: cur.use_status
            }
            let objTotcopay: InitChtModel = {
                hn: cur.hn,
                an: cur.an,
                date: getIpd.dateadm,
                chrgitem: '',
                amount: +cur.totcopay,
                person_id: getPid.person_id,
                seq: '',
                adpType: cur.use_status
            }


            if (objTotal.amount > 0) {
                const chrgTotalType = objTotal.adpType === '1' ? '31' : '41'
                if (pre.map(i => i.chrgitem).includes(chrgTotalType)) {

                    pre.map(i => {
                        if (i.chrgitem === chrgTotalType) {
                            i.amount += objTotal.amount
                        }
                    })

                } else {
                    objTotal.chrgitem = chrgTotalType
                    pre.push(objTotal)
                }

            }

            if (objTotcopay.amount > 0) {
                const chrgTitcopayType = objTotcopay.adpType === '1' ? '32' : '42'

                if (pre.map(i => i.chrgitem).includes(chrgTitcopayType)) {
                    pre.map(i => {
                        if (i.chrgitem === chrgTitcopayType) {
                            i.amount += objTotcopay.amount
                        }
                    })
                } else {
                    objTotcopay.chrgitem = chrgTitcopayType
                    pre.push(objTotcopay)
                }
            }
            return pre
        }, [])

        return reduceGroupDru
    }
}
