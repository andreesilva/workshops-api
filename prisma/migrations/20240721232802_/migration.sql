-- AlterTable
ALTER TABLE `AttendanceSheet` ADD COLUMN `collaboratorId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `AttendanceSheet` ADD CONSTRAINT `AttendanceSheet_collaboratorId_fkey` FOREIGN KEY (`collaboratorId`) REFERENCES `Collaborator`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
