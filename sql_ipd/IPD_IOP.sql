SELECT
	q.an :: TEXT AS an,
	q.oper :: TEXT AS oper,
	q.optype :: TEXT AS optype,
	q.dropid :: TEXT AS dropid,
	q.datein :: TEXT AS datein,
	q.timein :: TEXT AS timein,
	q.dateout :: TEXT AS dateout,
	q.timeout :: TEXT AS timeout 
FROM
	(
	SELECT
		t_visit.visit_vn AS AN,
		REPLACE ( diag_icd9_icd9_number, '.', '' ) AS OPER,
		t_diag_icd9.f_diagnosis_operation_type_id AS OPTYPE,
		b_employee.employee_number AS DROPID,
	CASE
			
			WHEN text_to_timestamp ( t_diag_icd9.diag_icd9_start_time ) IS NOT NULL THEN
			to_char( text_to_timestamp ( t_diag_icd9.diag_icd9_start_time ), 'YYYYMMDD' ) ELSE'' 
		END AS DATEIN,
	CASE
			
			WHEN text_to_timestamp ( t_diag_icd9.diag_icd9_start_time ) IS NOT NULL THEN
			to_char( text_to_timestamp ( t_diag_icd9.diag_icd9_start_time ), 'HH24MI' ) ELSE'' 
		END AS TIMEIN,
	CASE
			
			WHEN text_to_timestamp ( t_diag_icd9.diag_icd9_finish_time ) IS NOT NULL THEN
			to_char( text_to_timestamp ( t_diag_icd9.diag_icd9_finish_time ), 'YYYYMMDD' ) ELSE'' 
		END AS DATEOUT,
	CASE
			
			WHEN text_to_timestamp ( t_diag_icd9.diag_icd9_finish_time ) IS NOT NULL THEN
			to_char( text_to_timestamp ( t_diag_icd9.diag_icd9_finish_time ), 'HH24MI' ) ELSE'' 
		END AS TIMEOUT,
		t_visit.f_visit_type_id AS visit_type,
		r_rp1853_instype.maininscl AS main_inscl,
		(
			( CAST ( SUBSTRING ( t_visit.visit_begin_visit_time, 1, 4 ) AS NUMERIC ) - 543 ) :: TEXT || SUBSTRING ( t_visit.visit_begin_visit_time, 5, 6 ) 
		) :: DATE AS data_date 
	FROM
		t_diag_icd9
		INNER JOIN t_visit ON t_diag_icd9.diag_icd9_vn = t_visit.t_visit_id
		INNER JOIN t_billing ON t_billing.t_visit_id = t_visit.t_visit_id 
		AND t_billing.billing_active = '1' 
		--AND t_billing.billing_payer_share <> 0
		INNER JOIN t_visit_payment ON t_visit_payment.t_visit_id = t_visit.t_visit_id 
		AND t_visit_payment.visit_payment_active = '1' 
		AND t_visit_payment.visit_payment_priority = '0'
		INNER JOIN b_contract_plans ON t_visit_payment.b_contract_plans_id = b_contract_plans.b_contract_plans_id
		INNER JOIN b_map_rp1853_instype ON b_contract_plans.b_contract_plans_id = b_map_rp1853_instype.b_contract_plans_id
		LEFT JOIN r_rp1853_instype ON b_map_rp1853_instype.r_rp1853_instype_id = r_rp1853_instype.ID 
		--			and regexp_like(r_rp1853_instype.maininscl,upper('ucs|ofc|sss|lgo|ssi|nhs')) 
		LEFT JOIN b_employee ON t_diag_icd9.diag_icd9_staff_doctor = b_employee.b_employee_id 
	WHERE
		t_visit.f_visit_type_id = '1' 
		AND t_visit.f_visit_status_id <> '4' 
		AND t_diag_icd9.diag_icd9_active = '1' 
		AND LENGTH ( t_visit.visit_staff_doctor_discharge_date_time ) > 10 
AND t_visit.visit_vn=':an'
	GROUP BY
		t_visit.visit_vn,
		oper,
		optype,
		dropid,
		datein,
		timein,
		dateout,
		timeout,
		data_date,
		visit_type,
		main_inscl 
	) AS q 
ORDER BY
	an ASC