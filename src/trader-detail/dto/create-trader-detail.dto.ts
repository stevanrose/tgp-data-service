export class CreateTraderDetailDto {
  version: number;
  eori: string;
  active: boolean;
  ukimAuth?: string;
  nirmsAuth?: string;
  niphlAuth?: string;
  actorId?: string;
  srcSystemName?: string;
  clientId?: string;
  correlationId?: string;
  msgOriginatedDatetime: Date;
  inactiveDatetime?: Date;
}
