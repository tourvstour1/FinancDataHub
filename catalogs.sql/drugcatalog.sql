SELECT
ROW_NUMBER
	( ) OVER ( ) :: TEXT AS "row",
	b_item.item_number AS "HospDrugCode",
CASE
		
		WHEN b_map_product_category.f_product_category_id IS NULL THEN
		'' :: CHARACTER VARYING ELSE b_map_product_category.f_product_category_id 
	END AS "ProductCat",
CASE
		
		WHEN b_map_drug_tmt.b_drug_tmt_tpucode IS NULL THEN
		'' :: CHARACTER VARYING ELSE b_map_drug_tmt.b_drug_tmt_tpucode 
	END AS "TMTID",

regexp_replace(b_item.item_common_name,'/n',' ','g') AS "GenericName",
CASE
		
		WHEN b_item.item_trade_name :: TEXT = '' :: TEXT THEN
		regexp_replace(b_item.item_common_name,'/n',' ','g')  ELSE regexp_replace(b_item.item_common_name,'/n',' ','g') 
	END AS "TradeName",
	'' :: TEXT AS "DFSCode",
CASE
		
		WHEN b_item_drug_dosage_form.form_name IS NULL THEN
		'' :: CHARACTER VARYING ELSE b_item_drug_dosage_form.form_name 
	END AS "DosageForm",
CASE
		
		WHEN b_item_drug.drug_strength IS NULL THEN
		'' :: TEXT ELSE b_item_drug.drug_strength 
	END AS "Strength",
	curren_price.item_price AS "UnitPrice",
CASE
		
		WHEN b_item_distributor.item_distributor_description IS NULL THEN
		'' :: CHARACTER VARYING ELSE b_item_distributor.item_distributor_description 
	END AS "Distributor",
CASE
		
		WHEN b_item_manufacturer.item_manufacturer_description IS NULL THEN
		'' :: CHARACTER VARYING ELSE b_item_manufacturer.item_manufacturer_description 
	END AS "Manufacture",
CASE
		
		WHEN b_item.b_item_subgroup_id :: TEXT = '1300000000001' :: TEXT 
		OR b_item_subgroup.item_subgroup_description :: TEXT ~~* '%ยาในบัญชี%' :: TEXT THEN
			'E' :: TEXT ELSE'N' :: TEXT 
			END AS "ISED",
		'' :: TEXT AS "SpecPrep",
	CASE
			
			WHEN b_nhso_drugcode24.drugcode24 :: TEXT IS NULL THEN
			'' :: TEXT ELSE b_nhso_drugcode24.drugcode24 :: TEXT 
		END AS "NDC24",
		'' :: TEXT AS "Packsize",
		'' :: TEXT AS "PackPrice" ,
		to_char(curren_price.date_change,'DD/MM/YYYY HH24:MI') as "DateChange",
		to_char(curren_price.date_update,'DD/MM/YYYY HH24:MI')  as "DateUpdate",
		to_char(curren_price.date_change,'DD/MM/YYYY HH24:MI')  as "DateEffective",
		'' as filename,
		b_site.b_visit_office_id as hospital_code
	FROM
		b_item
		INNER JOIN b_item_drug ON b_item.b_item_id = b_item_drug.b_item_id
		LEFT JOIN b_map_drug_tmt ON b_item.b_item_id = b_map_drug_tmt.b_item_id
		LEFT JOIN b_map_product_category ON b_item.b_item_id = b_map_product_category.b_item_id
		LEFT JOIN b_item_drug_dosage_form ON b_item_drug.b_item_drug_dosage_form_id = b_item_drug_dosage_form.b_item_drug_dosage_form_id
		LEFT JOIN b_item_manufacturer ON b_item_drug.b_item_manufacturer_id = b_item_manufacturer.b_item_manufacturer_id
		LEFT JOIN b_item_subgroup ON b_item.b_item_subgroup_id = b_item_subgroup.b_item_subgroup_id
		LEFT JOIN b_item_distributor ON b_item_drug.b_item_distributor_id = b_item_distributor.b_item_distributor_id
		LEFT JOIN b_nhso_map_drug ON b_item.b_item_id  = b_nhso_map_drug.b_item_id 
		LEFT JOIN b_nhso_drugcode24 ON b_nhso_map_drug.b_nhso_drugcode24_id  = b_nhso_drugcode24.b_nhso_drugcode24_id
		INNER JOIN (
		SELECT
			b_item_price.b_item_id,
			( ARRAY_AGG ( b_item_price.item_price ORDER BY b_item_price.record_datetime :: TIMESTAMP DESC ) ) [ 1 ] AS item_price,
			( ARRAY_AGG ( b_item.modify_datetime :: TIMESTAMP ORDER BY b_item.modify_datetime :: TIMESTAMP DESC ) ) [ 1 ] AS date_change,
			( ARRAY_AGG ( b_item_price.record_datetime :: TIMESTAMP ORDER BY b_item_price.record_datetime :: TIMESTAMP DESC ) ) [ 1 ] AS date_update,
			(
				ARRAY_AGG (
					( substr( b_item_price.item_price_active_date, 1, 4 ) :: NUMERIC - 543 || substr( b_item_price.item_price_active_date, 5, 20 ) ) :: TIMESTAMP 
				ORDER BY
					( substr( b_item_price.item_price_active_date, 1, 4 ) :: NUMERIC - 543 || substr( b_item_price.item_price_active_date, 5, 20 ) ) :: TIMESTAMP DESC 
				) 
			) [ 1 ] AS date_effect 
		FROM
			b_item
			INNER JOIN b_item_price ON b_item_price.b_item_id = b_item.b_item_id 
			AND b_item.item_active = '1' 
		GROUP BY
			b_item_price.b_item_id 
		) AS curren_price ON curren_price.b_item_id = b_item.b_item_id 
cross JOIN b_site

WHERE CASE
		
		WHEN b_map_product_category.f_product_category_id IS NULL THEN
		'' :: CHARACTER VARYING ELSE b_map_product_category.f_product_category_id 
	END  <> ''
