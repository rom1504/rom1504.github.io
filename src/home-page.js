/* globals customElements */
import { LitElement } from 'lit'
import { Converter } from 'showdown'
import { unsafeHTML } from 'lit/directives/unsafe-html.js'

class HomePage extends LitElement {
  static get properties () {
    return {
    }
  }

  render () {
    const converter = new Converter()
    const text = '# hello, this is the home!'
    const html = converter.makeHtml(text)
    return unsafeHTML(html)
  }
}

customElements.define('home-page', HomePage)
