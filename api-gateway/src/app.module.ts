import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from "@nestjs/microservices";
import { join } from 'path';

import { AppController } from './app.controller';
import { AppService } from './app.service';


@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'HERO_PACKAGE',
        transport: Transport.GRPC,
        options: {
          package: 'hero',
          protoPath: join(__dirname, 'hero/hero.proto'),
        },
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
