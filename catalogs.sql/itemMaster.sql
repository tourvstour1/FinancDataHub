SELECT
	b_item.item_number,
	b_item.item_general_number,
	b_item.item_common_name,
	b_item.item_trade_name,
	b_item_subgroup.item_subgroup_number,
	b_item_subgroup.item_subgroup_description,
	b_item_subgroup.f_item_group_id,
	f_item_group.item_group_description,
	b_item_16_group.item_16_group_number,
	b_item_16_group.item_16_group_description,
	b_map_product_category.f_product_category_id,
	f_product_category.product_category_description   
FROM
	b_item
	LEFT JOIN b_item_subgroup ON b_item_subgroup.b_item_subgroup_id = b_item.b_item_subgroup_id
	LEFT JOIN b_item_16_group ON b_item_16_group.b_item_16_group_id = b_item.b_item_16_group_id
	LEFT JOIN f_item_group ON f_item_group.f_item_group_id = b_item_subgroup.f_item_group_id
	LEFT JOIN b_map_product_category ON b_map_product_category.b_item_id = b_item.b_item_id
	INNER JOIN f_product_category ON f_product_category.f_product_category_id = b_map_product_category.f_product_category_id 
WHERE
	b_item.item_active = '1'