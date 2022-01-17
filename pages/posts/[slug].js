import Head from 'next/head'
import Link from 'next/link'
import { getPost, getSlug } from '../../lib/post'

import styles from '../../styles/Post.module.css'

export async function getStaticPaths() {
  const paths = await getSlug()
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params: { slug } }) {
  const post = await getPost(slug)
  return {
    props: {
      post
    }
  }
}

export default function firstPostPage({ post }) {
  return (
    <>
      <Head>
        <title>{post.title}</title>
      </Head>
      <main>
        <h1>{post.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.body }} />
      </main>
      <p><Link href="/"><a>Back to homepage</a></Link></p>
    </>
  )
}