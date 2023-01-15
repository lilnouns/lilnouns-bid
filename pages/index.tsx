import type {NextPage} from "next";
import Head from "next/head";
import {Content, Footer, Header} from "../components";
import {useIsMounted} from "../hooks";

const Home: NextPage = () => {
  const isMounted = useIsMounted()

  if (!isMounted) return null
  return (
    <>
      <Head>
        <title>Lil Nouns Bid</title>
        <meta name="description" content="Bid faster and more efficient for bidding on auction." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="tw-relative tw-bg-gray-50 tw-overflow-hidden">
        <div className="tw-hidden sm:tw-block sm:tw-absolute sm:tw-inset-y-0 sm:tw-h-full sm:tw-w-full" aria-hidden="true">
          <div className="tw-relative tw-h-full tw-max-w-7xl tw-mx-auto">
            <svg
              className="tw-absolute tw-right-full tw-transform tw-translate-y-1/4 tw-translate-x-1/4 lg:tw-translate-x-1/2"
              width={404}
              height={784}
              fill="none"
              viewBox="0 0 404 784"
            >
              <defs>
                <pattern
                  id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect x={0} y={0} width={4} height={4} className="tw-text-gray-200" fill="currentColor" />
                </pattern>
              </defs>
              <rect width={404} height={784} fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)" />
            </svg>
            <svg
              className="tw-absolute tw-left-full tw-transform -tw-translate-y-3/4 -tw-translate-x-1/4 md:-tw-translate-y-1/2 lg:-tw-translate-x-1/2"
              width={404}
              height={784}
              fill="none"
              viewBox="0 0 404 784"
            >
              <defs>
                <pattern
                  id="5d0dd344-b041-4d26-bec4-8d33ea57ec9b"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect x={0} y={0} width={4} height={4} className="tw-text-gray-200" fill="currentColor" />
                </pattern>
              </defs>
              <rect width={404} height={784} fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)" />
            </svg>
          </div>
        </div>

        <div className="tw-relative pt-6">
          <Header />

          <Content />

          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
