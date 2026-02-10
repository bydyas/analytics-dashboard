import { IAggregationSale, IPaginationResult, ISale } from '@common/contracts';
import { Injectable } from '@nestjs/common';
import { CacheService } from '@common/cache';

import { generateSales, paginate, aggregateSales } from '../_utils';
import { GetSalesParamsDto, PaginationBodyDto } from './dtos';

@Injectable()
export class AnalyticsService {
  constructor(private readonly cacheService: CacheService) {}

  /**
   * Gets aggregated (and optionally paginated) sales dataset.
   *
   * @param params - Aggregation params.
   * @param pagination  - Pagination params. Optional.
   * @returns A dataset.
   */
  public async getSales(
    params: GetSalesParamsDto,
    pagination?: PaginationBodyDto,
  ): Promise<Array<IAggregationSale> | IPaginationResult<IAggregationSale>> {
    const cacheKey = this.cacheService.createKey(params);
    let aggregated = this.cacheService.get<IAggregationSale[]>(cacheKey);

    if (!aggregated) {
      const sales = generateSales();
      aggregated = aggregateSales(sales, params);
      this.cacheService.set(cacheKey, aggregated);
    }

    if (pagination) return paginate(aggregated, pagination);

    return aggregated;
  }
}
