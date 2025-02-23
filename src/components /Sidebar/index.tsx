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
  ChevronDown
} from 'lucide-react';

interface SidebarProps {
  onNavigate: (path: string) => void;
  currentPath: string;
}

const navLinks = [
  { icon: <LayoutDashboard />, label: 'Dashboard', path: '/dashboard' },
  { icon: <Compass />, label: 'Explore Events', path: '/explore' },
  { icon: <PlusCircle />, label: 'Create Event', path: '/create-event' },
  { icon: <Ticket />, label: 'My Tickets', path: '/tickets' },
  { icon: <Wallet />, label: 'My Wallet', path: '/wallet' },
  { icon: <Shield />, label: 'Ticket Verification', path: '/verify' },
  { icon: <Users />, label: 'Organizers Hub', path: '/organizers' },
  { icon: <Settings />, label: 'Settings', path: '/settings' },
];

const Sidebar: React.FC<SidebarProps> = ({ onNavigate, currentPath }) => {
  return (
    <div className="w-64 h-full bg-background border-r border-borderStroke flex flex-col">
      {/* Logo */}
      <div className="p-6">
        <img src="/logo.svg" alt="TicketCity" className="h-8" />
      </div>

      {/* User Profile */}
      <div className="px-6 py-4 flex items-center gap-2 border-b border-borderStroke">
        <img
          src="/placeholder-avatar.jpg"
          alt="User"
          className="w-10 h-10 rounded-full"
        />
        <span className="text-white font-inter text-sm flex-1">JasonDoe123</span>
        <ChevronDown className="w-4 h-4 text-textGray" />
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 pt-6">
        {navLinks.map((link) => (
          <button
            key={link.path}
            onClick={() => onNavigate(link.path)}
            className={`w-full flex items-center gap-3 px-6 py-3 text-lg transition-colors ${
              currentPath === link.path
                ? 'text-white bg-primary/10'
                : 'text-textGray hover:text-white hover:bg-primary/5'
            }`}
          >
            <span className="w-6 h-6">{link.icon}</span>
            <span className="font-inter font-normal">{link.label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;