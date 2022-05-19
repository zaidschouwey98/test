import { newE2EPage } from '@stencil/core/testing';

describe('custom-tabulator', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<custom-tabulator></custom-tabulator>');

    const element = await page.find('custom-tabulator');
    expect(element).toHaveClass('hydrated');
  });
});
