select
q1.hcode
,q1.hn
,q1.person_id
,q1.seq
, q1.dateserv
, q1.labtest

,(case when q1.labresult ~'^([0-9]+\.?[0-9]*|\.[0-9]+)$' 
                                            then q1.labresult::decimal(10,2)::text
                                            else '0.00'::decimal(10,2)::text end)
as labresult
from(select distinct
            b_site.b_visit_office_id as hcode
            ,t_health_family.health_family_hn_hcis as person_id
            ,t_visit.visit_vn as seq
              ,t_visit.visit_hn as hn
            ,(to_number(substring(t_visit.visit_begin_visit_time,1,4),'9999')-543)       
                        || substring(t_visit.visit_begin_visit_time,6,2)       
                        || substring(t_visit.visit_begin_visit_time,9,2)  as dateserv
            , b_item_lab_ncd_std.lab_icd10tm as labtest
            ,(case when lower(t_result_lab.result_lab_value) ilike '%neg%' or lower(t_result_lab.result_lab_value) ilike '%non-reactive%'
                    or lower(t_result_lab.result_lab_value) ilike 'no afb%' or lower(t_result_lab.result_lab_value) ilike 'no growth%'
or lower(t_result_lab.result_lab_value) ilike 'not'
                        then '0'
                    when lower(t_result_lab.result_lab_value) ilike '%pos%'  or lower(t_result_lab.result_lab_value) ilike 'growth%' 
                            or lower(t_result_lab.result_lab_value) ilike '%no gram-negative%'    or lower(t_result_lab.result_lab_value) ilike 'afb%' 
or t_result_lab.result_lab_value ilike '1+%' or t_result_lab.result_lab_value ilike '2+%'
            or t_result_lab.result_lab_value ilike '3+%'
or t_result_lab.result_lab_value ilike 'trace%'
                        then '1'
                    when lower(t_result_lab.result_lab_value) ilike '%inconclusive%' 
                        or lower(t_result_lab.result_lab_value) ilike '%gram-negative%'
                        then '2'
                  when lower(t_result_lab.result_lab_value) ilike '%ngu%' or lower(t_result_lab.result_lab_value) ilike '%non-reactive%'
                        then '3'
                        else t_result_lab.result_lab_value/* (case when t_result_lab.result_lab_value ~'^([0-9]+\.?[0-9]*|\.[0-9]+)$' 
                                            then t_result_lab.result_lab_value::decimal(10,2)::text
                                            else '0.00'::decimal(10,2)::text end) */
                      end ) as labresult
            ,(case  when length(t_visit.visit_staff_doctor_discharge_date_time) >= 10
                            then case when length(cast(substring(t_visit.visit_staff_doctor_discharge_date_time,1,4) as numeric) - 543
                                                            || replace(replace(replace(substring(t_visit.visit_staff_doctor_discharge_date_time,5),'-',''),',',''),':','')) = 14
                                              then (cast(substring(t_visit.visit_staff_doctor_discharge_date_time,1,4) as numeric) - 543
                                                            || replace(replace(replace(substring(t_visit.visit_staff_doctor_discharge_date_time,5),'-',''),',',''),':',''))
                                              when length(cast(substring(t_visit.visit_staff_doctor_discharge_date_time,1,4) as numeric) - 543
                                                            || replace(replace(replace(substring(t_visit.visit_staff_doctor_discharge_date_time,5),'-',''),',',''),':','')) =12
                                              then (cast(substring(t_visit.visit_staff_doctor_discharge_date_time,1,4) as numeric) - 543
                                                            || replace(replace(replace(substring(t_visit.visit_staff_doctor_discharge_date_time,5),'-',''),',',''),':','')) || '00'
                                              when length(cast(substring(t_visit.visit_staff_doctor_discharge_date_time,1,4) as numeric) - 543
                                                            || replace(replace(replace(substring(t_visit.visit_staff_doctor_discharge_date_time,5),'-',''),',',''),':','')) =10
                                              then (cast(substring(t_visit.visit_staff_doctor_discharge_date_time,1,4) as numeric) - 543
                                                            || replace(replace(replace(substring(t_visit.visit_staff_doctor_discharge_date_time,5),'-',''),',',''),':','')) || '0000'
                                              when length(cast(substring(t_visit.visit_staff_doctor_discharge_date_time,1,4) as numeric) - 543
                                                            || replace(replace(replace(substring(t_visit.visit_staff_doctor_discharge_date_time,5),'-',''),',',''),':','')) = 8
                                              then (cast(substring(t_visit.visit_staff_doctor_discharge_date_time,1,4) as numeric) - 543
                                                            || replace(replace(replace(substring(t_visit.visit_staff_doctor_discharge_date_time,5),'-',''),',',''),':','')) || '000000'
                                              else '' end
                            when length(t_visit.visit_modify_date_time) >= 10
                            then case when length(cast(substring(t_visit.visit_modify_date_time,1,4) as numeric) - 543
                                                            || replace(replace(replace(substring(t_visit.visit_modify_date_time,5),'-',''),',',''),':','')) = 14
                                              then (cast(substring(t_visit.visit_modify_date_time,1,4) as numeric) - 543
                                                            || replace(replace(replace(substring(t_visit.visit_modify_date_time,5),'-',''),',',''),':',''))
                                              when length(cast(substring(t_visit.visit_modify_date_time,1,4) as numeric) - 543
                                                            || replace(replace(replace(substring(t_visit.visit_modify_date_time,5),'-',''),',',''),':','')) =12
                                              then (cast(substring(t_visit.visit_modify_date_time,1,4) as numeric) - 543
                                                            || replace(replace(replace(substring(t_visit.visit_modify_date_time,5),'-',''),',',''),':','')) || '00'
                                              when length(cast(substring(t_visit.visit_modify_date_time,1,4) as numeric) - 543
                                                            || replace(replace(replace(substring(t_visit.visit_modify_date_time,5),'-',''),',',''),':','')) =10
                                              then (cast(substring(t_visit.visit_modify_date_time,1,4) as numeric) - 543
                                                            || replace(replace(replace(substring(t_visit.visit_modify_date_time,5),'-',''),',',''),':','')) || '0000'
                                              when length(cast(substring(t_visit.visit_modify_date_time,1,4) as numeric) - 543
                                                            || replace(replace(replace(substring(t_visit.visit_modify_date_time,5),'-',''),',',''),':','')) = 8
                                              then (cast(substring(t_visit.visit_modify_date_time,1,4) as numeric) - 543
                                                            || replace(replace(replace(substring(t_visit.visit_modify_date_time,5),'-',''),',',''),':','')) || '000000'
                                              else ''
                                       end
                            else ''
                   end) as d_update     
            , case when t_health_family.patient_pid <> '' and length(t_health_family.patient_pid) =13
                            then t_health_family.patient_pid
                    when t_health_family.patient_pid = '' 
                                and t_person_foreigner.foreigner_no = '' 
                                and t_person_foreigner.f_person_foreigner_id in ('02','03','04','11','12','13','14','21','22','23')
                          then 
                                   lpad(t_patient.patient_hn,13,'0')                                      
                    when  t_person_foreigner.foreigner_no <> '' and length(t_person_foreigner.foreigner_no) =13
                            then  t_person_foreigner.foreigner_no
                    else ''
                    end as cid

from  
        t_visit 
        inner join t_patient on t_visit.t_patient_id = t_patient.t_patient_id
        inner join t_health_family on t_patient.t_health_family_id = t_health_family.t_health_family_id
        inner join t_result_lab on t_visit.t_visit_id = t_result_lab.t_visit_id -- and t_result_lab.result_lab_value ~'^([0-9]+\.?[0-9]*|\.[0-9]+)$' 
        inner join t_order on t_result_lab.t_order_id = t_order.t_order_id
        inner join b_item_map_lab_ncd on t_result_lab.b_item_id = b_item_map_lab_ncd.b_item_id and b_item_map_lab_ncd.active='1'
        inner join b_item_lab_ncd_std on b_item_map_lab_ncd.b_item_lab_ncd_std_id = b_item_lab_ncd_std.b_item_lab_ncd_std_id and b_item_lab_ncd_std.active='1'

        left join t_death on t_health_family.t_health_family_id = t_death.t_health_family_id
                                    and t_death.death_active = '1'
        left join t_person on t_patient.t_person_id = t_person.t_person_id
        left join t_person_foreigner on t_person_foreigner.t_person_id = t_patient.t_person_id
        cross join b_site

where  
        t_result_lab.result_lab_active='1'
        and t_order.f_order_status_id <> '3'
        and t_result_lab.result_lab_value <> ''
			
        and t_visit.f_visit_status_id ='3'
        and t_visit.visit_money_discharge_status='1'
        and t_visit.visit_doctor_discharge_status='1' 	
        AND LENGTH(t_visit.visit_vn) > 1		
	AND t_visit.visit_vn =':seq'
        and (case when t_death.t_death_id is not null 
                    then true 
               when t_death.t_death_id is null and t_health_family.f_patient_discharge_status_id <> '1'
                    then true 
                    else false end)) as q1
order by labtest asc


