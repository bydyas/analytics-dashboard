import { toDate } from 'date-fns';
import {
  AggregationLevel,
  IAggregationSale,
  TAggregationLevel,
} from '@common/contracts';
import { dateFromISOWeek } from './date-from-week';

export function compareAggregatedSales(
  a: IAggregationSale,
  b: IAggregationSale,
  aggregationLevel: TAggregationLevel,
) {
  const isWeek = aggregationLevel === AggregationLevel.WEEKLY;
  const dateA = isWeek ? dateFromISOWeek(a.date) : toDate(a.date);
  const dateB = isWeek ? dateFromISOWeek(b.date) : toDate(b.date);

  return dateA.getTime() - dateB.getTime();
}
