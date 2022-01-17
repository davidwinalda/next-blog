import { readdir, readFile } from 'fs/promises'
import { marked } from 'marked'
import matter from 'gray-matter'

export async function getPost(slug) {
  const source = await readFile(`posts/${slug}.md`, "utf-8")
  const { data: { title }, content } = matter(source)
  const body = marked(content)
  return { title, body }
}

export async function getSlug() {
  const listDir = await readdir("posts")
  const filterFiles = listDir.filter(file => file.endsWith('.md'))
  const listSlug = filterFiles.map(slug => slug.slice(0, -3))
  return listSlug.map(slug => {
    return {
      params: {
        slug: slug
      }
    }
  })
}