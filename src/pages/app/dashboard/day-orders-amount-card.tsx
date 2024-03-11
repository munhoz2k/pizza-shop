import { useQuery } from '@tanstack/react-query'
import { DollarSign } from 'lucide-react'

import { getDayOrdersAmount } from '@/api/get-day-orders-amount'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

import { MetricsCardSkeleton } from './metric-card-skeleton'

export function DayOrdersAmountCard() {
  const { data: dayOrdersAmount } = useQuery({
    queryKey: ['metrics', 'day-orders-amount'],
    queryFn: getDayOrdersAmount,
  })

  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between space-y-0">
        <CardTitle className="text-base font-semibold">
          Pedidos total (dia)
        </CardTitle>
        <DollarSign className="size-4 text-muted-foreground" color="white" />
      </CardHeader>

      <CardContent className="space-y-1">
        {dayOrdersAmount ? (
          <>
            <span
              data-testid="day-orders-total"
              className="text-2xl font-bold tracking-tight"
            >
              {dayOrdersAmount.amount.toLocaleString('pt-BR')}
            </span>
            <p
              data-testid="day-orders-percentage"
              className="text-xs text-muted-foreground"
            >
              {dayOrdersAmount.diffFromYesterday >= 0 ? (
                <span className="text-emerald-500 dark:text-emerald-400">
                  +{dayOrdersAmount.diffFromYesterday}%
                </span>
              ) : (
                <span className="text-rose-500 dark:text-rose-400">
                  {dayOrdersAmount.diffFromYesterday}%
                </span>
              )}{' '}
              em relação ao dia anterior
            </p>
          </>
        ) : (
          <MetricsCardSkeleton />
        )}
      </CardContent>
    </Card>
  )
}
