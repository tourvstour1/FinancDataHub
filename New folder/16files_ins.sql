SELECT 
        t_patient.patient_hn AS HN
        , r_rp1853_instype.maininscl AS INSCL  
        , b_map_rp1853_instype.r_rp1853_instype_id AS SUBTYPE  
        , t_patient.patient_pid  AS CID
        ,case when t_visit_payment.visit_payment_main_hospital is null or t_visit_payment.visit_payment_main_hospital = 'null' 
                        then ''
                        else  t_visit_payment.visit_payment_main_hospital end AS HCODE 
        -- , CASE WHEN (length(t_visit_payment.visit_payment_card_issue_date)>=10)
        --                 then to_char(to_date(to_number(
        --                 substr(t_visit_payment.visit_payment_card_issue_date,1,4),'9999')-543 || 
        --                 substr(t_visit_payment.visit_payment_card_issue_date,5,6),'yyyy-mm-dd'),'yyyymmdd') 
        --                 ELSE ''   END AS DATEIN  
        , CASE WHEN (length(t_visit_payment.visit_payment_card_expire_date)>=10)
                        then to_char(to_date(to_number(
                        substr(t_visit_payment.visit_payment_card_expire_date,1,4),'9999')-543 || 
                        substr(t_visit_payment.visit_payment_card_expire_date,5,6),'yyyy-mm-dd'),'yyyymmdd') 
                        ELSE ''   END AS DATEEXP 
        ,case when t_visit_payment.visit_payment_main_hospital is null or t_visit_payment.visit_payment_main_hospital = 'null' 
                        then ''
                        else  t_visit_payment.visit_payment_main_hospital end AS HOSPMAIN
        ,case when t_visit_payment.visit_payment_sub_hospital is null or t_visit_payment.visit_payment_sub_hospital = 'null' 
                        then ''
                        else  t_visit_payment.visit_payment_sub_hospital end AS HOSPSUB 
        ,case when t_visit_govoffical_plan.f_govcode_id is not null
                    then t_visit_govoffical_plan.f_govcode_id
                    else '' end as GOVCODE
        ,case when f_govcode.description is not null 
                    then f_govcode.description 
                    else ''  end as GOVNAME
        ,case when t_visit_govoffical_plan.govoffical_type = '1' then t_visit_govoffical_plan.govoffical_number else '' end as PERMITNO
        ,case when r_rp1853_instype.maininscl ='OFC'
                    then (case when t_visit_govoffical_plan.govoffical_type = '2' 
                                    then t_visit_govoffical_plan.govoffical_number else '' end) 
                    else '' end as DOCNO
        ,case when t_visit_govoffical_plan.ownrpid is not null 
                    then t_visit_govoffical_plan.ownrpid
                    else '' end  as OWNRPID
        ,case when t_visit_govoffical_plan.ownname is not null
                    then t_visit_govoffical_plan.ownname
                    else '' end as OWNNAME
        ,case when t_visit.f_visit_type_id = '1' 
                then t_visit.visit_vn 
                else '' end as AN
        ,case when t_visit.f_visit_type_id = '0'
                    then t_visit.visit_vn
                  else ''  end as SEQ
        ,t_visit_govoffical_plan.f_subinscl_id as SUBINSCL
        ,t_visit_govoffical_plan.f_relinscl_id as RELINSCL
        ,'' as HTYPE

 FROM 	
        t_patient INNER JOIN t_visit ON (t_patient.t_patient_id = t_visit.t_patient_id) 
        INNER JOIN t_health_family ON t_health_family.t_health_family_id = t_patient.t_health_family_id
        INNER JOIN f_patient_prefix on f_patient_prefix.f_patient_prefix_id = t_patient.f_patient_prefix_id
        INNER JOIN t_visit_payment ON t_visit.t_visit_id = t_visit_payment.t_visit_id
                                                    and t_visit_payment.visit_payment_active = '1' 
                                                    and t_visit_payment.visit_payment_priority = '0'
        left join t_visit_govoffical_plan on t_visit_payment.t_visit_payment_id = t_visit_govoffical_plan.t_visit_payment_id
        left join f_govcode on t_visit_govoffical_plan.f_govcode_id = f_govcode.f_govcode_id
        INNER JOIN b_contract_plans ON t_visit_payment.b_contract_plans_id = b_contract_plans.b_contract_plans_id
        inner join b_map_rp1853_instype on b_contract_plans.b_contract_plans_id = b_map_rp1853_instype.b_contract_plans_id
        inner join r_rp1853_instype ON b_map_rp1853_instype.r_rp1853_instype_id = r_rp1853_instype.id
                                                   and r_rp1853_instype.maininscl  in ('UCS','OFC','SSS','LGO','SSI','STP')

WHERE 
        t_visit.f_visit_status_id <> '4'  
        AND substring(t_visit.visit_staff_doctor_discharge_date_time,1,10) >= ':startDate'
        AND substring(t_visit.visit_staff_doctor_discharge_date_time,1,10) <= ':endDate' 
        and t_visit.f_visit_type_id <> 'S'

group by
	 HN  
	, INSCL  
	, SUBTYPE  
	, CID  
        , HCODE
	--, DATEIN  
	, DATEEXP 
	, HOSPMAIN
	, HOSPSUB 
    ,GOVCODE
    ,GOVNAME
    ,PERMITNO
    ,DOCNO
    ,OWNRPID
    ,OWNNAME
    ,AN
    ,SEQ
    ,SUBINSCL
    ,RELINSCL
    ,HTYPE