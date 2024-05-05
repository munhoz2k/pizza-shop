import { http, HttpResponse } from 'msw'

import { UpdateProfileBody } from '../update-profile'

export const updateProfileMock = http.put<never, UpdateProfileBody>(
  '/profile',
  async ({ request, cookies }) => {
    if (!cookies.auth) {
      return new HttpResponse(null, { status: 401 })
    }

    const { name } = await request.json()

    if (name.includes('Error')) {
      return new HttpResponse(null, { status: 400 })
    }

    return new HttpResponse(null, {
      status: 204,
    })
  },
)
