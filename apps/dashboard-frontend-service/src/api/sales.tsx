import { api } from "@/lib/axios"
import type { IAggregationSale, ISaleQueryParams } from "@common/contracts"

export const get = async (params: ISaleQueryParams): Promise<IAggregationSale[]> => {
    const response = await api.get('/data', { params })
    return response.data
}