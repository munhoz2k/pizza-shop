import { http, HttpResponse } from 'msw'

import { GetMonthRevenueRes } from '../get-month-revenue'

export const getMonthRevenueMock = http.get(
  '/metrics/month-receipt',
  ({ cookies }) => {
    if (!cookies.auth) {
      return new HttpResponse(null, { status: 401 })
    }

    const data: GetMonthRevenueRes = {
      receipt: 20000,
      diffFromLastMonth: 10,
    }

    return HttpResponse.json(data)
  },
)
