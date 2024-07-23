/*
  Warnings:

  - You are about to drop the column `attendanceSheetCollaboratorId` on the `Workshop` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `Workshop` DROP FOREIGN KEY `Workshop_attendanceSheetCollaboratorId_fkey`;

-- AlterTable
ALTER TABLE `Workshop` DROP COLUMN `attendanceSheetCollaboratorId`;
