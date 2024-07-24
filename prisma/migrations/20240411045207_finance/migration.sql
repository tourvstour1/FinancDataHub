/*
  Warnings:

  - You are about to drop the column `main_value` on the `t_code_error` table. All the data in the column will be lost.
  - You are about to drop the column `ref_value` on the `t_code_error` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "public"."t_code_error" DROP COLUMN "main_value",
DROP COLUMN "ref_value";
