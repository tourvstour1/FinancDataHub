SELECT distinct
	 b_site.b_visit_office_id as HCODE

	, t_patient.patient_hn as HN
	, substring(t_patient.patient_changwat from 1 for 2) as CHANGWAT
	, substring(t_patient.patient_amphur from 3 for 2) as AMPHUR
	, CASE WHEN (length(t_patient.patient_birthday)>=10)
                then to_char(to_date(to_number(
                        substr(t_patient.patient_birthday,1,4),'9999')-543 ||
                        substr(t_patient.patient_birthday,5,6),'yyyy-mm-dd'),'yyyymmdd')
                ELSE ''   END AS DOB 
	, t_patient.f_sex_id as SEX
	, f_patient_marriage_status.r_rp1853_marriage_id as MARRIAGE
	, b_map_rp1853_occupation.r_rp1853_occupation_id AS OCCUPA
	, b_map_rp1853_nation.r_rp1853_nation_id  AS NATION
          , case when (t_patient.f_patient_foreigner_id in ('2','3','4')
                    or t_person_foreigner.f_person_foreigner_id in ('11','12','13','14','21','22','23'))
                then case when length(t_health_family.t_health_family_id) = 18
                            then '234' || substring(t_health_family.t_health_family_id,9)
                          when length(t_health_family.t_health_family_id) = 15
                            then '234' || substring(t_health_family.t_health_family_id,4)
                          else ''
                      end
                else t_health_family.patient_pid
          end as PERSON_ID
        , substr(case when f_patient_prefix is not null 
                then    (t_patient.patient_firstname || ' ' ||  t_patient.patient_lastname || ',' || f_patient_prefix.patient_prefix_description)
                else
                    (t_patient.patient_firstname || ' ' ||  t_patient.patient_lastname)
            end,1,36) as NAMEPAT
        , f_patient_prefix.patient_prefix_description as TITLE
	, case when length(t_patient.patient_firstname)>40
            then substring(t_patient.patient_firstname,1,40)
      else t_patient.patient_firstname  
      end AS FNAME
	, CAST(case when length(t_patient.patient_lastname)>40
            then substring(t_patient.patient_lastname,1,40)
      else t_patient.patient_lastname  
      end AS text ) AS LNAME
    ,(case when t_health_family.patient_pid is not null and trim(t_health_family.patient_pid) <> ''
                    then '1'
             when t_person_foreigner.passport_no is not null and trim(t_person_foreigner.passport_no) <> ''
                    then '2'
                else t_person_foreigner.foreigner_no_type
            end )::numeric as IDTYPE
 FROM
           t_visit INNER JOIN t_patient ON t_visit.t_patient_id = t_patient.t_patient_id
            INNER JOIN t_health_family on t_patient.t_health_family_id = t_health_family.t_health_family_id
            LEFT JOIN f_patient_prefix on f_patient_prefix.f_patient_prefix_id = t_patient.f_patient_prefix_id
            INNER JOIN f_patient_occupation on t_patient.f_patient_occupation_id = f_patient_occupation.f_patient_occupation_id
            inner join b_map_rp1853_occupation on f_patient_occupation.f_patient_occupation_id = b_map_rp1853_occupation.f_patient_occupation_id
            INNER JOIN f_patient_marriage_status on t_patient.f_patient_marriage_status_id = f_patient_marriage_status.f_patient_marriage_status_id
            LEFT JOIN f_patient_nation on t_patient.f_patient_nation_id = f_patient_nation.f_patient_nation_id
            inner join b_map_rp1853_nation on f_patient_nation.f_patient_nation_id = b_map_rp1853_nation.f_patient_nation_id
           inner join t_visit_payment on t_visit_payment.t_visit_id = t_visit.t_visit_id 
                                                    and t_visit_payment.visit_payment_active = '1'
                                                    and t_visit_payment.visit_payment_priority = '0'
          inner join b_contract_plans ON t_visit_payment.b_contract_plans_id = b_contract_plans.b_contract_plans_id
        inner join b_map_rp1853_instype on b_contract_plans.b_contract_plans_id = b_map_rp1853_instype.b_contract_plans_id
        inner join r_rp1853_instype ON b_map_rp1853_instype.r_rp1853_instype_id = r_rp1853_instype.id
                                              --     and r_rp1853_instype.maininscl  in ('UCS','OFC','SSS','LGO','SSI','STP')
         left join t_person_foreigner ON t_health_family.t_health_family_id = t_person_foreigner.t_person_id
         cross join b_site


WHERE  
        t_visit.f_visit_status_id <> '4'
       AND substring(t_visit.visit_staff_doctor_discharge_date_time,1,10) >= ':startDate'
      AND substring(t_visit.visit_staff_doctor_discharge_date_time,1,10) <= ':endDate' 


        and t_visit.f_visit_type_id <> 'S'

ORDER BY HN