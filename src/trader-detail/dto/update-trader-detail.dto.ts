import { PartialType } from '@nestjs/mapped-types';
import { CreateTraderDetailDto } from './create-trader-detail.dto';

export class UpdateTraderDetailDto extends PartialType(CreateTraderDetailDto) {}
