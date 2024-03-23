SELECT 
            t_patient.patient_hn AS HN  
            , case when t_visit.f_visit_type_id = '1'
                    then  t_visit.visit_vn
                        else ''
                    end AS AN
            , CASE WHEN (length(t_visit.visit_begin_visit_time)>=10)
                    then to_char(to_date(to_number(
                    substr(t_visit.visit_begin_visit_time,1,4),'9999')-543 ||
                    substr(t_visit.visit_begin_visit_time,5,6),'yyyy-mm-dd'),'yyyymmdd')
                            ELSE ''   END AS  DATE 
            --, b_item_16_group.item_16_group_number  AS CHRGITEM
                ,case when r_rp1253_charitem.id is not null and billing_invoice_item_draw = '1'
                        then r_rp1253_charitem.id || '1'
                        when r_rp1253_charitem.id is not null
                        then r_rp1253_charitem.id || '2'
                        when r_rp1253_charitem.id is null and billing_invoice_item_draw = '1'
                        then 'J1'
                        when r_rp1253_charitem.id is null
                        then 'J2'
                        else ''
                 end AS CHRGITEM
            ,sum(t_billing_invoice_item.billing_invoice_item_total)::decimal(12,2)::text as AMOUNT  
            ,t_patient.patient_pid AS PERSON_ID
            , case when t_visit.f_visit_type_id = '0'
                    then  t_visit.visit_vn
                        else ''
                    end AS SEQ


FROM  
        t_billing_invoice_item INNER JOIN t_visit ON t_billing_invoice_item.t_visit_id = t_visit.t_visit_id 
        INNER JOIN t_patient ON (t_patient.t_patient_id = t_visit.t_patient_id)  
        inner JOIN t_order ON (t_order.t_order_id = t_billing_invoice_item.t_order_item_id)
        inner join b_item ON b_item.b_item_id = t_order.b_item_id   
        left join b_map_rp1253_charitem on b_item.b_item_id = b_map_rp1253_charitem.b_item_id
        left join r_rp1253_charitem on b_map_rp1253_charitem.r_rp1253_charitem_id = r_rp1253_charitem.id
    --inner join b_item_16_group on t_order.b_item_16_group_id = b_item_16_group.b_item_16_group_id

        inner join t_visit_payment on t_visit_payment.t_visit_id = t_visit.t_visit_id 
                                                    and t_visit_payment.visit_payment_active = '1'
                                                    and t_visit_payment.visit_payment_priority = '0'
        inner join b_contract_plans ON t_visit_payment.b_contract_plans_id = b_contract_plans.b_contract_plans_id
        inner join b_map_rp1853_instype on b_contract_plans.b_contract_plans_id = b_map_rp1853_instype.b_contract_plans_id
        inner join r_rp1853_instype ON b_map_rp1853_instype.r_rp1853_instype_id = r_rp1853_instype.id
                                                   and r_rp1853_instype.maininscl ='LGO'

where 
            t_visit.f_visit_status_id <> '4' 
	    AND t_billing_invoice_item.billing_invoice_item_patient_share ='0'
            AND t_billing_invoice_item.billing_invoice_item_active = '1' 
            AND substring(t_visit.visit_staff_doctor_discharge_date_time,1,10) >= ':startDate'
            AND substring(t_visit.visit_staff_doctor_discharge_date_time,1,10) <= ':endDate' 
            and t_visit.f_visit_type_id in ('0','1')

group by 
        HN  
        , AN  
        , DATE  
        , CHRGITEM  
    --    , AMOUNT
        , PERSON_ID
        , SEQ

ORDER BY HN


