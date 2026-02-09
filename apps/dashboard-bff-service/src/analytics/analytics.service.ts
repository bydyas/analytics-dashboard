import { ISale } from '@common/contracts';
import { Injectable, OnModuleInit } from '@nestjs/common';

import { generateSales, paginate } from '../_utils';
import { GetSalesParamsDto, PaginationBodyDto } from './dtos';
import { aggregateSales } from 'src/_utils/aggregate-sales';

@Injectable()
export class AnalyticsService implements OnModuleInit {
  private sales: Array<ISale>;

  onModuleInit() {
    this.sales = generateSales();
  }

  public async reportSales(
    params: GetSalesParamsDto,
    pagination?: PaginationBodyDto,
  ): Promise<unknown> {
    const aggregated = aggregateSales(this.sales, params);

    if (pagination) {
      return paginate(aggregated, pagination);
    }

    return aggregated;
  }
}
