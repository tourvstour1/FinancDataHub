SELECT 
        q1.HCODE
        ,q1.HN
        ,q1.AN
        ,q1.CLINIC
        ,q1.PERSON_ID
        ,q1.DATE_SERV
        ,q1.DID
        ,q1.DIDNAME
        ,sum(q1.AMOUNT)::decimal(12,2)::text as AMOUNT
        ,q1.DRUGPRIC
        ,q1.DRUGCOST
        ,q1.DIDSTD
        ,q1.UNIT
        ,q1.UNIT_PACK
        ,q1.SEQ
        ,q1.DRUGREMARK
        ,q1.PA_NO
        ,sum(q1.TOTCOPAY)::decimal(12,2)::text as TOTCOPAY
        ,q1.USE_STATUS
        ,sum(q1.TOTAL)::decimal(12,2)::text as TOTAL
FROM
(SELECT  
        b_site.b_visit_office_id AS HCODE --NOT NULL
        ,t_visit.visit_hn as HN --NOT NULL
        ,case when t_visit.f_visit_type_id = '1' 
                    then t_visit.visit_vn 
                    else '' end as AN  --NOT NULL

        ,case when b_report_12files_map_clinic.b_report_12files_std_clinic_id IN ('01','02','03','04','05','06','07','08','09','10','11') 
                    then (t_visit.f_visit_type_id || b_report_12files_map_clinic.b_report_12files_std_clinic_id || '1') 
                when b_report_12files_map_clinic.b_report_12files_std_clinic_id is null 
                    then ''
                    else  (t_visit.f_visit_type_id || '121') end as CLINIC

        , t_health_family.patient_pid as PERSON_ID
        , CASE WHEN length(t_visit.visit_begin_visit_time)>=10
                THEN(to_number(substring(t_visit.visit_begin_visit_time,1,4),'9999')-543)
                    || substring(t_visit.visit_begin_visit_time,6,2)
                    || substring(t_visit.visit_begin_visit_time,9,2)
                ELSE '' END AS DATE_SERV --NOT NULL
        , b_item.item_number AS DID --NOT NULL
        , t_order.order_common_name AS DIDNAME --NOT NULL
        , t_order.order_qty AS AMOUNT
        , t_order.order_price AS DRUGPRIC
        , t_order.order_cost AS DRUGCOST
        , substr(b_nhso_map_drug.f_nhso_drug_id,1,24)  AS DIDSTD
        , b_item_drug_uom.item_drug_uom_description as UNIT
        , item_unit_packing_qty as UNIT_PACK
        ,t_visit.visit_vn  AS SEQ --NOT NULL
        ,case when f_ned_reason.ned_code is not null 
                        and length(f_ned_reason.ned_code) = 1
                    then 'E'||f_ned_reason.ned_code 
                when f_ned_reason.ned_code is not null 
                        and length(f_ned_reason.ned_code) = 2
                    then f_ned_reason.ned_code 
                    else '' end as DRUGREMARK
        ,''::text AS PA_NO
        ,(case when t_diag_icd10.diag_icd10_record_date_time <> '' or t_diag_icd10.diag_icd10_record_date_time is not null then
         t_diag_icd10.diag_icd10_record_date_time  else '' end) as date_dx

        ,t_billing_invoice_item.billing_invoice_item_patient_share as TOTCOPAY 
       -- ,(case when t_order.order_home ='0' 
            --            then '1'
             --           else '2' end)::text as USE_STATUS
						
						  ,(case when t_visit.f_visit_type_id = '1'  AND t_order.order_home ='0' 
                        then '1'
							 when t_visit.f_visit_type_id = '0'  
                        then '2'
                        else '2' end)::text as USE_STATUS

        ,t_billing_invoice_item.billing_invoice_item_payer_share as TOTAL 
        ,t_order.t_order_id as order_id 

FROM 
        t_visit	INNER JOIN t_patient ON (t_visit.t_patient_id = t_patient.t_patient_id)
        INNER JOIN t_health_family ON (t_health_family.t_health_family_id = t_patient.t_health_family_id)

        INNER JOIN  t_order   ON (t_order.f_order_status_id <> '3'
                                            AND t_order.f_order_status_id <> '0'
                                            AND t_order.f_item_group_id = '1'
                                            AND t_visit.t_visit_id = t_order.t_visit_id )
        LEFT JOIN (select
                                t_diag_icd10.t_diag_icd10_id
                                ,t_diag_icd10.diag_icd10_vn 
                                ,t_diag_icd10.b_visit_clinic_id
                                ,t_diag_icd10.diag_icd10_record_date_time
                                ,row_number() OVER (partition by  t_diag_icd10.diag_icd10_vn order by t_diag_icd10.diag_icd10_record_date_time asc) as seq
                        from t_diag_icd10 inner join t_visit on t_diag_icd10.diag_icd10_vn = t_visit.t_visit_id
                        where
                                t_diag_icd10.f_diag_icd10_type_id = '1'
                                and t_diag_icd10.diag_icd10_active = '1'
                                and substring(t_visit.visit_staff_doctor_discharge_date_time,1,10) >=  ':startDate'
                                and substring(t_visit.visit_staff_doctor_discharge_date_time,1,10) <=  ':endDate'   
                                and t_visit.f_visit_type_id in ('0','1')) as t_diag_icd10  
        on t_diag_icd10.diag_icd10_vn = t_visit.t_visit_id
                and t_diag_icd10.seq = 1

    LEFT JOIN b_report_12files_map_clinic ON  b_report_12files_map_clinic.b_visit_clinic_id = t_diag_icd10.b_visit_clinic_id
    INNER JOIN b_item ON b_item.b_item_id = t_order.b_item_id
    LEFT JOIN b_nhso_map_drug on t_order.b_item_id = b_nhso_map_drug.b_item_id
    LEFT JOIN t_order_drug on t_order.t_order_id=t_order_drug.t_order_id
                                        and t_order_drug.order_drug_active = '1'
    LEFT JOIN b_item_drug_uom on t_order_drug.b_item_drug_uom_id_purch=b_item_drug_uom.b_item_drug_uom_id
    LEFT JOIN t_order_ned on t_order.t_order_id = t_order_ned.t_order_id
    LEFT JOIN f_ned_reason on t_order_ned.f_ned_reason_id = f_ned_reason.f_ned_reason_id

    inner join t_billing_invoice_item on t_order.t_order_id = t_billing_invoice_item.t_order_item_id
                    and t_billing_invoice_item.billing_invoice_item_active = '1'

    inner join t_visit_payment on t_visit_payment.t_visit_payment_id = t_billing_invoice_item.t_payment_id 
                                                    and t_visit_payment.visit_payment_active = '1'
    inner join b_contract_plans ON t_visit_payment.b_contract_plans_id = b_contract_plans.b_contract_plans_id
        inner join b_map_rp1853_instype on b_contract_plans.b_contract_plans_id = b_map_rp1853_instype.b_contract_plans_id
        inner join r_rp1853_instype ON b_map_rp1853_instype.r_rp1853_instype_id = r_rp1853_instype.id
                                                   and r_rp1853_instype.maininscl in ('UCS','OFC','SSS','LGO','SSI','STP')


	cross join b_site

where   t_order.f_order_status_id <>'3'
    AND t_visit.f_visit_status_id <> '4'
    AND substring(t_visit.visit_staff_doctor_discharge_date_time,1,10) >= ':startDate'
    AND substring(t_visit.visit_staff_doctor_discharge_date_time,1,10) <= ':endDate' 
    and t_visit.f_visit_type_id in ('0','1')

) as q1
group by
        q1.HCODE
        ,q1.HN
        ,q1.AN
        ,q1.CLINIC
        ,q1.PERSON_ID
        ,q1.DATE_SERV
        ,q1.DID
        ,q1.DIDNAME
       -- ,q1.AMOUNT
        ,q1.DRUGPRIC
        ,q1.DRUGCOST
        ,q1.DIDSTD
        ,q1.UNIT
        ,q1.UNIT_PACK
        ,q1.SEQ
        ,q1.DRUGREMARK
        ,q1.PA_NO
        -- ,q1.TOTCOPAY
        ,q1.USE_STATUS
        --,q1.TOTAL