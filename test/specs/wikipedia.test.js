describe('Wikipedia Mobile Test Suite', () => {
  before(async () => {
    console.log('Starting Wikipedia mobile test...');
  });

  it('should successfully search for an article', async () => {
    // Step 1: Wait for app to load and tap search
    const searchContainer = await $('id:search_container');
    await searchContainer.waitForDisplayed({ timeout: 15000 });
    await searchContainer.click();
    
    // Step 2: Enter search term
    const searchInput = await $('id:search_src_text');
    await searchInput.setValue('Artificial Intelligence');
    
    // Step 3: Select first result
    const firstResult = await $('id:page_list_item_title');
    await firstResult.waitForDisplayed({ timeout: 5000 });
    await firstResult.click();
    
    // Step 4: Verify article title
    const articleTitle = await $('id:view_page_title_text');
    await expect(articleTitle).toHaveTextContaining('Artificial intelligence');
    
    // Step 5: Take screenshot
    await browser.saveScreenshot('./screenshots/search_results.png');
    console.log('Screenshot saved to /screenshots/search_results.png');
  });

  after(async () => {
    console.log('Test completed');
  });
});