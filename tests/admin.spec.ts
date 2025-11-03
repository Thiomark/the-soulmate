import { test, expect } from '@playwright/test';

test.describe('Payload CMS Admin Panel', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to the admin panel
    await page.goto('http://localhost:3000/admin');
  });

  test('admin panel loads without hydration errors', async ({ page }) => {
    // Wait for the page to load
    await page.waitForLoadState('networkidle');
    
    // Check that there are no console errors related to hydration
    const consoleErrors: string[] = [];
    page.on('console', (msg) => {
      if (msg.type() === 'error') {
        consoleErrors.push(msg.text());
      }
    });

    // Wait a bit more for any potential hydration errors
    await page.waitForTimeout(3000);

    // Check for specific hydration errors
    const hydrationErrors = consoleErrors.filter(error => 
      error.includes('hydration') || 
      error.includes('nested') ||
      error.includes('mounting a new html') ||
      error.includes('mounting a new body')
    );

    // Log all errors for debugging
    if (consoleErrors.length > 0) {
      console.log('Console errors found:', consoleErrors);
    }

    // Assert no hydration errors
    expect(hydrationErrors).toHaveLength(0);
  });

  test('admin panel displays login form or dashboard', async ({ page }) => {
    // Wait for the page to load completely
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(2000);

    // Check if we can see either a login form or the admin dashboard
    const hasLoginForm = await page.locator('input[type="email"], input[name="email"]').count() > 0;
    const hasAdminDashboard = await page.locator('[data-payload-admin], .payload-admin').count() > 0;
    const hasPayloadContent = await page.textContent('body').then(text => 
      text?.includes('Payload') || text?.includes('Admin') || text?.includes('Dashboard')
    );

    // At least one of these should be true
    expect(hasLoginForm || hasAdminDashboard || hasPayloadContent).toBe(true);
  });

  test('admin panel responds successfully', async ({ page }) => {
    // Check the response status
    const response = await page.goto('http://localhost:3000/admin');
    expect(response?.status()).toBe(200);
  });

  test('no duplicate html/body elements', async ({ page }) => {
    await page.waitForLoadState('networkidle');
    
    // Count html and body elements
    const htmlCount = await page.locator('html').count();
    const bodyCount = await page.locator('body').count();
    
    expect(htmlCount).toBe(1);
    expect(bodyCount).toBe(1);
  });
});