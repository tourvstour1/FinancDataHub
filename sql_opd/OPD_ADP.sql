SELECT
	q1.hn :: TEXT AS hn,
	q1.an :: TEXT AS an,
	q1.dateopd :: TEXT AS dateopd,
	q1.TYPE :: TEXT AS "type",
	q1.code :: TEXT AS code,
	q1.qty :: TEXT AS qty,
	q1.rate :: TEXT AS rate,
	q1.seq :: TEXT AS seq,
	q1.cagcode :: TEXT AS cagcode,
	q1.dose :: TEXT AS dose,
	q1.ca_type :: TEXT AS ca_type,
	q1.serialno :: TEXT AS serialno,
	q1.totcopay :: TEXT AS totcopay,
	q1.use_status :: TEXT AS use_status,
	q1.total :: TEXT AS total,
	q1.tmltcode :: TEXT AS tmltcode,
	q1.status1 :: TEXT AS status1,
	q1.bi :: TEXT AS bi,
	q1.clinic :: TEXT AS clinic,
	q1.itemsrc :: TEXT AS itemsrc,
	q1.provider :: TEXT AS "provider",
	q1.gravida :: TEXT AS gravida,
	q1.ga_week :: TEXT AS ga_week,
	q1.dcip :: TEXT AS dcip_e_screen,
	q1.lmp :: TEXT AS lmp
