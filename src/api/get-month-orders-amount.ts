import { api } from '@/lib/axios'

export interface GetMonthOrdersAmountRes {
  amount: number
  diffFromLastMonth: number
}

export async function getMonthOrdersAmount() {
  const { data } = await api.get<GetMonthOrdersAmountRes>(
    '/metrics/month-orders-amount',
  )

  return data
}
