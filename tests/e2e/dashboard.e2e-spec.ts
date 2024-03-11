import { expect, test } from '@playwright/test'

test('Dispaly month revenue metric', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  await expect(page.getByTestId('month-revenue-total')).toBeVisible()
  await expect(page.getByTestId('month-revenue-percentage')).toBeVisible()
})

test('Dispaly month orders amount metric', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  await expect(page.getByTestId('month-orders-total')).toBeVisible()
  await expect(page.getByTestId('month-orders-percentage')).toBeVisible()
})

test('Dispaly day orders amount metric', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  await expect(page.getByTestId('day-orders-total')).toBeVisible()
  await expect(page.getByTestId('day-orders-percentage')).toBeVisible()
})

test('Dispaly month canceled orders amount metric', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  await expect(page.getByTestId('canceled-orders-total')).toBeVisible()
  await expect(page.getByTestId('canceled-orders-percentage')).toBeVisible()
})
