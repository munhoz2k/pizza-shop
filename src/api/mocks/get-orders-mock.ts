import { http, HttpResponse } from 'msw'

import { GetOrdersRes } from '../get-orders'

type Orders = GetOrdersRes['orders']
type OrderStatus = Orders[number]['status']

const statuses: OrderStatus[] = [
  'pending',
  'processing',
  'delivering',
  'delivered',
  'canceled',
]

const orders: Orders = Array.from({ length: 60 }).map((_, i) => {
  return {
    orderId: `order-${i + 1}`,
    customerName: `Customer ${i + 1}`,
    createdAt: new Date().toISOString(),
    total: 2400 + Math.round(Math.random() * 1000) * 10,
    status: statuses[i % 5],
  }
})

export const getOrdersMock = http.get('/orders', ({ cookies, request }) => {
  if (!cookies.auth) {
    return new HttpResponse(null, { status: 401 })
  }

  const { searchParams } = new URL(request.url)

  const pageIndex = searchParams.get('pageIndex')
    ? Number(searchParams.get('pageIndex'))
    : 0

  const customerName = searchParams.get('customerName')
  const orderId = searchParams.get('orderId')
  const status = searchParams.get('status')

  let filteredOrders = orders

  if (customerName) {
    filteredOrders = filteredOrders.filter((order) =>
      order.customerName.includes(customerName),
    )
  }

  if (orderId) {
    filteredOrders = filteredOrders.filter((order) =>
      order.orderId.includes(orderId),
    )
  }

  if (status) {
    filteredOrders = filteredOrders.filter((order) => order.status === status)
  }

  const paginatedOrders = filteredOrders.slice(
    pageIndex * 10,
    (pageIndex + 1) * 10,
  )

  const data: GetOrdersRes = {
    orders: paginatedOrders,
    meta: {
      pageIndex,
      perPage: 10,
      totalCount: filteredOrders.length,
    },
  }

  return HttpResponse.json(data)
})
