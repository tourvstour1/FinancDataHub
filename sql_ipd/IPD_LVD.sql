SELECT
	q.seqlvd :: TEXT AS seqlvd,
	q.VS_AN :: TEXT AS an,
	q.dateout :: TEXT AS dateout,
	q.timeout :: TEXT AS timeout,
	q.datein :: TEXT AS datein,
	q.timein :: TEXT AS timein,
	q.qtyday :: TEXT AS qtyday,
	q.data_date :: DATE AS data_date,
	q.visit_type :: TEXT AS visit_type,
	q.main_inscl :: TEXT AS main_inscl 
FROM
	(
	SELECT
		t_admit_leave_day.leave_seq :: TEXT AS seqlvd,
		t_visit.visit_vn AS VS_AN,
	CASE
			
			WHEN text_to_timestamp ( t_admit_leave_day.date_out ) IS NOT NULL THEN
			to_char( text_to_timestamp ( t_admit_leave_day.date_out ), 'YYYYMMDD' ) ELSE'' 
		END AS dateout,
	CASE
			
			WHEN ( LENGTH ( t_admit_leave_day.time_out ) >= 5 ) THEN
			REPLACE ( REPLACE ( SUBSTRING ( t_admit_leave_day.time_out FROM 1 FOR 5 ), ':', '' ), '.', '' ) ELSE'' 
		END AS timeout,
	CASE
			
			WHEN text_to_timestamp ( t_admit_leave_day.date_in ) IS NOT NULL THEN
			to_char( text_to_timestamp ( t_admit_leave_day.date_in ), 'YYYYMMDD' ) ELSE'' 
		END AS datein,
	CASE
			
			WHEN ( LENGTH ( t_admit_leave_day.time_in ) >= 5 ) THEN
			REPLACE ( REPLACE ( SUBSTRING ( t_admit_leave_day.time_in FROM 1 FOR 5 ), ':', '' ), '.', '' ) ELSE'' 
		END AS timein,
		date_part( 'days', text_to_timestamp ( t_admit_leave_day.date_in ) - text_to_timestamp ( t_admit_leave_day.date_out ) ) :: TEXT AS qtyday,
		t_visit.f_visit_type_id AS visit_type,
		r_rp1853_instype.maininscl AS main_inscl,
		(
			( CAST ( SUBSTRING ( t_visit.visit_begin_visit_time, 1, 4 ) AS NUMERIC ) - 543 ) :: TEXT || SUBSTRING ( t_visit.visit_begin_visit_time, 5, 6 ) 
		) :: DATE AS data_date 
	FROM
		t_visit
		INNER JOIN t_billing ON t_billing.t_visit_id = t_visit.t_visit_id 
		AND t_billing.billing_active = '1' 
	--	AND t_billing.billing_payer_share <> 0
		INNER JOIN t_admit_leave_day ON t_visit.t_visit_id = t_admit_leave_day.t_visit_id
		INNER JOIN t_visit_payment ON t_visit_payment.t_visit_id = t_visit.t_visit_id 
		AND t_visit_payment.visit_payment_active = '1' 
		AND t_visit_payment.visit_payment_priority = '0'
		INNER JOIN b_contract_plans ON t_visit_payment.b_contract_plans_id = b_contract_plans.b_contract_plans_id
		INNER JOIN b_map_rp1853_instype ON b_contract_plans.b_contract_plans_id = b_map_rp1853_instype.b_contract_plans_id
		LEFT JOIN r_rp1853_instype ON b_map_rp1853_instype.r_rp1853_instype_id = r_rp1853_instype.ID 
			--		and regexp_like(r_rp1853_instype.maininscl,upper('ucs|ofc|sss|lgo|ssi|nhs')) 
	WHERE
		t_visit.f_visit_type_id = '1' 
		AND t_visit.f_visit_status_id <> '4' 
		AND t_admit_leave_day.active = '1' 
		AND LENGTH ( t_visit.visit_staff_doctor_discharge_date_time ) > 10 
		AND t_visit.visit_vn=':an'
		AND LENGTH(t_visit.visit_vn) > 1
		AND t_admit_leave_day.date_in <> '' 
		AND t_admit_leave_day.date_out <> '' 
	GROUP BY
		seqlvd,
		t_visit.visit_vn,
		dateout,
		timeout,
		datein,
		timein,
		qtyday,
		data_date,
		visit_type,
		main_inscl 
	) AS q 
ORDER BY
	q.VS_AN ASC