// file: subscription.controller.ts
import { Controller } from "@nestjs/common";
import { MessagePattern } from "@nestjs/microservices";

import { Crud, CrudController } from "@nestjsx/crud";

import { Subscription } from "./subscription.entity";
import { SubscriptionService } from "./subscription.service";

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
}
