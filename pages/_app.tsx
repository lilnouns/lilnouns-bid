import '@rainbow-me/rainbowkit/styles.css';
import '../styles/globals.css'
import type {AppProps} from 'next/app'
import {DefaultSeo} from "next-seo";
import SEO from '../next-seo.config';
import {chain, configureChains, createClient, WagmiConfig} from "wagmi";
import {jsonRpcProvider} from "wagmi/providers/jsonRpc";
import {publicProvider} from 'wagmi/providers/public'
import {alchemyProvider} from 'wagmi/providers/alchemy'
import {infuraProvider} from 'wagmi/providers/infura'
import {getDefaultWallets, RainbowKitProvider} from "@rainbow-me/rainbowkit";
import {createClient as urqlCreatClient, Provider as UrqlProvider} from 'urql';

let chainConfig = process.env.NODE_ENV === 'development'
  ? [chain.goerli]
  : [chain.mainnet];

const {chains, provider, webSocketProvider} = configureChains(chainConfig, [
  jsonRpcProvider({
    rpc: () => {
      let http: string = process.env.NODE_ENV === 'development'
        ? "https://rpc.ankr.com/eth_goerli"
        : "https://rpc.ankr.com/eth";
      return {http};
    },
    priority: 0,
  }),
  infuraProvider({
    apiKey: process.env.NEXT_PUBLIC_INFURA_API_KEY ?? "",
    priority: 1,
  }),
  alchemyProvider({
    apiKey: process.env.NEXT_PUBLIC_ALCHEMY_API_KEY ?? "",
    priority: 2,
  }),
  publicProvider({priority: 3}),
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
  url: process.env.NEXT_PUBLIC_GRAPHQL_API_URL ?? "",
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
