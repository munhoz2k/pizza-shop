import { api } from '@/lib/axios'

export type getPopularProductsRes = {
  product: string
  amount: number
}[]

export async function getPopularProducts() {
  const { data } = await api.get<getPopularProductsRes>(
    '/metrics/popular-products',
  )

  return data
}
