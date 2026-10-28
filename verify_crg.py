import asyncio
from playwright.async_api import async_playwright

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        page = await browser.new_page(viewport={"width": 1440, "height": 1100})
        
        await page.goto("http://localhost:8910/index.html")
        await page.wait_for_selector(".faucet-card")
        await page.wait_for_timeout(1000)
        
        # Scroll pour voir la grille de produits
        await page.evaluate("window.scrollBy(0, 500)")
        await page.wait_for_timeout(500)
        
        await page.screenshot(path="/Users/nourine/.gemini/antigravity-ide/brain/2830eef4-b89d-49b3-8964-eeef98dc06a7/scratch/crg_aquapro_products_grid.png")
        print("Saved products grid screenshot!")
        
        await browser.close()

if __name__ == "__main__":
    asyncio.run(main())
