import { html, fixture, assert, fixtureCleanup } from '@open-wc/testing'; // eslint-disable-line import/no-extraneous-dependencies
import '../cells-training-list.js';

suite('CellsTrainingList', () => {
  let el;

  teardown(() => fixtureCleanup());

  setup(async () => {
    el = await fixture(html`<cells-training-list></cells-training-list>`);
    await el.updateComplete;
  });

  test('instantiating the element with default properties works', () => {
    const element = el.shadowRoot.querySelector('p');
    assert.equal(element.innerText, 'Welcome to Cells');
  });

});
