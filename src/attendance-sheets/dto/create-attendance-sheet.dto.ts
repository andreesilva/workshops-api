import { ApiProperty } from '@nestjs/swagger';

export class CreateAttendanceSheetDto {
  id: number;
  @ApiProperty({
    example: 4,
    required: true,
  })
  workshopId: number;
  createdAt: Date;
  updateAt: Date;
}
