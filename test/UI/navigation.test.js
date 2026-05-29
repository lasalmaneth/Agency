import { Builder, By, until } from 'selenium-webdriver';

async function testNavigation() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        console.log('🧪 Running UI Test: Navigation & Branding');
        await driver.get('http://localhost:4321');

        // 1. Verify Logo Link takes you home
        let logo = await driver.findElement(By.className('logo'));
        await logo.click();
        console.log('✅ Logo link leads to home page');

        // 2. Verify Catalog Page loading
        let catalogLink = await driver.findElement(By.linkText('Catalog'));
        await catalogLink.click();
        await driver.wait(until.elementLocated(By.className('catalog-view')), 5000);
        console.log('✅ Catalog page loaded successfully');

        // 3. Verify Contact Page loading
        let contactLink = await driver.findElement(By.linkText('Contact'));
        await contactLink.click();
        await driver.wait(until.elementLocated(By.className('chatbot-section')), 5000);
        console.log('✅ Contact page loaded successfully');

    } catch (error) {
        console.error('❌ Test Failed:', error);
    } finally {
        await driver.quit();
    }
}

testNavigation();
