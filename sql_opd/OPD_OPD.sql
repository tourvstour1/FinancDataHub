SELECT
	q.hn :: TEXT AS hn,
	(ARRAY_AGG(q.clinic :: TEXT))[1] AS clinic,
	q.dateopd :: TEXT AS dateopd,
	q.timeopd :: TEXT AS timeopd,
	q.vs_seq :: TEXT AS seq,
	q.uuc :: TEXT AS uuc,
	q.detail :: TEXT AS detail,
	( ARRAY_AGG ( q.btemp ORDER BY q.btemp ASC ) ) [ 1 ] :: TEXT AS btemp,
	( ARRAY_AGG ( q.sbp ORDER BY q.sbp ASC ) ) [ 1 ] :: TEXT AS sbp,
	( ARRAY_AGG ( q.dbp ORDER BY q.dbp ASC ) ) [ 1 ] :: TEXT AS dbp,
	( ARRAY_AGG ( q.pr ORDER BY q.pr ASC ) ) [ 1 ] :: TEXT AS pr,
	( ARRAY_AGG ( q.rr ORDER BY q.rr ASC ) ) [ 1 ] :: TEXT AS rr,
	q.optype :: TEXT AS optype,
	q.typein :: TEXT AS typein,
	q.typeout :: TEXT AS typeout 
