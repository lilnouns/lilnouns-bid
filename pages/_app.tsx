import { getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit'
import '@rainbow-me/rainbowkit/styles.css'
import { DefaultSeo } from 'next-seo'
import { withUrqlClient } from 'next-urql'
import type { AppProps } from 'next/app'
import { cacheExchange, fetchExchange } from 'urql'
import { configureChains, createClient, WagmiConfig } from 'wagmi'
import { goerli, mainnet } from 'wagmi/chains'
import { infuraProvider } from 'wagmi/providers/infura'
import SEO from '../next-seo.config'
import '../styles/globals.css'

const defaultChains = [mainnet, goerli]

const infuraApiKey = process.env.NEXT_PUBLIC_INFURA_API_KEY as string

const graphQlApiUrl = process.env.NEXT_PUBLIC_GRAPHQL_API_URL as string

const walletConnectProjectId = process.env
  .NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID as string

const { chains, provider, webSocketProvider } = configureChains(defaultChains, [
  infuraProvider({
    apiKey: infuraApiKey,
  }),
])

const { connectors } = getDefaultWallets({
  appName: 'Lil Nouns Bid',
  projectId: walletConnectProjectId,
  chains,
})

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
  webSocketProvider,
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains} modalSize="compact">
        <DefaultSeo {...SEO} />
        <Component {...pageProps} />
      </RainbowKitProvider>
    </WagmiConfig>
  )
}

export default withUrqlClient(
  (ssrExchange) => ({
    url: graphQlApiUrl,
    exchanges: [cacheExchange, ssrExchange, fetchExchange],
  }),
  { ssr: false },
)(MyApp)
