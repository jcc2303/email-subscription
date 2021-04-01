import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

process.on('uncaughtException', function(err) {
  console.log(err)
})

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // swagger
  const options = new DocumentBuilder()
    .setTitle('Subscription CRUD')
    .setDescription('The Subscription API description')
    .setVersion('1.0')
    .addTag('subscription')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api/docs', app, document);


  await app.listen(4000);
}
bootstrap();
