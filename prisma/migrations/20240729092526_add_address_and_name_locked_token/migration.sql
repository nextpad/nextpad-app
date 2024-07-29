/*
  Warnings:

  - You are about to drop the column `amount` on the `TokenLocked` table. All the data in the column will be lost.
  - You are about to drop the column `lockId` on the `TokenLocked` table. All the data in the column will be lost.
  - Added the required column `address` to the `TokenLocked` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `TokenLocked` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `TokenLocked` DROP COLUMN `amount`,
    DROP COLUMN `lockId`,
    ADD COLUMN `address` VARCHAR(191) NOT NULL,
    ADD COLUMN `name` VARCHAR(191) NOT NULL;
