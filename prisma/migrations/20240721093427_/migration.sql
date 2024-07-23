-- DropForeignKey
ALTER TABLE `AttendanceSheetCollaborator` DROP FOREIGN KEY `AttendanceSheetCollaborator_collaboratorId_fkey`;

-- AlterTable
ALTER TABLE `AttendanceSheetCollaborator` ADD COLUMN `workshopId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `AttendanceSheetCollaborator` ADD CONSTRAINT `AttendanceSheetCollaborator_collaboratorId_fkey` FOREIGN KEY (`collaboratorId`) REFERENCES `Collaborator`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `AttendanceSheetCollaborator` ADD CONSTRAINT `AttendanceSheetCollaborator_workshopId_fkey` FOREIGN KEY (`workshopId`) REFERENCES `Workshop`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
