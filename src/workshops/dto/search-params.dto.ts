import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class SearchParamsDto {
  @IsOptional()
  @IsNotEmpty()
  @IsString()
  textSearch?: string | null;

  @IsOptional()
  @IsNumber()
  upvotesGreaterThan?: number | null;
}
