import { http, HttpResponse } from 'msw'

import { DispatchOrderParams } from '../dispatch-order'

export const dispatchOrderMock = http.patch<DispatchOrderParams, never, never>(
  '/orders/:orderId/dispatch',
  ({ params, cookies }) => {
    if (!cookies.auth) {
      return new HttpResponse(null, { status: 401 })
    }

    if (params.orderId === 'error-order-id') {
      return new HttpResponse(null, { status: 400 })
    }

    return new HttpResponse(null, { status: 204 })
  },
)
