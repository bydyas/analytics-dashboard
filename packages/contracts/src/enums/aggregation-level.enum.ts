export const AggregationLevel = {
  DAILY: 'daily',
  WEEKLY: 'weekly',
  MONTHLY: 'monthly',
} as const;

export type TAggregationLevel =
  (typeof AggregationLevel)[keyof typeof AggregationLevel];
