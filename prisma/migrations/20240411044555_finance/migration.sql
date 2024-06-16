/*
  Warnings:

  - You are about to drop the column `main_valuse` on the `t_code_error` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "public"."t_code_error" DROP COLUMN "main_valuse",
ADD COLUMN     "main_value" TEXT,
ALTER COLUMN "code_error_description" DROP NOT NULL,
ALTER COLUMN "column_condition" DROP NOT NULL,
ALTER COLUMN "main_table" DROP NOT NULL,
ALTER COLUMN "ref_table" DROP NOT NULL,
ALTER COLUMN "main_column" DROP NOT NULL,
ALTER COLUMN "ref_column" DROP NOT NULL,
ALTER COLUMN "ref_value" DROP NOT NULL;
