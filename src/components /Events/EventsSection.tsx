import React, { useState } from 'react';
import { LayoutGrid, List } from 'lucide-react';
import EventCard from './EventsCard';
import { Event, EventFilter, ViewMode } from '../../types';
import { EventImg1 } from '../../assets';

const ITEMS_PER_PAGE = 12;

const filters: EventFilter[] = ['All', 'Free', 'Paid', 'VIP', 'Virtual', 'In-Person'];

const EventsSection: React.FC = () => {
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
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <div className="flex flex-wrap gap-2">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-full font-inter text-sm
                ${
                  activeFilter === filter
                    ? 'bg-primary  text-white'
                    : 'text-textGray hover:text-white'
                }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as any)}
            className="bg-searchBg text-white rounded-lg px-4 py-2 font-inter text-sm"
          >
            <option value="Date">Date</option>
            <option value="Popularity">Popularity</option>
            <option value="Ticket Price">Ticket Price</option>
          </select>
        </div>
      </div>

      {/* Events Grid/List */}
      <div
        className={`grid gap-6 mb-8 ${
          viewMode === 'grid'
            ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
            : 'grid-cols-1'
        }`}
      >
        {paginatedEvents.map((event) => (
          <EventCard key={event.id} event={event} viewMode={viewMode} />
        ))}
      </div>

      {/* View Toggle and Pagination */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <button
          onClick={() => setViewMode(viewMode === 'grid' ? 'list' : 'grid')}
          className="flex items-center gap-2 text-textGray hover:text-white"
        >
          {viewMode === 'grid' ? <List className="w-4 h-4" /> : <LayoutGrid className="w-4 h-4" />}
          <span className="font-inter text-sm">
            Switch to {viewMode === 'grid' ? 'List' : 'Grid'} View
          </span>
        </button>

        <div className="flex items-center gap-2">
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
      </div>
    </div>
  );
};

export default EventsSection;
