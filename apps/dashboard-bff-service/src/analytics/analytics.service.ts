import { IAggregationSale, IPaginationResult } from '@common/contracts';
import { Injectable } from '@nestjs/common';
import { CacheService } from '@common/cache';
import { LoggerService } from '@common/logger';

import { generateSales, paginate, aggregateSales } from '../_utils';
import { GetSalesParamsDto, PaginationBodyDto } from './dtos';

@Injectable()
export class AnalyticsService {
  constructor(
    private readonly cacheService: CacheService,
    private readonly logger: LoggerService,
  ) {}

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
    const ctx = 'AnalyticsService.getSales';
    this.logger.log(
      `Getting ${pagination ? 'paginated' : ''} sales: ${JSON.stringify({ params, pagination })}`,
      ctx,
    );

    const cacheKey = this.cacheService.createKey(params);
    let aggregated = this.cacheService.get<IAggregationSale[]>(cacheKey);

    if (!aggregated) {
      const sales = generateSales();
      aggregated = aggregateSales(sales, params);
      this.cacheService.set(cacheKey, aggregated);

      this.logger.debug(
        `No cache found: ${JSON.stringify({ generated: sales.length, aggregated: aggregated.length })}`,
        ctx,
      );
    }

    if (pagination) return paginate(aggregated, pagination);

    return aggregated;
  }
}
