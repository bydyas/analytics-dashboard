import { faker } from '@faker-js/faker';
import { subYears } from 'date-fns';
import type { ISale } from '@common/contracts';

const MIN_SALES_NUM = 5_000;
const MAX_SALES_NUM = 10_000;
const MIN_VALUE = 0;
const MAX_VALUE = 100_000;

/**
 * Generates a mocked sales dataset over the mentioned period.
 *
 * @param from - A period start. It accepts the date object or a ISO timestamp (e.g., YYYY-MM-DD).
 * @param to - A period end. It accepts the date object or the ISO timestamp (e.g., YYYY-MM-DD).
 * @returns An array of sales dataset.
 */
export const generateSales = (
  from: Date = subYears(new Date(), 1),
  to: Date = new Date(),
): Array<ISale> => {
  return Array.from(
    { length: faker.number.int({ min: MIN_SALES_NUM, max: MAX_SALES_NUM }) },
    () => ({
      timestamp: faker.date.between({ from, to }),
      value: faker.number.int({ min: MIN_VALUE, max: MAX_VALUE }),
    }),
  );
};
