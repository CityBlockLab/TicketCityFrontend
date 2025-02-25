import React, { useState } from 'react';

import EventCard from './EventsCard';
import { Event, EventFilter, ViewMode } from '../../types';
import { EventImg1 } from '../../assets';

const ITEMS_PER_PAGE = 12;

const filters: EventFilter[] = ['All', 'Free', 'Paid', 'VIP', 'Virtual', 'In-Person'];

const EventsDashboardHome: React.FC = () => {
  const [viewMode, setViewMode] = useState<ViewMode>('grid');
  const [activeFilter, setActiveFilter] = useState<EventFilter>('All');
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState<'Date' | 'Popularity' | 'Ticket Price'>('Date');

  // Mock events data - in real app, this would come from an API
  const events: Event[] = [
    {
      id: '1',
      type: 'Live',
      title: 'Blockchain Summit',
      location: 'Virtual (CrossFi Metaverse)',
      date: 'August 10, 2025 | 3:00 PM',
      price: { regular: 50, vip: 100 },
      image: EventImg1,
    },
    {
      id: '1',
      type: 'Live',
      title: 'Blockchain Summit',
      location: 'Virtual (CrossFi Metaverse)',
      date: 'August 10, 2025 | 3:00 PM',
      price: { regular: 50, vip: 100 },
      image: EventImg1,
    },
    {
      id: '2',
      type: 'Live',
      title: 'Blockchain Summit',
      location: 'Virtual (CrossFi Metaverse)',
      date: 'August 10, 2025 | 3:00 PM',
      price: { regular: 50, vip: 100 },
      image: EventImg1,
    },
    {
      id: '3',
      type: 'Live',
      title: 'Blockchain Summit',
      location: 'Virtual (CrossFi Metaverse)',
      date: 'August 10, 2025 | 3:00 PM',
      price: { regular: 50, vip: 100 },
      image: EventImg1,
    },
    {
      id: '4',
      type: 'Live',
      title: 'Blockchain Summit',
      location: 'Virtual (CrossFi Metaverse)',
      date: 'August 10, 2025 | 3:00 PM',
      price: { regular: 50, vip: 100 },
      image: EventImg1,
    },
    {
      id: '5',
      type: 'Live',
      title: 'Blockchain Summit',
      location: 'Virtual (CrossFi Metaverse)',
      date: 'August 10, 2025 | 3:00 PM',
      price: { regular: 50, vip: 100 },
      image: EventImg1,
    },
    {
      id: '6',
      type: 'Live',
      title: 'Blockchain Summit',
      location: 'Virtual (CrossFi Metaverse)',
      date: 'August 10, 2025 | 3:00 PM',
      price: { regular: 50, vip: 100 },
      image: EventImg1,
    },
    {
      id: '7',
      type: 'Live',
      title: 'Blockchain Summit',
      location: 'Virtual (CrossFi Metaverse)',
      date: 'August 10, 2025 | 3:00 PM',
      price: { regular: 50, vip: 100 },
      image: EventImg1,
    },
    {
      id: '8',
      type: 'Live',
      title: 'Blockchain Summit',
      location: 'Virtual (CrossFi Metaverse)',
      date: 'August 10, 2025 | 3:00 PM',
      price: { regular: 50, vip: 100 },
      image: EventImg1,
    },
    {
      id: '9',
      type: 'Live',
      title: 'Blockchain Summit',
      location: 'Virtual (CrossFi Metaverse)',
      date: 'August 10, 2025 | 3:00 PM',
      price: { regular: 50, vip: 100 },
      image: EventImg1,
    },
    {
      id: '10',
      type: 'Live',
      title: 'Blockchain Summit',
      location: 'Virtual (CrossFi Metaverse)',
      date: 'August 10, 2025 | 3:00 PM',
      price: { regular: 50, vip: 100 },
      image: EventImg1,
    },
    // ... add more events
  ];

  const filteredEvents = events.filter(
    (event) => activeFilter === 'All' || event.type === activeFilter,
  );

  const totalPages = Math.ceil(filteredEvents.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedEvents = filteredEvents.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <div className="p-6">
      {/* Filters and Sort */}

      {/* Events Grid/List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {paginatedEvents.map((event) => (
          <EventCard key={event.id} event={event} viewMode={viewMode} />
        ))}
      </div>

      {/* View Toggle and Pagination */}
      {/* <div className=" items-center relative   gap-4">
        <div className="flex items-center right-3  absolute gap-2">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index + 1)}
              className={`w-8 h-8 rounded-full flex items-center justify-center font-inter text-sm
                ${
                  currentPage === index + 1
                    ? 'bg-primary text-white'
                    : 'text-textGray hover:text-white'
                }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div> */}
    </div>
  );
};

export default EventsDashboardHome;
