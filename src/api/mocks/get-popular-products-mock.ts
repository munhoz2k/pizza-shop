import { http, HttpResponse } from 'msw'

import { GetPopularProductsRes } from '../get-popular-products'

export const getPopularProductsMock = http.get<
  never,
  never,
  GetPopularProductsRes
>('/metrics/popular-products', () => {
  return HttpResponse.json([
    { product: 'Pizza 01', amount: 35 },
    { product: 'Pizza 02', amount: 30 },
    { product: 'Pizza 03', amount: 25 },
    { product: 'Pizza 04', amount: 20 },
    { product: 'Pizza 05', amount: 15 },
  ])
})
