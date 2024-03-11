import { api } from '@/lib/axios'

export interface GetMonthRevenueRes {
  receipt: number
  diffFromLastMonth: number
}

export async function getMonthRevenue() {
  const { data } = await api.get<GetMonthRevenueRes>('/metrics/month-receipt')

  return data
}
