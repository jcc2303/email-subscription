import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

import 'dotenv/config'
import { NestApplicationContextOptions } from '@nestjs/common/interfaces/nest-application-context-options.interface';

const kafka_service = process.env.KAFKA_SERVICE     
console.log(kafka_service);


export const microserviceConfig: NestApplicationContextOptions & MicroserviceOptions =  {
  transport: Transport.KAFKA,
  options: {
    client: {
      clientId: 'emailer-client', // hero-server
      brokers: [kafka_service],// 'localhost:9092'
    },
    consumer: {
      groupId: 'emailer',
      allowAutoTopicCreation: true,
  },    
  }
} 



async function bootstrap() {
  // const app = await NestFactory.create(AppModule);
  // app.connectMicroservice(microserviceConfig);
  // await app.startAllMicroservicesAsync();
  // await app.listen(3000);

  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, microserviceConfig);

  await app.listen(() => console.log('micoroservice running'))  
}
bootstrap();
