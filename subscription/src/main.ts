import { NestFactory } from '@nestjs/core';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

import { SubscriptionModule } from './subscription/subscription.module';


async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(SubscriptionModule, 
    { transport: Transport.TCP },);

  const options = new DocumentBuilder()
    .setTitle('Subscription CRUD')
    .setDescription('The Subscription API description')
    .setVersion('1.0')
    .addTag('subscription')
    .build();
  // const document = SwaggerModule.createDocument(app, options);
  // SwaggerModule.setup('api/docs', app, document);

  await app.listen(() => console.log('Microservice is listening')); // 3000, 
}
bootstrap();

