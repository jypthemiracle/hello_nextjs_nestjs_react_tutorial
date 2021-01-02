import { Body, Controller, Get, HttpCode, Param, Post, Redirect, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from 'express';
import { CreateCatDto } from './CreateCatDto'

@Controller('cats')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('all')
  findAll(): string {
    return 'This action returns all cats'
  }

  @Post('edit')
  editInfo(@Req() request: Request): string {
    console.log(request['name'])
    return request['name']
  }

  @Get('profile')
  findCat(): object {
      return {
          'id': 1,
          'name': 'meowmeow',
          'age': 2
    }
  }

  @Get(':id')
  findOne(@Param() params): string {
    return `This action returns a #${params.id} cat`
  }

  @Post('create')
  createBody(@Body() createCatDto: CreateCatDto) {
    return Object.assign({
      statusCode: 200,
      data: createCatDto,
      statusMsg: 'created successfully'
    })
  }
}
