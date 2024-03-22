import React from 'react';
import {
  getDefaultConfig,
  RainbowKitProvider,
  midnightTheme,
} from '@rainbow-me/rainbowkit';
import { WagmiProvider } from 'wagmi';
import {
  mainnet,
  polygon,
  optimism,
  arbitrum,
  base,
  goerli,
  sepolia,
} from 'wagmi/chains';
import {
  QueryClientProvider,
  QueryClient,
} from "@tanstack/react-query";

import MyRainbowButton from "../components/MyRainbowButton.tsx";

const config = getDefaultConfig({
  appName: 'Pay_Tim',
  projectId: '9799f339d71ca045685f9c692c428390',
  chains: [mainnet, polygon, optimism, arbitrum, base, goerli, sepolia],
  ssr: true, // If your dApp uses server side rendering (SSR)
});

const queryClient = new QueryClient();

const PayTim = ( ) => {
  return (
    <React.StrictMode>
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider coolMode>
          <MyRainbowButton />
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
    </React.StrictMode>
   );
};

export default PayTim;