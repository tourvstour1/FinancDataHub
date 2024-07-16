select
	q1.hn :: text as hn,
	q1.an :: text as an,
	q1.date :: text as date,
	q1.total :: text as total,
	q1.paid :: text as paid,
	q1.pttype :: text as pttype,
	q1.person_id :: text as person_id,
	q1.seq :: text as seq,
	q1.opd_memo :: text as opd_memo,
	q1.invoice_no :: text as invoice_no,
	q1.invoice_lt :: text as invoice_lt 
from
	(
	select
		q.hn,
		q.vs_an as an,
		q.date,
		q.total :: decimal ( 12, 2 ) :: text as total,
		q.paid :: decimal ( 12, 2 ) :: text as paid,
	case
			
			when q.total = q.paid then
			'10' else q.pttype 
		end as pttype,
		q.person_id,
		q.vs_seq as seq,
		'' as opd_memo,
		'' as invoice_no,
		'' as invoice_lt,
		q.visit_type,
		q.main_inscl,
		q.data_date,
		q.vn_an,
		q.plan 
	from
		(
		select
			t_patient.patient_hn as hn,
		case
				
				when t_visit.f_visit_type_id = '1' then
				t_visit.visit_vn else'' 
			end as vs_an,
		case
				
				when text_to_timestamp ( t_visit.visit_begin_visit_time ) is not null then
				to_char( text_to_timestamp ( t_visit.visit_begin_visit_time ), 'yyyymmdd' ) else'' 
			end as date,
			sum ( t_billing_invoice.billing_invoice_total ) as total,
			sum ( t_billing_invoice.billing_invoice_patient_share ) as paid,
		case
				
				when b_map_rp1853_instype.r_rp1853_instype_id is not null then
				b_map_rp1853_instype.r_rp1853_instype_id else'' 
			end as pttype,
			t_patient.patient_pid as person_id,
		case
				
				when t_visit.f_visit_type_id = '0' then
				t_visit.visit_vn else'' 
			end as vs_seq,
			t_visit.f_visit_type_id as visit_type,
			r_rp1853_instype.maininscl as main_inscl,
			(
				( cast ( substring ( t_visit.visit_begin_visit_time, 1, 4 ) as numeric ) - 543 ) :: text || substring ( t_visit.visit_begin_visit_time, 5, 6 ) 
			) :: date as data_date,
			t_visit.visit_vn as vn_an,
			b_contract_plans.b_contract_plans_id as plan 
		from
			t_billing
			inner join t_visit on ( t_billing.t_visit_id = t_visit.t_visit_id )
			inner join t_patient on ( t_patient.t_patient_id = t_visit.t_patient_id )
			inner join t_billing_invoice on t_billing.t_billing_id = t_billing_invoice.t_billing_id 
			and t_billing_invoice.billing_invoice_active = '1'
			inner join t_visit_payment on t_billing_invoice.t_payment_id = t_visit_payment.t_visit_payment_id 
			and t_visit_payment.visit_payment_active = '1'
			inner join b_contract_plans on t_visit_payment.b_contract_plans_id = b_contract_plans.b_contract_plans_id
			inner join b_map_rp1853_instype on b_contract_plans.b_contract_plans_id = b_map_rp1853_instype.b_contract_plans_id
			LEFT join r_rp1853_instype on b_map_rp1853_instype.r_rp1853_instype_id = r_rp1853_instype.id 	
			--and regexp_like(r_rp1853_instype.maininscl,upper('ucs|ofc|sss|lgo|ssi|nhs')) 
		where
			t_visit.f_visit_status_id <> '4' 
			and t_billing.billing_active = '1' 
			--and t_billing.billing_payer_share <> 0 
			and length ( t_visit.visit_staff_doctor_discharge_date_time ) > 10 
			AND t_visit.visit_vn =':seq'
			AND LENGTH(t_visit.visit_vn) > 1
			and t_visit.f_visit_type_id in ( '0', '1' ) 
		group by
			t_patient.patient_hn,
			vs_an,
			date,
			pttype,
			person_id,
			vs_seq,
			visit_type,
			main_inscl,
			data_date,
			vn_an,
			plan 
		) as q 
	group by
		q.hn,
		q.vs_an,
		q.date,
		q.pttype,
		q.total,
		q.paid,
		q.person_id,
		q.vs_seq,
		q.visit_type,
		q.main_inscl,
		q.data_date,
		q.vn_an,
		q.plan 
	) as q1 
order by
	q1.hn asc
