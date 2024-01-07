/* globals customElements, FileReader */
import { LitElement, html } from 'lit-element'

class MainPage extends LitElement {
  constructor () {
    super()
  }

  static get properties () {
    return {
    }
  }

  render () {
    return html`
    Hi
    `
  }
}

customElements.define('main-page', MainPage)
