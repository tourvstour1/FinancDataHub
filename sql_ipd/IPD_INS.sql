select
	q.hn :: text as hn,
case when	q.inscl :: text is null then ' ' else q.inscl :: text end as inscl,
	q.subtype :: text as subtype,
	q.cid :: text as cid,
	q.hcode :: text as hcode,
	q.dateexp :: text as dateexp,
	q.hospmain :: text as hospmain,
	q.hospsub :: text as hospsub,
	q.govcode :: text as govcode,
	q.govname :: text as govname,
	q.permitno :: text as permitno,
	q.docno :: text as docno,
	q.own_rpid :: text as ownrpid,
	q.own_name :: text as ownname,
	q.vs_an :: text as an,
	q.vs_seq :: text as seq,
	q.subinscl :: text as subinscl,
	q.relinscl :: text as relinscl,
	q.htype :: text as htype 
from
	(
	select
		t_patient.patient_hn as hn,
		case when b_map_rp1853_instype.r_rp1853_instype_id  = 'ST' then 'STP' else 	
		r_rp1853_instype.maininscl end as inscl,
		b_map_rp1853_instype.r_rp1853_instype_id as subtype,
		replace (t_patient.patient_pid, ' ', '' ) as cid,
	case
			
			when text_to_timestamp ( t_visit_payment.visit_payment_card_issue_date ) is not null then
			to_char( text_to_timestamp ( t_visit_payment.visit_payment_card_issue_date ), 'yyyymmdd' ) else'' 
		end as datein,
	case
			
			when text_to_timestamp ( t_visit_payment.visit_payment_card_expire_date ) is not null then
			to_char( text_to_timestamp ( t_visit_payment.visit_payment_card_expire_date ), 'yyyymmdd' ) else'' 
		end as dateexp,
	case
			
			when t_visit_payment.visit_payment_main_hospital is null 
			or t_visit_payment.visit_payment_main_hospital = 'null' then
				'' else t_visit_payment.visit_payment_main_hospital 
				end as hospmain,
		case
				
				when t_visit_payment.visit_payment_sub_hospital is null 
				or t_visit_payment.visit_payment_sub_hospital = 'null' then
					'' else t_visit_payment.visit_payment_sub_hospital 
					end as hospsub,
			case
					
					when t_visit_govoffical_plan.f_govcode_id is not null then
					t_visit_govoffical_plan.f_govcode_id else'' 
				end as govcode,
			case
					
					when f_govcode.description is not null then
					f_govcode.description else'' 
				end as govname,
			case
					
					when t_visit_govoffical_plan.govoffical_type = '1' then
					t_visit_govoffical_plan.govoffical_number else'' 
				end as permitno,
			case
					
					when r_rp1853_instype.maininscl in ( 'ofc', 'lgo' ) then
					( case when t_visit_govoffical_plan.govoffical_type = '2' then t_visit_govoffical_plan.govoffical_number else'' end ) else'' 
				end as docno,
			case
					
					when t_visit_govoffical_plan.ownrpid is not null then
					t_visit_govoffical_plan.ownrpid else'' 
				end as own_rpid,
			case
					
					when t_visit_govoffical_plan.ownname is not null then
					t_visit_govoffical_plan.ownname else'' 
				end as own_name,
			case
					
					when t_visit.f_visit_type_id = '1' then
					t_visit.visit_vn else'' 
				end as vs_an,
			case
					
					when t_visit.f_visit_type_id = '0' then
					t_visit.visit_vn else'' 
				end as vs_seq,
			case
					
					when t_visit_govoffical_plan.f_subinscl_id is not null then
					t_visit_govoffical_plan.f_subinscl_id else'' 
				end as subinscl,
			case
					
					when t_visit_govoffical_plan.f_relinscl_id is not null then
					t_visit_govoffical_plan.f_relinscl_id else'' 
				end as relinscl,
				'' as htype,
				t_visit.f_visit_type_id as visit_type,
				r_rp1853_instype.maininscl as main_inscl,
				(
					( cast ( substring ( t_visit.visit_begin_visit_time, 1, 4 ) as numeric ) - 543 ) :: text || substring ( t_visit.visit_begin_visit_time, 5, 6 ) 
				) :: date as data_date,
				t_visit.visit_vn as vn_an,
				b_contract_plans.b_contract_plans_id as plan,
				b_site.b_visit_office_id  as hcode
			from
				t_patient
				inner join t_visit on ( t_patient.t_patient_id = t_visit.t_patient_id )
				inner join t_billing on t_billing.t_visit_id = t_visit.t_visit_id 
				and t_billing.billing_active = '1' 
			--	and t_billing.billing_payer_share <> 0
				inner join t_health_family on t_health_family.t_health_family_id = t_patient.t_health_family_id
				inner join f_patient_prefix on f_patient_prefix.f_patient_prefix_id = t_patient.f_patient_prefix_id
				inner join t_visit_payment on t_visit.t_visit_id = t_visit_payment.t_visit_id 
				and t_visit_payment.visit_payment_active = '1' 
				and t_visit_payment.visit_payment_priority = '0'
				left join t_visit_govoffical_plan on t_visit_payment.t_visit_payment_id = t_visit_govoffical_plan.t_visit_payment_id 
				and t_visit_govoffical_plan.active = '1'
				left join f_govcode on t_visit_govoffical_plan.f_govcode_id = f_govcode.f_govcode_id
				inner join b_contract_plans on t_visit_payment.b_contract_plans_id = b_contract_plans.b_contract_plans_id
				inner join b_map_rp1853_instype on b_contract_plans.b_contract_plans_id = b_map_rp1853_instype.b_contract_plans_id
				LEFT join r_rp1853_instype on b_map_rp1853_instype.r_rp1853_instype_id = r_rp1853_instype.id 
						--	and regexp_like(r_rp1853_instype.maininscl,upper('ucs|ofc|sss|lgo|ssi|nhs')) 
							
							cross JOIN b_site
			where
				t_visit.f_visit_status_id <> '4' 
				and length ( t_visit.visit_staff_doctor_discharge_date_time ) > 10 
				AND t_visit.visit_vn=':an'
				and t_visit.f_visit_type_id <> 's' 
			group by
				t_patient.patient_hn,
				inscl,
				subtype,
				cid,
				datein,
				dateexp,
				hospmain,
				hospsub,
				govcode,
				govname,
				permitno,
				docno,
				own_rpid,
				own_name,
				vs_an,
				vs_seq,
				subinscl,
				relinscl,
				htype,
				visit_type,
				main_inscl,
				data_date,
				vn_an,
				plan ,
				b_site.b_visit_office_id 
			) as q 
	order by
	q.hn asc
