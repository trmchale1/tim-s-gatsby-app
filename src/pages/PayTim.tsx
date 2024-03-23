import React from 'react';
import {
  getDefaultConfig,
  RainbowKitProvider,
  darkTheme,
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

import '@rainbow-me/rainbowkit/styles.css';

const config = getDefaultConfig({
  appName: 'Pay_Tim',
  projectId: '9799f339d71ca045685f9c692c428390',
  chains: [mainnet, polygon, optimism, arbitrum, base, goerli, sepolia],
  ssr: false, // If your dApp uses server side rendering (SSR)
});

const queryClient = new QueryClient();

const PayTim = ( ) => {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          <MyRainbowButton />
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
   );
};

export default PayTim;