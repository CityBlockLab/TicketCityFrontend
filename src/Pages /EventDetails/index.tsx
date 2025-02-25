import { ArrowLeft, MapPin, Link, Users } from 'lucide-react';
import { EventImg1 } from '../../assets';


const EventDetails = () => {
  return (
    <div className="bg-background min-h-screen p-8">
      {/* Back Button - Positioned separately */} 
      <button 
        onClick={() => console.log('Navigate back')}
        className="mb-8 flex items-center gap-2 px-4 py-2 rounded-lg border-2 border-[#3A3A3A] bg-background hover:opacity-80 shadow-[inset_1px_1px_10px_0px_#FFFFFF40]"
      >
        <ArrowLeft className="w-5 h-5 text-white" />
        <span className="font-inter text-regular text-white">Back</span>
      </button>

      {/* Main Content Container with Border and Shadow */}
      <div className="max-w-[80%] mx-auto border border-[#3A3A3A] rounded-lg shadow-[1px_1px_10px_0px_#FFFFFF40] p-8">
        {/* Event Header */}
        <div className="text-center mb-8">
          <h1 className="font-exo text-xlarge tracking-tightest text-white mb-4">
            Blockchain Summit 🎫 Verified
          </h1>
          <div className="flex items-center justify-center gap-2 mb-2">
            <MapPin className="w-5 h-5 text-white" />
            <span className="font-inter text-medium text-white">
              Virtual (CrossFi Metaverse)
            </span>
          </div>
          <p className="gradient-text font-inter text-medium">
            Event starts in: 34 5h 20m
          </p>
        </div>

        {/* Banner Image */}
        <div className="w-full rounded-lg overflow-hidden mb-8">
          <img 
            src={EventImg1}
            alt="Event Banner" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Event Info Section */}
        <div className="flex flex-col gap-8">
          {/* Host Information */}
          <div className="rounded-lg border border-borderStroke p-6">
            <h2 className="font-poppins text-large text-white mb-4">
              👥 Hosted by: Blockchain Innovations
            </h2>
            <p className="font-inter text-medium text-white mb-4">
              Join top Web3 developers and entrepreneurs as we explore the future of decentralized technology.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Link className="w-5 h-5 text-white" />
                <span className="font-inter text-medium text-white">
                  Blockchain: Ethereum
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Link className="w-5 h-5 text-white" />
                <span className="font-inter text-medium text-white">
                  Smart Contract: 0xA3B...4F1
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-white" />
                <span className="font-inter text-medium text-white">
                  Smart ContCapacity: 5000 Attendees
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-white" />
                <span className="font-inter text-medium text-white">
                  Attendace Rate: Loading...%
                </span>
              </div>
            </div>
          </div>

          {/* Ticket Information */}
          <div className="rounded-lg border border-borderStroke p-6">
            <h2 className="font-poppins text-large text-white flex items-center gap-2 mb-4">
              🎟️ Get Your Ticket
            </h2>
            <div className="space-y-4">
              <div>
                <label className="font-inter text-medium text-white block mb-2">
                  Choose Ticket Type:
                </label>
                <select 
                  className="w-full bg-searchBg border border-borderStroke rounded-lg p-3 text-white"
                >
                  <option>Regular- 50 XFI</option>
                  <option>VIP - 120 XFI</option>
                </select>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-inter text-medium text-white">
                  💰 USD Equivalent: $0.00
                </span>
                <button className="px-4 py-2 rounded-lg border border-primary text-primary">
                  Buy with XFI
                </button>
              </div>
              <p className="font-inter text-medium text-white flex items-center gap-2">
                🎫 Your ticket will be minted as an NFT
              </p>
              <button className="w-full bg-primary rounded-lg py-3 font-poppins text-[18px] leading-[27px] tracking-wider text-white">
                Connect Wallet 🔗
              </button>
              <div className="space-y-2">
                <p className="font-inter text-medium text-white">
                  Wallet: Not Connected
                </p>
                <p className="font-inter text-medium text-white">
                  💳 XFI Balance: Loading...
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Information */}
        <div className="text-center space-y-2 mt-8">
          <p className="font-inter text-small text-white flex items-center justify-center gap-2">
            📜 Refund Policy: No refunds after purchase
          </p>
          <p className="font-inter text-small text-white flex items-center justify-center gap-2">
            🔍 Event Verification: Attendance tracked via QR code
          </p>
          <p className="font-inter text-small text-white flex items-center justify-center gap-2">
            ✉️ Need help? Contact support@ticketcity.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;