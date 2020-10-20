import Head from 'next/head';
import Link from 'next/link';
import Alert from '../components/Alert/alert';

const about = () => {
  const name = "Ayaan Siddiqui";

  return (
    <div className="container">
      <Head>
        <title>About</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/css/bootstrap.min.css" />
      </Head>

      <main className="mt-5 mb-5">
        <Alert>I am an alert!!</Alert>

        <h1>{name}</h1>
        <p><Link href="/">Home</Link></p>
      </main>
    </div>
  );
};

export default about;