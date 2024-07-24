SELECT
	q.hn :: TEXT AS hn,
	q.vs_an :: TEXT AS an,
	q.DATE :: TEXT AS DATE,
	q.chrgitem :: TEXT AS chrgitem,
	SUM ( q.amount ) :: DECIMAL ( 12, 2 ) :: TEXT AS amount,
	q.person_id :: TEXT AS person_id,
	q.vs_seq :: TEXT AS seq 
FROM
	(
	SELECT DISTINCT
	t_billing_invoice_item.t_billing_invoice_item_id,
		t_patient.patient_hn AS hn,
	CASE
			
			WHEN t_visit.f_visit_type_id = '1' THEN
			t_visit.visit_vn ELSE'' 
		END AS vs_an,
	CASE
			
			WHEN text_to_timestamp ( t_visit.visit_begin_visit_time ) IS NOT NULL THEN
			to_char( text_to_timestamp ( t_visit.visit_begin_visit_time ), 'yyyymmdd' ) ELSE'' 
		END AS DATE,
	CASE
			
			WHEN r_rp1253_charitem.ID IS NOT NULL 
			AND t_billing_invoice_item.billing_invoice_item_payer_share <> '0' THEN
				r_rp1253_charitem.ID || '1' 
				WHEN r_rp1253_charitem.ID IS NOT NULL 
				AND t_billing_invoice_item.billing_invoice_item_patient_share <> '0' THEN
					r_rp1253_charitem.ID || '2' 
					WHEN r_rp1253_charitem.ID IS NULL 
					AND t_billing_invoice_item.billing_invoice_item_payer_share <> '0' THEN
						'J1' 
						WHEN r_rp1253_charitem.ID IS NULL 
						AND t_billing_invoice_item.billing_invoice_item_patient_share <> '0' THEN
							'J2' ELSE'' 
							END AS chrgitem,
						( t_billing_invoice_item.billing_invoice_item_total ) AS amount,
						t_patient.patient_pid AS person_id,
					CASE
							
							WHEN t_visit.f_visit_type_id = '0' THEN
							t_visit.visit_vn ELSE'' 
						END AS vs_seq,
						t_visit.f_visit_type_id AS visit_type,
						r_rp1853_instype.maininscl AS main_inscl,
						(
							( CAST ( SUBSTRING ( t_visit.visit_begin_visit_time, 1, 4 ) AS NUMERIC ) - 543 ) :: TEXT || SUBSTRING ( t_visit.visit_begin_visit_time, 5, 6 ) 
						) :: DATE AS data_date,
						t_visit.visit_vn AS vn_an 
					FROM
						t_billing
						INNER JOIN t_billing_invoice ON t_billing_invoice.t_billing_id = t_billing.t_billing_id 
						AND t_billing_invoice.billing_invoice_active = '1'
						INNER JOIN t_billing_invoice_item ON t_billing_invoice_item.t_billing_invoice_id = t_billing_invoice.t_billing_invoice_id 
						AND t_billing_invoice_item.billing_invoice_item_active = '1'
						INNER JOIN t_visit ON t_billing.t_visit_id = t_visit.t_visit_id
						INNER JOIN t_patient ON ( t_patient.t_patient_id = t_visit.t_patient_id )
						INNER JOIN t_order ON ( t_order.t_order_id = t_billing_invoice_item.t_order_item_id )
						INNER JOIN b_item ON b_item.b_item_id = t_order.b_item_id
						LEFT JOIN b_map_rp1253_charitem ON b_item.b_item_id = b_map_rp1253_charitem.b_item_id
						LEFT JOIN r_rp1253_charitem ON b_map_rp1253_charitem.r_rp1253_charitem_id = r_rp1253_charitem.
						ID INNER JOIN t_visit_payment ON t_visit_payment.t_visit_id = t_visit.t_visit_id 
						AND t_visit_payment.visit_payment_active = '1' 
						AND t_visit_payment.visit_payment_priority = '0'
						INNER JOIN b_contract_plans ON t_visit_payment.b_contract_plans_id = b_contract_plans.b_contract_plans_id
						INNER JOIN b_map_rp1853_instype ON b_contract_plans.b_contract_plans_id = b_map_rp1853_instype.b_contract_plans_id
						LEFT JOIN r_rp1853_instype ON b_map_rp1853_instype.r_rp1853_instype_id = r_rp1853_instype.ID --	and regexp_like(r_rp1853_instype.maininscl,upper('ucs|ofc|sss|lgo|ssi|nhs'))
						
					WHERE
						t_visit.f_visit_status_id <> '4' 
						AND t_billing.billing_active = '1' 
						AND LENGTH ( t_visit.visit_staff_doctor_discharge_date_time ) > 10 
						AND t_visit.visit_vn =':seq'
						AND LENGTH(t_visit.visit_vn) > 1
						AND t_visit.f_visit_type_id IN ( '0', '1' ) 
					) AS q 
				WHERE
					q.chrgitem <> '' 
				GROUP BY
					hn,
					an,
					DATE,
					chrgitem,
					person_id,
					seq 
			ORDER BY
	q.hn ASC