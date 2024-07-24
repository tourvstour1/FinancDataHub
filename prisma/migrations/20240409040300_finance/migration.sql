/*
  Warnings:

  - The primary key for the `adp_free_schedule` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `adp_free_schedule` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `drug_free_schedule` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `drug_free_schedule` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `item_group` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `item_group` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `item_main` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `item_main` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `lab_main` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `lab_main` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "master_items"."adp_free_schedule" DROP CONSTRAINT "adp_free_schedule_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "adp_free_schedule_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "master_items"."drug_free_schedule" DROP CONSTRAINT "drug_free_schedule_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "drug_free_schedule_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "master_items"."item_group" DROP CONSTRAINT "item_group_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "item_group_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "master_items"."item_main" DROP CONSTRAINT "item_main_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "item_main_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "master_items"."lab_main" DROP CONSTRAINT "lab_main_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "lab_main_pkey" PRIMARY KEY ("id");
