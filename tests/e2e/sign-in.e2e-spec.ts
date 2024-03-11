import { expect, test } from '@playwright/test'

test('Sign in successfully', async ({ page }) => {
  await page.goto('/sign-in', { waitUntil: 'networkidle' })

  await page.getByTestId('emailInput').fill('johndoe@example.com')
  await page.getByRole('button', { name: 'Acessar painel' }).click()

  const toast = page.getByText(
    'Enviamos um link de autenticação para o seu e-mail!',
  )

  await expect(toast).toBeVisible()
})

test('Sign in with wrong credentials', async ({ page }) => {
  await page.goto('/sign-in', { waitUntil: 'networkidle' })

  await page.getByTestId('emailInput').fill('wrong@example.com')
  await page.getByRole('button', { name: 'Acessar painel' }).click()

  const toast = page.getByText('Credenciais inválidas')

  await expect(toast).toBeVisible()
})

test('Navigate to register new restaurant', async ({ page }) => {
  await page.goto('/sign-in', { waitUntil: 'networkidle' })
  await page.getByRole('link', { name: 'Não tem conta? Cadastre-se' }).click()

  expect(page.url()).toContain('/sign-up')
})
