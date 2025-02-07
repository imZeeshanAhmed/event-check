import { Event, Country } from './types';

export const countries: Country[] = [
  {
    code: 'AU',
    name: 'Australia',
    cities: ['Sydney', 'Melbourne', 'Brisbane']
  },
  {
    code: 'US',
    name: 'United States',
    cities: ['New York', 'Los Angeles', 'San Francisco']
  },
  {
    code: 'UK',
    name: 'United Kingdom',
    cities: ['London', 'Manchester', 'Edinburgh']
  },
  {
    code: 'JP',
    name: 'Japan',
    cities: ['Tokyo', 'Osaka', 'Kyoto']
  },
  {
    code: 'FR',
    name: 'France',
    cities: ['Paris', 'Lyon', 'Marseille']
  },
  {
    code: 'DE',
    name: 'Germany',
    cities: ['Berlin', 'Munich', 'Hamburg']
  },
  {
    code: 'IT',
    name: 'Italy',
    cities: ['Rome', 'Milan', 'Venice']
  },
  {
    code: 'ES',
    name: 'Spain',
    cities: ['Madrid', 'Barcelona', 'Valencia']
  }
];

export const events: Event[] = [
  {
    id: '1',
    title: 'Sydney Opera House - Symphony Under the Stars',
    date: '2025-03-15',
    time: '19:30',
    venue: 'Sydney Opera House',
    description: 'Experience a magical evening of classical masterpieces under the stars at the iconic Sydney Opera House.',
    category: 'Music',
    price: 'From $89',
    imageUrl: 'https://images.unsplash.com/photo-1624138784614-87fd1b6528f8?auto=format&fit=crop&q=80&w=1600',
    ticketUrl: 'https://example.com/tickets/1',
    country: 'AU',
    city: 'Sydney'
  },
  {
    id: '2',
    title: 'Harbour Bridge Night Run',
    date: '2025-03-20',
    time: '20:00',
    venue: 'Sydney Harbour Bridge',
    description: 'Join thousands of runners in this unique nighttime run across the Sydney Harbour Bridge.',
    category: 'Sports',
    price: 'From $45',
    imageUrl: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&q=80&w=1600',
    ticketUrl: 'https://example.com/tickets/2',
    country: 'AU',
    city: 'Sydney'
  },
  {
    id: '3',
    title: 'Food & Wine Festival',
    date: '2025-03-25',
    time: '11:00',
    venue: 'Darling Harbour',
    description: 'Discover the finest Australian wines and cuisine at this premier gastronomy event.',
    category: 'Food & Drink',
    price: 'From $65',
    imageUrl: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=1600',
    ticketUrl: 'https://example.com/tickets/3',
    country: 'AU',
    city: 'Sydney'
  },
  {
    id: '4',
    title: 'Broadway Musical Night',
    date: '2025-03-18',
    time: '19:00',
    venue: 'Times Square Theater',
    description: 'Experience the magic of Broadway with this spectacular musical performance.',
    category: 'Theater',
    price: 'From $120',
    imageUrl: 'https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?auto=format&fit=crop&q=80&w=1600',
    ticketUrl: 'https://example.com/tickets/4',
    country: 'US',
    city: 'New York'
  },
  {
    id: '5',
    title: 'London Fashion Week',
    date: '2025-03-22',
    time: '14:00',
    venue: 'Royal Albert Hall',
    description: 'Join the elite of the fashion world at London\'s premier fashion event.',
    category: 'Fashion',
    price: 'From £75',
    imageUrl: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80&w=1600',
    ticketUrl: 'https://example.com/tickets/5',
    country: 'UK',
    city: 'London'
  },
  {
    id: '6',
    title: 'Tokyo Anime Festival',
    date: '2025-03-28',
    time: '10:00',
    venue: 'Tokyo Big Sight',
    description: 'The biggest anime and manga convention in Japan, featuring exclusive previews and artist meetups.',
    category: 'Entertainment',
    price: 'From ¥5000',
    imageUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=1600',
    ticketUrl: 'https://example.com/tickets/6',
    country: 'JP',
    city: 'Tokyo'
  },
  {
    id: '7',
    title: 'Paris Fashion Show',
    date: '2025-04-02',
    time: '18:30',
    venue: 'Le Grand Palais',
    description: 'Experience the epitome of haute couture at this prestigious Paris fashion event.',
    category: 'Fashion',
    price: 'From €150',
    imageUrl: 'https://images.unsplash.com/photo-1537832816519-689ad163238b?auto=format&fit=crop&q=80&w=1600',
    ticketUrl: 'https://example.com/tickets/7',
    country: 'FR',
    city: 'Paris'
  },
  {
    id: '8',
    title: 'Oktoberfest Munich',
    date: '2025-09-20',
    time: '12:00',
    venue: 'Theresienwiese',
    description: 'The world\'s largest folk festival featuring traditional Bavarian food, music, and beer.',
    category: 'Festival',
    price: 'From €20',
    imageUrl: 'https://images.unsplash.com/photo-1505489435671-80a165c60816?auto=format&fit=crop&q=80&w=1600',
    ticketUrl: 'https://example.com/tickets/8',
    country: 'DE',
    city: 'Munich'
  },
  {
    id: '9',
    title: 'Venice Film Festival',
    date: '2025-08-27',
    time: '20:00',
    venue: 'Palazzo del Cinema',
    description: 'One of the most prestigious film festivals in the world, showcasing international cinema.',
    category: 'Film',
    price: 'From €50',
    imageUrl: 'https://images.unsplash.com/photo-1513106580091-1d82408b8cd6?auto=format&fit=crop&q=80&w=1600',
    ticketUrl: 'https://example.com/tickets/9',
    country: 'IT',
    city: 'Venice'
  },
  {
    id: '10',
    title: 'La Tomatina',
    date: '2025-08-27',
    time: '11:00',
    venue: 'Buñol City Center',
    description: 'The world\'s biggest food fight festival where participants throw tomatoes at each other.',
    category: 'Festival',
    price: 'From €10',
    imageUrl: 'https://images.unsplash.com/photo-1565071559227-20ab25b7685e?auto=format&fit=crop&q=80&w=1600',
    ticketUrl: 'https://example.com/tickets/10',
    country: 'ES',
    city: 'Valencia'
  }
];