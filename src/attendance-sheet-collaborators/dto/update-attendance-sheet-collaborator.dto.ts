import { PartialType } from '@nestjs/swagger';
import { CreateAttendanceSheetCollaboratorDto } from './create-attendance-sheet-collaborator.dto';

export class UpdateAttendanceSheetCollaboratorDto extends PartialType(
  CreateAttendanceSheetCollaboratorDto,
) {}
