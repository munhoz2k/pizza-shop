import { expect, test } from '@playwright/test'

test('Update Profile successfully', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  await page.getByRole('button', { name: 'Pizza Shop' }).click()
  await page.getByRole('menuitem', { name: 'Perfil da loja' }).click()

  await page.getByLabel('Name').fill('Lucas Pizza')
  await page.getByLabel('Descrição').fill('Another Description')
  await page.getByRole('button', { name: 'Salvar' }).click()

  await page.waitForLoadState('networkidle')

  await page.getByRole('button', { name: 'Close' }).click()

  await expect(page.getByText('Perfil atualizado com sucesso!')).toBeVisible()
  await expect(page.getByRole('button', { name: 'Lucas Pizza' })).toBeVisible()
})
