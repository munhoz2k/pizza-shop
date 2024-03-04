import { api } from '@/lib/axios'

interface GetOrdersQuery {
  pageIndex?: number | null
  orderId?: string | null
  customerName?: string | null
  status?: string | null
}

export interface GetOrdersRes {
  orders: {
    orderId: string
    createdAt: string
    status: 'pending' | 'canceled' | 'processing' | 'delivering' | 'delivered'
    customerName: string
    total: number
  }[]

  meta: {
    pageIndex: number
    perPage: number
    totalCount: number
  }
}

export async function getOrders({
  pageIndex,
  orderId,
  customerName,
  status,
}: GetOrdersQuery) {
  const { data } = await api.get<GetOrdersRes>('/orders', {
    params: {
      pageIndex: pageIndex ?? 0,
      orderId,
      customerName,
      status: status === 'all' ? null : status,
    },
  })

  return data
}
