import { format, isWithinInterval } from 'date-fns';
import {
  AggregationDate,
  AggregationLevel,
  IAggregationSale,
  ISale,
} from '@common/contracts';
import { GetSalesParamsDto } from '../analytics/dtos';

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

  return Object.entries(aggregated).map(([date, total]) => ({ date, total }));
};
