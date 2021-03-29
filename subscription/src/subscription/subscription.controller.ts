// file: subscription.controller.ts
import { Controller } from "@nestjs/common";
import { Crud, CrudController } from "@nestjsx/crud";

import { Subscription } from "./subscription.entity";
import { SubscriptionService } from "./subscription.service";

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
}
