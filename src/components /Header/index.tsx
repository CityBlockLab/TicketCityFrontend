import React, { useState } from "react";
import { Search, Bell, Plus } from "lucide-react";
import { useConnectWallet, useWallets } from "@privy-io/react-auth";

const Header: React.FC = () => {
  const [isWalletConnected, setIsWalletConnected] = useState(false);

  const walletAddress = "0x1234...5678";

  const { connectWallet } = useConnectWallet({
    onSuccess() {
      console.log("Connected");
      setIsWalletConnected(true);
    },
  });

  return (
    <header className="bg-background border-b border-borderStroke p-4">
      <div className="flex items-center justify-between gap-4">
        {/* Search Bar */}
        <div className="flex-1 max-w-2xl">
          <div className="flex">
            <div className="flex-1 relative">
              <input
                type="text"
                placeholder="Search by name, location or category"
                className="w-full bg-searchBg border border-borderStroke rounded-l-lg px-4 py-2 text-white font-inter text-sm focus:outline-none"
              />
            </div>
            <button className="bg-button-gradient px-6 py-2 rounded-r-lg flex items-center justify-center">
              <Search className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          {/* Connect Wallet Button */}
          <button
            onClick={connectWallet}
            className="px-4 py-2 rounded-full bg-searchBg shadow-button-inset text-white font-inter text-sm">
            {isWalletConnected ? walletAddress : "Connect Wallet"}
          </button>

          {/* Notification Icon */}
          <div className="relative">
            <div className="w-10 h-10 rounded-full border-2 border-white shadow-button-inset flex items-center justify-center">
              <Bell className="w-5 h-5 text-white" />
            </div>
          </div>

          {/* Create Button */}
          <button className="bg-button-gradient px-4 py-2 rounded-full flex items-center gap-2 text-white font-inter text-sm">
            <Plus className="w-4 h-4" />
            <span>Create</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
