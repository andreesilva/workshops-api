-- AlterTable
ALTER TABLE `Workshop` ADD COLUMN `attendanceSheetCollaboratorId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `Workshop` ADD CONSTRAINT `Workshop_attendanceSheetCollaboratorId_fkey` FOREIGN KEY (`attendanceSheetCollaboratorId`) REFERENCES `AttendanceSheetCollaborator`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
