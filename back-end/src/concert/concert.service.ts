import { HttpStatus, Injectable } from '@nestjs/common';
import { Concert } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ConcertService {

  constructor(private readonly prisma: PrismaService) { }

  async getConcerts(): Promise<Concert[]> {
    const conerts: Concert[] = await this.prisma.concert.findMany({
      include: {
        usersReserve: true
      }
    });
    return conerts;
  }

  async createConcert(concert: Concert): Promise<any> {
    try {
      const status = await this.prisma.concert.create({
        data: concert
      })

      console.log('status: ' + status)

      return {
        status: HttpStatus.OK
      }

    } catch (err) {

      throw new Error(err);
    }
  }

}