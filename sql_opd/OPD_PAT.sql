SELECT DISTINCT
	q.hcode :: TEXT AS hcode,
	q.hn :: TEXT AS hn,
	q.changwat :: TEXT AS changwat,
	q.amphur :: TEXT AS amphur,
	q.dob :: TEXT AS dob,
	q.sex :: TEXT AS sex,
	q.marriage :: TEXT AS marriage,
	q.occupa :: TEXT AS occupa,
	q.nation :: TEXT AS nation,
	q.person_id :: TEXT AS person_id,
	q.namepat :: TEXT AS namepat,
	q.title :: TEXT AS title,
	q.fname :: TEXT AS fname,
	q.lname :: TEXT AS lname,
	q.idtype :: TEXT AS idtype 
FROM
	(
	SELECT
		b_site.b_visit_office_id AS HCODE,
		t_patient.patient_hn AS HN,
		SUBSTRING ( t_patient.patient_changwat FROM 1 FOR 2 ) AS CHANGWAT,
		SUBSTRING ( t_patient.patient_amphur FROM 3 FOR 2 ) AS AMPHUR,
	CASE
			
			WHEN text_to_timestamp ( t_patient.patient_birthday ) IS NOT NULL THEN
			to_char( text_to_timestamp ( t_patient.patient_birthday ), 'YYYYMMDD' ) ELSE'' 
		END AS DOB,
		t_patient.f_sex_id AS SEX,
		f_patient_marriage_status.r_rp1853_marriage_id AS MARRIAGE,
		b_map_rp1853_occupation.r_rp1853_occupation_id AS OCCUPA,
		b_map_rp1853_nation.r_rp1853_nation_id AS NATION,
	CASE
			
			WHEN t_health_family.patient_pid <> '' 
			AND LENGTH ( t_health_family.patient_pid ) = 13 THEN
				t_health_family.patient_pid 
				WHEN t_person_foreigner.passport_no <> '' THEN
				t_person_foreigner.passport_no 
				WHEN t_person_foreigner.f_person_foreigner_id = '23' 
				AND LENGTH ( t_person_foreigner.foreigner_no ) = 13 THEN
					t_person_foreigner.foreigner_no 
					WHEN (
						t_patient.f_patient_foreigner_id IN ( '2', '3', '4' ) 
						OR t_person_foreigner.f_person_foreigner_id IN ( '11', '12', '13', '14', '21', '22', '23' ) 
						) THEN
					CASE
							
							WHEN LENGTH ( t_health_family.t_health_family_id ) = 18 THEN
							'234' || SUBSTRING ( t_health_family.t_health_family_id, 9 ) 
							WHEN LENGTH ( t_health_family.t_health_family_id ) = 15 THEN
							'234' || SUBSTRING ( t_health_family.t_health_family_id, 4 ) ELSE'' 
						END ELSE'' 
					END AS PERSON_ID,
					substr(
					CASE
							
							WHEN f_patient_prefix IS NOT NULL THEN
							( t_patient.patient_firstname || ' ' || t_patient.patient_lastname || ',' || f_patient_prefix.patient_prefix_description ) ELSE ( t_patient.patient_firstname || ' ' || t_patient.patient_lastname ) 
						END,
						1,
						36 
					) AS NAMEPAT,
					f_patient_prefix.patient_prefix_description AS TITLE,
				CASE
						
						WHEN LENGTH ( t_patient.patient_firstname ) > 40 THEN
						SUBSTRING ( t_patient.patient_firstname, 1, 40 ) ELSE t_patient.patient_firstname 
					END AS FNAME,
				CASE
						
						WHEN LENGTH ( t_patient.patient_lastname ) > 40 THEN
						SUBSTRING ( t_patient.patient_lastname, 1, 40 ) ELSE t_patient.patient_lastname 
					END AS LNAME,
				CASE
						
						WHEN t_health_family.patient_pid IS NOT NULL 
						AND TRIM ( t_health_family.patient_pid ) <> '' THEN
							'1' 
							WHEN t_person_foreigner.passport_no IS NOT NULL 
							AND TRIM ( t_person_foreigner.passport_no ) <> '' THEN
								'2' 
								WHEN ( t_person_foreigner.foreigner_no IS NOT NULL AND TRIM ( t_person_foreigner.foreigner_no ) <> '' AND t_person_foreigner.f_person_foreigner_id = '23' ) 
								OR ( t_person_foreigner.foreigner_no IS NOT NULL AND TRIM ( t_person_foreigner.foreigner_no ) <> '' AND t_person_foreigner.foreigner_no_type = '4' ) THEN
									'4' 
									WHEN ( t_person_foreigner.foreigner_no IS NOT NULL AND TRIM ( t_person_foreigner.foreigner_no ) <> '' AND t_person_foreigner.foreigner_no_type = '3' ) 
									OR ( t_person_foreigner.foreigner_no IS NOT NULL AND TRIM ( t_person_foreigner.foreigner_no ) <> '' AND t_person_foreigner.f_person_foreigner_id <> '23' ) THEN
										'3' ELSE'4' 
										END AS IDTYPE,
									rpad(
										substr( t_visit.visit_begin_visit_time, 1, 4 ) :: INT - 543 || REPLACE (
											REPLACE ( REPLACE ( substr( t_visit.visit_begin_visit_time, 5, 6 ), '-', '' ), ',', '' ),
											':',
											'' 
										),
										8,
										'0' 
									) AS visit_datetime,
									t_visit.f_visit_type_id AS visit_type,
									r_rp1853_instype.maininscl AS main_inscl,
									(
										( CAST ( SUBSTRING ( t_visit.visit_begin_visit_time, 1, 4 ) AS NUMERIC ) - 543 ) :: TEXT || SUBSTRING ( t_visit.visit_begin_visit_time, 5, 6 ) 
									) :: DATE AS data_date,
									t_visit.visit_vn AS vn_an 
								FROM
									t_visit
									left JOIN t_billing ON t_billing.t_visit_id = t_visit.t_visit_id 
					--				AND t_billing.billing_active = '1' --	AND t_billing.billing_payer_share <> 0
									INNER JOIN t_patient ON t_visit.t_patient_id = t_patient.t_patient_id
									INNER JOIN t_health_family ON t_patient.t_health_family_id = t_health_family.t_health_family_id
									LEFT JOIN f_patient_prefix ON f_patient_prefix.f_patient_prefix_id = t_patient.f_patient_prefix_id
									INNER JOIN f_patient_occupation ON t_patient.f_patient_occupation_id = f_patient_occupation.f_patient_occupation_id
									INNER JOIN b_map_rp1853_occupation ON f_patient_occupation.f_patient_occupation_id = b_map_rp1853_occupation.f_patient_occupation_id
									INNER JOIN f_patient_marriage_status ON t_patient.f_patient_marriage_status_id = f_patient_marriage_status.f_patient_marriage_status_id
									LEFT JOIN f_patient_nation ON t_patient.f_patient_nation_id = f_patient_nation.f_patient_nation_id
									INNER JOIN b_map_rp1853_nation ON f_patient_nation.f_patient_nation_id = b_map_rp1853_nation.f_patient_nation_id
									INNER JOIN t_visit_payment ON t_visit_payment.t_visit_id = t_visit.t_visit_id 
								--	AND t_visit_payment.visit_payment_active = '1' 
									--AND t_visit_payment.visit_payment_priority = '0'
									INNER JOIN b_contract_plans ON t_visit_payment.b_contract_plans_id = b_contract_plans.b_contract_plans_id
									INNER JOIN b_map_rp1853_instype ON b_contract_plans.b_contract_plans_id = b_map_rp1853_instype.b_contract_plans_id
									LEFT JOIN r_rp1853_instype ON b_map_rp1853_instype.r_rp1853_instype_id = r_rp1853_instype.ID --	AND regexp_like ( r_rp1853_instype.maininscl, UPPER ( 'ucs|ofc|sss|lgo|ssi|nhs' ) )
									LEFT JOIN t_person_foreigner ON t_health_family.t_health_family_id = t_person_foreigner.t_person_id
									CROSS JOIN b_site 
								WHERE
									t_visit.f_visit_status_id <> '4' 
									AND t_visit.f_visit_type_id <> 'S' 
									AND LENGTH ( t_visit.visit_staff_doctor_discharge_date_time ) > 10 
									AND t_visit.visit_vn =':seq'
									AND LENGTH(t_visit.visit_vn) > 1
								GROUP BY
									hcode,
									t_patient.patient_hn,
									changwat,
									amphur,
									dob,
									sex,
									marriage,
									occupa,
									nation,
									person_id,
									namepat,
									title,
									fname,
									lname,
									idtype,
									data_date,
									visit_datetime,
									visit_type,
									main_inscl,
								vn_an 
	) AS q