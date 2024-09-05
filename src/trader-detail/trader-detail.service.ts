import { Injectable } from '@nestjs/common';
import { CreateTraderDetailDto } from './dto/create-trader-detail.dto';
import { UpdateTraderDetailDto } from './dto/update-trader-detail.dto';
import { PrismaService } from 'src/prisma.service';
import { TraderDetail } from '@prisma/client';

@Injectable()
export class TraderDetailService {
  constructor(private prisma: PrismaService) {}

  async create(
    createTraderDetailDto: CreateTraderDetailDto,
  ): Promise<TraderDetail> {
    return this.prisma.traderDetail.create({
      data: {
        version: 1,
        eori: createTraderDetailDto.eori,
        active: true,
        ukimAuth: createTraderDetailDto.ukimAuth,
        nirmsAuth: createTraderDetailDto.nirmsAuth,
        niphlAuth: createTraderDetailDto.niphlAuth,
        actorId: createTraderDetailDto.actorId,
        srcSystemName: createTraderDetailDto.srcSystemName,
        clientId: createTraderDetailDto.clientId,
        correlationId: createTraderDetailDto.correlationId,
        msgOriginatedDatetime: createTraderDetailDto.msgOriginatedDatetime,
        inactiveDatetime: createTraderDetailDto.inactiveDatetime,
      },
    });
  }

  async findAll(skip: number, take: number): Promise<TraderDetail[]> {
    return this.prisma.traderDetail.findMany({ skip, take });
  }

  async findOne(id: number): Promise<TraderDetail> {
    return this.prisma.traderDetail.findUniqueOrThrow({ where: { id } });
  }

  async update(
    id: number,
    updateTraderDetailDto: UpdateTraderDetailDto,
  ): Promise<TraderDetail> {
    return this.prisma.traderDetail.update({
      where: { id },
      data: {
        version: updateTraderDetailDto.version + 1,
        eori: updateTraderDetailDto.eori,
        active: updateTraderDetailDto.active,
        ukimAuth: updateTraderDetailDto.ukimAuth,
        nirmsAuth: updateTraderDetailDto.nirmsAuth,
        niphlAuth: updateTraderDetailDto.niphlAuth,
        actorId: updateTraderDetailDto.actorId,
        srcSystemName: updateTraderDetailDto.srcSystemName,
        clientId: updateTraderDetailDto.clientId,
        correlationId: updateTraderDetailDto.correlationId,
        msgOriginatedDatetime: updateTraderDetailDto.msgOriginatedDatetime,
        inactiveDatetime: updateTraderDetailDto.inactiveDatetime,
      },
    });
  }

  async remove(id: number) {
    return this.prisma.traderDetail.delete({
      where: { id },
    });
  }
}
