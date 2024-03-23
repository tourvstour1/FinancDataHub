SELECT distinct
            t_visit.visit_vn AS AN  
            , replace(diag_icd9_icd9_number,'.','') AS OPER
            , t_diag_icd9.f_diagnosis_operation_type_id AS OPTYPE  
            , b_employee.employee_number AS DROPID  
            , CASE WHEN (length(t_diag_icd9.diag_icd9_start_time)>=10)
                            then to_char(to_date(to_number(
                            substr(t_diag_icd9.diag_icd9_start_time,1,4),'9999')-543 || 
                            substr(t_diag_icd9.diag_icd9_start_time,5,6),'yyyy-mm-dd'),'yyyymmdd') 
                                                ELSE ''   END AS DATEIN  
            , CASE  WHEN (Length(t_diag_icd9.diag_icd9_start_time) >=16 )  
                THEN replace(substring(t_diag_icd9.diag_icd9_start_time from 12 for 5 ),':','') 
                ELSE '' END AS TIMEIN  
            , CASE WHEN (length(t_diag_icd9.diag_icd9_finish_time)>=10)
                        then to_char(to_date(to_number(
                        substr(t_diag_icd9.diag_icd9_finish_time,1,4),'9999')-543 || 
                        substr(t_diag_icd9.diag_icd9_finish_time,5,6),'yyyy-mm-dd'),'yyyymmdd') 
                                            ELSE ''   END AS DATEOUT 
            , CASE  WHEN (Length(t_diag_icd9.diag_icd9_finish_time) >=16 )  
                THEN replace(substring(t_diag_icd9.diag_icd9_finish_time from 12 for 5 ),':','') 
                ELSE '' END AS TIMEOUT   

FROM  
        t_diag_icd9 inner join t_visit on t_diag_icd9.diag_icd9_vn = t_visit.t_visit_id 
        inner join t_visit_payment on t_visit_payment.t_visit_id = t_visit.t_visit_id 
                                                    and t_visit_payment.visit_payment_active = '1'
                                                    and t_visit_payment.visit_payment_priority = '0'
        inner join b_contract_plans ON t_visit_payment.b_contract_plans_id = b_contract_plans.b_contract_plans_id
        inner join b_map_rp1853_instype on b_contract_plans.b_contract_plans_id = b_map_rp1853_instype.b_contract_plans_id
        inner join r_rp1853_instype ON b_map_rp1853_instype.r_rp1853_instype_id = r_rp1853_instype.id
                                                   and r_rp1853_instype.maininscl  in ('UCS','OFC','SSS','LGO','SSI','STP')
        left join b_employee ON t_diag_icd9.diag_icd9_staff_doctor = b_employee.b_employee_id

WHERE   
        t_visit.f_visit_type_id = '1'  
        AND t_visit.f_visit_status_id <> '4'  
        AND t_diag_icd9.diag_icd9_active = '1'  
        AND substring(t_visit.visit_staff_doctor_discharge_date_time,1,10) >= ':startDate'
        AND substring(t_visit.visit_staff_doctor_discharge_date_time,1,10) <= ':endDate'

ORDER BY AN
