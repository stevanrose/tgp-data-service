import { Module } from '@nestjs/common';
import { TraderDetailService } from './trader-detail.service';
import { TraderDetailController } from './trader-detail.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [TraderDetailController],
  providers: [PrismaService, TraderDetailService],
})
export class TraderDetailModule {}
