import { Body, Controller, Get, HttpCode, Post, Query } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

import { AnalyticsService } from './analytics.service';
import { GetSalesParamsDto, MetaDto } from './dtos';

@ApiTags('Analytics')
@Controller('')
export class AnalyticsController {
  constructor(private readonly analyticsService: AnalyticsService) {}

  // GET /api/data
  @Get('data')
  @ApiOperation({
    summary: 'Receives aggregated sales dataset',
    description:
      'Processes the 5,000+ data points and group them according to the aggregationLevel.',
  })
  @ApiResponse({
    status: 201,
    description: 'Returns the aggregated dataset.',
  })
  public async getSales(
    @Query() getSalesParamsDto: GetSalesParamsDto,
  ): Promise<unknown> {
    return this.analyticsService.getSales(getSalesParamsDto);
  }

  // POST /api/data
  @Post('data')
  @HttpCode(206)
  @ApiOperation({
    summary: 'Receives aggregated sales dataset with pagination',
    description:
      'Processes the 5,000+ data points and group them according to the aggregationLevel.',
  })
  @ApiResponse({
    status: 206,
    description: 'Returns the aggregated and paginated dataset.',
  })
  public async getPaginatedSales(
    @Query() getSalesParamsDto: GetSalesParamsDto,
    @Body() { pagination }: MetaDto,
  ): Promise<unknown> {
    return this.analyticsService.getSales(getSalesParamsDto, pagination);
  }
}
