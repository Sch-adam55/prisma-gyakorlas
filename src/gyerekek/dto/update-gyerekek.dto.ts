
import { IsBoolean, IsOptional, IsString, MaxLength } from 'class-validator';

export class UpdateGyerekekDto {
  @IsOptional()
  @IsString()
  @MaxLength(50)
  nev?: string;

  @IsOptional()
  @IsString()
  @MaxLength(100)
  lakcim?: string;

  @IsOptional()
  @IsBoolean()
  joVolt?: boolean;

  @IsOptional()
  @IsString()
  @MaxLength(50)
  kertJatek?: string;
}
