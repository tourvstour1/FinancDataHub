select
	q.hcode :: text as hcode,
	q.hn :: text as hn,
	q.an :: text as an,
	q.clinic :: text as clinic,
	q.person_id :: text as person_id,
	q.date_serv :: text as date_serv,
	q.did :: text as did,
	q.didname :: text as didname,
	q.amount :: text as amount,
	q.drugprice :: text as drugprice,
	q.drugcost :: text as drugcost,
	q.didstd :: text as didstd,
	q.unit :: text as unit,
	q.unit_pack :: text as unit_pack,
	q.seq :: text as seq,
	q.drugremark :: text as drugremark,
	q.pa_no :: text as pa_no,
	q.totcopay :: text as totcopay,
	q.use_status :: text as use_status,
	q.total :: text as total,
	q.sigcode :: text as sigcode,
	q.sigtext :: text as sigtext,
	q.provider :: text as provider
from
	(
	select
		q1.hcode,
		q1.hn,
		q1.vs_an as an,
		q1.clinic,
		q1.person_id,
		q1.date_serv,
		q1.did,
		q1.didname,
		sum ( q1.amount ) :: text as amount,
		q1.drugprice :: text as drugprice,
		q1.drugcost :: text as drugcost,
		q1.didstd,
		q1.unit,
		q1.unit_pack,
		q1.vs_seq as seq,
		q1.drugremark,
		q1.pa_no,
		sum ( q1.totcopay ) :: decimal ( 12, 2 ) :: text as totcopay,
		q1.use_status,
		sum ( q1.total ) :: decimal ( 12, 2 ) :: text as total,
		q1.sigcode,
		q1.sigtext,
		q1.provider,
		q1.data_date,
		q1.visit_type,
		q1.main_inscl,
		q1.vn_an 
	from
		(
		select		
			b_site.b_visit_office_id as hcode,
			t_visit.visit_hn as hn,
		case
				
				when t_visit.f_visit_type_id = '1' then
				t_visit.visit_vn else'' 
			end as vs_an,
			t_diag_icd10.clinic as clinic,
			t_health_family.patient_pid as person_id,
		case
				
				when text_to_timestamp ( t_visit.visit_begin_visit_time ) is not null then
				to_char( text_to_timestamp ( t_visit.visit_begin_visit_time ), 'yyyymmdd' ) else'' 
			end as date_serv,
			case WHEN lower(dru_cataloges."HOSPDRUGCODE") is null then 'NHSOED' else
			b_item.item_number END as did,
			t_order.order_common_name as didname,
			t_order.order_qty as amount,
			t_order.order_price as drugprice,
			t_order.order_cost as drugcost,
		case
				
				when substr( b_nhso_map_drug.f_nhso_drug_id, 1, 24 ) is null then
				'' else substr( b_nhso_map_drug.f_nhso_drug_id, 1, 24 ) 
			end as didstd,
			b_item_drug_uom.item_drug_uom_description as unit,
			item_unit_packing_qty as unit_pack,
			t_visit.visit_vn as vs_seq,
		case
				
				when f_ned_reason.ned_code is not null 
				and length ( f_ned_reason.ned_code ) = 1 then
					'e' || f_ned_reason.ned_code 
					when f_ned_reason.ned_code is not null 
					and length ( f_ned_reason.ned_code ) = 2 then
						f_ned_reason.ned_code else'' 
						end as drugremark,
					'' :: text as pa_no,
					t_billing_invoice_item.billing_invoice_item_patient_share as totcopay,
				( case when t_order.order_home = '0' then '1' else'2' end ) :: text as use_status,
			t_billing_invoice_item.billing_invoice_item_payer_share as total,
		case
				
				when ( b_item_drug_instruction.item_drug_instruction_number || b_item_drug_frequency.item_drug_frequency_number ) is null then
				'-' else b_item_drug_instruction.item_drug_instruction_number || b_item_drug_frequency.item_drug_frequency_number 
			end as sigcode,
		case
				
				when b_item_drug_instruction.item_drug_instruction_description is null then
				'' else b_item_drug_instruction.item_drug_instruction_description 
			end || ' ' || t_order_drug.order_drug_dose || ' ' ||
case
	
	when ( b_item_drug_uom.item_drug_uom_description || ' ' || b_item_drug_frequency.item_drug_frequency_description ) is null then
	'-' else b_item_drug_uom.item_drug_uom_description || ' ' || b_item_drug_frequency.item_drug_frequency_description 
	end as sigtext,
	'' as provider,
	t_order.t_order_id as order_id,
	t_visit.f_visit_type_id as visit_type,
	r_rp1853_instype.maininscl as main_inscl,
	(
		( cast ( substring ( t_visit.visit_begin_visit_time, 1, 4 ) as numeric ) - 543 ) :: text || substring ( t_visit.visit_begin_visit_time, 5, 6 ) 
	) :: date as data_date,
	t_visit.visit_vn as vn_an 
from
	t_visit
	inner join t_billing on t_billing.t_visit_id = t_visit.t_visit_id 
	and t_billing.billing_active = '1' 
	--and t_billing.billing_payer_share <> 0
	inner join t_patient on ( t_visit.t_patient_id = t_patient.t_patient_id )
	inner join t_health_family on ( t_health_family.t_health_family_id = t_patient.t_health_family_id )
	inner join t_order on (
		t_order.f_order_status_id <> '0' 
		and t_order.f_order_status_id <> '4' 
		and t_order.f_item_group_id = '1' 
		and t_order.order_qty <> '0' --ไม่นับยาที่คืน
		
		and t_visit.t_visit_id = t_order.t_visit_id 
	)
	left join (
	select
		t_diag_icd10.t_diag_icd10_id,
		t_diag_icd10.diag_icd10_vn,
		t_diag_icd10.clinic,
		t_diag_icd10.date_dx,
		t_diag_icd10.seq 
	from
		(
		select
			t_diag_icd10.t_diag_icd10_id,
			t_diag_icd10.diag_icd10_vn,
		case
				
				when b_report_12files_map_clinic.b_report_12files_std_clinic_id in ( '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11' ) then
				( t_visit.f_visit_type_id || b_report_12files_map_clinic.b_report_12files_std_clinic_id || '00' ) 
				when b_report_12files_map_clinic.b_report_12files_std_clinic_id is null then
				'' else ( t_visit.f_visit_type_id || '9900' ) 
			end as clinic,
			( case when t_diag_icd10.diag_icd10_record_date_time <> '' or t_diag_icd10.diag_icd10_record_date_time is not null then t_diag_icd10.diag_icd10_record_date_time else'' end ) as date_dx,
			row_number ( ) over ( partition by t_diag_icd10.diag_icd10_vn order by t_diag_icd10.diag_icd10_record_date_time asc ) as seq 
		from
			t_diag_icd10
			inner join t_visit on t_diag_icd10.diag_icd10_vn = t_visit.t_visit_id
			left join b_report_12files_map_clinic on b_report_12files_map_clinic.b_visit_clinic_id = t_diag_icd10.b_visit_clinic_id

		where
			t_diag_icd10.f_diag_icd10_type_id = '1' 
			and t_diag_icd10.diag_icd10_active = '1' 
			and t_visit.f_visit_status_id <> '4' 
			and length ( t_visit.visit_staff_doctor_discharge_date_time ) > 10 
				AND t_visit.visit_vn =':seq'
			and t_visit.f_visit_type_id in ( '0', '1' ) 
		) as t_diag_icd10 
	where
		t_diag_icd10.seq = 1 
	) as t_diag_icd10 on t_diag_icd10.diag_icd10_vn = t_visit.t_visit_id
	inner join b_item on b_item.b_item_id = t_order.b_item_id
	left join b_nhso_map_drug on t_order.b_item_id = b_nhso_map_drug.b_item_id
	left join t_order_drug on t_order.t_order_id = t_order_drug.t_order_id 
	and t_order_drug.order_drug_active = '1'
	left join b_item_drug_uom on t_order_drug.b_item_drug_uom_id_purch = b_item_drug_uom.b_item_drug_uom_id
	left join b_item_drug_instruction on t_order_drug.b_item_drug_instruction_id = b_item_drug_instruction.b_item_drug_instruction_id
	left join b_item_drug_frequency on t_order_drug.b_item_drug_frequency_id = b_item_drug_frequency.b_item_drug_frequency_id
	left join t_order_ned on t_order.t_order_id = t_order_ned.t_order_id
	left join f_ned_reason on t_order_ned.f_ned_reason_id = f_ned_reason.f_ned_reason_id
	inner join t_billing_invoice_item on t_order.t_order_id = t_billing_invoice_item.t_order_item_id 
	and t_billing_invoice_item.billing_invoice_item_active = '1'
	inner join t_visit_payment on t_visit_payment.t_visit_payment_id = t_billing_invoice_item.t_payment_id 
	and t_visit_payment.visit_payment_active = '1'
	inner join b_contract_plans on t_visit_payment.b_contract_plans_id = b_contract_plans.b_contract_plans_id
	inner join b_map_rp1853_instype on b_contract_plans.b_contract_plans_id = b_map_rp1853_instype.b_contract_plans_id
	LEFT join r_rp1853_instype on b_map_rp1853_instype.r_rp1853_instype_id = r_rp1853_instype.id 
		--		and regexp_like(r_rp1853_instype.maininscl,upper('ucs|ofc|sss|lgo|ssi|nhs')) 
		LEFT JOIN b_map_product_category ON b_map_product_category.b_item_id = b_item.b_item_id
		INNER JOIN f_product_category ON f_product_category.f_product_category_id = b_map_product_category.f_product_category_id 
		LEFT JOIN hospital_catalog.dru_cataloges ON  lower(dru_cataloges."HOSPDRUGCODE") =lower(b_item.item_number)
				
 cross join b_site 
where
	t_order.f_order_status_id <> '3' 
	and t_visit.f_visit_status_id <> '4' 
	and length ( t_visit.visit_staff_doctor_discharge_date_time ) > 10 
		AND t_visit.visit_vn =':seq'
	and t_visit.f_visit_type_id in ( '0', '1' ) 
	AND f_product_category.f_product_category_id <> '3'
	) as q1 
group by
	q1.hcode,
	q1.hn,
	q1.vs_an,
	q1.clinic,
	q1.person_id,
	q1.date_serv,
	q1.did,
	q1.didname -- ,q1.amount
	,
	q1.drugprice,
	q1.drugcost,
	q1.didstd,
	q1.unit,
	q1.unit_pack,
	q1.vs_seq,
	q1.drugremark,
	q1.pa_no -- ,q1.totcopay
	,
	q1.use_status --,q1.total
	,
	q1.sigcode,
	q1.sigtext,
	q1.provider,
	q1.data_date,
	q1.visit_type,
	q1.main_inscl,
	q1.vn_an 
	) as q 
order by
	q.hn asc
