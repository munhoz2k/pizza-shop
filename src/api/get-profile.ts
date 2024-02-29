import { api } from '@/lib/axios'

interface GetProfileRes {
  id: string
  name: string
  email: string
  phone: string | null
  role: 'manager' | 'customer'
  createdAt: Date | null
  updatedAt: Date | null
}

export async function getProfile() {
  const res = await api.get<GetProfileRes>('/me')

  return res.data
}
