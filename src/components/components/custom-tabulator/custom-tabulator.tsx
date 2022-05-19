import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'custom-tabulator',
  styleUrl: 'custom-tabulator.css',
  shadow: true,
})
export class CustomTabulator {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
