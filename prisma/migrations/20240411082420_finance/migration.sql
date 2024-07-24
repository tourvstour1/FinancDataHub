/*
  Warnings:

  - You are about to drop the column `column_condition` on the `t_code_error` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "public"."t_code_error" DROP COLUMN "column_condition",
ADD COLUMN     "main_column_condition" TEXT,
ADD COLUMN     "ref_column_condition" TEXT;
