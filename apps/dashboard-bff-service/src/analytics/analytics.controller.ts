import { Controller, Get, Query } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

import { AnalyticsService } from './analytics.service';
import { GetSalesParamsDto } from './dtos';

@ApiTags('Analytics')
@Controller('')
export class AnalyticsController {
  constructor(private readonly analyticsService: AnalyticsService) {}

  // DATA /api/data
  @Get('data')
  @ApiOperation({
    summary: 'Reports sales dataset',
    description:
      'Processes the 5,000+ data points and group them according to the aggregationLevel.',
  })
  @ApiResponse({
    status: 201,
    description: 'Returns the aggregated dataset.',
  })
  async reportSales(
    @Query() getSalesParamsDto: GetSalesParamsDto,
  ): Promise<unknown> {
    return this.analyticsService.reportSales(getSalesParamsDto);
  }
}
