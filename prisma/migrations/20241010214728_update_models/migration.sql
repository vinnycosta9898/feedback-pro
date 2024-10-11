/*
  Warnings:

  - Made the column `stabeshimentId` on table `questions` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "questions" DROP CONSTRAINT "questions_stabeshimentId_fkey";

-- AlterTable
ALTER TABLE "questions" ALTER COLUMN "stabeshimentId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "questions" ADD CONSTRAINT "questions_stabeshimentId_fkey" FOREIGN KEY ("stabeshimentId") REFERENCES "stabelishiments"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
