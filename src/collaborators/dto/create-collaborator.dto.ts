import { ApiProperty } from '@nestjs/swagger';

export class CreateCollaboratorDto {
  id: number;

  @ApiProperty({
    example: 'helena',
    required: true,
  })
  name: string;
}
