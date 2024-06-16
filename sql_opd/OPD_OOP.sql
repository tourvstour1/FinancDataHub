SELECT
	q.hn :: TEXT AS hn,
	q.dateopd :: TEXT AS dateopd,
	q.clinic :: TEXT AS clinic,
	q.oper :: TEXT AS oper,
	q.dropid :: TEXT AS dropid,
	q.person_id :: TEXT AS person_id,
	q.vs_seq :: TEXT AS seq,
	q.servprice :: TEXT AS servprice 
FROM
	(
	SELECT
		t_patient.patient_hn AS HN,
	CASE
			
			WHEN text_to_timestamp ( t_visit.visit_begin_visit_time ) IS NOT NULL THEN
			to_char( text_to_timestamp ( t_visit.visit_begin_visit_time ), 'YYYYMMDD' ) ELSE'' 
		END AS DATEOPD,
	CASE
			
			WHEN b_report_12files_map_clinic.b_report_12files_std_clinic_id IN ( '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11' ) THEN
			( t_visit.f_visit_type_id || b_report_12files_map_clinic.b_report_12files_std_clinic_id || '00' ) 
			WHEN b_report_12files_map_clinic.b_report_12files_std_clinic_id IS NULL THEN
			'' ELSE ( t_visit.f_visit_type_id || '9900' ) 
		END AS CLINIC,
		REPLACE ( diag_icd9_icd9_number, '.', '' ) AS OPER,
	CASE
			
			WHEN b_employee.employee_number <> '' 
			OR b_employee.employee_number IS NOT NULL THEN
				b_employee.employee_number ELSE'' 
				END AS DROPID,
			t_patient.patient_pid AS PERSON_ID,
			t_visit.visit_vn AS VS_SEQ,
			'' AS servprice,
			t_visit.f_visit_type_id AS visit_type,
			r_rp1853_instype.maininscl AS main_inscl,
			(
				( CAST ( SUBSTRING ( t_visit.visit_begin_visit_time, 1, 4 ) AS NUMERIC ) - 543 ) :: TEXT || SUBSTRING ( t_visit.visit_begin_visit_time, 5, 6 ) 
			) :: DATE AS data_date 
		FROM
			t_diag_icd9
			INNER JOIN t_visit ON ( t_diag_icd9.diag_icd9_vn = t_visit.t_visit_id )
			INNER JOIN t_billing ON t_billing.t_visit_id = t_visit.t_visit_id 
			AND t_billing.billing_active = '1' 
			--AND t_billing.billing_payer_share <> 0
			INNER JOIN t_patient ON ( t_patient.t_patient_id = t_visit.t_patient_id )
			INNER JOIN t_visit_payment ON t_visit_payment.t_visit_id = t_visit.t_visit_id 
			AND t_visit_payment.visit_payment_active = '1' 
			AND t_visit_payment.visit_payment_priority = '0'
			INNER JOIN b_contract_plans ON t_visit_payment.b_contract_plans_id = b_contract_plans.b_contract_plans_id
			INNER JOIN b_map_rp1853_instype ON b_contract_plans.b_contract_plans_id = b_map_rp1853_instype.b_contract_plans_id
			LEFT JOIN r_rp1853_instype ON b_map_rp1853_instype.r_rp1853_instype_id = r_rp1853_instype.ID 
					--	and regexp_like(r_rp1853_instype.maininscl,upper('ucs|ofc|sss|lgo|ssi|nhs')) 
			LEFT JOIN b_employee ON ( t_diag_icd9.diag_icd9_staff_doctor = b_employee.b_employee_id )
			LEFT JOIN b_report_12files_map_clinic ON ( t_diag_icd9.b_visit_clinic_id = b_report_12files_map_clinic.b_visit_clinic_id ) 
		WHERE
			t_visit.f_visit_status_id <> '4' 
			AND t_visit.f_visit_type_id = '0' 
			AND t_diag_icd9.diag_icd9_active = '1' 
			AND LENGTH ( t_visit.visit_staff_doctor_discharge_date_time ) > 10 
				AND t_visit.visit_vn =':seq'
		GROUP BY
			t_patient.patient_hn,
			dateopd,
			clinic,
			oper,
			dropid,
			person_id,
			VS_SEQ,
			t_visit.f_visit_type_id,
			main_inscl,
			data_date 
		) AS q 
ORDER BY
	hn ASC