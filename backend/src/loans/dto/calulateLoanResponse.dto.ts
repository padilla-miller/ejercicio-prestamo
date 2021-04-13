import { Injectable } from '@nestjs/common';

@Injectable()
export class CalculateLoanResponseDto {
  dues: any[];
  total: number;
}
