import { Module } from '@nestjs/common';
import { HistoriesService } from './histories.service';
import { HistoriesResolver } from './histories.resolver';

@Module({
  providers: [HistoriesResolver, HistoriesService],
})
export class HistoriesModule {}
