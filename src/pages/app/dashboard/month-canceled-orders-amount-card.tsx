import { useQuery } from '@tanstack/react-query'
import { DollarSign } from 'lucide-react'

import { getMonthCanceledOrdersAmount } from '@/api/get-month-canceled-orders-amount'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

import { MetricsCardSkeleton } from './metric-card-skeleton'

export function MonthCanceledOrdersAmountCard() {
  const { data: monthCanceledOrders } = useQuery({
    queryKey: ['metrics', 'month-canceled-orders-amount'],
    queryFn: getMonthCanceledOrdersAmount,
  })

  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between space-y-0">
        <CardTitle className="text-base font-semibold">
          Pedidos cancelados no total (mês)
        </CardTitle>
        <DollarSign className="size-4 text-muted-foreground" color="white" />
      </CardHeader>

      <CardContent className="space-y-1">
        {monthCanceledOrders ? (
          <>
            <span
              data-testid="canceled-orders-total"
              className="text-2xl font-bold tracking-tight"
            >
              {monthCanceledOrders.amount.toLocaleString('pt-BR')}
            </span>
            <p
              data-testid="canceled-orders-percentage"
              className="text-xs text-muted-foreground"
            >
              {monthCanceledOrders.diffFromLastMonth > 0 ? (
                <span className="text-rose-500 dark:text-rose-400">
                  +{monthCanceledOrders.diffFromLastMonth}%
                </span>
              ) : (
                <span className="text-emerald-500 dark:text-emerald-400">
                  {monthCanceledOrders.diffFromLastMonth}%
                </span>
              )}{' '}
              em relação ao mês passado
            </p>
          </>
        ) : (
          <MetricsCardSkeleton />
        )}
      </CardContent>
    </Card>
  )
}
