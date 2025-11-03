const puppeteer = require('puppeteer');

async function testAdminPanel() {
  console.log('🚀 Starting admin panel test...');
  
  const browser = await puppeteer.launch({ 
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  const page = await browser.newPage();
  
  // Listen for console errors
  const consoleErrors = [];
  page.on('console', (msg) => {
    if (msg.type() === 'error') {
      consoleErrors.push(msg.text());
    }
  });

  try {
    console.log('📱 Navigating to admin panel...');
    const response = await page.goto('http://localhost:3000/admin', { 
      waitUntil: 'networkidle2',
      timeout: 30000 
    });
    
    console.log(`📊 Response status: ${response.status()}`);
    
    // Wait a bit for any hydration to complete
    await page.waitForTimeout(3000);
    
    // Check for hydration errors
    const hydrationErrors = consoleErrors.filter(error => 
      error.includes('hydration') || 
      error.includes('nested') ||
      error.includes('mounting a new html') ||
      error.includes('mounting a new body')
    );
    
    console.log(`⚠️  Total console errors: ${consoleErrors.length}`);
    console.log(`💥 Hydration errors: ${hydrationErrors.length}`);
    
    if (hydrationErrors.length > 0) {
      console.log('🔴 Hydration errors found:');
      hydrationErrors.forEach(error => console.log(`  - ${error}`));
    } else {
      console.log('✅ No hydration errors detected!');
    }
    
    // Check HTML structure
    const htmlCount = await page.$$eval('html', elements => elements.length);
    const bodyCount = await page.$$eval('body', elements => elements.length);
    
    console.log(`🏗️  HTML elements: ${htmlCount}`);
    console.log(`🏗️  Body elements: ${bodyCount}`);
    
    if (htmlCount === 1 && bodyCount === 1) {
      console.log('✅ HTML structure is correct!');
    } else {
      console.log('🔴 HTML structure is invalid!');
    }
    
    // Check if page loaded content
    const bodyText = await page.evaluate(() => document.body.textContent);
    const hasPayloadContent = bodyText.includes('Payload') || bodyText.includes('Admin') || bodyText.includes('Login');
    
    console.log(`📄 Page has Payload content: ${hasPayloadContent}`);
    
    // Take a screenshot for debugging
    await page.screenshot({ path: 'admin-test.png', fullPage: true });
    console.log('📸 Screenshot saved as admin-test.png');
    
    // Summary
    const success = hydrationErrors.length === 0 && htmlCount === 1 && bodyCount === 1;
    console.log(`\n🎯 Test Result: ${success ? 'PASS ✅' : 'FAIL ❌'}`);
    
    return success;
    
  } catch (error) {
    console.error('❌ Test failed with error:', error.message);
    return false;
  } finally {
    await browser.close();
  }
}

testAdminPanel().then(success => {
  process.exit(success ? 0 : 1);
}).catch(error => {
  console.error('Fatal error:', error);
  process.exit(1);
});