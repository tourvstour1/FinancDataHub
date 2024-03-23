SELECT
        t_admit_leave_day.leave_seq as seqlvd
        ,t_visit.visit_vn as an
        ,CASE WHEN (length(t_admit_leave_day.date_out)>=10)
                    then to_char(to_date(to_number(
                            substr(t_admit_leave_day.date_out,1,4),'9999')-543 ||
                            substr(t_admit_leave_day.date_out,5,6),'yyyy-mm-dd'),'yyyymmdd')
         END AS dateout
        ,CASE  WHEN (Length(t_admit_leave_day.time_out) >=5 )
                    THEN replace(replace(substring(t_admit_leave_day.time_out from 1 for 5 ),':',''),'.','')
                    ELSE '' END AS timeout
        ,CASE WHEN (length(t_admit_leave_day.date_in)>=10)
                    then to_char(to_date(to_number(
                            substr(t_admit_leave_day.date_in,1,4),'9999')-543 ||
                            substr(t_admit_leave_day.date_in,5,6),'yyyy-mm-dd'),'yyyymmdd')
         END AS datein
        ,CASE  WHEN (Length(t_admit_leave_day.time_in) >=5 )
                    THEN replace(replace(substring(t_admit_leave_day.time_in from 1 for 5 ),':',''),'.','')
                    ELSE '' END AS timein
        ,date_part('days',cast(t_admit_leave_day.date_in as timestamp) - cast(t_admit_leave_day.date_out as timestamp)) as qtyday

FROM  
        t_visit inner join t_admit_leave_day on t_visit.t_visit_id =t_admit_leave_day.t_visit_id
        inner join t_visit_payment on t_visit_payment.t_visit_id = t_visit.t_visit_id 
                                                    and t_visit_payment.visit_payment_active = '1'
                                                    and t_visit_payment.visit_payment_priority = '0'
          inner join b_contract_plans ON t_visit_payment.b_contract_plans_id = b_contract_plans.b_contract_plans_id
        inner join b_map_rp1853_instype on b_contract_plans.b_contract_plans_id = b_map_rp1853_instype.b_contract_plans_id
        inner join r_rp1853_instype ON b_map_rp1853_instype.r_rp1853_instype_id = r_rp1853_instype.id
                                                   and r_rp1853_instype.maininscl  in ('UCS','OFC','SSS','LGO','SSI','STP')

WHERE  
            t_visit.f_visit_type_id = '1'
            AND t_visit.f_visit_status_id <> '4'  
            AND t_admit_leave_day.active = '1'
            AND substring(t_visit.visit_staff_doctor_discharge_date_time,1,10) >= ':startDate'
            AND substring(t_visit.visit_staff_doctor_discharge_date_time,1,10) <= ':endDate'
            AND t_admit_leave_day.date_in <> ''
            AND t_admit_leave_day.date_out <> ''

ORDER BY  dateout
