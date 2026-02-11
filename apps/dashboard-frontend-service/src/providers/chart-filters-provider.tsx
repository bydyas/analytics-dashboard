import { createContext, useContext, useState } from 'react'
import type { TAggregationLevel } from '@common/contracts'

type ChartFiltersProviderProps = {
  children: React.ReactNode
}

type ChartFiltersProviderState = {
  startDate: Date | undefined,
  endDate: Date | undefined,
  aggregationLevel: TAggregationLevel | undefined,
  setStartDate: React.Dispatch<React.SetStateAction<Date | undefined>>,
  setEndDate: React.Dispatch<React.SetStateAction<Date | undefined>>,
  setAggregationLevel: React.Dispatch<React.SetStateAction<TAggregationLevel | undefined>>
}

const initialState: ChartFiltersProviderState = {
  startDate: undefined,
  endDate: undefined,
  aggregationLevel: undefined,
  setStartDate: () => undefined,
  setEndDate: () => undefined,
  setAggregationLevel: () => undefined
}

const ChartFiltersProviderContext = createContext<ChartFiltersProviderState>(initialState)

export function ChartFiltersProvider({ children }: ChartFiltersProviderProps) {
  const [startDate, setStartDate] = useState<Date>()
  const [endDate, setEndDate] = useState<Date>()
  const [aggregationLevel, setAggregationLevel] = useState<TAggregationLevel>()

  return (
    <ChartFiltersProviderContext.Provider
      value={{
        startDate,
        endDate,
        aggregationLevel,
        setStartDate,
        setEndDate,
        setAggregationLevel,
      }}
    >
      {children}
    </ChartFiltersProviderContext.Provider>
  )
}

export const useChartFilters = () => {
  const ctx = useContext(ChartFiltersProviderContext)

  if (!ctx) {
    throw new Error('useChartFilters must be used within ChartFiltersProvider')
  }

  return ctx
}