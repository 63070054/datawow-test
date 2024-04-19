import { HttpStatus, Injectable } from '@nestjs/common';
import { History, User } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class HistoryService {

  constructor(private readonly prisma: PrismaService) { }

  async getHistories(): Promise<History[]> {
    const conerts: History[] = await this.prisma.history.findMany({
      include: {
        concert: true,
        user: true
      },
      orderBy: {
        date: "asc"
      }
    });
    return conerts;
  }

  async createHistory(user: User, history: History): Promise<any> {
    try {
      await this.prisma.history.create({
        data: history
      })

      if (history.action === "Reserve") {
        await this.prisma.concert.update({
          where: { id: history.concertId },
          data: {
            usersReserve: { connect: { id: user.id } }
          }
        })
        await this.prisma.user.update({
          where: { id: user.id },
          data: {
            reservedConcerts: { connect: { id: history.concertId } }
          }
        });
      } else {
        await this.prisma.concert.update({
          where: { id: history.concertId },
          data: {
            usersReserve: {
              disconnect: { id: user.id }
            }
          }
        });
        await this.prisma.user.update({
          where: { id: user.id },
          data: {
            reservedConcerts: {
              disconnect: { id: history.concertId }
            }
          }
        });
      }

      return {
        status: HttpStatus.OK
      }

    } catch (err) {

      throw new Error(err);
    }
  }

}
