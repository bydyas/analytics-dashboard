import { IsObject } from 'class-validator';
import { PaginationBodyDto } from './pagination.dto';
import { ApiProperty } from '@nestjs/swagger';

export class MetaDto {
  @ApiProperty({ name: 'pagination', description: 'A pagination data' })
  @IsObject()
  pagination: PaginationBodyDto;
}
