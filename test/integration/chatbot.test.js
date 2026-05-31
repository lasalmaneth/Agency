import { Builder, By, Key, until } from 'selenium-webdriver';

async function testChatbotIntegration() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    console.log('🧪 Running Integration Test: Chatbot Keyword Logic');
    await driver.get('http://localhost:4321/contact');

    let chatInput = await driver.findElement(By.id('chat-input'));

    // Test "battery" keyword
    await chatInput.sendKeys('battery', Key.RETURN);
    await driver.wait(until.elementLocated(By.css('.message.bot')), 5000);

    let messages = await driver.findElements(By.className('message bot'));
    let lastMessage = await messages[messages.length - 1].getText();

    if (lastMessage.includes('Toshiba')) {
      console.log('✅ Chatbot recognized "battery" and replied about Toshiba');
    } else {
      console.log('❌ Chatbot failed to recognize "battery"');
    }

    // Test "hours" keyword
    await chatInput.sendKeys('hours', Key.RETURN);
    await driver.wait(async () => {
      let currentMessages = await driver.findElements(By.className('message bot'));
      return currentMessages.length > messages.length;
    }, 5000);

    messages = await driver.findElements(By.className('message bot'));
    lastMessage = await messages[messages.length - 1].getText();

    if (lastMessage.includes('9:30 AM')) {
      console.log('✅ Chatbot recognized "hours" and replied with schedule');
    } else {
      console.log('❌ Chatbot failed to recognize "hours"');
    }

  } catch (error) {
    console.error('❌ Test Failed:', error);
  } finally {
    await driver.quit();
  }
}
testChatbotIntegration();
