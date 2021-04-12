import { Injectable } from '@nestjs/common';
import { Transform } from 'class-transformer';
import { IsNotEmpty, IsNumberString, Min, Max } from 'class-validator';

@Injectable()
export class CalculateLoanRequestDto {
  @IsNotEmpty()
  @Transform(({ value }) => parseFloat(value), {
    toClassOnly: true,
  })
  @Min(5000000)
  @Max(1000000000)
  loan: number;

  @IsNotEmpty()
  @Transform(({ value }) => parseFloat(value), {
    toClassOnly: true,
  })
  @Min(1)
  @Max(480)
  dues: number;
}
