import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { PrivyProvider } from "@privy-io/react-auth";
import { crossfiTestnet } from "./utils/customChain.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <PrivyProvider
      appId="cm7ggplh602nev98bri6wwd57"
      config={{
        // Display wallet as login methods
        loginMethods: ["wallet"],
        externalWallets: {
          coinbaseWallet: {
            // Valid connection options include 'all' (default), 'eoaOnly', or 'smartWalletOnly'
            connectionOptions: "all",
          },
        },
        supportedChains: [crossfiTestnet],
        appearance: {
          accentColor: "#FF8A00",
          theme: "#090014",
          showWalletLoginFirst: false,
          logo: "",
          walletChainType: "ethereum-only",
          walletList: [
            "detected_ethereum_wallets",
            "phantom",
            "okx_wallet",
            "uniswap",
            "bybit_wallet",
            "wallet_connect",
          ],
        },
        embeddedWallets: {
          requireUserPasswordOnCreate: false,
          showWalletUIs: true,
        },
        mfa: {
          noPromptOnMfaRequired: false,
        },
      }}>
      <App />
    </PrivyProvider>
  </StrictMode>
);
