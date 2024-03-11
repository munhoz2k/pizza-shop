import { http, HttpResponse } from 'msw'

import { GetMonthRevenueRes } from '../get-month-revenue'

export const getMonthRevenueMock = http.get<never, never, GetMonthRevenueRes>(
  '/metrics/month-receipt',
  () => {
    return HttpResponse.json({
      receipt: 20000,
      diffFromLastMonth: 10,
    })
  },
)
