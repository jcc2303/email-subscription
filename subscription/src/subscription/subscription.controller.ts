// file: subscription.controller.ts
import { Controller } from "@nestjs/common";
import { GrpcMethod, ClientOptions } from "@nestjs/microservices";
import { Client, ClientKafka, Ctx, EventPattern, KafkaContext, MessagePattern, Payload, Transport } from '@nestjs/microservices';
import { Metadata, ServerUnaryCall } from 'grpc'

// import { Crud, CrudController } from "@nestjsx/crud";

import { SubscriptionService } from "./subscription.service";

import { Subscription } from "./subscription.entity";

import 'dotenv/config'

const kafka_service = process.env.KAFKA_SERVICE     
console.log(kafka_service);


export const microserviceConfig: ClientOptions =  {
  transport: Transport.KAFKA,
  options: {
    client: {
      clientId: 'emailer-client', // hero-server
      brokers: [kafka_service],// 'localhost:9092'
    },
    consumer: {
      groupId: 'emailer',
      allowAutoTopicCreation: true,
    }
  }
} 



@Controller("subscription")
export class SubscriptionController  {
  constructor(public service: SubscriptionService) {}

  // this is alternative to Module creation client
  @Client(microserviceConfig)
  client: ClientKafka;


  @GrpcMethod('SubscriptionService', 'GetAll')
  async getAll( data: {}, metadata: Metadata, call: ServerUnaryCall<any>): Promise<any> {
    let result = await this.service.findAll()
    console.log('getAll', result);
    return {subscriptions: result} 
  }

  @GrpcMethod('SubscriptionService', 'Get')
  get( data: Subscription, metadata: Metadata, call: ServerUnaryCall<any>): Promise<Subscription> {
    return this.service.findOne(`${data.id}`)
  }

  @GrpcMethod('SubscriptionService', 'Insert')
  async insert( data: Subscription, metadata: Metadata, call: ServerUnaryCall<any>): Promise<Subscription> {
    console.log('insert', data);
    let result = await this.service.insert(data)   
    console.log('inserted in db', result);
    let body = {
           value: 'Welcome to newsletter',        
           data
    }     
    this.client.emit<string>('newsletter.topic', JSON.stringify(body) );    
    console.log('emitted to queue to :', 'newsletter.topic');

    return Object.assign(data,result.identifiers[0])
  }

  @GrpcMethod('SubscriptionService', 'Update')
  async update( data: Subscription, metadata: Metadata, call: ServerUnaryCall<any>): Promise<void> {
    await this.service.update(data)    
  }

  @GrpcMethod('SubscriptionService', 'Remove')
  async remove( data: Subscription, metadata: Metadata, call: ServerUnaryCall<any>): Promise<Subscription> {
    let result = await this.service.remove(data)    
    return data
  }




}
