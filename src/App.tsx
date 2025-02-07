import React, { useState } from 'react';
import { CalendarDays, Globe } from 'lucide-react';
import { events, countries } from './mockData';
import { Event, Country } from './types';
import EventCard from './components/EventCard';
import EmailModal from './components/EmailModal';

function App() {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState<string>('AU');

  const handleGetTickets = (event: Event) => {
    setSelectedEvent(event);
    setShowModal(true);
  };

  const handleEmailSubmit = async (email: string) => {
    console.log('Email submitted:', email);
    if (selectedEvent) {
      // Redirect to the ticket URL
      window.location.href = selectedEvent.ticketUrl;
    }
    setShowModal(false);
  };

  const filteredEvents = events.filter(event => event.country === selectedCountry);
  const selectedCountryData = countries.find(country => country.code === selectedCountry);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
            <div className="flex items-center">
              <CalendarDays className="h-8 w-8 text-blue-600 mr-3" />
              <h1 className="text-3xl font-bold text-gray-900">Global Events</h1>
            </div>
            
            <div className="flex items-center space-x-2">
              <Globe className="h-5 w-5 text-gray-500" />
              <select
                value={selectedCountry}
                onChange={(e) => setSelectedCountry(e.target.value)}
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2"
              >
                {countries.map((country) => (
                  <option key={country.code} value={country.code}>
                    {country.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          
          <div className="mt-4">
            <p className="text-gray-600">
              Discover the best events in {selectedCountryData?.name || 'your country'}
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {filteredEvents.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents.map((event) => (
              <EventCard
                key={event.id}
                event={event}
                onGetTickets={handleGetTickets}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No events found in {selectedCountryData?.name}. Please check back later!
            </p>
          </div>
        )}
      </main>

      {/* Email Modal */}
      <EmailModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onSubmit={handleEmailSubmit}
        eventTitle={selectedEvent?.title || ''}
      />
    </div>
  );
}

export default App;