import { http, HttpResponse } from 'msw'

import { GetDayOrdersAmountRes } from '../get-day-orders-amount'

export const getDayOrdersAmountMock = http.get(
  '/metrics/day-orders-amount',
  ({ cookies }) => {
    if (!cookies.auth) {
      return new HttpResponse(null, { status: 401 })
    }

    const data: GetDayOrdersAmountRes = {
      amount: 20,
      diffFromYesterday: -5,
    }

    return HttpResponse.json(data)
  },
)
