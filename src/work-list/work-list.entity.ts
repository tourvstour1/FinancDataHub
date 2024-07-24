export interface OpdSearchModel {
    id: string;
    hn: string;
    seq: string;
    dateopd: Date;
    work_pat: OpdPatientModel;
    claim_log: any[]
    error: any[]
}

export interface OpdResponstModel {
    data: OpdSearchModel[]
    pageIndex: number,
    rowCount: number
}

export interface IpdSearchModel {
    id: string;
    hn: string;
    an: string;
    dateopd: Date;
    work_pat: OpdPatientModel;
    claim_log: any[]
    error: any[]
}

export interface IpdResponstModel {
    data: IpdSearchModel[]
    pageIndex: number,
    rowCount: number
}


export interface InsureModel {
    id: string,         // unique key of data
    cid: string,        // claim key id
    inscl: string,      // code of insurance
    subtype: number,
    seq: string,
}
export interface PatientModel {
    id: string,
    hn: string,
    title: string,
    fname: string,
    lname: string,
    person_id: string,      // id of person
}
export interface OpdPatientModel extends PatientModel {
    pat_ins: InsureModel[];
}
