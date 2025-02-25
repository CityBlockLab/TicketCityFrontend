import React from 'react';
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
  QrCode, // Added for Attendance Scan
} from 'lucide-react';

import { TicketCityLogo, ProfileImg } from '../../assets';

interface SidebarProps {
  onNavigate: (path: string) => void;
  currentPath: string;
}

const navLinks = [
  { icon: <LayoutDashboard />, label: 'Dashboard', path: '/dashboard' },
  { icon: <Compass />, label: 'Explore Events', path: '/explore' },
  { icon: <PlusCircle />, label: 'Create Event', path: '/create-event' },
  { icon: <Ticket />, label: 'My Events', path: '/events' },
  { icon: <Ticket />, label: 'My Tickets', path: '/tickets' },
  { icon: <Wallet />, label: 'My Wallet', path: '/wallet' },
  { icon: <Shield />, label: 'Ticket Verification', path: '/verify' },
  { icon: <QrCode />, label: 'Attendance Scan', path: '/attendance-scan' }, // Added new link
  { icon: <Users />, label: 'Organizers Hub', path: '/organizers' },
  { icon: <Settings />, label: 'My Events', path: '/my-events' },
  { icon: <Settings />, label: 'Manage Events', path: '/manage-event/:id' },
  { icon: <Settings />, label: 'Settings', path: '/settings' },
];

const Sidebar: React.FC<SidebarProps> = ({ onNavigate, currentPath }) => {
  return (
    <div className="w-64 h-full bg-background border-r border-borderStroke flex flex-col">
      {/* Logo */}
      <div className="p-6">
        <img src={TicketCityLogo} alt="TicketCity" className="h-16" />
      </div>

      {/* User Profile */}
      <div className="px-6 py-4 flex items-center gap-2 border-b border-borderStroke">
        <img src={ProfileImg} alt="User" className="w-10 h-10 rounded-full" />
        <span className="text-white font-inter text-sm flex-1">JasonDoe123</span>
        <ChevronDown className="w-4 h-4 text-textGray" />
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 pt-6">
        {navLinks.map((link) => {
          const isActive = currentPath === link.path;
          return (
            <button
              key={link.path}
              onClick={() => onNavigate(link.path)}
              className={`w-full flex items-center gap-3 px-6 py-3 text-lg transition-all duration-200 ${
                isActive
                  ? 'text-primary bg-primary/10 border-l-4 border-primary'
                  : 'text-textGray hover:text-white hover:bg-primary/5 border-l-4 border-transparent'
              }`}
            >
              <span className={`w-6 h-6 ${isActive ? 'text-primary' : ''}`}>{link.icon}</span>
              <span className={`font-inter font-normal ${isActive ? 'font-medium' : ''}`}>
                {link.label}
              </span>
            </button>
          );
        })}
      </nav>
    </div>
  );
};

export default Sidebar;
