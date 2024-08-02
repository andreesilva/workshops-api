import { ApiProperty } from '@nestjs/swagger';

export class CreateAttendanceSheetCollaboratorDto {
  @ApiProperty({
    example: 6,
    required: true,
  })
  attendanceSheetId: number;
  @ApiProperty({
    example: 4,
    required: true,
  })
  collaboratorId: number;
}
