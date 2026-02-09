import { TAggregationLevel } from 'enums/aggregation-level.enum';

export interface ISale {
  timestamp: Date;
  value: number;
}

export interface ISaleQueryParams {
  startDate: Date;
  endDate: Date;
  aggregationLevel: TAggregationLevel;
}
