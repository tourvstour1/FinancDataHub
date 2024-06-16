SELECT
	q.hn :: TEXT AS hn,
	q.dateopd :: TEXT AS dateopd,
	q.clinic :: TEXT AS clinic,
	q.refer :: TEXT AS refer,
	q.refertype :: TEXT AS refertype,
	q.vs_seq :: TEXT AS seq,
	q.referdate :: TEXT AS referdate 
FROM
	(
	SELECT
		t_patient.patient_hn AS HN,
	CASE
			
			WHEN text_to_timestamp ( t_visit.visit_begin_visit_time ) IS NOT NULL THEN
			to_char( text_to_timestamp ( t_visit.visit_begin_visit_time ), 'YYYYMMDD' ) ELSE'' 
		END AS DATEOPD,
		t_diag_icd10.clinic AS CLINIC,
		t_visit_refer_in_out.visit_refer_in_out_refer_hospital AS REFER,
	CASE
			
			WHEN t_visit_refer_in_out.f_visit_refer_type_id = '1' THEN
			'2' ELSE'1' 
		END AS REFERTYPE,
		t_visit.visit_vn AS VS_SEQ,
	CASE
			
			WHEN text_to_timestamp ( t_visit_refer_in_out.refer_date ) IS NOT NULL THEN
			to_char( text_to_timestamp ( t_visit_refer_in_out.refer_date ), 'YYYYMMDD' ) ELSE'' 
		END AS referdate 
	FROM
		t_visit_refer_in_out
		INNER JOIN (
		SELECT
			t_visit_refer_in_out.t_visit_id,
			t_visit_refer_in_out.f_visit_refer_type_id,
			MAX ( t_visit_refer_in_out.visit_refer_in_out_number ) AS visit_refer_in_out_number,
			MAX ( t_visit_refer_in_out.record_date_time ) AS record_date_time 
		FROM
			t_visit_refer_in_out
			INNER JOIN t_visit ON t_visit.t_visit_id = t_visit_refer_in_out.t_visit_id 
		WHERE
			t_visit_refer_in_out.visit_refer_in_out_active = '1' 
			AND t_visit.f_visit_status_id <> '4' 
			AND LENGTH ( t_visit.visit_staff_doctor_discharge_date_time ) > 10 
			AND SUBSTRING ( t_visit.visit_staff_doctor_discharge_date_time, 1, 10 ) <> '' 
			AND SUBSTRING ( t_visit.visit_staff_doctor_discharge_date_time, 1, 10 ) >= ':startDate' 
			AND SUBSTRING ( t_visit.visit_staff_doctor_discharge_date_time, 1, 10 ) <= ':endDate' 
			AND t_visit.f_visit_type_id = '0' 
		GROUP BY
			t_visit_refer_in_out.t_visit_id,
			t_visit_refer_in_out.f_visit_refer_type_id 
		) AS max_visit_refer_in_out ON t_visit_refer_in_out.t_visit_id = max_visit_refer_in_out.t_visit_id 
		AND t_visit_refer_in_out.f_visit_refer_type_id = max_visit_refer_in_out.f_visit_refer_type_id 
		AND t_visit_refer_in_out.visit_refer_in_out_number = max_visit_refer_in_out.visit_refer_in_out_number 
		AND t_visit_refer_in_out.record_date_time = max_visit_refer_in_out.record_date_time
		INNER JOIN t_visit ON t_visit.t_visit_id = t_visit_refer_in_out.t_visit_id
		INNER JOIN t_billing ON t_billing.t_visit_id = t_visit.t_visit_id 
		AND t_billing.billing_active = '1' 
		AND t_billing.billing_payer_share <> 0
		INNER JOIN t_patient ON t_patient.t_patient_id = t_visit.t_patient_id
		INNER JOIN t_visit_payment ON t_visit_payment.t_visit_id = t_visit.t_visit_id 
		AND t_visit_payment.visit_payment_active = '1' 
		AND t_visit_payment.visit_payment_priority = '0'
		INNER JOIN b_contract_plans ON t_visit_payment.b_contract_plans_id = b_contract_plans.b_contract_plans_id
		INNER JOIN b_map_rp1853_instype ON b_contract_plans.b_contract_plans_id = b_map_rp1853_instype.b_contract_plans_id
		INNER JOIN r_rp1853_instype ON b_map_rp1853_instype.r_rp1853_instype_id = r_rp1853_instype.ID 
		AND regexp_like ( r_rp1853_instype.maininscl, UPPER ( 'ucs|ofc|sss|lgo|ssi|nhs' ) )
		LEFT JOIN (
		SELECT
			t_diag_icd10.t_diag_icd10_id,
			t_diag_icd10.diag_icd10_vn,
			t_diag_icd10.clinic,
			t_diag_icd10.date_dx,
			t_diag_icd10.seq 
		FROM
			(
			SELECT
				t_diag_icd10.t_diag_icd10_id,
				t_diag_icd10.diag_icd10_vn,
			CASE
					
					WHEN b_report_12files_map_clinic.b_report_12files_std_clinic_id IN ( '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11' ) THEN
					( t_visit.f_visit_type_id || b_report_12files_map_clinic.b_report_12files_std_clinic_id || '00' ) 
					WHEN b_report_12files_map_clinic.b_report_12files_std_clinic_id IS NULL THEN
					'' ELSE ( t_visit.f_visit_type_id || '9900' ) 
				END AS CLINIC,
				( CASE WHEN t_diag_icd10.diag_icd10_record_date_time <> '' OR t_diag_icd10.diag_icd10_record_date_time IS NOT NULL THEN t_diag_icd10.diag_icd10_record_date_time ELSE'' END ) AS date_dx,
				ROW_NUMBER ( ) OVER ( PARTITION BY t_diag_icd10.diag_icd10_vn ORDER BY t_diag_icd10.diag_icd10_record_date_time ASC ) AS seq 
			FROM
				t_diag_icd10
				INNER JOIN t_visit ON t_diag_icd10.diag_icd10_vn = t_visit.t_visit_id
				LEFT JOIN b_report_12files_map_clinic ON b_report_12files_map_clinic.b_visit_clinic_id = t_diag_icd10.b_visit_clinic_id 
			WHERE
				t_diag_icd10.f_diag_icd10_type_id = '1' 
				AND t_diag_icd10.diag_icd10_active = '1' 
				AND t_visit.f_visit_status_id <> '4' 
				AND LENGTH ( t_visit.visit_staff_doctor_discharge_date_time ) > 10 
				AND SUBSTRING ( t_visit.visit_staff_doctor_discharge_date_time, 1, 10 ) <> '' 
				AND SUBSTRING ( t_visit.visit_staff_doctor_discharge_date_time, 1, 10 ) >= ':startDate' 
				AND SUBSTRING ( t_visit.visit_staff_doctor_discharge_date_time, 1, 10 ) <= ':endDate' 
				AND t_visit.f_visit_type_id IN ( '0', '1' ) 
			) AS t_diag_icd10 
		WHERE
			t_diag_icd10.seq = 1 
		) AS t_diag_icd10 ON t_diag_icd10.diag_icd10_vn = t_visit.t_visit_id 
	WHERE
		t_visit.f_visit_status_id <> '4' 
		AND LENGTH ( t_visit.visit_staff_doctor_discharge_date_time ) > 10 
		AND SUBSTRING ( t_visit.visit_staff_doctor_discharge_date_time, 1, 10 ) <> '' 
		AND SUBSTRING ( t_visit.visit_staff_doctor_discharge_date_time, 1, 10 ) >= ':startDate' 
		AND SUBSTRING ( t_visit.visit_staff_doctor_discharge_date_time, 1, 10 ) <= ':endDate' 
		AND t_visit.f_visit_type_id = '0' 
	GROUP BY
		t_patient.patient_hn,
		referdate,
		DATEOPD,
		t_diag_icd10.clinic,
		REFER,
		REFERTYPE,
		VS_SEQ,
		t_visit.visit_vn,
		t_visit.f_visit_type_id 
	) AS q 
ORDER BY
	hn ASC