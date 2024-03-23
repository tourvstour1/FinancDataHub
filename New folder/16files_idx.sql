SELECT 	
        t_visit.visit_vn AS AN  
        , replace(diag_icd10_number,'.','') AS DIAG
        , case when (t_diag_icd10.f_diag_icd10_type_id IN ('6','7')) 
                    then '4' 
                else t_diag_icd10.f_diag_icd10_type_id end AS DXTYPE  
        , b_employee.employee_number AS DRDX  
FROM 	
        t_diag_icd10 INNER JOIN t_visit ON (t_diag_icd10.diag_icd10_vn = t_visit.t_visit_id) 
        inner join t_visit_payment on t_visit_payment.t_visit_id = t_visit.t_visit_id 
                                                    and t_visit_payment.visit_payment_active = '1'
                                                    and t_visit_payment.visit_payment_priority = '0'
        inner join b_contract_plans ON t_visit_payment.b_contract_plans_id = b_contract_plans.b_contract_plans_id
        inner join b_map_rp1853_instype on b_contract_plans.b_contract_plans_id = b_map_rp1853_instype.b_contract_plans_id
        inner join r_rp1853_instype ON b_map_rp1853_instype.r_rp1853_instype_id = r_rp1853_instype.id
                                                   and r_rp1853_instype.maininscl  in ('UCS','OFC','SSS','LGO','SSI','STP')
        LEFT JOIN b_employee ON t_diag_icd10.diag_icd10_staff_doctor = b_employee.b_employee_id

WHERE   
        t_visit.f_visit_status_id <> '4'     
        AND t_diag_icd10.diag_icd10_active = '1'    
        AND t_visit.f_visit_type_id = '1'       
       AND substring(t_visit.visit_staff_doctor_discharge_date_time,1,10) >= ':startDate'
       AND substring(t_visit.visit_staff_doctor_discharge_date_time,1,10) <= ':endDate'

order by AN
