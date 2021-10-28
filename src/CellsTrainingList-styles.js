/* eslint-disable no-unused-vars */
import { css, unsafeCSS } from 'lit-element';
import * as foundations from '@bbva-web-components/bbva-foundations-styles';

export default css`:host {
  display: block;
  box-sizing: border-box;
}

:host([hidden]), [hidden] {
  display: none !important;
}

.title {
  font-size: 20px !important;
  font-weight: bold;
  margin: 30px 10px 0px 36px;
}

.estilo {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
}

.card {
  max-width: 350px;
  margin: 40px;
}

*, *:before, *:after {
  box-sizing: inherit;
}
`;