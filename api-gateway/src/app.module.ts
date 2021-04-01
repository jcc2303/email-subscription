import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from "@nestjs/microservices";
import { join } from 'path';

import { AppController } from './app.controller';
import { AppService } from './app.service';


@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'SUBSCRIPTION_PACKAGE',
        transport: Transport.GRPC,
        options: {
          package: 'proto',
          protoPath: join(__dirname, 'proto/subscription.proto'),
        },
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
