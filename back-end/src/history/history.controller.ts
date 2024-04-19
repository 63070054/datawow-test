import { Body, Controller, Get, Param, Post, Query, Req, UseInterceptors } from '@nestjs/common';
import { HistoryService } from './history.service';
import { Concert, History } from '@prisma/client';
import { HttpRequestInterceptor } from 'src/interceotor/HttpRequestInterceptor';

@Controller("history")
export class HistoryController {
  constructor(private readonly historyService: HistoryService) {}

  @Post()
  @UseInterceptors(HttpRequestInterceptor)
  async createHistory(@Req() req, @Body() createHistoryReq: History): Promise<any> {
    if (req.user.role === "admin") {
      return await this.historyService.createHistory(req.user, createHistoryReq);
    } else {
      return "No permission"
    }
  }

  @Get()
  @UseInterceptors(HttpRequestInterceptor)
  async getConcerts(@Req() req): Promise<any> {
    if (req.user.role === "admin") {
      return await this.historyService.getHistories();
    } else {
      return "No permission"
    }
  }

}
