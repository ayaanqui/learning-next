import Head from 'next/head';
import Link from 'next/link';

const about = () => {
  const name = "Ayaan Siddiqui";

  return (
    <div className="container">
      <Head>
        <title>About</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>{name}</h1>
        <p><Link href="/">Home</Link></p>
      </main>
    </div>
  );
};

export default about;