FROM
	(
		SELECT
			q.hn,
			q.an,
			q.dateopd,
			q.TYPE,
			case
				when q.code is null then ''::text
				else q.code :: text
			end as code,
			q.qty :: DECIMAL (12, 0) :: TEXT AS qty,
			q.rate :: DECIMAL (12, 2) :: TEXT AS rate,
			q.seq,
			q.cagcode,
			substr(q.dose,0,10) as dose,
			q.ca_type,
			q.serialno,
			q.totcopay :: DECIMAL (12, 2) :: TEXT AS totcopay,
			q.use_status,
			q.total :: DECIMAL (12, 2) :: TEXT AS total,
			q.qtyday AS qtyday,
			q.tmltcode,
			q.status1,
			q.bi,
			q.clinic,
			q.itemsrc,
			q.provider,
			q.gravida,
			q.ga_week,
			q.dcip,
			q.lmp
		FROM
			(
				SELECT
					t_visit.visit_hn AS hn,
					CASE
						WHEN t_visit.f_visit_type_id = '1' THEN t_visit.visit_vn
						ELSE ''
					END AS an,
					CASE
						WHEN (
							LENGTH (t_visit.visit_begin_visit_time) >= 10
						) THEN to_char(
							to_date(
								(
									CAST (
										substr(t_visit.visit_begin_visit_time, 1, 4) AS INT
									) - 543
								) || substr(t_visit.visit_begin_visit_time, 5, 6),
								'yyyy-mm-dd'
							),
							'yyyymmdd'
						)
						ELSE ''
					END AS dateopd,
					CASE
						WHEN r_rp1253_adpcode.TYPE IS NOT NULL THEN r_rp1253_adpcode.TYPE :: TEXT
						ELSE '00' :: TEXT
					END AS TYPE,
					r_rp1253_adpcode.ID AS code,
					(t_order.order_qty) AS qty,
					t_order.order_price AS rate,
					CASE
						WHEN t_visit.f_visit_type_id = '0' THEN t_visit.visit_vn
						ELSE ''
					END AS seq,
					'' AS cagcode,
					(
						CASE
							WHEN b_item_drug.drug_strength IS NOT NULL THEN b_item_drug.drug_strength
							ELSE ''
						END
					) AS dose,
					'' AS ca_type,
					t_order.serial_number :: TEXT AS serialno,
					t_billing_invoice_item.billing_invoice_item_patient_share AS totcopay,
					(
						CASE
							WHEN r_rp1253_adpcode.NAME ILIKE '%]t11' THEN (
								CASE
									WHEN t_order.order_home = '0' THEN '1'
									ELSE '2'
								END
							)
							ELSE ''
						END
					) AS use_status,
					t_billing_invoice_item.billing_invoice_item_payer_share AS total,
					'' AS qtyday,
					CASE
						WHEN b_map_lab_tmlt.b_lab_tmlt_tmltcode IS NOT NULL THEN b_map_lab_tmlt.b_lab_tmlt_tmltcode
						ELSE ''
					END AS tmltcode,
					CASE
						WHEN lab_covid.lab_result IS NOT NULL THEN lab_covid.lab_result
						ELSE ''
					END AS status1,
					'' AS bi,
					CASE
						WHEN b_report_12files_map_clinic.b_report_12files_std_clinic_id IN (
							'01',
							'02',
							'03',
							'04',
							'05',
							'06',
							'07',
							'08',
							'09',
							'10',
							'11'
						) THEN (
							t_visit.f_visit_type_id || b_report_12files_map_clinic.b_report_12files_std_clinic_id || '00'
						)
						WHEN b_report_12files_map_clinic.b_report_12files_std_clinic_id IS NULL THEN ''
						ELSE (t_visit.f_visit_type_id || '9900')
					END AS clinic,
					2 AS itemsrc,
					'' AS provider,
					'' AS gravida,
					'' AS ga_week,
					'' AS dcip,
					'' AS lmp,
					t_order.b_item_id,
					t_order.t_order_id,
					t_visit.f_visit_type_id AS visit_type,
					t_visit.visit_vn AS vn_an
				FROM
					t_visit
					INNER JOIN t_billing ON t_billing.t_visit_id = t_visit.t_visit_id
					AND t_billing.billing_active = '1'
					
					INNER JOIN t_order ON t_visit.t_visit_id = t_order.t_visit_id
					INNER JOIN b_item ON b_item.b_item_id = t_order.b_item_id
					LEFT JOIN b_map_rp1253_adpcode ON b_item.b_item_id = b_map_rp1253_adpcode.b_item_id
					left JOIN r_rp1253_adpcode ON b_map_rp1253_adpcode.r_rp1253_adpcode_id = r_rp1253_adpcode.ID
					LEFT JOIN b_map_lab_tmlt ON b_item.b_item_id = b_map_lab_tmlt.b_item_id
					LEFT JOIN b_item_drug ON b_item.b_item_id = b_item_drug.b_item_id
					LEFT JOIN (
						SELECT
							t_result_lab.t_visit_id,
							b_item.item_common_name AS lab_name,
							CASE
								WHEN t_result_lab.result_lab_value ILIKE '%Positive%' THEN '1'
								WHEN t_result_lab.result_lab_value ILIKE '%Negative%' THEN '2'
							END AS lab_result
						FROM
							t_order
							INNER JOIN t_result_lab ON t_result_lab.t_order_id = t_order.t_order_id
							INNER JOIN b_item ON b_item.b_item_id = t_order.b_item_id
						WHERE
							t_result_lab.result_lab_active = '1'
							AND t_order.f_item_group_id = '2' --lab
							AND t_order.f_order_status_id NOT IN ('0', '3')
							AND b_item.item_common_name ILIKE '%covid%'
						GROUP BY
							t_result_lab.t_visit_id,
							b_item.item_common_name,
							t_result_lab.result_lab_value
					) lab_covid ON lab_covid.t_visit_id = t_visit.t_visit_id
					INNER JOIN t_billing_invoice_item ON t_order.t_order_id = t_billing_invoice_item.t_order_item_id
					AND t_billing_invoice_item.billing_invoice_item_active = '1'
					INNER JOIN t_visit_payment ON t_visit_payment.t_visit_id = t_visit.t_visit_id
					AND t_visit_payment.visit_payment_active = '1'
					AND t_visit_payment.visit_payment_priority = '0'
					INNER JOIN b_contract_plans ON t_visit_payment.b_contract_plans_id = b_contract_plans.b_contract_plans_id
					LEFT JOIN b_map_rp1853_instype ON b_contract_plans.b_contract_plans_id = b_map_rp1853_instype.b_contract_plans_id
					LEFT JOIN r_rp1853_instype ON b_map_rp1853_instype.r_rp1853_instype_id = r_rp1853_instype.ID --AND regexp_like ( r_rp1853_instype.maininscl, UPPER ( 'ucs|ofc|sss|lgo|ssi|nhs' ) )
					LEFT JOIN t_diag_icd10 ON t_diag_icd10.diag_icd10_vn = t_visit.t_visit_id
					AND t_diag_icd10.f_diag_icd10_type_id = '1'
					INNER JOIN b_report_12files_map_clinic ON t_diag_icd10.b_visit_clinic_id = b_report_12files_map_clinic.b_visit_clinic_id
					LEFT JOIN b_map_product_category ON b_map_product_category.b_item_id = b_item.b_item_id
		LEFT JOIN f_product_category ON f_product_category.f_product_category_id = b_map_product_category.f_product_category_id 
				WHERE
					t_order.f_order_status_id NOT IN ('0', '3')
					AND t_visit.f_visit_type_id IN ('0', '1')
					AND t_visit.f_visit_status_id <> '4'
					AND t_order.order_qty <> '0'
					AND (f_product_category.f_product_category_id is null or f_product_category.f_product_category_id  ='3')
					AND LENGTH (t_visit.visit_staff_doctor_discharge_date_time) > 10
					AND SUBSTRING (
						t_visit.visit_staff_doctor_discharge_date_time,1,10) <> ''
						AND t_visit.visit_vn =':seq'
					GROUP BY
					t_visit.visit_hn,
					t_visit.f_visit_type_id,
					t_visit.visit_vn,
					t_visit.visit_begin_visit_time,
					r_rp1253_adpcode.TYPE,
					r_rp1253_adpcode.ID,
					t_order.order_qty,
					t_order.order_price,
					t_visit.f_visit_type_id,
					b_item_drug.drug_strength,
					t_order.serial_number,
					t_billing_invoice_item.billing_invoice_item_patient_share,
					r_rp1253_adpcode.NAME,
					t_order.order_home,
					t_billing_invoice_item.billing_invoice_item_payer_share,
					b_map_lab_tmlt.b_lab_tmlt_tmltcode,
					lab_covid.lab_result,
					clinic,
					t_order.b_item_id,
					t_order.t_order_id,
					r_rp1853_instype.maininscl
			) AS q
		GROUP BY
			q.hn,
			q.an,
			q.dateopd,
			q.TYPE,
			q.code,
			q.rate,
			q.seq,
			q.cagcode,
			q.dose,
			q.ca_type,
			q.serialno,
			q.use_status,
			q.qtyday,
			q.tmltcode,
			q.status1,
			q.bi,
			q.clinic,
			q.itemsrc,
			q.provider,
			q.gravida,
			q.ga_week,
			q.dcip,
			q.lmp,
			q.visit_type,
			q.vn_an,
			q.qty,
			q.totcopay,
			q.total
	) AS q1
	