SELECT  distinct
        t_patient.patient_hn AS HN 
        , CASE WHEN (length(t_visit.visit_begin_visit_time)>=10)
                    then to_char(to_date(to_number(
                    substr(t_visit.visit_begin_visit_time,1,4),'9999')-543 || 
                    substr(t_visit.visit_begin_visit_time,5,6),'yyyy-mm-dd'),'yyyymmdd') 
                                        ELSE ''   END AS DATEOPD  
        ,case when b_report_12files_map_clinic.b_report_12files_std_clinic_id IN ('01','02','03','04','05','06','07','08','09','10','11') 
                  then (t_visit.f_visit_type_id || b_report_12files_map_clinic.b_report_12files_std_clinic_id || '1') 
                  when b_report_12files_map_clinic.b_report_12files_std_clinic_id is null then ''
                  else  (t_visit.f_visit_type_id || '121') end AS CLINIC   

        ,replace(diag_icd9_icd9_number,'.','') AS OPER
        ,b_employee.employee_number AS DROPID
        ,t_patient.patient_pid AS PERSON_ID
        ,t_visit.visit_vn AS SEQ

FROM 
        t_diag_icd9 INNER JOIN t_visit ON (t_diag_icd9.diag_icd9_vn = t_visit.t_visit_id)  
        INNER JOIN t_patient ON (t_patient.t_patient_id = t_visit.t_patient_id) 
        inner join t_visit_payment on t_visit_payment.t_visit_id = t_visit.t_visit_id 
                                                    and t_visit_payment.visit_payment_active = '1'
                                                    and t_visit_payment.visit_payment_priority = '0'
        inner join b_contract_plans ON t_visit_payment.b_contract_plans_id = b_contract_plans.b_contract_plans_id
        inner join b_map_rp1853_instype on b_contract_plans.b_contract_plans_id = b_map_rp1853_instype.b_contract_plans_id
        inner join r_rp1853_instype ON b_map_rp1853_instype.r_rp1853_instype_id = r_rp1853_instype.id
                                                   and r_rp1853_instype.maininscl  in ('UCS','OFC','SSS','LGO','SSI','STP')
        LEFT JOIN b_employee ON (t_diag_icd9.diag_icd9_staff_doctor = b_employee.b_employee_id)  
        LEFT JOIN b_report_12files_map_clinic  ON (t_diag_icd9.b_visit_clinic_id = b_report_12files_map_clinic.b_visit_clinic_id)  

WHERE 
        t_visit.f_visit_status_id <> '4'  
        AND t_visit.f_visit_type_id = '0'
        AND t_diag_icd9.diag_icd9_active = '1'  
        AND substring(t_visit.visit_staff_doctor_discharge_date_time,1,10) >= ':startDate'
        AND substring(t_visit.visit_staff_doctor_discharge_date_time,1,10) <= ':endDate'

ORDER BY HN
