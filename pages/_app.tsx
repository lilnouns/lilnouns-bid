import '@rainbow-me/rainbowkit/styles.css';
import '../styles/globals.css'
import type {AppProps} from 'next/app'
import {DefaultSeo} from "next-seo";
import SEO from '../next-seo.config';
import {chain, configureChains, createClient, WagmiConfig} from "wagmi";
import {infuraProvider} from 'wagmi/providers/infura'
import {getDefaultWallets, RainbowKitProvider} from "@rainbow-me/rainbowkit";
import {createClient as urqlCreatClient, Provider as UrqlProvider} from 'urql';

const chainConfig = process.env.NODE_ENV === 'development'
  ? [chain.goerli]
  : [chain.mainnet];

const infuraApiKey = process.env.NEXT_PUBLIC_INFURA_API_KEY!;

const graphQlApiUrl = process.env.NEXT_PUBLIC_GRAPHQL_API_URL!;

const {chains, provider, webSocketProvider} = configureChains(chainConfig, [
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

const urqlClient = urqlCreatClient({
  url: graphQlApiUrl,
});

function MyApp({Component, pageProps}: AppProps) {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains} modalSize="compact">
        <UrqlProvider value={urqlClient}>
          <DefaultSeo {...SEO} />
          <Component {...pageProps} />
        </UrqlProvider>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default MyApp
