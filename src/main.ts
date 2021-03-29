import { NestFactory } from '@nestjs/core';
import { SubscriptionModule } from './subscription/subscription.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(SubscriptionModule);

  const options = new DocumentBuilder()
    .setTitle('Subscription CRUD')
    .setDescription('The Subscription API description')
    .setVersion('1.0')
    .addTag('subscription')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api/docs', app, document);

  await app.listen(3000);
}
bootstrap();
