import { http, HttpResponse } from 'msw'

import { GetManagedRestaurantRes } from '../get-managed-restaurant'

export const getManagedRestaurantMock = http.get(
  '/managed-restaurant',
  ({ cookies }) => {
    if (!cookies.auth) {
      return new HttpResponse(null, { status: 401 })
    }

    const data: GetManagedRestaurantRes = {
      id: 'custom-restaurant-id',
      name: 'Pizza Shop',
      description: 'Custom restaurant description',
      managerid: 'custom-user-id',
      updatedAt: null,
      createdAt: new Date(),
    }

    return HttpResponse.json(data)
  },
)
