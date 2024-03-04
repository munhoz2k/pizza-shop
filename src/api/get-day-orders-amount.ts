import { api } from '@/lib/axios'

export interface getDayOrdersAmountRes {
  amount: number
  diffFromYesterday: number
}

export async function getDayOrdersAmount() {
  const { data } = await api.get<getDayOrdersAmountRes>(
    '/metrics/day-orders-amount',
  )

  return data
}
