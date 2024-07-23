/*
  Warnings:

  - You are about to drop the column `collaboratorId` on the `AttendanceSheet` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `AttendanceSheet` DROP FOREIGN KEY `AttendanceSheet_collaboratorId_fkey`;

-- AlterTable
ALTER TABLE `AttendanceSheet` DROP COLUMN `collaboratorId`;
