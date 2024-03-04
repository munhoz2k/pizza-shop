import { api } from '@/lib/axios'

export interface getMonthCanceledOrdersAmountRes {
  amount: number
  diffFromLastMonth: number
}

export async function getMonthCanceledOrdersAmount() {
  const { data } = await api.get<getMonthCanceledOrdersAmountRes>(
    '/metrics/month-canceled-orders-amount',
  )

  return data
}
