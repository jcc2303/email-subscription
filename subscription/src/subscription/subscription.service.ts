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

  findAll(): Promise<Subscription[]> {
    return this.subscriptionsRepository.find();
  }

  findOne(id: string): Promise<Subscription> {
    return this.subscriptionsRepository.findOne(id);
  }

  async insert(subscription: Subscription): Promise<any> {
    return await this.subscriptionsRepository.insert(subscription);
  }

  async update(subscription: Subscription): Promise<void> {
    let result = await this.subscriptionsRepository.update(`${subscription.id}`, subscription);
  }


  async remove(subscription: Subscription): Promise<void> {
    await this.subscriptionsRepository.delete(subscription);
  }

}



