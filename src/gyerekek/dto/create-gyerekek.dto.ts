import { IsBoolean, IsOptional, IsString, MaxLength, MinLength } from 'class-validator';

export class CreateGyerekekDto {
  @IsString()
  @MinLength(3)
  @MaxLength(50)
  nev: string;

  @IsString()
  @MinLength(5)
  @MaxLength(100)
  lakcim: string;

  @IsBoolean()
  joVolt: boolean;

  @IsOptional()
  @IsString()
  @MaxLength(50)
  kertJatek?: string;
}
