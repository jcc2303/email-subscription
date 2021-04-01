import { Param, Body } from '@nestjs/common';
import { Controller, Get, Post, Put, Delete } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('subscription')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getAll() {
    console.log('getAll');    
    return this.appService.getAll().toPromise().then(x => x.subscriptions);
  }

  @Get(':id')
  get(@Param() params) {
    console.log(params);    
    return this.appService.get(params);
  }
  @Post()
  insert(@Body() data) {
    console.log(data);
    data.id=undefined    
    return this.appService.insert(data);
  }
  @Put()
  update(@Body() body) {
    console.log(body);    
    return this.appService.update(body);
  }
  @Delete()
  remove(@Body() body) {
    console.log(body);    
    return this.appService.remove({id: body.id});
  }


}