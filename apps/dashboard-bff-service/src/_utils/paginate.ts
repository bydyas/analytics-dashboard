import { IPaginationQuery, IPaginationResult } from '@common/contracts';

export const paginate = <T>(
  items: Array<T>,
  { page, perPage }: IPaginationQuery,
): IPaginationResult<T> => {
  const totalItems = items.length;
  const totalPages = Math.ceil(totalItems / perPage);

  const safePage = Math.max(1, Math.min(page, totalPages));
  const start = (safePage - 1) * perPage;
  const end = start + perPage;

  const data = items.slice(start, end);

  return {
    data,
    meta: {
      page: safePage,
      perPage,
      totalItems,
      totalPages,
      hasNext: safePage < totalPages,
      hasPrev: safePage > 1,
    },
  };
};
