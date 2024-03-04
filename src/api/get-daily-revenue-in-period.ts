import { api } from '@/lib/axios'

export type GetDailyRevenueInPeriodRes = {
  date: number
  receipt: number
}[]

export async function getDailyRevenueInPeriod() {
  const { data } = await api.get<GetDailyRevenueInPeriodRes>(
    '/metrics/daily-receipt-in-period',
  )

  return data
}
