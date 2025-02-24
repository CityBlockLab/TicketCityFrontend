import React, { useState } from "react";
import {
  LayoutDashboard,
  Compass,
  PlusCircle,
  Ticket,
  Wallet,
  Shield,
  Users,
  Settings,
  ChevronDown,
} from "lucide-react";
import { useUser } from "@privy-io/react-auth";
import { Link, useNavigate } from "react-router-dom";
import type { NavLink } from "../../types";
import { maskEmail } from "../../utils/maskedEmail";

const navLinks: NavLink[] = [
  {
    icon: <LayoutDashboard size={24} />,
    label: "Dashboard",
    path: "/dashboard",
  },
  { icon: <Compass size={24} />, label: "Explore Events", path: "/explore" },
  {
    icon: <PlusCircle size={24} />,
    label: "Create Event",
    path: "/create-event",
  },
  { icon: <Ticket size={24} />, label: "My Tickets", path: "/tickets" },
  { icon: <Wallet size={24} />, label: "My Wallet", path: "/wallet" },
  { icon: <Shield size={24} />, label: "Ticket Verification", path: "/verify" },
  { icon: <Users size={24} />, label: "Organizers Hub", path: "/organizers" },
  { icon: <Settings size={24} />, label: "Settings", path: "/settings" },
];

const Sidebar: React.FC = () => {
  const [activePath, setActivePath] = useState("/explore");
  const { user } = useUser();
  const navigate = useNavigate();

  const externalWallet = user?.wallet?.address?.toString() || "";
  const userEmail = user?.email?.toString() || "";
  const userNameFromGoogle = user?.google?.name?.toString() || "";

  const userEmailMasked = maskEmail(userEmail);

  const truncateAddress = (address: string): string => {
    if (!address) return "";
    return `${address.slice(0, 6)}...${address.slice(-6)}`;
  };

  const displayName =
    userNameFromGoogle ||
    truncateAddress(externalWallet) ||
    userEmailMasked ||
    "No User";

  const handleNavigation = (path: string) => {
    setActivePath(path);
    navigate(path);
  };

  return (
    <aside className="w-64 h-full bg-background border-r border-borderStroke flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-borderStroke">
        <img
          src="https://gateway.pinata.cloud/ipfs/QmTXNQNNhFkkpCaCbHDfzbUCjXQjQnhX7QFoX1YVRQCSC8"
          alt="TicketCity"
          className="h-8"
          onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
            e.currentTarget.src = "/placeholder-logo.svg";
          }}
        />
      </div>

      {/* User Profile */}
      <button
        className="px-6 py-4 flex items-center gap-2 border-b border-borderStroke hover:bg-opacity-50 transition-colors"
        onClick={() => handleNavigation("/profile")}>
        <img
          src="https://gateway.pinata.cloud/ipfs/QmTXNQNNhFkkpCaCbHDfzbUCjXQjQnhX7QFoX1YVRQCSC8"
          alt={`${displayName}'s profile`}
          className="w-10 h-10 rounded-full object-cover"
          onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
            e.currentTarget.src = "/placeholder-avatar.svg";
          }}
        />
        <span className="text-white font-inter text-sm flex-1 truncate">
          {displayName}
        </span>
        <ChevronDown className="w-4 h-4 text-textGray flex-shrink-0" />
      </button>

      {/* Navigation Links */}
      <nav className="flex-1 pt-6 overflow-y-auto">
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            onClick={() => setActivePath(link.path)}
            className={`
              flex items-center gap-3 px-6 py-3 text-lg transition-colors
              hover:bg-white/5
              ${
                activePath === link.path
                  ? "text-white bg-white/10"
                  : "text-textGray hover:text-white"
              }
            `}>
            <span className="w-6 h-6 flex-shrink-0">{link.icon}</span>
            <span className="font-inter font-normal truncate">
              {link.label}
            </span>
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
