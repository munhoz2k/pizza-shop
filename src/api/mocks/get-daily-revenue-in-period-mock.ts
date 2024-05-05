import { http, HttpResponse } from 'msw'

import { GetDailyRevenueInPeriodRes } from '../get-daily-revenue-in-period'

export const getDailyRevenueInPeriodMock = http.get(
  '/metrics/daily-receipt-in-period',
  ({ cookies }) => {
    if (!cookies.auth) {
      return new HttpResponse(null, { status: 401 })
    }

    const data: GetDailyRevenueInPeriodRes = [
      { date: '01/01/2024', receipt: 200 },
      { date: '02/01/2024', receipt: 300 },
      { date: '03/01/2024', receipt: 320 },
      { date: '04/01/2024', receipt: 495 },
      { date: '05/01/2024', receipt: 250 },
      { date: '06/01/2024', receipt: 370 },
      { date: '07/01/2024', receipt: 275 },
    ]

    return HttpResponse.json(data)
  },
)
