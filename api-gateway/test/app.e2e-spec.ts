// subscription.e2e-spec.ts
import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule as SubscriptionModule } from './../src/app.module';


/**
 * @jest-environment jsdom
 */
describe('SubscriptionController (e2e)', () => {
  let subscription: INestApplication;
  let server

  beforeAll(async() => {
    // TODO: recreate database

    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [SubscriptionModule],
    }).compile();

    subscription = moduleFixture.createNestApplication();
    server = subscription.getHttpServer()
    await subscription.init();

  })

  afterAll(async() => {
    await server.close();
    await subscription.close();
    await new Promise(resolve => setTimeout(() => resolve(undefined), 500)); // avoid jest open handle error
  });

  // beforeEach(async () => {});

  describe('/ (GET) subscription', () => {  
    it('/ (GET) subscription', () => {
      return request(server)
        .get('/subscription')
        .set('Accept', 'application/json')
        .expect(200)
        .type('array')
        .expect('Content-Type', /json/)
        // .then((response) => {
        //   console.log(response.body);
        // });
    });
  })

  describe('/ (GET) one subscription', () => {  
    it('/ (GET) one subscription', () => {
      return request(server)
        .get('/subscription/1')
        .set('Accept', 'application/json')
        .expect(200)
        .type('object')
        .expect('Content-Type', /json/)
        // .then((response) => {
        //   console.log(response.body);
        // });
    });
  })


  describe('/ (POST) subscription', () => {  
    it('/ (POST) subscription',async () => {
      await request(server)
        .post('/subscription')
        .send({email:'email', born:'1981-03-23', consent: true, campaign:'campaign', firstName:'firstName', gender:'male'}) // x-www-form-urlencoded upload
        .expect(201) 
    });
  })


  describe('/ (DELETE) subscription', () => {  
    it('/ (DELETE) subscription',async () => {
      request(server)
      .delete(`/subscription/${1}`)
      .expect(200)
    })
  });


});
