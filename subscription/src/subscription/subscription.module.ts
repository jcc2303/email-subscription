// file: subscription.module.ts
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { Subscription } from "./subscription.entity";
import { SubscriptionService } from "./subscription.service";
import { SubscriptionController } from "./subscription.controller";



import 'dotenv/config'

const host = process.env.DATABASE_HOST     
const port = Number(process.env.DATABASE_PORT)
const username = process.env.DATABASE_USER
const password = process.env.DATABASE_PASSWORD
const database = process.env.DATABASE_DB
console.log('database',host, port);


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host,
      port,
      username,
      password,
      database,
      entities: [Subscription],
      synchronize: true,
    }), 
    TypeOrmModule.forFeature([Subscription]),
  ],
  providers: [SubscriptionService],
  exports: [SubscriptionService],
  controllers: [SubscriptionController],
})
export class SubscriptionModule {}
