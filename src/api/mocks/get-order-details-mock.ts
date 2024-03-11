import { http, HttpResponse } from 'msw'

import { GetOrderDetailsParams, GetOrderDetailsRes } from '../get-order-details'

export const getOrderDetailsMock = http.get<
  GetOrderDetailsParams,
  never,
  GetOrderDetailsRes
>('/orders/:orderId', ({ params }) => {
  const price1 = 2400 + Math.round(Math.random() * 1000) * 10
  const price2 = 2400 + Math.round(Math.random() * 1000) * 10

  return HttpResponse.json({
    id: params.orderId,
    customer: {
      name: 'John Doe',
      email: 'johndoe@example.com',
      phone: '123124125115',
    },
    status: 'pending',
    createdAt: new Date().toISOString(),
    totalInCents: price1 + price2,
    orderItems: [
      {
        id: 'order-item-1',
        priceInCents: price1,
        product: { name: 'Pizza Pepperoni' },
        quantity: 2,
      },
      {
        id: 'order-item-2',
        priceInCents: price2,
        product: { name: 'Pizza Marguerita' },
        quantity: 1,
      },
    ],
  })
})
