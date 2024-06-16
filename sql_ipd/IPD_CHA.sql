select
	q.hn :: text as hn,
	q.vs_an :: text as an,
	q.date :: text as date,
	q.chrgitem :: text as chrgitem,
	q.amount :: text as amount,
	q.person_id :: text as person_id,
	q.vs_seq :: text as seq 
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
	case
			
			when r_rp1253_charitem.id is not null 
			and billing_invoice_item_draw = '1' then
				r_rp1253_charitem.id || '1' 
				when r_rp1253_charitem.id is not null then
				r_rp1253_charitem.id || '2' 
				when r_rp1253_charitem.id is null 
				and billing_invoice_item_draw = '1' then
					'j1' 
					when r_rp1253_charitem.id is null then
					'j2' else'' 
				end as chrgitem,
				sum ( t_billing_invoice_item.billing_invoice_item_total ) :: decimal ( 12, 2 ) :: text as amount,
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
				t_visit.visit_vn as vn_an 
			from
				t_billing
				inner join t_billing_invoice on t_billing_invoice.t_billing_id = t_billing.t_billing_id 
				and t_billing_invoice.billing_invoice_active = '1'
				inner join t_billing_invoice_item on t_billing_invoice_item.t_billing_invoice_id = t_billing_invoice.t_billing_invoice_id 
				and t_billing_invoice_item.billing_invoice_item_active = '1'
				inner join t_visit on t_billing.t_visit_id = t_visit.t_visit_id
				inner join t_patient on ( t_patient.t_patient_id = t_visit.t_patient_id )
				inner join t_order on ( t_order.t_order_id = t_billing_invoice_item.t_order_item_id )
				inner join b_item on b_item.b_item_id = t_order.b_item_id
				left join b_map_rp1253_charitem on b_item.b_item_id = b_map_rp1253_charitem.b_item_id
				left join r_rp1253_charitem on b_map_rp1253_charitem.r_rp1253_charitem_id = r_rp1253_charitem.
				id inner join t_visit_payment on t_visit_payment.t_visit_id = t_visit.t_visit_id 
				and t_visit_payment.visit_payment_active = '1' 
				and t_visit_payment.visit_payment_priority = '0'
				inner join b_contract_plans on t_visit_payment.b_contract_plans_id = b_contract_plans.b_contract_plans_id
				inner join b_map_rp1853_instype on b_contract_plans.b_contract_plans_id = b_map_rp1853_instype.b_contract_plans_id
				LEFT join r_rp1853_instype on b_map_rp1853_instype.r_rp1853_instype_id = r_rp1853_instype.id 
						--	and regexp_like(r_rp1853_instype.maininscl,upper('ucs|ofc|sss|lgo|ssi|nhs')) 
			where
				t_visit.f_visit_status_id <> '4' 
				and t_billing.billing_active = '1' 
				and length ( t_visit.visit_staff_doctor_discharge_date_time ) > 10 
						AND t_visit.visit_vn=':an'
				and t_visit.f_visit_type_id in ( '0', '1' ) 
			group by
				t_patient.patient_hn,
				vs_an,
				date,
				chrgitem,
				person_id,
				vs_seq,
				data_date,
				visit_type,
				main_inscl,
				vn_an 
			) as q 
	order by
	q.hn asc
