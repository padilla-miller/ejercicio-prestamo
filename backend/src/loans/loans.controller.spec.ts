import { Test, TestingModule } from '@nestjs/testing';
import { CalculateLoanRequestDto } from './dto/calulateLoanRequest.dto';
import { CalculateLoanResponseDto } from './dto/calulateLoanResponse.dto';
import { LoansController } from './loans.controller';
import { LoansService } from './loans.service';

const getRequestLoan = (dues, loan) => {
  let res = new CalculateLoanRequestDto();
  res.dues = dues;
  res.loan = loan;
  return res;
};

const getResponseLoanBasic = () => {
  let loanResponse = new CalculateLoanResponseDto();
  loanResponse.dues = [
    {
      due: 1,
      baseValue: 2500000,
      interest: 50000,
      value: 2550000,
    },
    {
      due: 2,
      baseValue: 2500000,
      interest: 50000,
      value: 2550000,
    },
  ];
  loanResponse.total = 5100000;
  return loanResponse;
};

describe('LoansController', () => {
  let controller: LoansController;
  let service: LoansService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LoansController],
      providers: [LoansService],
    }).compile();

    controller = module.get<LoansController>(LoansController);
    service = module.get<LoansService>(LoansService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('calculate loan 5` to 2 dues', async () => {
    const loanBasicRequest = getRequestLoan(2, 5000000);
    const loanBasicResponse = getResponseLoanBasic();
    const response = await controller.calculateLoan(loanBasicRequest);
    expect(response).toEqual(loanBasicResponse);
  });

  it('calculate loan without parameters', async () => {
    const loanErrorRequest = getRequestLoan(0, 0);
    const response = await controller.calculateLoan(loanErrorRequest);
    expect(response.total).toEqual(0);
    expect(response.dues).toEqual([]);
  });
});
