import { Param, Body, UseFilters, HttpException, HttpStatus } from '@nestjs/common';
import { Controller, Get, Post, Put, Delete } from '@nestjs/common';
import { AppService } from './app.service';
import { HttpExceptionFilter } from './exceptions/exception.filter';
import {IllegalArgumentException} from './exceptions/index'
@Controller('subscription')
@UseFilters(new HttpExceptionFilter())
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getAll() {
    console.log('getAll');    
    let result = await this.appService.getAll().toPromise()
    console.log('getAll-end', result);    

    // implement security
    // throw new HttpException({ status: HttpStatus.FORBIDDEN, error: 'Access to this site is forbidden',}, 403);

    return result.subscriptions;
  }

  @Get(':id')
  get(@Param() params) {
    return this.appService.get(params);
  }
  @Post()
  insert(@Body() body) {
    if(!body || !body.id) throw new IllegalArgumentException('id is required')
    body.id=undefined    
    return this.appService.insert(body);
  }
  @Put()
  update(@Body() body) {
    if(!body || !body.id) throw new IllegalArgumentException('id is required')
    return this.appService.update(body);
  }
  @Delete()
  remove(@Body() body) {
    return this.appService.remove({id: body.id});
  }


}