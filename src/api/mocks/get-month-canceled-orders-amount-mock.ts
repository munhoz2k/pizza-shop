import { http, HttpResponse } from 'msw'

import { GetMonthCanceledOrdersAmountRes } from '../get-month-canceled-orders-amount'

export const getMonthCanceledOrdersAmountMock = http.get<
  never,
  never,
  GetMonthCanceledOrdersAmountRes
>('/metrics/month-canceled-orders-amount', () => {
  return HttpResponse.json({
    amount: 10,
    diffFromLastMonth: -10,
  })
})
