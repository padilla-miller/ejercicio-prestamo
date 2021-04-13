import { Body, Controller, Post } from '@nestjs/common';
import { CalculateLoanRequestDto } from './dto/calulateLoanRequest.dto';
import { LoansService } from './loans.service';

@Controller('loans')
export class LoansController {
  constructor(private loansService: LoansService) {}
  @Post()
  async calculateLoan(
    @Body() calculateLoan: CalculateLoanRequestDto,
  ): Promise<any> {
    return await this.loansService.calculateLoan(calculateLoan);
  }
}
