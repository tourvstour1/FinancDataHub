/*
  Warnings:

  - You are about to drop the column `code_error_condition` on the `t_code_error` table. All the data in the column will be lost.
  - Added the required column `main_column` to the `t_code_error` table without a default value. This is not possible if the table is not empty.
  - Added the required column `main_valuse` to the `t_code_error` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ref_column` to the `t_code_error` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ref_value` to the `t_code_error` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."t_code_error" DROP COLUMN "code_error_condition",
ADD COLUMN     "main_column" TEXT NOT NULL,
ADD COLUMN     "main_valuse" TEXT NOT NULL,
ADD COLUMN     "ref_column" TEXT NOT NULL,
ADD COLUMN     "ref_value" TEXT NOT NULL;
