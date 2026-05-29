import { Builder } from 'selenium-webdriver';

async function testPageMetadata() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        console.log('🧪 Running Unit Test Equivalent: SEO Metadata Verification');

        // Test Homepage Meta
        await driver.get('http://localhost:4321');
        let homeTitle = await driver.getTitle();
        if (homeTitle.includes('JAYASINGHE & Co.')) {
            console.log('✅ Homepage Title: Correct');
        } else {
            console.log('❌ Homepage Title: Incorrect');
        }

        // Test Catalog Meta
        await driver.get('http://localhost:4321/catalog');
        let catalogTitle = await driver.getTitle();
        if (catalogTitle.includes('Catalog')) {
            console.log('✅ Catalog Title: Correct');
        } else {
            console.log('❌ Catalog Title: Incorrect');
        }

    } catch (error) {
        console.error('❌ Test Failed:', error);
    } finally {
        await driver.quit();
    }
}

testPageMetadata();
