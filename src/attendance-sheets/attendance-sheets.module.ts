import { Module } from '@nestjs/common';
import { AttendanceSheetsService } from './attendance-sheets.service';
import { AttendanceSheetsController } from './attendance-sheets.controller';

@Module({
  controllers: [AttendanceSheetsController],
  providers: [AttendanceSheetsService],
})
export class AttendanceSheetsModule {}
