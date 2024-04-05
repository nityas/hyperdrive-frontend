import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import {
  injectedWallet,
  rainbowWallet,
  safeWallet,
  walletConnectWallet,
} from "@rainbow-me/rainbowkit/wallets";
import {
  OAuthMethod,
  Theme,
  getCapsuleWallet,
} from "@usecapsule/rainbowkit-wallet";
import { http } from "@wagmi/core";
import { Chain } from "@wagmi/core/chains";
import { cloudChain } from "src/chains/cloudChain";
import { foundry, sepolia } from "wagmi/chains";

const APP_NAME = "Hyperdrive";

const {
  VITE_LOCALHOST_NODE_RPC_URL,
  VITE_CAPSULE_API_KEY,
  VITE_CAPSULE_ENV,
  VITE_CUSTOM_CHAIN_NODE_RPC_URL,
  VITE_CUSTOM_CHAIN_ADDRESSES_URL,
  VITE_CUSTOM_CHAIN_CHAIN_ID,
  VITE_WALLET_CONNECT_PROJECT_ID,
  VITE_SEPOLIA_RPC_URL,
} = import.meta.env;

export const wagmiChains: Chain[] = [];

// CloudChain
if (
  VITE_CUSTOM_CHAIN_NODE_RPC_URL &&
  VITE_CUSTOM_CHAIN_CHAIN_ID &&
  VITE_CUSTOM_CHAIN_ADDRESSES_URL
) {
  wagmiChains.push(cloudChain);
}

// Sepolia
if (VITE_SEPOLIA_RPC_URL) {
  wagmiChains.push(sepolia);
}

const getCapsuleWalletOpts = {
  capsule: {
    environment: VITE_CAPSULE_ENV, // Environment.PROD for Production
    apiKey: VITE_CAPSULE_API_KEY, // get one at usecapsule.com/beta
    constructorOpts: {}, // TODO
  },
  appName: APP_NAME,
  theme: Theme.dark,
  logo: "/logo.svg",
  oAuthMethods: [
    OAuthMethod.GOOGLE,
    OAuthMethod.TWITTER,
    OAuthMethod.DISCORD,
    OAuthMethod.APPLE,
  ],
};

export const wagmiConfig = getDefaultConfig({
  appName: APP_NAME,
  projectId: VITE_WALLET_CONNECT_PROJECT_ID,
  transports: {
    [foundry.id]: http(VITE_LOCALHOST_NODE_RPC_URL),
    [cloudChain.id]: http(VITE_CUSTOM_CHAIN_NODE_RPC_URL),
    [sepolia.id]: http(VITE_SEPOLIA_RPC_URL),
  },
  chains: [foundry, ...wagmiChains],
  wallets: [
    {
      groupName: "Recommended",
      wallets: [injectedWallet, safeWallet, rainbowWallet, walletConnectWallet],
    },
    {
      groupName: "Custom",
      wallets: [getCapsuleWallet(getCapsuleWalletOpts)],
    },
  ],
});
