import '@rainbow-me/rainbowkit/styles.css';
import '../styles/globals.css'
import type {AppProps} from 'next/app'
import {DefaultSeo} from "next-seo";
import SEO from '../next-seo.config';
import {configureChains, createClient, defaultChains, WagmiConfig} from "wagmi";
import {publicProvider} from 'wagmi/providers/public'
import {alchemyProvider} from 'wagmi/providers/alchemy'
import {infuraProvider} from 'wagmi/providers/infura'
import {getDefaultWallets, RainbowKitProvider} from "@rainbow-me/rainbowkit";

const {chains, provider} = configureChains(defaultChains, [
  infuraProvider({
    apiKey: process.env.NEXT_PUBLIC_INFURA_API_KEY,
    priority: 0,
  }),
  alchemyProvider({
    apiKey: process.env.NEXT_PUBLIC_ALCHEMY_API_KEY,
    priority: 1,
  }),
  publicProvider({priority: 2}),
])

const {connectors} = getDefaultWallets({
  appName: 'Lil Nouns Bid',
  chains
});

const client = createClient({
  autoConnect: true,
  connectors,
  provider
})

function MyApp({Component, pageProps}: AppProps) {
  return (
    <WagmiConfig client={client}>
      <RainbowKitProvider chains={chains} modalSize="compact">
        <DefaultSeo {...SEO} />
        <Component {...pageProps} />
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default MyApp
