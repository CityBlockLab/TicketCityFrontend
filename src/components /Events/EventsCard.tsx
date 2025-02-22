import React from 'react';
import { MapPin, Calendar } from 'lucide-react';
import { Event } from '../../types';

interface EventCardProps {
  event: Event;
  viewMode: 'grid' | 'list';
}

const EventCard: React.FC<EventCardProps> = ({ event, viewMode }) => {
  const isGrid = viewMode === 'grid';

  return (
    <div 
      className={`
        backdrop-blur-lg shadow-button-inset rounded-lg overflow-hidden
        ${isGrid ? 'w-full' : 'flex gap-4'}
      `}
    >
      {/* Image Section */}
      <div className={`relative ${isGrid ? 'w-full aspect-video' : 'w-48 h-48'}`}>
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 left-4 bg-[#F7F7F7] rounded-full px-3 py-1">
          <span className="text-sm font-inter">{event.type}</span>
        </div>
      </div>

      {/* Content Section */}
      <div className={`p-4 ${isGrid ? 'w-full' : 'flex-1'}`}>
        <h3 className="font-poppins font-semibold text-lg leading-[27px] tracking-[0.05%] text-white mb-2">
          {event.title}
        </h3>

        <div className="flex flex-col gap-2 mb-4">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-textGray" />
            <span className="font-inter text-sm leading-5 text-textGray">
              {event.location}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-textGray" />
            <span className="font-inter text-sm leading-5 text-textGray">
              {event.date}
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="font-inter font-semibold text-base leading-[25px] text-primary">
            {event.price.regular} XFI
            <span className="ml-2 text-textGray">
              (VIP: {event.price.vip} XFI)
            </span>
          </div>

          <button className="bg-primary rounded-lg px-4 py-2 text-white font-inter text-sm leading-[25px]">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventCard;