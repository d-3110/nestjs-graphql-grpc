// src/common/common.module.ts

import { Module } from '@nestjs/common';
import { TimestampUtils } from './utils/timestamp.utils';

@Module({
  providers: [TimestampUtils],
  exports: [TimestampUtils],
})
export class CommonModule {}
