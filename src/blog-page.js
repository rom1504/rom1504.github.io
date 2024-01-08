/* globals customElements */
import { LitElement, html } from 'lit'
import { Converter } from 'showdown'
import { unsafeHTML } from 'lit/directives/unsafe-html.js'
import blogs from './blogs.js'

class BlogPage extends LitElement {
  constructor () {
    super()
    this.blogMd = ''
  }

  firstUpdated () {
    this.init()
  }

  static get properties () {
    return {
      blog: { type: String },
      blogMd: { type: String },
      headers: { type: String }
    }
  }

  async init () {
    if (!blogs.includes(this.blog)) {
      this.blogMd = ''
      return
    }
    const content = (await import(`./assets/${this.blog}.md`)).default
    const lines = content.split('\n')
    const headers = lines.slice(0, 3)
    const body = lines.slice(3)
    this.blogMd = body.join('\n')
    this.headers = headers
  }

  render () {
    if (this.blogMd === '') {
      return html`That page doesn't exist!`
    }
    const converter = new Converter()
    const blogHtml = converter.makeHtml(this.blogMd)
    return unsafeHTML(blogHtml)
  }
}

customElements.define('blog-page', BlogPage)
