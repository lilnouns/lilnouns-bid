import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Lil Nouns</title>
        <meta name="description" content="Simple interface to bit and see last auctions" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex h-screen justify-center items-center">
        <div className="m-auto">
          <h1 className="text-3xl">Lil Nouns Bid</h1>
          <p className="text-xl">We are building something!</p>
        </div>
      </main>
    </>
  );
};

export default Home;
