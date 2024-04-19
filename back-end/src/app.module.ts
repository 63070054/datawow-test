import { Module } from '@nestjs/common';
import { HistoryModule } from './history/history.module';
import { ConcertModule } from './concert/concert.module';

@Module({
  imports: [HistoryModule, ConcertModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
