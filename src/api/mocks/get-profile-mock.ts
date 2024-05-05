import { http, HttpResponse } from 'msw'

import { GetProfileRes } from '../get-profile'

export const getProfileMock = http.get('/me', ({ cookies }) => {
  if (!cookies.auth) {
    return new HttpResponse(null, { status: 401 })
  }

  const data: GetProfileRes = {
    id: 'custom-user-id',
    name: 'John Doe',
    email: 'johndoe@example.com',
    phone: '18237127123',
    role: 'manager',
    createdAt: new Date(),
    updatedAt: null,
  }

  return HttpResponse.json(data)
})
