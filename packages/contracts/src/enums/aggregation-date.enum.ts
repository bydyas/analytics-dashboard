export const AggregationDate = {
  DAILY: 'yyyy-mm-dd',
  WEEKLY: 'yyyy-ii',
  MONTHLY: 'yyyy-mm',
} as const;

export type TAggregationDate =
  (typeof AggregationDate)[keyof typeof AggregationDate];
