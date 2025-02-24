import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, Edit, Eye, Upload, RefreshCw } from 'lucide-react';
import { EventImg1 } from '../../assets';

const ManageEventsComponent: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  return (
    <div className="w-full min-h-screen bg-background p-6">
      {/* Header */}
      <div className="mb-8 rounded-2xl  border border-borderStroke shadow-button-inset p-6">
        <div className="flex justify-between items-center">
          <h1 className="text-white text-2xl font-poppins">Manage Event: Blockchain Summit</h1>
          <button
            onClick={() => navigate('/my-events')}
            className="flex items-center gap-2 bg-primary rounded-lg px-4 py-2 font-poppins text-white hover:opacity-90 transition-opacity"
          >
            <ArrowLeft size={18} />
            Back to Dashboard
          </button>
        </div>
      </div>

      {/* Event Banner */}
      <div className="mb-8 rounded-2xl  border border-borderStroke shadow-button-inset overflow-hidden">
        <div className="relative">
          <img src={EventImg1} alt="Event Banner" className="w-full h-48 object-cover" />
          <button className="absolute bottom-4 left-4 bg-primary rounded-lg px-4 py-2 text-white font-poppins flex items-center gap-2">
            <Upload size={16} />
            Upload New Image
          </button>
        </div>
      </div>

      {/* Event Details */}
      <div className="mb-8 rounded-2xl border border-borderStroke shadow-button-inset p-6">
        <h2 className="text-white text-xl font-poppins mb-4">Event Details</h2>
        <div className="space-y-3">
          <div className="flex flex-col md:flex-row md:items-center">
            <span className="text-textGray w-32">Location:</span>
            <span className="text-white">Virtual</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-center">
            <span className="text-textGray w-32">Date:</span>
            <span className="text-white">July 30, 2025</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-center">
            <span className="text-textGray w-32">Tickets Sold:</span>
            <span className="text-white">150/200</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-center">
            <span className="text-textGray w-32">Ticket Pricing:</span>
            <span className="text-white">Automated based on demand</span>
          </div>
        </div>
        <button className="mt-4 bg-primary/20 text-primary rounded-lg px-4 py-2 font-poppins flex items-center gap-2 hover:bg-primary/30 transition-colors">
          <Edit size={16} />
          Edit Event Details
        </button>
      </div>

      {/* Ticket Sales */}
      <div className="mb-8 rounded-2xl  border border-borderStroke shadow-button-inset p-6">
        <h2 className="text-white text-xl font-poppins mb-4">Ticket Sales</h2>
        <div className="space-y-3">
          <div className="flex flex-col md:flex-row md:items-center">
            <span className="text-textGray w-32">Total Revenue:</span>
            <span className="text-white">3,500 XFI</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-center">
            <span className="text-textGray w-32">Pending Release:</span>
            <span className="text-white">1,200 XFI</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-center">
            <span className="text-textGray w-32">Refunds Issued:</span>
            <span className="text-white">300 XFI</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-center">
            <span className="text-textGray w-32">Ticket Pricing:</span>
            <span className="text-white">Automated based on demand</span>
          </div>
        </div>
        <button className="mt-4 bg-primary/20 text-primary rounded-lg px-4 py-2 font-poppins flex items-center gap-2 hover:bg-primary/30 transition-colors">
          <Eye size={16} />
          View Sales Report
        </button>
      </div>

      {/* Security Settings */}
      <div className="mb-8 rounded-2xl  border border-borderStroke shadow-button-inset p-6">
        <h2 className="text-white text-xl font-poppins mb-4">Security Settings</h2>
        <div className="space-y-3">
          <div className="flex flex-col md:flex-row md:items-center">
            <span className="text-textGray w-64">Event Verification:</span>
            <span className="text-white">Enabled</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-center">
            <span className="text-textGray w-64">Attendance Tracking:</span>
            <span className="text-white">QR Code & Wallet Authentication</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-center">
            <span className="text-textGray w-64">Minimum Attendance Requirement:</span>
            <span className="text-white">60%</span>
          </div>
        </div>
        <button className="mt-4 bg-primary rounded-lg px-4 py-2 font-poppins text-white flex items-center gap-2 hover:opacity-90 transition-opacity">
          <Edit size={16} />
          Update Security Settings
        </button>
      </div>

      {/* Revenue Management */}
      <div className="mb-8 rounded-2xl  border border-borderStroke shadow-button-inset p-6">
        <h2 className="text-white text-xl font-poppins mb-4">Revenue Management</h2>
        <div className="space-y-3">
          <div className="flex flex-col md:flex-row md:items-center">
            <span className="text-white">Funds Held in Smart Contract</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-center">
            <span className="text-white">
              Manual or automated release options available post-event.
            </span>
          </div>
        </div>
        <button className="mt-4 bg-primary rounded-lg px-4 py-2 font-poppins text-white flex items-center gap-2 hover:opacity-90 transition-opacity">
          <RefreshCw size={16} />
          Release Funds
        </button>
      </div>

      {/* Payment & Refund Policies */}
      <div className="mb-8 rounded-2xl  border border-borderStroke shadow-button-inset p-6">
        <h2 className="text-white text-xl font-poppins mb-4">Payment & Refund Policies</h2>
        <div className="space-y-3">
          <div className="flex flex-col md:flex-row md:items-center">
            <span className="text-textGray w-40">Payments Accepted:</span>
            <span className="text-white">XFI, Stablecoins (Future)</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-center">
            <span className="text-textGray w-40">Platform Fee:</span>
            <span className="text-white">30 XFI for paid events</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-center">
            <span className="text-textGray w-40">Refund Policy:</span>
            <span className="text-white">
              Full refund + 2 XFI gas fee if event is canceled (Future)
            </span>
          </div>
        </div>
      </div>

      {/* Future Implementations */}
      <div className="rounded-2xl  border border-borderStroke shadow-button-inset p-6">
        <h2 className="text-white text-xl font-poppins mb-4">Future Implementations</h2>
        <ul className="space-y-3 list-disc list-inside text-white">
          <li>Event discovery tools with referral programs & discounts</li>
          <li>Automated ticket pricing based on demand</li>
          <li>Stablecoin payment integration</li>
        </ul>
      </div>
    </div>
  );
};

export default ManageEventsComponent;
