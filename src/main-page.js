/* globals customElements */
import { LitElement, html } from 'lit'
import './home-page.js'
import './blogs-page.js'
import './blog-page.js'

class MainPage extends LitElement {
  static get properties () {
    return {
    }
  }

  pages () {
    if (window.location.pathname === '/') {
      return html`
        <home-page></home-page>
      `
    }
    if (window.location.pathname === '/blog') {
      return html`
        <blogs-page></blogs-page>
      `
    }

    console.log(window.location.pathname)
    if (window.location.pathname.startsWith('/blog')) {
      console.log('blog')
      const blog = window.location.pathname.split('/')[2]
      return html`
        <blog-page blog="${blog}"></blog-page>
      `
    }
  }

  render () {
    const page = this.pages()

    return html`
      <div>
        <h1>Rom1504's home</h1>
        <nav>
          <a href="/">Home</a>
          <a href="/blog">Blog</a>
        </nav>
        ${page}
      </div>
    `
  }
}

customElements.define('main-page', MainPage)
