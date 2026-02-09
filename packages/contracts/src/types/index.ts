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

export interface IPaginationQuery {
  perPage: number;
  page: number;
}

export interface IPaginationMeta extends IPaginationQuery {
  totalItems: number;
  totalPages: number;
  hasNext: boolean;
  hasPrev: boolean;
}

export interface IPaginationResult<T> {
  data: T[];
  meta: IPaginationMeta;
}

export interface IAggregationSale {
  date: string;
  total: number;
}
