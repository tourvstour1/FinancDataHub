SELECT
            t_patient.patient_hn AS HN
            ,t_visit.visit_vn AS AN
            , CASE WHEN (length(t_visit.visit_begin_visit_time)>=10)
                        then to_char(to_date(to_number(
                                substr(t_visit.visit_begin_visit_time,1,4),'9999')-543 ||
                                substr(t_visit.visit_begin_visit_time,5,6),'yyyy-mm-dd'),'yyyymmdd')
                        ELSE ''   END AS DATEADM
            , CASE  WHEN (Length(t_visit.visit_begin_visit_time) >=16 )
                        THEN replace(replace(substring(t_visit.visit_begin_visit_time from 12 for 5 ),':',''),'.','')
                        ELSE '' END AS TIMEADM
            , CASE WHEN (length(t_visit.visit_staff_doctor_discharge_date_time)>=10)
                        then to_char(to_date(to_number(
                                substr(t_visit.visit_staff_doctor_discharge_date_time,1,4),'9999')-543 ||
                                substr(t_visit.visit_staff_doctor_discharge_date_time,5,6),'yyyy-mm-dd'),'yyyymmdd')
                        ELSE ''   END AS DATEDSC
            , CASE  WHEN (Length(t_visit.visit_staff_doctor_discharge_date_time) >=16 )
                        THEN replace(replace(substring(t_visit.visit_staff_doctor_discharge_date_time from 12 for 5 ),':',''),'.','')
                        ELSE '' END AS TIMEDSC
            ,t_visit.f_visit_ipd_discharge_status_id AS DISCHS
            ,t_visit.f_visit_ipd_discharge_type_id AS DISCHT
            ,(t_visit.f_visit_type_id || b_report_12files_map_clinic.b_report_12files_std_clinic_id || '1') AS WARDDSC
	,to_char((CASE		
		WHEN b_report_12files_map_clinic.b_report_12files_std_clinic_id IS NOT NULL THEN
		b_report_12files_map_clinic.b_report_12files_std_clinic_id ELSE'' 
	END )::numeric,'fm000')::text AS DEPT
            , (case when t_visit_vital_sign.visit_vital_sign_weight  is null
                    then 0
                    else t_visit_vital_sign.visit_vital_sign_weight::decimal(7,3) end)  AS ADM_W
            ,'1' as UUC

             ,case when r_rp1853_instype.maininscl in ('UCS','OFC','LGO')
                        then 'I'
                        else '' end as SVCTYPE
FROM  
            t_visit INNER JOIN t_patient ON t_patient.t_patient_id = t_visit.t_patient_id
            inner join t_visit_payment on t_visit_payment.t_visit_id = t_visit.t_visit_id 
                                                        and t_visit_payment.visit_payment_active = '1'
                                                        and t_visit_payment.visit_payment_priority = '0'
            inner join b_contract_plans ON t_visit_payment.b_contract_plans_id = b_contract_plans.b_contract_plans_id
        inner join b_map_rp1853_instype on b_contract_plans.b_contract_plans_id = b_map_rp1853_instype.b_contract_plans_id
        inner join r_rp1853_instype ON b_map_rp1853_instype.r_rp1853_instype_id = r_rp1853_instype.id
                                                       and r_rp1853_instype.maininscl  in ('UCS','OFC','SSS','LGO','SSI','STP')
            LEFT JOIN b_visit_ward ON (t_visit.b_visit_ward_id  = b_visit_ward.b_visit_ward_id)
            LEFT JOIN b_report_12files_map_clinic ON (t_visit.b_visit_clinic_id = b_report_12files_map_clinic.b_visit_clinic_id)
            left join (select 
                                        t_visit_vital_sign.t_visit_id
                                        ,t_visit_vital_sign.visit_vital_sign_weight 
                                        ,t_visit_vital_sign.record_date||','||t_visit_vital_sign.record_time
                                        ,row_number() OVER (partition by  t_visit_vital_sign.t_visit_id order by (t_visit_vital_sign.record_date||','||t_visit_vital_sign.record_time) desc) as seq

                                from t_visit_vital_sign inner join t_visit on t_visit_vital_sign.t_visit_id = t_visit.t_visit_id
                                where
                                        t_visit_vital_sign.visit_vital_sign_active = '1'
                                        and t_visit_vital_sign.visit_vital_sign_weight <> ''
                                        and t_visit.f_visit_type_id = '1'
                                        and t_visit.f_visit_status_id <> '4'
                                        AND substring(t_visit.visit_staff_doctor_discharge_date_time,1,10) >= ':startDate'
                                        AND substring(t_visit.visit_staff_doctor_discharge_date_time,1,10) <= ':endDate' 

                                        ) as t_visit_vital_sign 
        on t_visit.t_visit_id = t_visit_vital_sign.t_visit_id
                and t_visit_vital_sign.seq = 1

where  
        t_visit.f_visit_type_id = '1'
        AND t_visit.f_visit_status_id <> '4'
        AND substring(t_visit.visit_staff_doctor_discharge_date_time,1,10) >= ':startDate'
        AND substring(t_visit.visit_staff_doctor_discharge_date_time,1,10) <= ':endDate' 


ORDER BY AN
