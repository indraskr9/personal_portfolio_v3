import {MDXComponents} from 'components'
import fs from 'fs'
import matter from 'gray-matter'
import mdxPrism from 'mdx-prism'
import renderToString from 'next-mdx-remote/render-to-string'
import {MdxRemote} from 'next-mdx-remote/types'
import path from 'path'
import readingTime from 'reading-time'

declare type DirType = 'blog'
export type PostData = {
  title: string
  publishedAt: string
  summary: string
  image: string
}

const root = process.cwd()

export async function getFiles(type: DirType) {
  return fs.readdirSync(path.join(root, 'data', type))
}

export async function getFileBySlug(type: DirType, slug: string) {
  const source = slug
    ? fs.readFileSync(path.join(root, 'data', type, `${slug}.mdx`), 'utf8')
    : fs.readFileSync(path.join(root, 'data', `${type}.mdx`), 'utf8')

  const {data, content} = matter(source)
  const mdxSource = await renderToString(content, {
    components: MDXComponents,
    mdxOptions: {
      remarkPlugins: [
        require('remark-autolink-headings'),
        require('remark-slug'),
        require('remark-code-titles'),
        require('remark-capitalize'),
      ],
      rehypePlugins: [mdxPrism],
    },
  })

  return {
    mdxSource,
    frontMatter: {
      readingTime: readingTime(content),
      slug: slug,
      ...data,
    },
  } as {frontMatter: FrontMatterData; mdxSource: MdxRemote.Source}
}

type IReadTimeResults = {
  text: string
  time: number
  words: number
  minutes: number
}

export type FrontMatterData = PostData & {
  slug: string
  readingTime: IReadTimeResults
}

export async function getAllFilesFrontMatter(
  type: DirType
): Promise<FrontMatterData[]> {
  const files = fs.readdirSync(path.join(root, 'data', type))

  return files.map(fileName => {
    const source = fs.readFileSync(
      path.join(root, 'data', type, fileName),
      'utf8'
    )
    const {data, content} = matter(source)
    return {
      ...data,
      slug: fileName.replace('.mdx', ''),
      readingTime: readingTime(content),
    } as FrontMatterData
  })
}
