import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';

interface EventPreviewProps {
  eventData: {
    title: string;
    date: string;
    time: string;
    location: string;
    description: string;
    capacity: string;
    image: string | null;
    blockchain: string;
    smartContract: string;
  };
  onBack: () => void;
  onPublish: (ticketData: any) => void;
  onEdit: () => void;
}

const EventPreviewComponent: React.FC<EventPreviewProps> = ({ 
  eventData, 
  onBack, 
  onPublish, 
  onEdit 
}) => {
  const [ticketType, setTicketType] = useState('FREE');
  const [ticketPrice, setTicketPrice] = useState('');
  const [ticketImage, setTicketImage] = useState<File | null>(null);
  const [agreeToTerms, setAgreeToTerms] = useState(false);

  const handlePublish = () => {
    if (!agreeToTerms) return;
    
    const ticketData = {
      type: ticketType,
      price: ticketPrice,
      image: ticketImage
    };

    // Store ticket data along with event data
    const publishData = {
      ...eventData,
      ticket: ticketData
    };
    
    // Store the complete data before publishing
    localStorage.setItem('publishedEventData', JSON.stringify(publishData));
    
    // Call the onPublish handler
    onPublish(publishData);
  };

  const handleTicketImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setTicketImage(file);
      // Convert to base64 if needed
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result;
        localStorage.setItem('ticketImage', base64String as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen bg-background p-8">
      {/* Back Button */}
      <button 
        onClick={onBack}
        className="mb-8 flex items-center gap-2 px-4 py-2 rounded-lg border-2 border-[#3A3A3A] bg-background hover:opacity-80 shadow-[inset_1px_1px_10px_0px_#FFFFFF40]"
      >
        <ArrowLeft className="w-5 h-5 text-white" />
        <span className="font-inter text-regular text-white">Back</span>
      </button>

      <div className="max-w-[80%] mx-auto space-y-6">
        {/* Preview Content */}
        <div className="border border-[#3A3A3A] rounded-lg shadow-[1px_1px_10px_0px_#FFFFFF40] p-8">
          <h1 className="text-white text-2xl font-bold text-center mb-2">Event Preview</h1>
          <p className="text-gray-400 text-center mb-8">Review your event details before publishing.</p>
          
          {/* Event Preview Content */}
          {/* ... rest of the preview content ... */}
        </div>

        {/* Create Ticket Section */}
        <div className="border border-[#3A3A3A] rounded-lg shadow-[1px_1px_10px_0px_#FFFFFF40] p-8">
          <h2 className="text-white text-xl font-bold mb-6">Create Ticket</h2>
          
          <div className="space-y-6">
            <div>
              <label className="block text-white mb-2">Select Ticket Type</label>
              <select
                value={ticketType}
                onChange={(e) => setTicketType(e.target.value)}
                className="w-full bg-searchBg border border-borderStroke rounded-lg p-3 text-white"
              >
                <option value="FREE">FREE</option>
                <option value="REGULAR">REGULAR</option>
                <option value="VIP">VIP</option>
              </select>
            </div>

            {ticketType !== 'FREE' && (
              <>
                <div>
                  <label className="block text-white mb-2">Ticket Price (XFI)</label>
                  <input
                    type="number"
                    value={ticketPrice}
                    onChange={(e) => setTicketPrice(e.target.value)}
                    className="w-full bg-searchBg border border-borderStroke rounded-lg p-3 text-white"
                    placeholder="Enter price in XFI"
                  />
                </div>
                <div>
                  <label className="block text-white mb-2">Upload Ticket Image</label>
                  <input
                    type="file"
                    onChange={handleTicketImageChange}
                    accept="image/*"
                    className="w-full bg-searchBg border border-borderStroke rounded-lg p-3 text-white"
                  />
                </div>
              </>
            )}

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={agreeToTerms}
                onChange={(e) => setAgreeToTerms(e.target.checked)}
                className="rounded border-borderStroke"
              />
              <label className="text-gray-400">I agree to the Terms and Policy</label>
            </div>

            <div className="flex justify-between pt-6">
              <button
                onClick={onEdit}
                className="flex items-center gap-2 px-4 py-2 rounded-lg border border-[#3A3A3A] text-white"
              >
                Edit Event
              </button>
              
              <button
                onClick={handlePublish}
                disabled={!agreeToTerms}
                className={`px-6 py-2 bg-primary text-white rounded-lg ${!agreeToTerms ? 'opacity-50 cursor-not-allowed' : 'hover:opacity-90'}`}
              >
                PUBLISH EVENT
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventPreviewComponent;