/*
  Warnings:

  - Added the required column `column_condition` to the `t_code_error` table without a default value. This is not possible if the table is not empty.
  - Added the required column `main_table` to the `t_code_error` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ref_table` to the `t_code_error` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."t_code_error" ADD COLUMN     "column_condition" TEXT NOT NULL,
ADD COLUMN     "main_table" TEXT NOT NULL,
ADD COLUMN     "ref_table" TEXT NOT NULL;
