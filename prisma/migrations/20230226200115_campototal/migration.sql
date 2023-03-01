/*
  Warnings:

  - Added the required column `total` to the `Orden` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Orden` ADD COLUMN `total` DOUBLE NOT NULL;
