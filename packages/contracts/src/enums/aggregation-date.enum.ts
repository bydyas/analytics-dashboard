export const AggregationDate = {
  DAILY: 'yyyy-MM-dd',
  WEEKLY: 'yyyy-II',
  MONTHLY: 'yyyy-MM',
} as const;

export type TAggregationDate =
  (typeof AggregationDate)[keyof typeof AggregationDate];
