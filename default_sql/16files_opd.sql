SELECT 
        t_patient.patient_hn as HN
        ,case when b_report_12files_map_clinic.b_report_12files_std_clinic_id IN ('01','02','03','04','05','06','07','08','09','10','11') 
                    then (t_visit.f_visit_type_id || b_report_12files_map_clinic.b_report_12files_std_clinic_id || '1') 
                when b_report_12files_map_clinic.b_report_12files_std_clinic_id is null 
                    then ''
                        else  (t_visit.f_visit_type_id || '121') end as CLINIC   
        ,case when (length(t_visit.visit_begin_visit_time)>=10)
                    then to_char(to_date(to_number(
                        substr(t_visit.visit_begin_visit_time,1,4),'9999')-543 ||
                        substr(t_visit.visit_begin_visit_time,5,6),'yyyy-mm-dd'),'yyyymmdd')
                    else ''   end as DATEOPD
        , substr(visit_begin_visit_time,12,2) || substr(visit_begin_visit_time,15,2) as TIMEOPD
        ,case when t_visit.f_visit_type_id = '0'
                then t_visit.visit_vn
                else ''
         end AS SEQ
        ,'1' as UUC

FROM  t_visit inner join t_patient on t_patient.t_patient_id = t_visit.t_patient_id
           inner join t_visit_payment on t_visit_payment.t_visit_id = t_visit.t_visit_id 
                                                    and t_visit_payment.visit_payment_active = '1'
                                                    and t_visit_payment.visit_payment_priority = '0'
          inner join b_contract_plans ON t_visit_payment.b_contract_plans_id = b_contract_plans.b_contract_plans_id
          inner join b_map_rp1853_instype on b_contract_plans.b_contract_plans_id = b_map_rp1853_instype.b_contract_plans_id
          inner join r_rp1853_instype ON b_map_rp1853_instype.r_rp1853_instype_id = r_rp1853_instype.id
                                                   and r_rp1853_instype.maininscl  in ('UCS','OFC','SSS','LGO','SSI','STP')
          left join (select
                                    t_diag_icd10.*
                                    ,row_number() OVER (partition by  t_diag_icd10.diag_icd10_record_date_time order by t_diag_icd10.f_diag_icd10_type_id asc) as seq                                   
                            from t_diag_icd10 
                                    inner join (select
                                                            t_diag_icd10.diag_icd10_vn                                                             
                                                            ,max(t_diag_icd10.diag_icd10_record_date_time) as record_date_time
                                                    from t_diag_icd10 inner join t_visit on t_diag_icd10.diag_icd10_vn = t_visit.t_visit_id
                                                    where
                                                            t_diag_icd10.f_diag_icd10_type_id = '1'
                                                            and t_diag_icd10.diag_icd10_active = '1'
                                                            and substring(t_visit.visit_staff_doctor_discharge_date_time,1,10) >= ':startDate'
                                                            and substring(t_visit.visit_staff_doctor_discharge_date_time,1,10) <= ':endDate'  
                                                            and t_visit.f_visit_type_id = '0'
                                                      group by
                                                            t_diag_icd10.diag_icd10_vn ) as max_diag_icd10 
                                            on t_diag_icd10.diag_icd10_vn  = max_diag_icd10.diag_icd10_vn                                                 
                                                 and t_diag_icd10.diag_icd10_record_date_time = max_diag_icd10.record_date_time
                                                and t_diag_icd10.f_diag_icd10_type_id = '1') as t_diag_icd10  
        on t_diag_icd10.diag_icd10_vn = t_visit.t_visit_id
                and t_diag_icd10.seq = 1

        left join  b_report_12files_map_clinic  on t_diag_icd10.b_visit_clinic_id = b_report_12files_map_clinic.b_visit_clinic_id

WHERE  
        t_visit.f_visit_status_id <> '4'
        and substring(t_visit.visit_staff_doctor_discharge_date_time,1,10) >= ':startDate'
        and substring(t_visit.visit_staff_doctor_discharge_date_time,1,10) <= ':endDate' 
        and t_visit.f_visit_type_id = '0'
