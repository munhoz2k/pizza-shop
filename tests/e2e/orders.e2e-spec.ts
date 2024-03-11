import { expect, test } from '@playwright/test'

test('List orders', async ({ page }) => {
  await page.goto('/orders', { waitUntil: 'networkidle' })

  await expect(
    page.getByRole('cell', { name: 'Customer 1', exact: true }),
  ).toBeVisible()

  await expect(
    page.getByRole('cell', { name: 'Customer 10', exact: true }),
  ).toBeVisible()
})

test('Paginate orders', async ({ page }) => {
  await page.goto('/orders', { waitUntil: 'networkidle' })

  await page.getByRole('button', { name: 'Próxima página' }).click()
  await page.waitForLoadState('networkidle')

  expect(
    page.getByRole('cell', { name: 'Customer 11', exact: true }),
  ).toBeVisible()
  expect(
    page.getByRole('cell', { name: 'Customer 20', exact: true }),
  ).toBeVisible()

  await page.getByRole('button', { name: 'Última página' }).click()
  await page.waitForLoadState('networkidle')

  expect(
    page.getByRole('cell', { name: 'Customer 51', exact: true }),
  ).toBeVisible()
  expect(
    page.getByRole('cell', { name: 'Customer 60', exact: true }),
  ).toBeVisible()

  await page.getByRole('button', { name: 'Página anterior' }).click()
  await page.waitForLoadState('networkidle')

  expect(
    page.getByRole('cell', { name: 'Customer 41', exact: true }),
  ).toBeVisible()
  expect(
    page.getByRole('cell', { name: 'Customer 50', exact: true }),
  ).toBeVisible()

  await page.getByRole('button', { name: 'Primeira página' }).click()
  await page.waitForLoadState('networkidle')

  expect(
    page.getByRole('cell', { name: 'Customer 1', exact: true }),
  ).toBeVisible()
  expect(
    page.getByRole('cell', { name: 'Customer 10', exact: true }),
  ).toBeVisible()
})

test('Filter by order id', async ({ page }) => {
  await page.goto('/orders', { waitUntil: 'networkidle' })

  await page.getByPlaceholder('ID do pedido').fill('order-50')
  await page.getByRole('button', { name: 'Filtrar resultados' }).click()
  await page.waitForLoadState('networkidle')

  await expect(
    page.getByRole('cell', { name: 'order-50', exact: true }),
  ).toBeVisible()
})

test('Filter by customer name', async ({ page }) => {
  await page.goto('/orders', { waitUntil: 'networkidle' })

  await page.getByPlaceholder('Nome do cliente').fill('Customer 50')
  await page.getByRole('button', { name: 'Filtrar resultados' }).click()
  await page.waitForLoadState('networkidle')

  await expect(
    page.getByRole('cell', { name: 'Customer 50', exact: true }),
  ).toBeVisible()
})

test('Filter by status', async ({ page }) => {
  await page.goto('/orders', { waitUntil: 'networkidle' })

  await page.getByTestId('status-filter').click()
  await page.getByLabel('Pendente').click()
  await page.getByRole('button', { name: 'Filtrar resultados' }).click()

  await page.waitForLoadState('networkidle')

  await expect(page.getByRole('cell', { name: 'Pendente' })).toHaveCount(10)
})

// getByRole('button', { name: 'Remover filtros' })
