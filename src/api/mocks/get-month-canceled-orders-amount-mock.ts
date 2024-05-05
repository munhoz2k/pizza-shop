import { http, HttpResponse } from 'msw'

import { GetMonthCanceledOrdersAmountRes } from '../get-month-canceled-orders-amount'

export const getMonthCanceledOrdersAmountMock = http.get(
  '/metrics/month-canceled-orders-amount',
  ({ cookies }) => {
    if (!cookies.auth) {
      return new HttpResponse(null, { status: 401 })
    }

    const data: GetMonthCanceledOrdersAmountRes = {
      amount: 10,
      diffFromLastMonth: -10,
    }

    return HttpResponse.json(data)
  },
)
