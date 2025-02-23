import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import EventPreviewComponent from '../../components /Events/EventsPreview';

interface EventData {
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  capacity: string;
  image: string | null;
  blockchain: string;
  smartContract: string;
}

const EventPreview: React.FC = () => {
  const navigate = useNavigate();
  const [eventData, setEventData] = useState<EventData | null>(null);

  useEffect(() => {
    try {
      const storedData = localStorage.getItem('eventFormData');
      if (storedData) {
        setEventData(JSON.parse(storedData));
      } else {
        navigate('/create-event');
      }
    } catch (error) {
      console.error('Error loading event data:', error);
      navigate('/create-event');
    }
  }, [navigate]);

  if (!eventData) {
    return null;
  }

  return (
    <div className="">
      <EventPreviewComponent 
        eventData={eventData}
        onBack={() => navigate('/create-event')}
        onPublish={() => navigate('/published-events')}
        onEdit={() => navigate('/create-event')}
      />
    </div>
  );
};

export default EventPreview;