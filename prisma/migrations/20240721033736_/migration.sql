/*
  Warnings:

  - You are about to drop the column `collaboratorId` on the `AttendanceSheet` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `AttendanceSheet` DROP FOREIGN KEY `AttendanceSheet_collaboratorId_fkey`;

-- AlterTable
ALTER TABLE `AttendanceSheet` DROP COLUMN `collaboratorId`;

-- CreateTable
CREATE TABLE `AttendanceSheetCollaborator` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `attendanceSheetId` INTEGER NOT NULL,
    `collaboratorId` INTEGER NOT NULL,
    `createAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updateAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `AttendanceSheetCollaborator` ADD CONSTRAINT `AttendanceSheetCollaborator_attendanceSheetId_fkey` FOREIGN KEY (`attendanceSheetId`) REFERENCES `AttendanceSheet`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `AttendanceSheetCollaborator` ADD CONSTRAINT `AttendanceSheetCollaborator_collaboratorId_fkey` FOREIGN KEY (`collaboratorId`) REFERENCES `Workshop`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
