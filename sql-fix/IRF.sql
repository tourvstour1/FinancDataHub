SELECT
	q.an :: TEXT AS an,
	q.refer :: TEXT AS refer,
	q.refertype :: TEXT AS refertype 
FROM
	(
	SELECT
		t_visit.visit_vn AS AN,
		visit_refer_in_out_refer_hospital AS REFER,
	CASE
			
			WHEN f_visit_refer_type_id = '1' THEN
			'2' ELSE'1' 
		END AS REFERTYPE,
		t_visit.f_visit_type_id AS visit_type,
		r_rp1853_instype.maininscl AS main_inscl,
		(
			( CAST ( SUBSTRING ( t_visit.visit_begin_visit_time, 1, 4 ) AS NUMERIC ) - 543 ) :: TEXT || SUBSTRING ( t_visit.visit_begin_visit_time, 5, 6 ) 
		) :: DATE AS data_date 
	FROM
		(
		SELECT
			t_visit_refer_in_out.* 
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
				AND t_visit.f_visit_type_id = '1' 
			GROUP BY
				t_visit_refer_in_out.t_visit_id,
				t_visit_refer_in_out.f_visit_refer_type_id 
			) AS max_visit_refer_in_out ON t_visit_refer_in_out.t_visit_id = max_visit_refer_in_out.t_visit_id 
			AND t_visit_refer_in_out.f_visit_refer_type_id = max_visit_refer_in_out.f_visit_refer_type_id 
			AND t_visit_refer_in_out.visit_refer_in_out_number = max_visit_refer_in_out.visit_refer_in_out_number 
			AND t_visit_refer_in_out.record_date_time = max_visit_refer_in_out.record_date_time 
		) AS t_visit_refer_in_out
		INNER JOIN t_visit ON t_visit.t_visit_id = t_visit_refer_in_out.t_visit_id
		INNER JOIN t_billing ON t_billing.t_visit_id = t_visit.t_visit_id 
		AND t_billing.billing_active = '1' 
		AND t_billing.billing_payer_share <> 0
		INNER JOIN t_visit_payment ON t_visit_payment.t_visit_id = t_visit.t_visit_id 
		AND t_visit_payment.visit_payment_active = '1' 
		AND t_visit_payment.visit_payment_priority = '0'
		INNER JOIN b_contract_plans ON t_visit_payment.b_contract_plans_id = b_contract_plans.b_contract_plans_id
		INNER JOIN b_map_rp1853_instype ON b_contract_plans.b_contract_plans_id = b_map_rp1853_instype.b_contract_plans_id
		INNER JOIN r_rp1853_instype ON b_map_rp1853_instype.r_rp1853_instype_id = r_rp1853_instype.ID 
					and regexp_like(r_rp1853_instype.maininscl,upper('ucs|ofc|sss|lgo|ssi|nhs')) 
	WHERE
		t_visit.f_visit_status_id <> '4' 
		AND visit_refer_in_out_active = '1' 
		AND t_visit.f_visit_type_id = '1' 
		AND LENGTH ( t_visit.visit_staff_doctor_discharge_date_time ) > 10 
		AND SUBSTRING ( t_visit.visit_staff_doctor_discharge_date_time, 1, 10 ) <> '' 
		AND SUBSTRING ( t_visit.visit_staff_doctor_discharge_date_time, 1, 10 ) >= ':startDate' 
		AND SUBSTRING ( t_visit.visit_staff_doctor_discharge_date_time, 1, 10 ) <= ':endDate' 
	GROUP BY
		t_visit.visit_vn,
		refer,
		refertype,
		data_date,
		visit_type,
		main_inscl 
	) AS q 
ORDER BY
	an ASC