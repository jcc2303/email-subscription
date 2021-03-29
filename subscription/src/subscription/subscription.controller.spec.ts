// file: subscription.controller.spec.ts
import { Test, TestingModule } from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';

import { SubscriptionController } from './subscription.controller';
import { Subscription } from './subscription.entity';
import { SubscriptionService } from './subscription.service';

describe('SubscriptionController', () => {
  let subscriptionController: SubscriptionController;
  let subscription: TestingModule;

  beforeEach(async () => {
    subscription = await Test.createTestingModule({
      imports: [TypeOrmModule.forRoot(), TypeOrmModule.forFeature([Subscription])],
      controllers: [SubscriptionController],
      providers: [SubscriptionService],
    }).compile();

    subscriptionController = subscription.get<SubscriptionController>(SubscriptionController);
  });

  afterEach(async () => {
    subscription.close();
  });

  describe('root', () => {
    it('should be defined', () => {
      expect(subscriptionController).toBeDefined();
    });  
  });
});

