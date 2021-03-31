import { NestFactory } from '@nestjs/core';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';

import { SubscriptionModule } from './subscription/subscription.module';


async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(SubscriptionModule, 
    { transport: Transport.TCP },);

  await app.listen(() => console.log('Microservice is listening')); // 3000, 
}
bootstrap();

