import { PartialType } from '@nestjs/swagger';
import { CreateAttendanceSheetDto } from './create-attendance-sheet.dto';

export class UpdateAttendanceSheetDto extends PartialType(CreateAttendanceSheetDto) {}
