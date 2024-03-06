import { createBrowserRouter } from 'react-router-dom'

import { AppLayout } from './pages/_layouts/app'
import { AuthLayout } from './pages/_layouts/auth'
import { Dashboard } from './pages/app/dashboard/dashboard'
import { Orders } from './pages/app/orders/orders'
import { SignIn } from './pages/auth/sign-in'
import { SingUp } from './pages/auth/sign-up'
import { NotFoundPage } from './pages/error/404'
import { AppError } from './pages/error/appError'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <AppError />,
    children: [
      { path: '/', element: <Dashboard /> },
      { path: '/orders', element: <Orders /> },
    ],
  },
  {
    path: '/',
    element: <AuthLayout />,
    errorElement: <NotFoundPage />,
    children: [
      { path: '/sign-in', element: <SignIn /> },
      { path: '/sign-up', element: <SingUp /> },
    ],
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
])
