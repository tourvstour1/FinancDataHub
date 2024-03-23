SELECT distinct
        t_visit.visit_hn as hn
        ,CASE WHEN t_visit.f_visit_type_id = '1' THEN visit_vn ELSE '' END AS an
        ,CASE WHEN (length(t_visit.visit_begin_visit_time)>=10) THEN to_char(to_date(to_number(substr(t_visit.visit_begin_visit_time,1,4),'9999')-543 || 
              substr(t_visit.visit_begin_visit_time,5,6),'yyyy-mm-dd'),'yyyymmdd') 
                            ELSE ''   END AS  dateopd 
        ,t_accident.accident_claim_code AS authae
        ,CASE WHEN (length(accident_date)>=10) then to_char(to_date(to_number(substr(accident_date,1,4),'9999')-543 || 
                    substr(accident_date,5,6),'yyyy-mm-dd'),'yyyymmdd')  ELSE ''   END AS  aedate 
        ,substr(accident_time,1,2)||substr(accident_time,4,2) as aetime
        ,t_accident.accident_accident_type as aetype
        ,CASE WHEN t_visit_refer_in_out.f_visit_refer_type_id = '0'  --refer_in
                            then t_visit_refer_in_out.visit_refer_in_out_number
                    WHEN t_visit_refer_in_out.f_visit_refer_type_id = '1'  --refer_out
                            then t_visit_refer_in_out.visit_refer_in_out_number end as REFER_NO
        ,case when t_visit_refer_in_out.f_visit_refer_type_id = '0'  --refer_in
                        then t_visit_refer_in_out.visit_refer_in_out_refer_hospital 
                        else '' end as refmaini

        ,case when t_visit_refer_in_out.f_visit_refer_type_id = '0'  --refer_in
                        then t_visit_refer_in_out.visit_refer_in_out_observe||t_visit_refer_in_out.visit_refer_in_out_treatment
                                || t_visit_refer_in_out.visit_refer_in_out_lab || '0' 
                        else '' end as ireftype

        ,case when t_visit_refer_in_out.f_visit_refer_type_id = '1'  --refer_out
                        then t_visit_refer_in_out.visit_refer_in_out_refer_hospital 
                        else '' end  as refmaino

        ,case when t_visit_refer_in_out.f_visit_refer_type_id = '1'  --refer_out
                        then (case when t_visit.f_refer_cause_id='1' 
                                            then '1000'
                                          when (t_visit.f_refer_cause_id='2'
                                            or t_visit.f_refer_cause_id='3'
                                            or t_visit.f_refer_cause_id='4'
                                            or t_visit.f_refer_cause_id='5'
                                            or t_visit.f_refer_cause_id='6') then  '0100'
                                        when t_visit.f_refer_cause_id='7' then  '0001' 
                                        else '0000' end)
                        else '' end as oreftype
        ,t_accident.accident_occur_type as ucae
        ,case when t_accident.accident_emergency_type = '' then '1' 
                    else t_accident.accident_emergency_type end as emtype
        , case when t_visit.f_visit_type_id = '0'
                    then  t_visit.visit_vn
                        else ''
                    end as seq
        ,'' as AESTATUS
        ,'' as DALERT
        ,'' as TALERT

FROM 
        t_accident inner join t_visit on t_accident.t_visit_id = t_visit.t_visit_id
        inner join t_visit_refer_in_out  on t_visit_refer_in_out.t_visit_id = t_visit.t_visit_id 
                                                            and t_visit_refer_in_out.visit_refer_in_out_active = '1'
        inner join t_visit_payment on t_visit_payment.t_visit_id = t_visit.t_visit_id 
                                                    and t_visit_payment.visit_payment_active = '1'
                                                    and t_visit_payment.visit_payment_priority = '0'
        inner join b_contract_plans ON t_visit_payment.b_contract_plans_id = b_contract_plans.b_contract_plans_id
        inner join b_map_rp1853_instype on b_contract_plans.b_contract_plans_id = b_map_rp1853_instype.b_contract_plans_id
        inner join r_rp1853_instype ON b_map_rp1853_instype.r_rp1853_instype_id = r_rp1853_instype.id
                                                   and r_rp1853_instype.maininscl  in ('UCS','OFC','SSS','LGO','SSI','STP')

WHERE 
        t_visit.f_visit_status_id <> '4'
        and t_accident.accident_active = '1'
 
    and substr(t_visit.visit_staff_doctor_discharge_date_time,1,10) >= ':startDate'
    and substr(t_visit.visit_staff_doctor_discharge_date_time,1,10) <= ':endDate' 
        and t_visit.f_visit_type_id in ('0','1')

ORDER BY  hn
