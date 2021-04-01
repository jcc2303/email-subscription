import { NestFactory } from '@nestjs/core';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';
import { join } from 'path';

import { SubscriptionModule } from './subscription/subscription.module';


async function bootstrap() {
  console.log(__dirname);
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(SubscriptionModule, { 
      transport: Transport.GRPC, 
      options: { package: 'proto', protoPath: join(__dirname, 'proto/subscription.proto') } 
    },);

  await app.listen(() => console.log('Microservice is listening')); // 3000, 
}
bootstrap();

