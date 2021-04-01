import { OnModuleInit } from '@nestjs/common';
import { Injectable, Inject } from '@nestjs/common';
import { ClientGrpc, ClientProxy } from "@nestjs/microservices";
import { Observable } from 'rxjs';
import { SubscriptionService } from './proto/subscription.interfaces';

@Injectable()
export class AppService implements OnModuleInit {
  private subscriptionService: SubscriptionService;

  constructor(@Inject('SUBSCRIPTION_PACKAGE') private client: ClientGrpc) {}

  onModuleInit() {
    this.subscriptionService = this.client.getService<SubscriptionService>('SubscriptionService');
  }


  getAll(): Observable<any> {
    let result = this.subscriptionService.getAll({})
    return result
  }

  get(data): Observable<string> {
    return this.subscriptionService.get(data);
  }

  insert(data): Observable<string> {
    return this.subscriptionService.insert(data);
  }

  update(data): Observable<string> {
    return this.subscriptionService.update(data);
  }

  remove(data): Observable<string> {
    return this.subscriptionService.remove(data);
  }

}
