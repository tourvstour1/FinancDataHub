export interface InitChtModel {
    hn: string
    an: string
    date: string
    amount: number
    chrgitem: string | ''
    person_id: string
    seq: string
    adpType: string
}

export interface InitChtMasterModel {
    hn: string
    an: string
    date: string
    amount: string
    chrgitem: string | ''
    person_id: string
    seq: string
}
export interface AdpTypeModel {
    adp_catalogy_id: number;
    adp_name: string;
    adp_type_number: number[];
    adp_nhso_name: string | null;
    adp_hospital_code: string | null;
}