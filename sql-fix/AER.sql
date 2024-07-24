SELECT
	q.hn :: TEXT AS hn,
	q.VS_AN :: TEXT AS an,
	q.dateopd :: TEXT AS dateopd,
	q.authae :: TEXT AS authae,
	q.aedate :: TEXT AS aedate,
	q.aetime :: TEXT AS aetime,
	q.aetype :: TEXT AS aetype,
	q.refer_no :: TEXT AS refer_no,
	q.refmaini :: TEXT AS refmaini,
	q.ireftype :: TEXT AS ireftype,
	q.refmaino :: TEXT AS refmaino,
	q.oreftype :: TEXT AS oreftype,
	q.ucae :: TEXT AS ucae,
	q.emtype :: TEXT AS emtype,
	q.VS_SEQ :: TEXT AS seq,
	q.aestatus :: TEXT AS aestatus,
	q.dalert :: TEXT AS dalert,
	q.talert :: TEXT AS talert
FROM
	(
	SELECT
		t_visit.visit_hn AS hn,
	CASE
			
			WHEN t_visit.f_visit_type_id = '1' THEN
			visit_vn ELSE'' 
		END AS VS_AN,
	CASE
			
			WHEN text_to_timestamp ( t_visit.visit_begin_visit_time ) IS NOT NULL THEN
			to_char( text_to_timestamp ( t_visit.visit_begin_visit_time ), 'YYYYMMDD' ) ELSE'' 
		END AS dateopd,
		t_accident.accident_claim_code AS authae,
	CASE
			
			WHEN text_to_timestamp ( t_accident.accident_date ) IS NOT NULL THEN
			to_char( text_to_timestamp ( t_accident.accident_date ), 'YYYYMMDD' ) ELSE'' 
		END AS aedate,
		substr( t_accident.accident_time, 1, 2 ) || substr( t_accident.accident_time, 4, 2 ) AS aetime,
		t_accident.accident_accident_type AS aetype,
	CASE
			
			WHEN t_visit_refer_in_out.f_visit_refer_type_id = '0' --refer_in
		THEN
				t_visit_refer_in_out.visit_refer_in_out_number 
				WHEN t_visit_refer_in_out.f_visit_refer_type_id = '1' --refer_out
			THEN
					t_visit_refer_in_out.visit_refer_in_out_number 
					END AS REFER_NO,
			CASE
					
					WHEN t_visit_refer_in_out.f_visit_refer_type_id = '0' --refer_in
				THEN
						t_visit_refer_in_out.visit_refer_in_out_refer_hospital ELSE'' 
						END AS refmaini,
				CASE
						
						WHEN t_visit_refer_in_out.f_visit_refer_type_id = '0' --refer_in
					THEN
						CASE
								
								WHEN LENGTH ( t_visit_refer_in_out.visit_refer_in_out_observe ) = 1 THEN
								t_visit_refer_in_out.visit_refer_in_out_observe ELSE'0' 
							END ||
					CASE
							
							WHEN LENGTH ( t_visit_refer_in_out.visit_refer_in_out_treatment ) = 1 THEN
							t_visit_refer_in_out.visit_refer_in_out_treatment ELSE'0' 
							END ||
				CASE
						
						WHEN LENGTH ( t_visit_refer_in_out.visit_refer_in_out_lab ) = 1 THEN
						t_visit_refer_in_out.visit_refer_in_out_lab ELSE'0' 
						END || '0' ELSE'' 
	END AS ireftype,
CASE
		
		WHEN t_visit_refer_in_out.f_visit_refer_type_id = '1' --refer_out
	THEN
			t_visit_refer_in_out.visit_refer_in_out_refer_hospital ELSE'' 
			END AS refmaino,
	CASE
			
			WHEN t_visit_refer_in_out.f_visit_refer_type_id = '1' --refer_out
		THEN
				(
				CASE
						
						WHEN t_visit.f_refer_cause_id = '1' THEN
						'1000' 
						WHEN (
							t_visit.f_refer_cause_id = '2' 
							OR t_visit.f_refer_cause_id = '3' 
							OR t_visit.f_refer_cause_id = '4' 
							OR t_visit.f_refer_cause_id = '5' 
							OR t_visit.f_refer_cause_id = '6' 
							) THEN
							'0100' 
							WHEN t_visit.f_refer_cause_id = '7' THEN
							'0001' ELSE'0000' 
						END 
						) ELSE'' 
					END AS oreftype,
					t_accident.accident_occur_type AS ucae,
				CASE
						
						WHEN t_accident.accident_emergency_type = '' THEN
						'1' ELSE t_accident.accident_emergency_type 
					END AS emtype,
				CASE
						
						WHEN t_visit.f_visit_type_id = '0' THEN
						t_visit.visit_vn ELSE'' 
					END AS VS_SEQ,
					'' AS AESTATUS,
					'' AS DALERT,
					'' AS TALERT,
					t_visit_refer_in_out.f_visit_refer_type_id AS refer_type,
					t_visit.f_visit_type_id AS visit_type,
					r_rp1853_instype.maininscl AS main_inscl,
					(
						( CAST ( SUBSTRING ( t_visit.visit_begin_visit_time, 1, 4 ) AS NUMERIC ) - 543 ) :: TEXT || SUBSTRING ( t_visit.visit_begin_visit_time, 5, 6 ) 
					) :: DATE AS data_date,
					t_visit.visit_vn AS vn_an 
				FROM
					t_accident
					INNER JOIN t_visit ON t_accident.t_visit_id = t_visit.t_visit_id
					INNER JOIN t_billing ON t_billing.t_visit_id = t_visit.t_visit_id 
					AND t_billing.billing_active = '1' 
					AND t_billing.billing_payer_share <> 0
					INNER JOIN t_visit_refer_in_out ON t_visit_refer_in_out.t_visit_id = t_visit.t_visit_id 
					AND t_visit_refer_in_out.visit_refer_in_out_active = '1'
					INNER JOIN t_visit_payment ON t_visit_payment.t_visit_id = t_visit.t_visit_id 
					AND t_visit_payment.visit_payment_active = '1' 
					AND t_visit_payment.visit_payment_priority = '0'
					INNER JOIN b_contract_plans ON t_visit_payment.b_contract_plans_id = b_contract_plans.b_contract_plans_id
					INNER JOIN b_map_rp1853_instype ON b_contract_plans.b_contract_plans_id = b_map_rp1853_instype.b_contract_plans_id
					INNER JOIN r_rp1853_instype ON b_map_rp1853_instype.r_rp1853_instype_id = r_rp1853_instype.ID 
					and regexp_like(r_rp1853_instype.maininscl,upper('ucs|ofc|sss|lgo|ssi|nhs')) 
				WHERE
					t_visit.f_visit_status_id <> '4' 
					AND t_accident.accident_active = '1' 
					AND LENGTH ( t_visit.visit_staff_doctor_discharge_date_time ) > 10 
					AND SUBSTRING ( t_visit.visit_staff_doctor_discharge_date_time, 1, 10 ) <> '' 
							AND SUBSTRING ( t_visit.visit_staff_doctor_discharge_date_time, 1, 10 ) >= ':startDate' 
		AND SUBSTRING ( t_visit.visit_staff_doctor_discharge_date_time, 1, 10 ) <= ':endDate' 
					AND t_visit.f_visit_type_id IN ( '0', '1' ) 
				GROUP BY
					t_visit.visit_hn,
					VS_AN,
					dateopd,
					authae,
					aedate,
					aetime,
					aetype,
					refer_no,
					refmaini,
					ireftype,
					refmaino,
					oreftype,
					ucae,
					emtype,
					VS_SEQ,
					aestatus,
					dalert,
					talert,
					refer_type,
					data_date,
					visit_type,
					main_inscl,
					vn_an 
				) AS q 
		ORDER BY
	q.HN ASC