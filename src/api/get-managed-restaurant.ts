import { api } from '@/lib/axios'

export interface GetManagedRestaurantRes {
  id: string
  name: string
  createdAt: Date | null
  updatedAt: Date | null
  description: string | null
  managerid: string | null
}

export async function getManagedRestaurant() {
  const res = await api.get<GetManagedRestaurantRes>('/managed-restaurant')

  return res.data
}
