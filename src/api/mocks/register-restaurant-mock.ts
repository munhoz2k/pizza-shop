import { http, HttpResponse } from 'msw'

import { RegisterRestaurantBody } from '../register-restaurant'

export const registerRestaurantMock = http.post<never, RegisterRestaurantBody>(
  '/restaurants',
  async ({ request }) => {
    const { restaurantName } = await request.json()

    if (restaurantName.includes('Pizza Shop')) {
      return new HttpResponse(null, { status: 400 })
    }

    return new HttpResponse(null, {
      status: 201,
    })
  },
)
