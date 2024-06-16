select
         q.HN
        ,  q.AN
        ,  q.DATEOPD
        ,  q.TYPE
        ,  q.CODE
        , sum(q.QTY)::decimal(12,2)::text  as QTY
        ,  q.RATE::decimal(12,2)::text as RATE
        ,  q.SEQ
        ,  q.CAGCODE
        ,  q.DOSE
        ,  q.CA_TYPE 
        ,  q.SERIALNO 
        ,  sum(q.TOTCOPAY)::decimal(12,2)::text  as TOTCOPAY
        ,  q.USE_STATUS
        , sum(q.TOTAL)::decimal(12,2)::text as TOTAL
        , q.QTYDAY as QTYDAY
				, q.tmltcode 
				, q.status1
from 
(SELECT DISTINCT
            t_visit.visit_hn as HN
            ,case when t_visit.f_visit_type_id = '1'
                    then  t_visit.visit_vn
                        else ''
                    end as AN
            ,CASE WHEN (length(t_visit.visit_begin_visit_time)>=10)
                        then to_char(to_date((cast(substr(t_visit.visit_begin_visit_time,1,4) as int )-543) ||substr(t_visit.visit_begin_visit_time,5,6),'yyyy-mm-dd'),'yyyymmdd')
                        ELSE ''   END AS  DATEOPD

       ,r_rp1253_adpcode.type  as TYPE 
            ,  r_rp1253_adpcode.id  as CODE
            ,(t_order.order_qty) as QTY
         --   ,t_order.order_price as RATE
						,CASE WHEN t_order.f_item_group_id ='3' THEN 100 ELSE t_order.order_price END as RATE
            ,case when t_visit.f_visit_type_id = '0'
                    then  t_visit.visit_vn
                        else ''
                    end as SEQ
            ,(CASE WHEN r_rp1253_adpcode.name ilike '%]t9' and r_rp1253_adpcode.name ilike 'Acute%Leukemia%ผู้ใหญ่%' then '1'
              WHEN r_rp1253_adpcode.name ilike '%]t9' and r_rp1253_adpcode.name ilike 'Acute%Leukemia%เด็ก%' then '2'
              WHEN r_rp1253_adpcode.name ilike '%]t9' and r_rp1253_adpcode.name ilike 'Chronic%Leukemia%ผู้ใหญ่%' then '3'
              WHEN r_rp1253_adpcode.name ilike '%]t9' and r_rp1253_adpcode.name ilike 'Chronic%Leukemia%เด็ก%' then '4'
              WHEN r_rp1253_adpcode.name ilike '%]t9' and r_rp1253_adpcode.name ilike 'Lymphoma%ผู้ใหญ่%' then '5'
              WHEN r_rp1253_adpcode.name ilike '%]t9' and r_rp1253_adpcode.name ilike 'Lymphoma%เด็ก%' then '6'
                else '' end)  as CAGCODE
            ,(CASE WHEN b_item_drug.drug_strength is not null 
                            then b_item_drug.drug_strength  
                            else '' end) as DOSE
            ,''::text as CA_TYPE
            ,t_order.serial_number::text as SERIALNO 
            ,t_billing_invoice_item.billing_invoice_item_patient_share as TOTCOPAY 
            

            ,(case when r_rp1253_adpcode.name ilike '%]t11' 
                        then (case when t_order.order_home ='0' 
                                            then '1'
                                            else '2' end) 
                        else '' end) as USE_STATUS

            ,t_billing_invoice_item.billing_invoice_item_payer_share as TOTAL

            ,''::text as QTYDAY
            , CASE WHEN   r_rp1853_instype.maininscl ='OFC' THEN b_lab_tmlt_tmltcode 
												ELSE '' END AS tmltcode
            , CASE WHEN r_rp1253_adpcode.id ILIKE 'AgC%' and (t_result_lab.result_lab_value  ILIKE '%Det%' OR t_result_lab.result_lab_value  ILIKE '%po%' )THEN '1'
									 WHEN r_rp1253_adpcode.id ILIKE 'PCR%' and (t_result_lab.result_lab_value  ILIKE '%Det%' OR t_result_lab.result_lab_value  ILIKE '%po%' )THEN '1'
									 WHEN r_rp1253_adpcode.id ILIKE 'AgC%' and (t_result_lab.result_lab_value NOT ILIKE '%Det%' OR t_result_lab.result_lab_value  NOT ILIKE '%po%' )THEN '2'
									 WHEN r_rp1253_adpcode.id ILIKE 'PCR%' and (t_result_lab.result_lab_value NOT ILIKE '%Det%' OR t_result_lab.result_lab_value  NOT ILIKE '%po%' )THEN '2'
  ELSE '' END  AS status1

FROM 
            t_visit inner join t_order on t_visit.t_visit_id = t_order.t_visit_id 
            inner join b_item on b_item.b_item_id = t_order.b_item_id
            INNER join b_map_rp1253_adpcode on b_item.b_item_id = b_map_rp1253_adpcode.b_item_id
            left join r_rp1253_adpcode on b_map_rp1253_adpcode.r_rp1253_adpcode_id = r_rp1253_adpcode.id
            left join b_item_drug on b_item.b_item_id  = b_item_drug.b_item_id
						LEFT JOIN b_map_lab_tmlt on b_map_lab_tmlt.b_item_id = b_item.b_item_id 
            inner join t_billing_invoice_item on t_order.t_order_id = t_billing_invoice_item.t_order_item_id
                            and t_billing_invoice_item.billing_invoice_item_active = '1'  

           inner join t_visit_payment on t_visit_payment.t_visit_id = t_visit.t_visit_id 
                                                    and t_visit_payment.visit_payment_active = '1'
                                                    and t_visit_payment.visit_payment_priority = '0'
          inner join b_contract_plans ON t_visit_payment.b_contract_plans_id = b_contract_plans.b_contract_plans_id
        inner join b_map_rp1853_instype on b_contract_plans.b_contract_plans_id = b_map_rp1853_instype.b_contract_plans_id
        inner join r_rp1853_instype ON b_map_rp1853_instype.r_rp1853_instype_id = r_rp1853_instype.id
                                                   and r_rp1853_instype.maininscl  in ('UCS','OFC','SSS','LGO','SSI','STP')


LEFT JOIN t_result_lab on t_order.t_order_id = t_result_lab.t_order_id AND t_result_lab.result_lab_active ='1' 
and t_order.f_item_group_id ='2' 

WHERE  t_billing_invoice_item.billing_invoice_item_patient_share ='0'
        and t_order.f_order_status_id not in ('0','3')
        and t_visit.f_visit_type_id in('0','1')
        and t_visit.f_visit_status_id <>'4'
        and substr(t_visit.visit_staff_doctor_discharge_date_time,1,10) >=  ':startDate'
        and substr(t_visit.visit_staff_doctor_discharge_date_time,1,10) <=  ':endDate' 
 --AND t_visit.visit_hn ='000034601'
) as q
group by
         hn
         , an
         , dateopd
         , type
         , code
        -- , qty
         , rate
         , seq
         , cagcode
         , dose
         , ca_type
         , serialno
       --  , totcopay
         , use_status  
         , qtyday	
	, q.tmltcode 
	, q.status1
 