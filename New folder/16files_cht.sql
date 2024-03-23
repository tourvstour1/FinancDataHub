SELECT 
        hn
        ,an
        ,date
        ,total::decimal(12,2)::text as total
        ,paid::decimal(12,2)::text as paid
        ,case when total= paid then '10' else pttype end as PTTYPE
        ,person_id
        ,seq
FROM
(SELECT
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
            , sum(t_billing_invoice.billing_invoice_total)  AS TOTAL
            , sum(t_billing_invoice.billing_invoice_patient_share)  AS PAID
            , case when b_map_rp1853_instype.r_rp1853_instype_id is not null
                        then b_map_rp1853_instype.r_rp1853_instype_id
                        else ''
              end AS PTTYPE
            , t_patient.patient_pid as PERSON_ID
            , case when t_visit.f_visit_type_id = '0'
                    then  t_visit.visit_vn
                        else ''
                    end AS SEQ
FROM 
        t_billing INNER JOIN t_visit ON (t_billing.t_visit_id = t_visit.t_visit_id)
        INNER JOIN t_patient ON (t_patient.t_patient_id = t_visit.t_patient_id)
        inner join t_billing_invoice on t_billing.t_billing_id = t_billing_invoice.t_billing_id
                                                and t_billing_invoice.billing_invoice_active = '1'
        inner join t_visit_payment on t_billing_invoice.t_payment_id = t_visit_payment.t_visit_payment_id
                                                    and t_visit_payment.visit_payment_active = '1'
        inner join b_contract_plans ON t_visit_payment.b_contract_plans_id = b_contract_plans.b_contract_plans_id
        inner join b_map_rp1853_instype on b_contract_plans.b_contract_plans_id = b_map_rp1853_instype.b_contract_plans_id
        inner join r_rp1853_instype ON b_map_rp1853_instype.r_rp1853_instype_id = r_rp1853_instype.id
                                                   and r_rp1853_instype.maininscl  in ('UCS','OFC','SSS','LGO','SSI','STP')

where 
        t_visit.f_visit_status_id <> '4'
        AND t_billing.billing_active = '1'
        AND substring(t_visit.visit_staff_doctor_discharge_date_time,1,10) >= ':startDate'
        AND substring(t_visit.visit_staff_doctor_discharge_date_time,1,10) <= ':endDate'
        and t_visit.f_visit_type_id in ('0','1')
group by
	 HN
	, AN
	, DATE
	, PTTYPE
    , PERSON_ID
    , SEQ
ORDER BY HN) as q