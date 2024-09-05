import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  DefaultValuePipe,
  ParseIntPipe,
} from '@nestjs/common';
import { TraderDetailService } from './trader-detail.service';
import { CreateTraderDetailDto } from './dto/create-trader-detail.dto';
import { UpdateTraderDetailDto } from './dto/update-trader-detail.dto';
import { TraderDetail } from '@prisma/client';

@Controller('trader-detail')
export class TraderDetailController {
  constructor(private readonly traderDetailService: TraderDetailService) {}

  @Post()
  create(@Body() createTraderDetailDto: CreateTraderDetailDto) {
    return this.traderDetailService.create(createTraderDetailDto);
  }

  @Get()
  findAll(
    @Query('skip', new DefaultValuePipe(0), ParseIntPipe) skip: number,
    @Query('take', new DefaultValuePipe(25), ParseIntPipe) take: number,
  ): Promise<TraderDetail[]> {
    return this.traderDetailService.findAll(skip, take);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.traderDetailService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTraderDetailDto: UpdateTraderDetailDto,
  ) {
    return this.traderDetailService.update(+id, updateTraderDetailDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.traderDetailService.remove(+id);
  }
}
