import { http, HttpResponse } from 'msw'

import { GetMonthOrdersAmountRes } from '../get-month-orders-amount'

export const getMonthOrdersAmountMock = http.get(
  '/metrics/month-orders-amount',
  ({ cookies }) => {
    if (!cookies.auth) {
      return new HttpResponse(null, { status: 401 })
    }

    const data: GetMonthOrdersAmountRes = {
      amount: 200,
      diffFromLastMonth: -5,
    }

    return HttpResponse.json(data)
  },
)
