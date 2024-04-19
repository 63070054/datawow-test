import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConcertModule } from './concert/concert.module';
import { HistoryModule } from './history/history.module';

@Module({
  imports: [ConcertModule, HistoryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
