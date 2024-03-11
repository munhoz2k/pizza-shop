import { api } from '@/lib/axios'

export interface GetMonthCanceledOrdersAmountRes {
  amount: number
  diffFromLastMonth: number
}

export async function getMonthCanceledOrdersAmount() {
  const { data } = await api.get<GetMonthCanceledOrdersAmountRes>(
    '/metrics/month-canceled-orders-amount',
  )

  return data
}
