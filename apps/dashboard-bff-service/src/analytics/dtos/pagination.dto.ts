import { IPaginationQuery } from '@common/contracts';
import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class PaginationBodyDto implements IPaginationQuery {
  @ApiProperty({
    name: 'perPage',
    description: 'A number of item to be displayed per page',
    example: 10,
  })
  @IsNumber()
  perPage: number;

  @ApiProperty({ name: 'page', description: 'A current page', example: 1 })
  @IsNumber()
  page: number;
}