FROM
	(
	SELECT
		t_patient.patient_hn AS HN,
	CASE
			
			WHEN b_report_12files_map_clinic.b_report_12files_std_clinic_id IN ( '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11' ) THEN
			( t_visit.f_visit_type_id || b_report_12files_map_clinic.b_report_12files_std_clinic_id || '00' ) 
			WHEN b_report_12files_map_clinic.b_report_12files_std_clinic_id IS NULL THEN
			'' ELSE ( t_visit.f_visit_type_id || '9900' ) 
		END AS CLINIC,
	CASE
			
			WHEN text_to_timestamp ( t_visit.visit_begin_visit_time ) IS NOT NULL THEN
			to_char( text_to_timestamp ( t_visit.visit_begin_visit_time ), 'YYYYMMDD' ) ELSE'' 
		END AS DATEOPD,
	CASE
			
			WHEN text_to_timestamp ( t_visit.visit_begin_visit_time ) IS NOT NULL THEN
			to_char( text_to_timestamp ( t_visit.visit_begin_visit_time ), 'HH24MI' ) ELSE'' 
		END AS TIMEOPD,
	CASE
			
			WHEN t_visit.f_visit_type_id = '0' THEN
			t_visit.visit_vn ELSE'' 
		END AS VS_SEQ,
		'1' AS UUC,
		'' AS detail,
	CASE
			
			WHEN t_visit_vital_sign.visit_vital_sign_temperature IS NOT NULL 
			AND t_visit_vital_sign.visit_vital_sign_temperature <> '' THEN
				t_visit_vital_sign.visit_vital_sign_temperature :: DECIMAL ( 8, 1 ) :: TEXT ELSE'' 
				END AS btemp,
		CASE
				
				WHEN POSITION ( '/' IN t_visit_vital_sign.visit_vital_sign_blood_presure ) > 0 THEN
				substr( t_visit_vital_sign.visit_vital_sign_blood_presure, 1, POSITION ( '/' IN t_visit_vital_sign.visit_vital_sign_blood_presure ) - 1 ) ELSE'' 
			END AS sbp,
		CASE
				
				WHEN POSITION ( '/' IN t_visit_vital_sign.visit_vital_sign_blood_presure ) > 0 THEN
				substr( t_visit_vital_sign.visit_vital_sign_blood_presure, POSITION ( '/' IN t_visit_vital_sign.visit_vital_sign_blood_presure ) + 1 ) ELSE'' 
			END AS dbp,
		CASE
				
				WHEN t_visit_vital_sign.visit_vital_sign_heart_rate IS NOT NULL THEN
				t_visit_vital_sign.visit_vital_sign_heart_rate ELSE'' 
			END AS pr,
		CASE
				
				WHEN t_visit_vital_sign.visit_vital_sign_respiratory_rate IS NOT NULL THEN
				t_visit_vital_sign.visit_vital_sign_respiratory_rate ELSE'' 
			END AS rr,
			'' AS optype,
		CASE
				
				WHEN LOWER ( t_order.order_common_name ) LIKE'%telemed%' THEN
				'5' ELSE t_visit.f_visit_service_type_id 
			END AS typein,
		CASE
				
				WHEN t_visit.f_visit_opd_discharge_status_id IN ( '51', '53' ) 
				OR t_visit.f_visit_ipd_discharge_type_id IN ( '1', '5' ) THEN
					'1' 
					WHEN t_visit.f_visit_opd_discharge_status_id IN ( '54' ) 
					OR t_visit.f_visit_ipd_discharge_type_id IN ( '4' ) THEN
						'3' 
						WHEN t_visit.f_visit_opd_discharge_status_id IN ( '52', '56' ) 
						OR t_visit.f_visit_ipd_discharge_type_id IN ( '8', '9' ) THEN
							'4' 
							WHEN t_visit.f_visit_opd_discharge_status_id IN ( '55' ) THEN
							'5' 
							WHEN t_visit.f_visit_ipd_discharge_type_id IN ( '2' ) THEN
							'7' 
							WHEN t_visit.f_visit_ipd_discharge_type_id IN ( '3' ) THEN
							'8' 
							WHEN t_visit.f_visit_opd_discharge_status_id IN ( '9' ) 
							OR t_visit.f_visit_ipd_discharge_type_id IN ( '6' ) THEN
								'9' 
								END AS typeout,
							t_visit.f_visit_type_id AS visit_type 
						FROM
							t_visit
							LEFT JOIN t_visit_vital_sign ON t_visit_vital_sign.t_visit_id = t_visit.t_visit_id 
							AND t_visit_vital_sign.visit_vital_sign_active = '1' 
					
							INNER JOIN t_billing ON t_billing.t_visit_id = t_visit.t_visit_id 
							AND t_billing.billing_active = '1' 
							--AND t_billing.billing_payer_share <> 0
							INNER JOIN t_patient ON t_patient.t_patient_id = t_visit.t_patient_id
							INNER JOIN t_visit_payment ON t_visit_payment.t_visit_id = t_visit.t_visit_id 
							AND t_visit_payment.visit_payment_active = '1' 
							AND t_visit_payment.visit_payment_priority = '0'
							INNER JOIN b_contract_plans ON t_visit_payment.b_contract_plans_id = b_contract_plans.b_contract_plans_id
							INNER JOIN b_map_rp1853_instype ON b_contract_plans.b_contract_plans_id = b_map_rp1853_instype.b_contract_plans_id
							LEFT JOIN r_rp1853_instype ON b_map_rp1853_instype.r_rp1853_instype_id = r_rp1853_instype.ID 
							--	AND regexp_like ( r_rp1853_instype.maininscl, UPPER ( 'ucs|ofc|sss|lgo|ssi|nhs' ) )
							LEFT JOIN t_diag_icd10 ON t_diag_icd10.diag_icd10_vn = t_visit.t_visit_id 
							AND t_diag_icd10.f_diag_icd10_type_id = '1'
							INNER JOIN b_report_12files_map_clinic ON t_diag_icd10.b_visit_clinic_id = b_report_12files_map_clinic.b_visit_clinic_id
							LEFT JOIN t_order ON t_order.t_visit_id = t_visit.t_visit_id 
							AND LOWER ( t_order.order_common_name ) LIKE'%telemed%' 
						WHERE
							t_visit.f_visit_status_id <> '4' 
							AND t_diag_icd10.diag_icd10_active = '1' 
							AND LENGTH ( t_visit.visit_staff_doctor_discharge_date_time ) > 10 
								AND t_visit.visit_vn =':seq'
							AND t_visit.f_visit_type_id = '0' 
						GROUP BY
							t_patient.patient_hn,
							clinic,
							dateopd,
							timeopd,
							t_visit.visit_vn,
							uuc,
							t_visit.f_visit_type_id,
							typeout,
							btemp,
							sbp,
							dbp,
							pr,
							rr,
							typein 
						) AS q 
						
					GROUP BY
						seq,
						hn,
						dateopd,
						timeopd,
						uuc,
						detail,
						optype,
						typein,
						typeout
	