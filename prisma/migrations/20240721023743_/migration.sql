/*
  Warnings:

  - You are about to drop the column `attendanceSheetId` on the `Workshop` table. All the data in the column will be lost.
  - Added the required column `workshopId` to the `AttendanceSheet` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Workshop` DROP FOREIGN KEY `Workshop_attendanceSheetId_fkey`;

-- AlterTable
ALTER TABLE `AttendanceSheet` ADD COLUMN `workshopId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `Workshop` DROP COLUMN `attendanceSheetId`;

-- AddForeignKey
ALTER TABLE `AttendanceSheet` ADD CONSTRAINT `AttendanceSheet_workshopId_fkey` FOREIGN KEY (`workshopId`) REFERENCES `Workshop`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
