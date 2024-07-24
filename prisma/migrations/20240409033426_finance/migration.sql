-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "master_items";

-- CreateTable
CREATE TABLE "public"."t_ins" (
    "id" TEXT NOT NULL,
    "hn" VARCHAR(15),
    "inscl" VARCHAR(3) NOT NULL,
    "subtype" VARCHAR(2),
    "cid" VARCHAR(16),
    "hcode" VARCHAR(5) NOT NULL,
    "dateexp" TEXT,
    "hospmain" VARCHAR(5) NOT NULL,
    "hospsub" VARCHAR(5) NOT NULL,
    "govcode" VARCHAR(6),
    "govname" VARCHAR(255),
    "permitno" VARCHAR(30),
    "docno" VARCHAR(30),
    "ownrpid" VARCHAR(13),
    "ownname" VARCHAR(255),
    "an" VARCHAR(15) NOT NULL,
    "seq" VARCHAR(15) NOT NULL,
    "subinscl" VARCHAR(2),
    "relinscl" VARCHAR(1),
    "htype" VARCHAR(1),

    CONSTRAINT "t_ins_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."t_pat" (
    "id" TEXT NOT NULL,
    "hcode" VARCHAR(5) NOT NULL,
    "hn" VARCHAR(15) NOT NULL,
    "changwat" VARCHAR(2),
    "amphur" VARCHAR(2),
    "dob" TEXT NOT NULL,
    "sex" VARCHAR(1) NOT NULL,
    "marriage" VARCHAR(1) NOT NULL,
    "occupa" VARCHAR(3) NOT NULL,
    "nation" VARCHAR(3) NOT NULL,
    "person_id" VARCHAR(13) NOT NULL,
    "namepat" VARCHAR(36) NOT NULL,
    "title" VARCHAR(30) NOT NULL,
    "fname" VARCHAR(40) NOT NULL,
    "lname" VARCHAR(40) NOT NULL,
    "idtype" TEXT NOT NULL,

    CONSTRAINT "t_pat_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."t_opd" (
    "id" TEXT NOT NULL,
    "hn" VARCHAR(15) NOT NULL,
    "clinic" VARCHAR(5),
    "dateopd" TEXT NOT NULL,
    "timeopd" VARCHAR(4) NOT NULL,
    "seq" VARCHAR(15) NOT NULL,
    "uuc" VARCHAR(1) NOT NULL,
    "detail" VARCHAR(255) NOT NULL,
    "btemp" TEXT NOT NULL,
    "sbp" TEXT NOT NULL,
    "dbp" TEXT NOT NULL,
    "pr" TEXT NOT NULL,
    "rr" TEXT NOT NULL,
    "optype" VARCHAR(2) NOT NULL,
    "typein" VARCHAR(1),
    "typeout" VARCHAR(1),

    CONSTRAINT "t_opd_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."t_orf" (
    "id" TEXT NOT NULL,
    "hn" VARCHAR(15) NOT NULL,
    "dateopd" TEXT NOT NULL,
    "clinic" VARCHAR(5),
    "refer" VARCHAR(5) NOT NULL,
    "refertype" VARCHAR(1) NOT NULL,
    "seq" VARCHAR(15) NOT NULL,
    "referdate" TEXT NOT NULL,

    CONSTRAINT "t_orf_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."t_odx" (
    "id" TEXT NOT NULL,
    "hn" VARCHAR(15) NOT NULL,
    "datedx" TEXT NOT NULL,
    "clinic" VARCHAR(5),
    "diag" VARCHAR(7) NOT NULL,
    "dxtype" VARCHAR(1) NOT NULL,
    "drdx" VARCHAR(6) NOT NULL,
    "person_id" VARCHAR(13) NOT NULL,
    "seq" VARCHAR(15) NOT NULL,

    CONSTRAINT "t_odx_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."t_oop" (
    "id" TEXT NOT NULL,
    "hn" VARCHAR(15) NOT NULL,
    "dateopd" TEXT NOT NULL,
    "clinic" VARCHAR(5),
    "oper" VARCHAR(7) NOT NULL,
    "dropid" VARCHAR(6) NOT NULL,
    "person_id" VARCHAR(13) NOT NULL,
    "seq" VARCHAR(15) NOT NULL,
    "servprice" TEXT NOT NULL,

    CONSTRAINT "t_oop_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."t_ipd" (
    "id" TEXT NOT NULL,
    "hn" VARCHAR(15) NOT NULL,
    "an" VARCHAR(15) NOT NULL,
    "dateadm" TEXT NOT NULL,
    "timeadm" VARCHAR(4) NOT NULL,
    "datedsc" TEXT NOT NULL,
    "timedsc" VARCHAR(4) NOT NULL,
    "dischs" VARCHAR(1) NOT NULL,
    "discht" VARCHAR(1) NOT NULL,
    "warddsc" VARCHAR(4),
    "dept" VARCHAR(2),
    "adm_w" TEXT NOT NULL,
    "uuc" VARCHAR(1) NOT NULL,
    "svctype" VARCHAR(1) NOT NULL,

    CONSTRAINT "t_ipd_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."t_irf" (
    "id" TEXT NOT NULL,
    "an" VARCHAR(15) NOT NULL,
    "refer" VARCHAR(5) NOT NULL,
    "refertype" VARCHAR(1) NOT NULL,

    CONSTRAINT "t_irf_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."t_idx" (
    "id" TEXT NOT NULL,
    "an" VARCHAR(15) NOT NULL,
    "diag" VARCHAR(7) NOT NULL,
    "dxtype" VARCHAR(1) NOT NULL,
    "drdx" VARCHAR(6) NOT NULL,

    CONSTRAINT "t_idx_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."t_iop" (
    "id" TEXT NOT NULL,
    "an" VARCHAR(15) NOT NULL,
    "oper" VARCHAR(7) NOT NULL,
    "optype" VARCHAR(1),
    "dropid" VARCHAR(6) NOT NULL,
    "datein" TEXT NOT NULL,
    "timein" VARCHAR(4) NOT NULL,
    "dateout" TEXT,
    "timeout" VARCHAR(4),

    CONSTRAINT "t_iop_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."t_cht" (
    "id" TEXT NOT NULL,
    "hn" VARCHAR(15) NOT NULL,
    "an" VARCHAR(15) NOT NULL,
    "date" TEXT NOT NULL,
    "total" TEXT NOT NULL,
    "paid" TEXT NOT NULL,
    "pttype" VARCHAR(2),
    "person_id" VARCHAR(13) NOT NULL,
    "seq" VARCHAR(15) NOT NULL,
    "opd_memo" VARCHAR(500) NOT NULL,
    "invoice_no" VARCHAR(50) NOT NULL,
    "invoice_lt" VARCHAR(50),

    CONSTRAINT "t_cht_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."t_cha" (
    "id" TEXT NOT NULL,
    "hn" VARCHAR(15) NOT NULL,
    "an" VARCHAR(15) NOT NULL,
    "date" TEXT NOT NULL,
    "chrgitem" VARCHAR(2) NOT NULL,
    "amount" TEXT NOT NULL,
    "person_id" VARCHAR(13) NOT NULL,
    "seq" VARCHAR(15) NOT NULL,

    CONSTRAINT "t_cha_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."t_aer" (
    "id" TEXT NOT NULL,
    "hn" VARCHAR(15) NOT NULL,
    "an" VARCHAR(15) NOT NULL,
    "dateopd" TEXT NOT NULL,
    "authae" VARCHAR(12),
    "aedate" TEXT NOT NULL,
    "aetime" VARCHAR(4) NOT NULL,
    "aetype" VARCHAR(1) NOT NULL,
    "refer_no" VARCHAR(20) NOT NULL,
    "refmaini" VARCHAR(5) NOT NULL,
    "ireftype" VARCHAR(4) NOT NULL,
    "refmaino" VARCHAR(5) NOT NULL,
    "oreftype" VARCHAR(4) NOT NULL,
    "ucae" VARCHAR(1) NOT NULL,
    "emtype" VARCHAR(1) NOT NULL,
    "seq" VARCHAR(15) NOT NULL,
    "aestatus" VARCHAR(1),
    "dalert" TEXT,
    "talert" VARCHAR(4),

    CONSTRAINT "t_aer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."t_adp" (
    "id" TEXT NOT NULL,
    "hn" VARCHAR(15) NOT NULL,
    "an" VARCHAR(15) NOT NULL,
    "dateopd" TEXT NOT NULL,
    "type" VARCHAR(2) NOT NULL,
    "code" VARCHAR(30) NOT NULL,
    "qty" TEXT NOT NULL,
    "rate" TEXT NOT NULL,
    "seq" VARCHAR(15) NOT NULL,
    "cagcode" VARCHAR(10),
    "dose" VARCHAR(10),
    "ca_type" VARCHAR(1),
    "serialno" VARCHAR(24),
    "totcopay" TEXT,
    "use_status" VARCHAR(1),
    "total" TEXT,
    "tmltcode" VARCHAR(15) NOT NULL,
    "status1" VARCHAR(1) NOT NULL,
    "bi" TEXT NOT NULL,
    "clinic" VARCHAR(5),
    "itemsrc" TEXT NOT NULL,
    "provider" VARCHAR(15) NOT NULL,
    "gravida" TEXT,
    "ga_week" TEXT,
    "dcip_e_screen" TEXT,
    "lmp" TEXT,

    CONSTRAINT "t_adp_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."t_lvd" (
    "id" TEXT NOT NULL,
    "seqlvd" VARCHAR(3) NOT NULL,
    "an" VARCHAR(15) NOT NULL,
    "dateout" TEXT NOT NULL,
    "timeout" VARCHAR(4) NOT NULL,
    "datein" TEXT NOT NULL,
    "timein" VARCHAR(4) NOT NULL,
    "qtyday" VARCHAR(3) NOT NULL,

    CONSTRAINT "t_lvd_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."t_dru" (
    "id" TEXT NOT NULL,
    "hcode" VARCHAR(5) NOT NULL,
    "hn" VARCHAR(15) NOT NULL,
    "an" VARCHAR(15) NOT NULL,
    "clinic" VARCHAR(5),
    "person_id" VARCHAR(13) NOT NULL,
    "date_serv" TEXT NOT NULL,
    "did" VARCHAR(30) NOT NULL,
    "didname" VARCHAR(255) NOT NULL,
    "amount" TEXT NOT NULL,
    "drugprice" VARCHAR(14) NOT NULL,
    "drugcost" VARCHAR(14),
    "didstd" VARCHAR(24) NOT NULL,
    "unit" VARCHAR(20) NOT NULL,
    "unit_pack" VARCHAR(20),
    "seq" VARCHAR(15) NOT NULL,
    "drugremark" VARCHAR(2) NOT NULL,
    "pa_no" VARCHAR(9) NOT NULL,
    "totcopay" TEXT,
    "use_status" VARCHAR(1) NOT NULL,
    "total" TEXT,
    "sigcode" VARCHAR(50),
    "sigtext" VARCHAR(255),
    "provider" VARCHAR(15) NOT NULL,

    CONSTRAINT "t_dru_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."t_labfu" (
    "id" TEXT NOT NULL,
    "hcode" VARCHAR(5) NOT NULL,
    "hn" VARCHAR(15) NOT NULL,
    "person_id" VARCHAR(13) NOT NULL,
    "dateserv" TEXT NOT NULL,
    "seq" VARCHAR(15) NOT NULL,
    "labtest" VARCHAR NOT NULL,
    "labresult" TEXT NOT NULL,

    CONSTRAINT "t_labfu_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."f_claim_status" (
    "id" TEXT NOT NULL,
    "status_code" VARCHAR NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "f_claim_status_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."opd_claim_status" (
    "id" TEXT NOT NULL,
    "status_code" TEXT NOT NULL,
    "seq" VARCHAR(16) NOT NULL,
    "status_id" INTEGER NOT NULL,

    CONSTRAINT "opd_claim_status_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."ipd_claim_status" (
    "id" TEXT NOT NULL,
    "status_code" TEXT NOT NULL,
    "an" VARCHAR(16) NOT NULL,
    "status_id" INTEGER NOT NULL,

    CONSTRAINT "ipd_claim_status_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "master_items"."item_group" (
    "id" TEXT NOT NULL,
    "item_group_code" TEXT NOT NULL,
    "item_group_name" TEXT NOT NULL,
    "item_group_active" INTEGER NOT NULL DEFAULT 1,

    CONSTRAINT "item_group_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "master_items"."item_main" (
    "id" TEXT NOT NULL,

    CONSTRAINT "item_main_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "master_items"."lab_main" (
    "id" TEXT NOT NULL,

    CONSTRAINT "lab_main_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "master_items"."drug_free_schedule" (
    "id" TEXT NOT NULL,
    "gpuid" TEXT NOT NULL,
    "generic_name" TEXT NOT NULL,
    "strength" TEXT NOT NULL,
    "dosageform" TEXT NOT NULL,
    "contvalue" TEXT NOT NULL,
    "contunit" TEXT NOT NULL,
    "disp_unit" TEXT NOT NULL,
    "price" TEXT NOT NULL,

    CONSTRAINT "drug_free_schedule_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "master_items"."adp_free_schedule" (
    "id" TEXT NOT NULL,
    "item_code" TEXT NOT NULL,
    "item_name" TEXT NOT NULL,
    "unit" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "price" TEXT NOT NULL,

    CONSTRAINT "adp_free_schedule_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "t_ins_id_key" ON "public"."t_ins"("id");

-- CreateIndex
CREATE UNIQUE INDEX "t_ipd_an_key" ON "public"."t_ipd"("an");

-- CreateIndex
CREATE UNIQUE INDEX "t_adp_id_key" ON "public"."t_adp"("id");

-- CreateIndex
CREATE UNIQUE INDEX "f_claim_status_status_code_key" ON "public"."f_claim_status"("status_code");

-- AddForeignKey
ALTER TABLE "public"."opd_claim_status" ADD CONSTRAINT "opd_claim_status_status_code_fkey" FOREIGN KEY ("status_code") REFERENCES "public"."f_claim_status"("status_code") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ipd_claim_status" ADD CONSTRAINT "ipd_claim_status_status_code_fkey" FOREIGN KEY ("status_code") REFERENCES "public"."f_claim_status"("status_code") ON DELETE RESTRICT ON UPDATE CASCADE;
