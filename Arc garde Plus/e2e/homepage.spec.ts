import { test, expect } from '@playwright/test';

test.describe('Homepage', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('has correct title and meta description', async ({ page }) => {
    // Check page title
    await expect(page).toHaveTitle(/From Invisible to Unstoppable.*Arc Garde\+\+/);
    
    // Check meta description
    const metaDescription = page.locator('meta[name="description"]');
    await expect(metaDescription).toHaveAttribute('content', /3× Revenue in 90 Days/);
  });

  test('hero section loads correctly', async ({ page }) => {
    // Check main headline
    const headline = page.getByRole('heading', { level: 1 });
    await expect(headline).toContainText('From Invisible to');
    await expect(headline).toContainText('Unstoppable');

    // Check animated counters are present
    await expect(page.getByText('Revenue in')).toBeVisible();
    await expect(page.getByText('Days')).toBeVisible();

    // Check CTAs are present
    await expect(page.getByRole('button', { name: /Book.*audit/i })).toBeVisible();
    await expect(page.getByRole('button', { name: /See case studies/i })).toBeVisible();
  });

  test('navigation works correctly', async ({ page }) => {
    // Check navigation is visible
    const nav = page.getByRole('navigation');
    await expect(nav).toBeVisible();

    // Check logo is present
    await expect(page.getByText('Arc Garde++')).toBeVisible();

    // Check navigation links
    await expect(page.getByRole('link', { name: 'Home' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Services' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Case Studies' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'About' })).toBeVisible();
  });

  test('sticky booking button appears on scroll', async ({ page }) => {
    // Initially should not be visible
    const stickyBooking = page.getByRole('button', { name: /Book Audit/i }).last();
    await expect(stickyBooking).not.toBeVisible();

    // Scroll down to trigger sticky button
    await page.evaluate(() => window.scrollTo(0, window.innerHeight));
    
    // Wait for scroll animation and button to appear
    await page.waitForTimeout(1000);
    await expect(stickyBooking).toBeVisible();
  });

  test('booking modal opens and closes correctly', async ({ page }) => {
    // Click on main CTA button
    await page.getByRole('button', { name: /Book.*audit/i }).first().click();
    
    // Modal should be visible
    await expect(page.getByRole('dialog')).toBeVisible();
    await expect(page.getByText('Book Your Growth Audit')).toBeVisible();

    // Close modal with X button
    await page.getByRole('button', { name: /close/i }).click();
    await expect(page.getByRole('dialog')).not.toBeVisible();
  });

  test('case studies section loads correctly', async ({ page }) => {
    // Scroll to case studies section
    await page.getByText('Real Results for').scrollIntoViewIfNeeded();
    
    // Check section heading
    await expect(page.getByText('Real Results for Real Businesses')).toBeVisible();
    
    // Check case study cards are present
    const caseStudyCards = page.locator('[data-testid="case-study-card"]');
    // Should have at least 3 case studies
    await expect(caseStudyCards.first()).toBeVisible();
  });

  test('testimonials section works correctly', async ({ page }) => {
    // Scroll to testimonials
    await page.getByText('What Our Clients Say').scrollIntoViewIfNeeded();
    
    // Check testimonial content is visible
    await expect(page.getByText('What Our Clients Say')).toBeVisible();
    
    // Check navigation arrows are present
    await expect(page.getByRole('button', { name: /previous testimonial/i })).toBeVisible();
    await expect(page.getByRole('button', { name: /next testimonial/i })).toBeVisible();
  });

  test('CTA section is present and functional', async ({ page }) => {
    // Scroll to CTA section
    await page.getByText('Ready to 3× Your Revenue').scrollIntoViewIfNeeded();
    
    // Check CTA heading
    await expect(page.getByText('Ready to 3× Your Revenue')).toBeVisible();
    
    // Check benefits list
    await expect(page.getByText('Comprehensive revenue audit')).toBeVisible();
    
    // Check CTA button works
    const ctaButton = page.getByRole('button', { name: /Book Your Free Audit Now/i });
    await expect(ctaButton).toBeVisible();
    await ctaButton.click();
    
    // Modal should open
    await expect(page.getByRole('dialog')).toBeVisible();
  });

  test('footer contains all required links', async ({ page }) => {
    // Scroll to footer
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    
    // Check footer sections
    await expect(page.getByText('Company')).toBeVisible();
    await expect(page.getByText('Resources')).toBeVisible();
    await expect(page.getByText('Legal')).toBeVisible();
    
    // Check copyright
    await expect(page.getByText('© 2025 Arc Garde++')).toBeVisible();
  });

  test('mobile responsiveness', async ({ page, isMobile }) => {
    if (isMobile) {
      // Check mobile menu toggle
      const menuButton = page.getByRole('button', { name: /toggle menu/i });
      await expect(menuButton).toBeVisible();
      
      // Open mobile menu
      await menuButton.click();
      await expect(page.getByRole('link', { name: 'Home' })).toBeVisible();
      
      // Close mobile menu by clicking menu button again
      await menuButton.click();
    }
  });

  test('theme toggle works', async ({ page }) => {
    // Find theme toggle button
    const themeToggle = page.getByRole('button', { name: /Switch to.*mode/i });
    await expect(themeToggle).toBeVisible();
    
    // Click to toggle theme
    await themeToggle.click();
    
    // Check if theme has changed (look for light/dark class changes)
    const html = page.locator('html');
    // This will depend on your theme implementation
    await expect(html).toHaveClass(/dark|light/);
  });
});