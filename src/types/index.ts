// types/index.ts

export interface NavLink {
    icon: React.ReactNode;
    label: string;
    path: string;
  }
  
  export interface Event {
    id: string;
    type: 'Live' | 'Paid' | 'Free' | 'VIP';
    title: string;
    location: string;
    date: string;
    price: {
      regular: number;
      vip: number;
    };
    image: string;
  }
  
  export interface FooterSection {
    title: string;
    links: string[];
  }
  
  export type ViewMode = 'grid' | 'list';
  export type EventFilter = 'All' | 'Free' | 'Paid' | 'VIP' | 'Virtual' | 'In-Person';