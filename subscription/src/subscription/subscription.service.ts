import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from 'typeorm';

import { Subscription } from "./subscription.entity";



@Injectable()
export class SubscriptionService {
  constructor(
    @InjectRepository(Subscription)
    private subscriptionsRepository: Repository<Subscription>,
  ) {}

  // protected
  findAll(): Promise<Subscription[]> {
    return this.subscriptionsRepository.find();
  }

  findOne(id: string): Promise<Subscription> {
    return this.subscriptionsRepository.findOne(id);
  }

  async insert(subscription: Subscription): Promise<any> {
    let result = await this.subscriptionsRepository.insert(subscription);

    // const payload: KafkaPayload = {
    //   messageId: '' + new Date().valueOf(),
    //   body: {
    //     value: 'Welcome to newsletter',        
    //     subscription
    //   },
    //   messageType: 'newsletter.welcome.type',
    //   topicName: 'newsletter.topic', // topic name could be any name
    // };
    // // const value = await 
    // this.kafkaService.sendMessage('newsletter.topic', payload); // 'newsletter.fixed.topic'

    return result
  }

  async update(subscription: Subscription): Promise<void> {
    let result = await this.subscriptionsRepository.update(`${subscription.id}`, subscription);
  }


  async remove(subscription: Subscription): Promise<void> {
    await this.subscriptionsRepository.delete(subscription);
  }

}



