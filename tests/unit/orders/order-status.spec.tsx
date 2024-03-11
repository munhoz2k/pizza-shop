import { render } from '@testing-library/react'

import {
  badgeColorMap,
  OrderStatus,
  orderStatusMap,
} from '@/pages/app/orders/order-status'

let testStatus: OrderStatus = 'pending'

let text = orderStatusMap[testStatus]
let color = badgeColorMap[testStatus]

describe('Order Status Test', () => {
  it('should dispaly the right text and color when the order status is PENDING', () => {
    const wrapper = render(<OrderStatus status={testStatus} />)

    const statusText = wrapper.getByText(text)
    const badgeElement = wrapper.getByTestId('badge')

    expect(statusText).toBeInTheDocument()
    expect(badgeElement).toHaveClass(color)
  })

  it('should dispaly the right text and color when the order status is CANCELED', () => {
    testStatus = 'canceled'

    text = orderStatusMap[testStatus]
    color = badgeColorMap[testStatus]

    const wrapper = render(<OrderStatus status={testStatus} />)

    const statusText = wrapper.getByText(text)
    const badgeElement = wrapper.getByTestId('badge')

    expect(statusText).toBeInTheDocument()
    expect(badgeElement).toHaveClass(color)
  })

  it('should dispaly the right text and color when the order status is PROCESSING', () => {
    testStatus = 'processing'

    text = orderStatusMap[testStatus]
    color = badgeColorMap[testStatus]

    const wrapper = render(<OrderStatus status={testStatus} />)

    const statusText = wrapper.getByText(text)
    const badgeElement = wrapper.getByTestId('badge')

    expect(statusText).toBeInTheDocument()
    expect(badgeElement).toHaveClass(color)
  })

  it('should dispaly the right text and color when the order status is DELIVERING', () => {
    testStatus = 'delivering'

    text = orderStatusMap[testStatus]
    color = badgeColorMap[testStatus]

    const wrapper = render(<OrderStatus status={testStatus} />)

    const statusText = wrapper.getByText(text)
    const badgeElement = wrapper.getByTestId('badge')

    expect(statusText).toBeInTheDocument()
    expect(badgeElement).toHaveClass(color)
  })

  it('should dispaly the right text and color when the order status is DELIVERED', () => {
    testStatus = 'delivered'

    text = orderStatusMap[testStatus]
    color = badgeColorMap[testStatus]

    const wrapper = render(<OrderStatus status={testStatus} />)

    const statusText = wrapper.getByText(text)
    const badgeElement = wrapper.getByTestId('badge')

    expect(statusText).toBeInTheDocument()
    expect(badgeElement).toHaveClass(color)
  })
})
