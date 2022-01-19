import Image from 'next/image'
import Head from 'next/head'
import Layout from '../components/Navbar'

export default function About() {
  return (
    <>
      <Head>
        <title>About Page</title>
      </Head>
      <div>
        <h1>About page</h1>
        <Image src="/images/abstract.jpeg" height={144} width={144} alt="profile image" />
        <p>Welcome to my blog site. This is demo website for building blog site with Next.js and Markdown</p>
      </div>
    </>
  )
}