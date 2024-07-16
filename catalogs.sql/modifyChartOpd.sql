WITH vn as( SELECT ':seq' as vn)

SELECT
	q.hn,
	q.an,
	q."date",
CASE
		
		WHEN SUM ( q.total ) > 0 THEN
		q.chrgitem || '1' 
	END AS chrgitem,
	SUM ( q.total ) AS amount,
	q.person_id,
	q.seq
FROM
	(
	SELECT
		t_adp."id",
		t_adp.hn,
		t_adp.an,
		t_adp.dateopd AS "date",
		adp_type.adp_hospital_code AS chrgitem,
		SUM ( t_adp.total :: NUMERIC ) AS total,
		SUM ( t_adp.totcopay :: NUMERIC ) AS totcopay,
		t_pat.person_id,
		t_adp.seq
	FROM
		master_items.adp_type adp_type
		INNER JOIN t_adp ON t_adp."type" :: NUMERIC = ANY ( adp_type.adp_type_number )
		INNER JOIN t_opd ON t_opd.seq = t_adp.seq
		INNER JOIN t_pat ON t_pat.hn = t_opd.hn 
	WHERE
		t_adp.seq = (SELECT vn FROM vn)
	GROUP BY
		t_adp."id",
		t_adp.hn,
		t_adp.an,
		"date",
		chrgitem,
		t_pat.person_id,
		t_adp.seq
	) AS q 
WHERE
	q.total > 0 
GROUP BY
	q.hn,
	q.an,
	q."date",
	q.person_id,
	q.chrgitem,
	q.seq
	
	UNION
	
	SELECT
	q.hn,
	q.an,
	q."date",
CASE
		
		WHEN SUM ( q.totcopay ) > 0 THEN
		q.chrgitem || '2' 
	END AS chrgitem,
	SUM ( q.totcopay ) AS amount,
	q.person_id,
	q.seq
FROM
	(
	SELECT
		t_adp."id",
		t_adp.hn,
		t_adp.an,
		t_adp.dateopd AS "date",
		adp_type.adp_hospital_code AS chrgitem,
		SUM ( t_adp.total :: NUMERIC ) AS total,
		SUM ( t_adp.totcopay :: NUMERIC ) AS totcopay,
		t_pat.person_id,
		t_adp.seq
	FROM
		master_items.adp_type adp_type
		INNER JOIN t_adp ON t_adp."type" :: NUMERIC = ANY ( adp_type.adp_type_number )
		INNER JOIN t_opd ON t_opd.seq = t_adp.seq
		INNER JOIN t_pat ON t_pat.hn = t_opd.hn 
	WHERE
		t_adp.seq = (SELECT vn from vn)
	GROUP BY
		t_adp."id",
		t_adp.hn,
		t_adp.an,
		"date",
		chrgitem,
		t_pat.person_id,
		t_adp.seq
	) AS q 
WHERE
	q.totcopay > 0 
GROUP BY
	q.hn,
	q.an,
	q."date",
	q.person_id,
	q.chrgitem,
	q.seq
	
	UNION
	
	SELECT 
q.hn,
q.an,
q.date,
q.chrgitem,
sum(q.total) as amount,
q.person_id,
q.seq

FROM 

(SELECT 
t_dru.id,
t_dru.hn,
t_dru.an,
t_opd.dateopd as "date",
case when t_dru.use_status = '1' then '31' else '41' end  as chrgitem ,
sum (t_dru.total::numeric) as total,
sum (t_dru.totcopay::numeric) as totcopay,
t_dru.person_id,
t_dru.seq
FROM t_dru 
INNER JOIN t_opd ON t_opd.seq = t_dru.seq

WHERE t_dru.seq = (SELECT vn from vn)

GROUP BY
t_dru.id,
t_dru.hn,
t_dru.an,
"date",
chrgitem ,
t_dru.person_id,
t_dru.seq) 
as q
WHERE q.total > 0

GROUP BY 
q.hn,
q.an,
q.date,
q.chrgitem,
q.person_id,
q.seq

UNION

SELECT 
q.hn,
q.an,
q.date,
q.chrgitem,
sum(q.totcopay) as amount,
q.person_id,
q.seq

FROM 

(SELECT 
t_dru.id,
t_dru.hn,
t_dru.an,
t_opd.dateopd as "date",
case when t_dru.use_status = '1' then '32' else '42' end  as chrgitem ,
sum (t_dru.total::numeric) as total,
sum (t_dru.totcopay::numeric) as totcopay,
t_dru.person_id,
t_dru.seq
FROM t_dru 
INNER JOIN t_opd ON t_opd.seq = t_dru.seq

WHERE t_dru.seq =(SELECT vn from vn)

GROUP BY
t_dru.id,
t_dru.hn,
t_dru.an,
"date",
chrgitem ,
t_dru.person_id,
t_dru.seq) 
as q
WHERE q.totcopay > 0

GROUP BY 
q.hn,
q.an,
q.date,
q.chrgitem,
q.person_id,
q.seq
