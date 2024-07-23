/*
  Warnings:

  - You are about to drop the column `workshopId` on the `AttendanceSheetCollaborator` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `AttendanceSheetCollaborator` DROP FOREIGN KEY `AttendanceSheetCollaborator_workshopId_fkey`;

-- AlterTable
ALTER TABLE `AttendanceSheetCollaborator` DROP COLUMN `workshopId`;
