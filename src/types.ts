export interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  venue: string;
  description: string;
  category: string;
  price: string;
  imageUrl: string;
  ticketUrl: string;
  country: string;
  city: string;
}

export interface EmailModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (email: string) => void;
  eventTitle: string;
}

export interface Country {
  code: string;
  name: string;
  cities: string[];
}