/*
  Warnings:

  - The primary key for the `Data` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id_data` on the `Data` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Data" DROP CONSTRAINT "Data_pkey",
DROP COLUMN "id_data",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Data_pkey" PRIMARY KEY ("id");
