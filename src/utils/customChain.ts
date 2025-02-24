import {
  defineChain,
  createPublicClient,
  http,
  createWalletClient,
} from "viem";

export const crossfiTestnet = defineChain({
  id: 4157,
  name: "CrossFi Testnet",
  nativeCurrency: {
    decimals: 18,
    name: "XFI",
    symbol: "XFI",
  },
  rpcUrls: {
    default: {
      http: ["https://rpc.testnet.ms/"],
    },
  },
  blockExplorers: {
    default: { name: "Explorer", url: "https://test.xfiscan.com" },
  },
});

export const createWalletClientInstance = () => {
  return createWalletClient({
    chain: crossfiTestnet,
    transport: http(),
  });
};

export const createPublicClientInstance = () => {
  return createPublicClient({
    chain: crossfiTestnet,
    transport: http(),
  });
};
