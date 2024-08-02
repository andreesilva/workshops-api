import { ApiProperty } from '@nestjs/swagger';

export class CreateWorkshopDto {
  id: number;
  @ApiProperty({
    example: 'Inteligencia Arificial',
    required: true,
  })
  name: string;
  @ApiProperty({
    example: '23-08-2024',
    required: true,
  })
  dateCompletion: string;
  @ApiProperty({
    example: 'Futuro da IA no mercado de negocios',
    required: true,
  })
  description: string;
  createdAt: Date;
  updateAt: Date;
}
