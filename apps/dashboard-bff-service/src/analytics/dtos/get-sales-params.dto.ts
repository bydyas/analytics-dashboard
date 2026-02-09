import {
  AggregationLevel,
  ISaleQueryParams,
  TAggregationLevel,
} from '@common/contracts';
import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsEnum } from 'class-validator';

export class GetSalesParamsDto implements ISaleQueryParams {
  @ApiProperty({
    name: 'startDate',
    description: 'A start of the period',
    example: '2025-12-01',
  })
  @IsDateString()
  startDate: Date;

  @ApiProperty({
    name: 'endDate',
    description: 'An end of the period',
    example: '2026-02-09',
  })
  @IsDateString()
  endDate: Date;

  @ApiProperty({
    name: 'aggregationLevel',
    description: 'An aggregation level',
    example: 'daily',
  })
  @IsEnum(AggregationLevel)
  aggregationLevel: TAggregationLevel;
}
