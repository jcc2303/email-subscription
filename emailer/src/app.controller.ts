import { Controller, Get } from '@nestjs/common';
import { AppService } from './default/app.service';

import { Client, ClientKafka, ClientOptions, Ctx, EventPattern, KafkaContext, MessagePattern, Payload, Transport } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  



  @MessagePattern('newsletter.topic') // hero.kill.dragon
  killDragon(@Payload() message, @Ctx() context: KafkaContext) {
    console.log(`Topic: ${context.getTopic()}`, message);

    return [];    
  }


}
