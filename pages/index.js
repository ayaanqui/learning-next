import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/css/bootstrap.min.css" />
      </Head>

      <main className="mt-5 mb-5">
        <h1>Hello world!</h1>
        <p><Link href="/about">About</Link></p>
      </main>
    </div>
  )
}
