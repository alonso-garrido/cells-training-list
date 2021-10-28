import { LitElement, html, } from 'lit-element';
import { getComponentSharedStyles } from '@bbva-web-components/bbva-core-lit-helpers';
import styles from './CellsTrainingList-styles.js';
import '@cells-insurance-components/cells-insurance-card-rbvd/cells-insurance-card-rbvd.js'
/**
![LitElement component](https://img.shields.io/badge/litElement-component-blue.svg)

This component ...

Example:

```html
<cells-training-list></cells-training-list>
```

##styling-doc

@customElement cells-training-list
*/
export class CellsTrainingList extends LitElement {
  static get is() {
    return 'cells-training-list';
  }

  // Declare properties
  static get properties() {
    return {
      listCards: { type: Array, attribute: "list-card" }
    };
  }

  // Initialize properties
  constructor() {
    super();
    this.name = 'Cells';
  }

  static get styles() {
    return [
      styles,
      getComponentSharedStyles('cells-training-list-shared-styles')
    ];
  }

  // Define a template
  render() {
    return html`
    <p class='title'>Seguros para ofrecer al cliente:</p>
    <div class='estilo'>
      ${this.listCards.map((i) => html`<cells-insurance-card-rbvd class='card' code="${i.code}" title="${i.title}" info="${i.info}"
        .items="${i.items}" button-name="${i.buttonName}"></cells-insurance-card-rbvd>`)}
    </div>
    `;
  }
}
