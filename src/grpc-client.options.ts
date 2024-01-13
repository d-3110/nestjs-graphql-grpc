import { ClientOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

export const GrpcClientOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    url: '0.0.0.0:5000',
    package: ['user', 'meal', 'meal_tag', 'tag', 'history', 'enums'],
    protoPath: [
      join(__dirname, './proto/enums/meal_type.proto'),
      join(__dirname, './proto/user.proto'),
      join(__dirname, './proto/meal.proto'),
      join(__dirname, './proto/meal_tag.proto'),
      join(__dirname, './proto/tag.proto'),
      join(__dirname, './proto/history.proto'),
    ],
  },
};
