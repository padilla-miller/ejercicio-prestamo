import { Injectable } from '@nestjs/common';
import { CalculateLoanRequestDto } from './dto/calulateLoanRequest.dto';
import { CalculateLoanResponseDto } from './dto/calulateLoanResponse.dto';

@Injectable()
export class LoansService {
  calculateLoan(
    calculateLoan: CalculateLoanRequestDto,
  ): CalculateLoanResponseDto {
    let dues = [];
    const baseValue = calculateLoan.loan / calculateLoan.dues;
    const interestTotal = (calculateLoan.loan * 2) / 100;
    const interestByDue = interestTotal / calculateLoan.dues;
    const totalLoan = calculateLoan.loan + interestTotal;
    for (let i = 1; i <= calculateLoan.dues; i++) {
      dues.push({
        due: i,
        baseValue: baseValue,
        interest: interestByDue,
        value: baseValue + interestByDue,
      });
    }
    let response = new CalculateLoanResponseDto();
    response.dues = dues;
    response.total = totalLoan;
    return response;
  }
}
