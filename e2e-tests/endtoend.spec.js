// eslint-disable-next-line no-undef
const { test, describe, expect } = require('@playwright/test')

describe('Pokedex', () => {
    const baseurl = 'http://localhost:8080'
  test('front page can be opened', async ({ page }) => {
     await page.goto(baseurl)
    await expect(page.getByText('ivysaur')).toBeVisible()
    await expect(page.getByText('Pokémon and Pokémon character names are trademarks of Nintendo.')).toBeVisible()
  })
  test('pokemon page can be navigated from main page', async ({page}) => {
    await page.goto(baseurl)
    await page.getByText('ivysaur').click()
    await expect(page.getByText('chlorophyll')).toBeVisible()
  })
})