import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from "@nestjs/microservices";
import { join } from 'path';
import 'dotenv/config'

import { AppController } from './app.controller';
import { AppService } from './app.service';

const host = process.env.SUBSCRIPTION_HOST     
const port = Number(process.env.SUBSCRIPTION_PORT)

console.log(host, port)

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'SUBSCRIPTION_PACKAGE',
        transport: Transport.GRPC,
        options: {
          package: 'proto',
          url: `${host}:${port}`,
          protoPath: join(__dirname, 'proto/subscription.proto'),
        },
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
