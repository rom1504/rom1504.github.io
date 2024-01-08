/* globals customElements */
import { LitElement, html } from 'lit'
import blogs from './blogs.js'

class BlogsPage extends LitElement {
  static get properties () {
    return {
    }
  }

  render () {
    return html`${blogs.map(blog => html`<a href="/blog/${blog}">${blog}</a><br>`)}`
  }
}

customElements.define('blogs-page', BlogsPage)
