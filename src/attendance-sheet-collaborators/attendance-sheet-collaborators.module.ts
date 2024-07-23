import { Module } from '@nestjs/common';
import { AttendanceSheetCollaboratorsService } from './attendance-sheet-collaborators.service';
import { AttendanceSheetCollaboratorsController } from './attendance-sheet-collaborators.controller';

@Module({
  controllers: [AttendanceSheetCollaboratorsController],
  providers: [AttendanceSheetCollaboratorsService],
})
export class AttendanceSheetCollaboratorsModule {}
