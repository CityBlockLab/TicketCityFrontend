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
          accentColor: "#6A6FF5",
          theme: "#FFFFFF",
          showWalletLoginFirst: false,
          logo: "https://auth.privy.io/logos/privy-logo.png",
          walletChainType: "ethereum-only",
          walletList: [
            "detected_wallets",
            "phantom",
            "solflare",
            "backpack",
            "okx_wallet",
          ],
        },
        fundingMethodConfig: {
          moonpay: {
            useSandbox: true,
          },
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
