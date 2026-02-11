import type { ISaleQueryParams } from "@common/contracts"
import { useQuery } from "@tanstack/react-query"
import { get } from "@/api/sales"

export interface IUseChartQueryProps extends ISaleQueryParams {}

export const useChartQuery = (params: IUseChartQueryProps) => {
    const enabled = Boolean(params.startDate && params.endDate && params.aggregationLevel)
    const { data, error, status } = useQuery({
        queryKey: ['sales', params],
        queryFn: () => get(params),
        enabled
    })

    return { data, error, status, enabled }
}
