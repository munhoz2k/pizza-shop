import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { Pagination } from '@/pages/app/orders/pagination'

const onPageChangeCb = vi.fn()
const user = userEvent.setup()
let button: HTMLElement

describe('Pagination', () => {
  beforeEach(() => {
    onPageChangeCb.mockClear()
  })

  it('should display a text with the right amount of items and page', () => {
    const wrapper = render(
      <Pagination
        pageIndex={0}
        perPage={10}
        totalCount={200}
        onPageChange={() => {}}
      />,
    )

    expect(wrapper.getByText('Página 1 de 20')).toBeInTheDocument()
    expect(wrapper.getByText('Total de 200 item(s)')).toBeInTheDocument()
  })

  it('should be able to navigate to the NEXT page', async () => {
    const wrapper = render(
      <Pagination
        pageIndex={0}
        perPage={10}
        totalCount={200}
        onPageChange={onPageChangeCb}
      />,
    )

    button = wrapper.getByRole('button', {
      name: 'Próxima página',
    })

    await user.click(button)

    expect(onPageChangeCb).toHaveBeenCalledWith(1)
  })

  it('should be able to navigate to the PREVIOUS page', async () => {
    const wrapper = render(
      <Pagination
        pageIndex={5}
        perPage={10}
        totalCount={200}
        onPageChange={onPageChangeCb}
      />,
    )

    button = wrapper.getByRole('button', {
      name: 'Página anterior',
    })

    await user.click(button)

    expect(onPageChangeCb).toHaveBeenCalledWith(4)
  })

  it('should be able to navigate to the FIRST page', async () => {
    const wrapper = render(
      <Pagination
        pageIndex={5}
        perPage={10}
        totalCount={200}
        onPageChange={onPageChangeCb}
      />,
    )

    button = wrapper.getByRole('button', {
      name: 'Primeira página',
    })

    await user.click(button)

    expect(onPageChangeCb).toHaveBeenCalledWith(0)
  })

  it('should be able to navigate to the LAST page', async () => {
    const wrapper = render(
      <Pagination
        pageIndex={5}
        perPage={10}
        totalCount={200}
        onPageChange={onPageChangeCb}
      />,
    )

    button = wrapper.getByRole('button', {
      name: 'Última página',
    })

    await user.click(button)

    expect(onPageChangeCb).toHaveBeenCalledWith(19)
  })
})
