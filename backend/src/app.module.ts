import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoansController } from './loans/loans.controller';
import { LoansService } from './loans/loans.service';

@Module({
  imports: [],
  controllers: [AppController, LoansController],
  providers: [AppService, LoansService],
})
export class AppModule {}
