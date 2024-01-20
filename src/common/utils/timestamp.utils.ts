import { Injectable } from '@nestjs/common';
import { Timestamp } from 'src/grpc/google/protobuf/timestamp';

@Injectable()
export class TimestampUtils {
  convertToTimestamp(date: Date): Timestamp {
    const seconds = Math.floor(date.getTime() / 1000);
    const nanos = (date.getTime() % 1000) * 1e6;
    return {
      seconds,
      nanos,
    };
  }
}
