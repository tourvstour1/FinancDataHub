SELECT  
        t_visit.visit_vn AS AN   
        , visit_refer_in_out_refer_hospital as REFER  
        , case when f_visit_refer_type_id ='1'
            then '2'
            else '1'  end as REFERTYPE   

FROM   
           (select 
                t_visit_refer_in_out.*
            from t_visit_refer_in_out 
                    inner join (select
                                            t_visit_refer_in_out.t_visit_id
                                            ,t_visit_refer_in_out.f_visit_refer_type_id
                                            ,max(t_visit_refer_in_out.visit_refer_in_out_number) as visit_refer_in_out_number
                                            ,max(t_visit_refer_in_out.record_date_time) as record_date_time
                                    from t_visit_refer_in_out inner join t_visit  on t_visit.t_visit_id = t_visit_refer_in_out.t_visit_id
                                    where
                                            t_visit_refer_in_out.visit_refer_in_out_active ='1'
                                            AND t_visit.f_visit_status_id <> '4' 
                                            AND substring(t_visit.visit_staff_doctor_discharge_date_time,1,10) >= ':startDate'
                                            AND substring(t_visit.visit_staff_doctor_discharge_date_time,1,10) <= ':endDate' 
                                            AND t_visit.f_visit_type_id = '1'
                                    group by
                                             t_visit_refer_in_out.t_visit_id
                                            ,t_visit_refer_in_out.f_visit_refer_type_id) as max_visit_refer_in_out
                    on t_visit_refer_in_out.t_visit_id = max_visit_refer_in_out.t_visit_id
                            and t_visit_refer_in_out.f_visit_refer_type_id = max_visit_refer_in_out.f_visit_refer_type_id
                            and t_visit_refer_in_out.visit_refer_in_out_number = max_visit_refer_in_out.visit_refer_in_out_number
                            and t_visit_refer_in_out.record_date_time = max_visit_refer_in_out.record_date_time) as t_visit_refer_in_out 
           inner join t_visit  on t_visit.t_visit_id = t_visit_refer_in_out.t_visit_id
           inner join t_visit_payment on t_visit_payment.t_visit_id = t_visit.t_visit_id 
                                                    and t_visit_payment.visit_payment_active = '1'
                                                    and t_visit_payment.visit_payment_priority = '0'
          inner join b_contract_plans ON t_visit_payment.b_contract_plans_id = b_contract_plans.b_contract_plans_id
        inner join b_map_rp1853_instype on b_contract_plans.b_contract_plans_id = b_map_rp1853_instype.b_contract_plans_id
        inner join r_rp1853_instype ON b_map_rp1853_instype.r_rp1853_instype_id = r_rp1853_instype.id
                                                   and r_rp1853_instype.maininscl  in ('UCS','OFC','SSS','LGO','SSI','STP')

WHERE   
        t_visit.f_visit_status_id <> '4' 
        AND visit_refer_in_out_active = '1'
        AND t_visit.f_visit_type_id = '1'
        AND substring(t_visit.visit_staff_doctor_discharge_date_time,1,10) >= ':startDate'
        AND substring(t_visit.visit_staff_doctor_discharge_date_time,1,10) <= ':endDate'

ORDER BY AN
