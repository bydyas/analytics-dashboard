import { ISale } from '@common/contracts';
import { Injectable } from '@nestjs/common';

import { generateSales } from '../_utils';
import { GetSalesParamsDto } from './dtos';

@Injectable()
export class AnalyticsService {
  async reportSales({
    startDate,
    endDate,
    aggregationLevel,
  }: GetSalesParamsDto): Promise<unknown> {
    const sales: ISale[] = generateSales(startDate, endDate, aggregationLevel);
    return { count: sales.length, data: sales };
  }
}
