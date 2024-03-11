import { expect, test } from '@playwright/test'

test('Sign up successfully', async ({ page }) => {
  await page.goto('/sign-up', { waitUntil: 'networkidle' })

  await page.getByLabel('Nome do estabelecimento').fill('Pizza Shop')
  await page.getByLabel('Seu nome').fill('John Doe')
  await page.getByLabel('Seu celular').fill('123124125115')
  await page.getByLabel('Seu email').fill('johndoe@example.com')

  await page.getByRole('button', { name: 'Concluir cadastro' }).click()
  await page.waitForLoadState('networkidle')

  const toast = page.getByText('Restaurante cadastrado com sucesso')

  await expect(toast).toBeVisible()
})

test('Sign up with wrong credentials', async ({ page }) => {
  await page.goto('/sign-up', { waitUntil: 'networkidle' })

  await page.getByLabel('Nome do estabelecimento').fill('Wrong Shop')
  await page.getByLabel('Seu nome').fill('John Doe')
  await page.getByLabel('Seu celular').fill('123124125115')
  await page.getByLabel('Seu email').fill('wrong@example.com')

  await page.getByRole('button', { name: 'Concluir cadastro' }).click()
  await page.waitForLoadState('networkidle')

  const toast = page.getByText('Erro ao cadastrar restaurante')

  await expect(toast).toBeVisible()
})

test('Sign up filling with wrong e-mail format', async ({ page }) => {
  await page.goto('/sign-up', { waitUntil: 'networkidle' })

  await page.getByLabel('Nome do estabelecimento').fill('Pizza Shop')
  await page.getByLabel('Seu nome').fill('John Doe')
  await page.getByLabel('Seu celular').fill('123124125115')
  await page.getByLabel('Seu email').fill('wrong')

  await page.getByRole('button', { name: 'Concluir cadastro' }).click()
  await page.waitForLoadState('networkidle')

  const toast = page.getByText(
    'Seu e-mail não foi inserido ou foi inserido incorretamente, por favor tente novamente!',
  )

  await expect(toast).toBeVisible()
})

test('Navigate to sign in page', async ({ page }) => {
  await page.goto('/sign-up', { waitUntil: 'networkidle' })
  await page.getByRole('link', { name: 'Já tem conta? Faça login' }).click()

  expect(page.url()).toContain('/sign-in')
})
