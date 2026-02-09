import { faker } from '@faker-js/faker';
import type { ISale } from '@common/contracts';

const MIN_SALES_NUM = 5_000;
const MAX_SALES_NUM = 10_000;

/**
 * Generates a mocked sales dataset over the mentioned period.
 *
 * @param from - A period start. It accepts the date object or a ISO timestamp (e.g., YYYY-MM-DD).
 * @param to - A period end. It accepts the date object or the ISO timestamp (e.g., YYYY-MM-DD).
 * @returns An array of sales dataset.
 */
export const generateSales = (
  from: Date = new Date('2025-01-01'),
  to: Date = new Date('2026-01-01'),
): Array<ISale> => {
  return Array.from(
    { length: faker.number.int({ min: MIN_SALES_NUM, max: MAX_SALES_NUM }) },
    () => ({
      timestamp: faker.date.between({ from, to }),
      value: faker.number.int({ min: 0, max: Number.MAX_SAFE_INTEGER }),
    }),
  );
};
