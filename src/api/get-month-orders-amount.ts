import { api } from '@/lib/axios'

export interface getMonthOrdersAmountRes {
  amount: number
  diffFromLastMonth: number
}

export async function getMonthOrdersAmount() {
  const { data } = await api.get<getMonthOrdersAmountRes>(
    '/metrics/month-orders-amount',
  )

  return data
}
