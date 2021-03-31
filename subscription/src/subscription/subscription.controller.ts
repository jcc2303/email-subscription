// file: subscription.controller.ts
import { Controller } from "@nestjs/common";
import { MessagePattern, GrpcMethod } from "@nestjs/microservices";
import { Metadata, ServerUnaryCall } from 'grpc'

import { Crud, CrudController } from "@nestjsx/crud";

import { SubscriptionService } from "./subscription.service";

import { Subscription } from "./subscription.entity";
import { Hero, HeroById } from './Hero';


import { of } from "rxjs";
import { delay } from "rxjs/operators";

@Crud({
  model: {
    type: Subscription, // Entity|Model|DTO
  },
  routes: {
    exclude: ['createManyBase', 'replaceOneBase', 'updateOneBase'],
  },
  //validation: false,    
})
@Controller("subscription")
export class SubscriptionController implements CrudController<Subscription> {
  constructor(public service: SubscriptionService) {}

  @MessagePattern({ cmd: "ping" })
  ping(_: any) {
    return of("pong").pipe(delay(1000));
  }  

  @GrpcMethod('HeroesService', 'FindOne')
  findOne(data: HeroById, metadata: Metadata, call: ServerUnaryCall<any>): Hero {
    const items = [
      { id: 1, name: 'John' },
      { id: 2, name: 'Doe' },
    ];
    return items.find(({ id }) => id === data.id);
  }


}
