import { faker } from '@faker-js/faker';
import type { ISale, TAggregationLevel } from '@common/contracts';

/**
 * Generates a mocked dataset over the mentioned period.
 *
 * @param from - A period start. It accepts the date object or a ISO timestamp (e.g., YYYY-MM-DD).
 * @param to - A period end. It accepts the date object or the ISO timestamp (e.g., YYYY-MM-DD).
 * @param aggregationLevel - An aggregationl evel. It accepts: 'daily', 'weekly', 'monthly'.
 * @param count - OPTIONAL! A dataset length. By default it is in range between 5000 and 10000.
 * @returns An array of sales dataset.
 */
export const generateSales = (
  from: Date | string,
  to: Date | string,
  aggregationLevel: TAggregationLevel,
  count?: number,
): ISale[] => {
  // TODO: imp aggregation by levels;
  console.log(aggregationLevel);
  return Array.from(
    { length: count || faker.number.int({ min: 5_000, max: 10_000 }) },
    () => ({
      timestamp: faker.date.between({
        from,
        to,
      }),
      value: faker.number.int({ min: 0, max: Number.MAX_SAFE_INTEGER }),
    }),
  );
};
