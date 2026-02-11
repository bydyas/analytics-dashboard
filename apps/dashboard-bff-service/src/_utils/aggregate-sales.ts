import { format, isWithinInterval } from 'date-fns';
import { AggregationDate, IAggregationSale, ISale } from '@common/contracts';
import { GetSalesParamsDto } from '../analytics/dtos';
import { compareAggregatedSales } from './compare-aggregated-sales';

/**
 * Groups data points according to the aggregationLevel.
 *
 * @param sales - Data points
 * @param params - Aggregation params
 * @returns Aggregated dataset.
 */
export const aggregateSales = (
  sales: Array<ISale>,
  { startDate, endDate, aggregationLevel }: GetSalesParamsDto,
): Array<IAggregationSale> => {
  const aggregated = sales.reduce<Record<string, number>>(
    (list, { timestamp, value }) => {
      if (isWithinInterval(timestamp, { start: startDate, end: endDate })) {
        const key: string = format(
          timestamp,
          AggregationDate[aggregationLevel.toUpperCase()],
        );
        list[key] = (list[key] ?? 0) + value;
      }
      return list;
    },
    {},
  );

  return Object.entries(aggregated)
    .map(([date, total]) => ({ date, total }))
    .sort((a, b) => compareAggregatedSales(a, b, aggregationLevel));
};
