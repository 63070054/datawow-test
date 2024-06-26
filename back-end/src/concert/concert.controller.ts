import { Body, Controller, Delete, Get, Param, Post, Query, Req, UseInterceptors } from '@nestjs/common';
import { ConcertService } from './concert.service';
import { Concert } from '@prisma/client';
import { HttpRequestInterceptor } from 'src/interceptor/HttpRequestInterceptor';

@Controller("concert")
export class ConcertController {
  constructor(private readonly appService: ConcertService) {}

  @Post()
  @UseInterceptors(HttpRequestInterceptor)
  async createConcert(@Req() req, @Body() createConcertReq: Concert): Promise<any> {
    if (req.user.role === "admin") {
      return await this.appService.createConcert(createConcertReq);
    } else {
      return "No permission"
    }
  }

  @Get()
  @UseInterceptors(HttpRequestInterceptor)
  async getConcerts(@Req() req): Promise<any> {
    if (req.user.role === "admin") {
      return await this.appService.getConcerts();
    } else {
      return "No permission"
    }
  }

  @Delete(":id")
  @UseInterceptors(HttpRequestInterceptor)
  async deleteConcert(@Req() req, @Param('id') id: string): Promise<any> {
    if (req.user.role === "admin") {
      const concertId = parseInt(id);
      return await this.appService.deleteConcert(concertId);
    } else {
      return "No permission"
    }
  }

}
