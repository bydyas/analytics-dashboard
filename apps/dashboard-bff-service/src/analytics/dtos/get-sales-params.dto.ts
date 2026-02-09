import {
  AggregationLevel,
  ISaleQueryParams,
  TAggregationLevel,
} from '@common/contracts';
import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsDate, IsEnum } from 'class-validator';

export class GetSalesParamsDto implements ISaleQueryParams {
  @ApiProperty({
    name: 'startDate',
    description: 'A start of the period',
    example: '2025-01-01',
  })
  @Transform(({ value }) => new Date(value))
  @IsDate()
  startDate: Date;

  @ApiProperty({
    name: 'endDate',
    description: 'An end of the period',
    example: '2026-01-01',
  })
  @Transform(({ value }) => new Date(value))
  @IsDate()
  endDate: Date;

  @ApiProperty({
    name: 'aggregationLevel',
    description: 'An aggregation level',
    enum: Object.values(AggregationLevel),
    example: 'daily',
  })
  @IsEnum(AggregationLevel)
  aggregationLevel: TAggregationLevel;
}
