import '@rainbow-me/rainbowkit/styles.css';
import '../styles/globals.css'
import type {AppProps} from 'next/app'
import {DefaultSeo} from "next-seo";
import SEO from '../next-seo.config';
import {configureChains, createClient, WagmiConfig} from "wagmi";
import {infuraProvider} from 'wagmi/providers/infura'
import {getDefaultWallets, RainbowKitProvider} from "@rainbow-me/rainbowkit";
import {cacheExchange, fetchExchange} from 'urql';
import {goerli, mainnet} from 'wagmi/chains'
import {withUrqlClient} from 'next-urql'

const defaultChains = [mainnet, goerli]

const infuraApiKey = process.env.NEXT_PUBLIC_INFURA_API_KEY as string;

const graphQlApiUrl = process.env.NEXT_PUBLIC_GRAPHQL_API_URL as string;

const {chains, provider, webSocketProvider} = configureChains(defaultChains, [
  infuraProvider({
    apiKey: infuraApiKey,
  })
])

const {connectors} = getDefaultWallets({
  appName: 'Lil Nouns Bid',
  chains
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
  webSocketProvider
})

function MyApp({Component, pageProps}: AppProps) {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains} modalSize="compact">
        <DefaultSeo {...SEO} />
        <Component {...pageProps} />
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default withUrqlClient(
  (ssrExchange) => ({
    url: graphQlApiUrl,
    exchanges: [cacheExchange, ssrExchange, fetchExchange],
  }),
  {ssr: false}
)(MyApp)
