# rom1504.github.io

Personal website and blog.

## Structure

- `index.html` - Main page with about section and blog post list
- `post.html` - Blog post viewer (renders markdown files)
- `posts/` - Directory containing blog posts as markdown files

## Adding a New Blog Post

1. Add your markdown file to the `posts/` directory
2. Update the `posts` array in both `index.html` and `post.html` with the new post metadata

## Local Development

Simply open `index.html` in a browser, or use a local server:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`
