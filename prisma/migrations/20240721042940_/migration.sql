/*
  Warnings:

  - A unique constraint covering the columns `[workshopId]` on the table `AttendanceSheet` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `AttendanceSheet_workshopId_key` ON `AttendanceSheet`(`workshopId`);
