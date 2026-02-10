import { api } from "@/lib/axios";
import type { IAggregationSale, ISaleQueryParams } from "@common/contracts"

// TODO: handle errors
export const getSales = async (params: ISaleQueryParams): Promise<IAggregationSale[] | never> => {
    if (!params.aggregationLevel || !params.endDate || !params.startDate) return [];
    return (await api.get('/data', { params })).data
};