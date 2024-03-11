import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

import { NavLink } from '@/pages/app/header/nav-link'

describe('NavLink', () => {
  it('should highLight the nav link when its the current page link', () => {
    const wrapper = render(
      <>
        <NavLink to="/dashboard">Dashboard</NavLink>]
        <NavLink to="/orders">Orders</NavLink>
      </>,
      {
        wrapper: ({ children }) => {
          return (
            <MemoryRouter initialEntries={['/dashboard']}>
              {children}
            </MemoryRouter>
          )
        },
      },
    )

    expect(wrapper.getByText('Dashboard').dataset.current).toEqual('true')
    expect(wrapper.getByText('Orders').dataset.current).toEqual('false')
  })
})
