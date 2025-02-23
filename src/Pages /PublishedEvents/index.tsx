import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PublishedEventsComponent from '../../components /Events/PublishedEvents';

interface EventData {
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  capacity: string;
  image: File | null;
  blockchain: string;
  smartContract: string;
  ticketPrice: string;
}

const PublishedEvents: React.FC = () => {
  const navigate = useNavigate();
  const [eventData, setEventData] = useState<EventData | null>(null);

  useEffect(() => {
    // Get published event data from localStorage
    const storedData = localStorage.getItem('publishedEventData');
    if (storedData) {
      setEventData(JSON.parse(storedData));
    } else {
      // If no data, redirect back to explore
      navigate('/explore');
    }
  }, [navigate]);

  const handleBack = () => {
    navigate('/explore');
  };

  if (!eventData) {
    return null; // or a loading state
  }

  return (
    <div className="">
      <PublishedEventsComponent 
        onBack={handleBack}
        eventData={eventData}
      />
    </div>
  );
};

export default PublishedEvents;