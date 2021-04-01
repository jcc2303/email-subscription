// file: subscription.controller.ts
import { Controller } from "@nestjs/common";
import { MessagePattern, GrpcMethod } from "@nestjs/microservices";
import { Metadata, ServerUnaryCall } from 'grpc'

// import { Crud, CrudController } from "@nestjsx/crud";

import { SubscriptionService } from "./subscription.service";

import { Subscription } from "./subscription.entity";


@Controller("subscription")
export class SubscriptionController  {
  constructor(public service: SubscriptionService) {}


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
    let result = await this.service.insert(data)    
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
