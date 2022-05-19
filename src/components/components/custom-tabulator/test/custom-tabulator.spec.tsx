import { newSpecPage } from '@stencil/core/testing';
import { CustomTabulator } from '../custom-tabulator';

describe('custom-tabulator', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CustomTabulator],
      html: `<custom-tabulator></custom-tabulator>`,
    });
    expect(page.root).toEqualHtml(`
      <custom-tabulator>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </custom-tabulator>
    `);
  });
});
