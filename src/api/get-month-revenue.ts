import { api } from '@/lib/axios'

export interface getMonthRevenueRes {
  receipt: number
  diffFromLastMonth: number
}

export async function getMonthRevenue() {
  const { data } = await api.get<getMonthRevenueRes>('/metrics/month-receipt')

  return data
}
