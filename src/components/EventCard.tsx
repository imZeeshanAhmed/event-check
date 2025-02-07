import React from 'react';
import { Calendar, Clock, MapPin, MapPinned } from 'lucide-react';
import { Event } from '../types';

interface EventCardProps {
  event: Event;
  onGetTickets: (event: Event) => void;
}

export default function EventCard({ event, onGetTickets }: EventCardProps) {
  const formattedDate = new Date(event.date).toLocaleDateString('en-AU', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-[1.02]">
      <div className="relative h-48">
        <img
          src={event.imageUrl}
          alt={event.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full">
          {event.price}
        </div>
      </div>
      
      <div className="p-6">
        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
          <p className="text-gray-600">{event.description}</p>
        </div>
        
        <div className="space-y-2 mb-6">
          <div className="flex items-center text-gray-600">
            <Calendar size={18} className="mr-2" />
            <span>{formattedDate}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Clock size={18} className="mr-2" />
            <span>{event.time}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <MapPin size={18} className="mr-2" />
            <span>{event.venue}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <MapPinned size={18} className="mr-2" />
            <span>{event.city}</span>
          </div>
        </div>
        
        <button
          onClick={() => onGetTickets(event)}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Get Tickets
        </button>
      </div>
    </div>
  );
}