/*
  Warnings:

  - You are about to alter the column `boostPoint` on the `Launchpad` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.

*/
-- AlterTable
ALTER TABLE "Launchpad" ADD COLUMN     "blockchain" INTEGER NOT NULL DEFAULT 1,
ALTER COLUMN "boostPoint" SET DATA TYPE INTEGER;
