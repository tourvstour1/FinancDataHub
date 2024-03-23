SELECT distinct
	q.hn :: TEXT AS hn,
	q.an :: TEXT AS an,
	q.dateadm :: TEXT AS dateadm,
	q.timeadm :: TEXT AS timeadm,
	q.datedsc :: TEXT AS datedsc,
	q.timedsc :: TEXT AS timedsc,
	q.dischs :: TEXT AS dischs,
	q.discht :: TEXT AS discht,
	q.warddsc :: TEXT AS warddsc,
	q.dept :: TEXT AS dept,
	q.adm_w :: TEXT AS adm_w,
	q.uuc :: TEXT AS uuc,
	q.svctype :: TEXT AS svctype 
FROM
	(
	SELECT
		t_patient.patient_hn AS HN,
		t_visit.visit_vn AS AN,
	CASE
			
			WHEN text_to_timestamp ( t_visit.visit_begin_admit_date_time ) IS NOT NULL THEN
			to_char( text_to_timestamp ( t_visit.visit_begin_admit_date_time ), 'YYYYMMDD' ) ELSE'' 
		END AS DATEADM,
	CASE
			
			WHEN text_to_timestamp ( t_visit.visit_begin_admit_date_time ) IS NOT NULL THEN
			to_char( text_to_timestamp ( t_visit.visit_begin_admit_date_time ), 'HH24MI' ) ELSE'' 
		END AS TIMEADM,
	CASE
			
			WHEN text_to_timestamp ( t_visit.visit_staff_doctor_discharge_date_time ) IS NOT NULL THEN
			to_char( text_to_timestamp ( t_visit.visit_staff_doctor_discharge_date_time ), 'YYYYMMDD' ) ELSE'' 
		END AS DATEDSC,
	CASE
			
			WHEN text_to_timestamp ( t_visit.visit_staff_doctor_discharge_date_time ) IS NOT NULL THEN
			to_char( text_to_timestamp ( t_visit.visit_staff_doctor_discharge_date_time ), 'HH24MI' ) ELSE'' 
		END AS TIMEDSC,
		t_visit.f_visit_ipd_discharge_status_id AS DISCHS,
		t_visit.f_visit_ipd_discharge_type_id AS DISCHT,
	CASE
			
			WHEN b_report_12files_map_clinic.b_report_12files_std_clinic_id IS NOT NULL THEN
			( t_visit.f_visit_type_id || b_report_12files_map_clinic.b_report_12files_std_clinic_id || '1' ) ELSE'' 
		END AS WARDDSC,
	CASE
			
			WHEN b_report_12files_map_clinic.b_report_12files_std_clinic_id IS NOT NULL THEN
			b_report_12files_map_clinic.b_report_12files_std_clinic_id ELSE'' 
		END AS DEPT,
	( CASE WHEN t_visit_vital_sign.visit_vital_sign_weight IS NULL THEN 0.00 ELSE t_visit_vital_sign.visit_vital_sign_weight :: DECIMAL ( 7, 2 ) END ) :: TEXT AS ADM_W,
	'1' AS UUC,
CASE
		
		WHEN r_rp1853_instype.maininscl IN ( 'UCS', 'OFC', 'LGO' ) THEN
		'I' ELSE'' 
	END AS SVCTYPE,
	t_visit.f_visit_type_id AS visit_type,
	r_rp1853_instype.maininscl AS main_inscl,
	(
		( CAST ( SUBSTRING ( t_visit.visit_begin_visit_time, 1, 4 ) AS NUMERIC ) - 543 ) :: TEXT || SUBSTRING ( t_visit.visit_begin_visit_time, 5, 6 ) 
	) :: DATE AS data_date 
FROM
	t_visit
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
				and regexp_like(r_rp1853_instype.maininscl,upper('ucs|ofc|sss|lgo|ssi|nhs')) 
	LEFT JOIN b_visit_ward ON ( t_visit.b_visit_ward_id = b_visit_ward.b_visit_ward_id )
	LEFT JOIN b_report_12files_map_clinic ON ( t_visit.b_visit_clinic_id = b_report_12files_map_clinic.b_visit_clinic_id )
	LEFT JOIN (
	SELECT
		t_visit_vital_sign.t_visit_id,
		t_visit_vital_sign.visit_vital_sign_weight,
		t_visit_vital_sign.record_date || ',' || t_visit_vital_sign.record_time,
		ROW_NUMBER ( ) OVER ( PARTITION BY t_visit_vital_sign.t_visit_id ORDER BY ( t_visit_vital_sign.record_date || ',' || t_visit_vital_sign.record_time ) DESC ) AS seq 
	FROM
		t_visit_vital_sign
		INNER JOIN t_visit ON t_visit_vital_sign.t_visit_id = t_visit.t_visit_id 
	WHERE
		t_visit_vital_sign.visit_vital_sign_active = '1' 
		AND t_visit_vital_sign.visit_vital_sign_weight <> '' 
		AND t_visit.f_visit_type_id = '1' 
		AND t_visit.f_visit_status_id <> '4' 
		AND LENGTH ( t_visit.visit_staff_doctor_discharge_date_time ) > 10 
		AND SUBSTRING ( t_visit.visit_staff_doctor_discharge_date_time, 1, 10 ) <> '' 
		AND SUBSTRING ( t_visit.visit_staff_doctor_discharge_date_time, 1, 10 ) >= ':startDate' 
		AND SUBSTRING ( t_visit.visit_staff_doctor_discharge_date_time, 1, 10 ) <= ':endDate' 
	) AS t_visit_vital_sign ON t_visit.t_visit_id = t_visit_vital_sign.t_visit_id 
	AND t_visit_vital_sign.seq = 1 
WHERE
	t_visit.f_visit_type_id = '1' 
	AND t_visit.f_visit_status_id <> '4' 
	AND LENGTH ( t_visit.visit_staff_doctor_discharge_date_time ) > 10 
	AND SUBSTRING ( t_visit.visit_staff_doctor_discharge_date_time, 1, 10 ) <> '' 
	AND SUBSTRING ( t_visit.visit_staff_doctor_discharge_date_time, 1, 10 ) >= ':startDate' 
	AND SUBSTRING ( t_visit.visit_staff_doctor_discharge_date_time, 1, 10 ) <= ':endDate' 
GROUP BY
	t_patient.patient_hn,
	t_visit.visit_vn,
	dateadm,
	timeadm,
	datedsc,
	timedsc,
	dischs,
	discht,
	warddsc,
	dept,
	adm_w,
	uuc,
	svctype,
	data_date,
	visit_type,
	main_inscl 
	) AS q 
