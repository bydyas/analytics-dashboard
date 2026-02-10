export const AggregationDate = {
  DAILY: 'yyyy-mm-dd',
  WEEKLY: 'yyyy-mm',
  MONTHLY: 'yyyy-ii',
} as const;

export type TAggregationDate =
  (typeof AggregationDate)[keyof typeof AggregationDate];
