export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
  specs?: {
    label: string;
    value: string;
  }[];
  rating: number;
  reviewCount: number;
  scientificName?: string;
  traits?: {
    age: string;
    gender: string;
    social: string;
  };
  careInstructions?: {
    diet: string;
    cageSize: string;
    temperature: string;
  };
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Review {
  id: string;
  userName: string;
  userInitials: string;
  rating: number;
  date: string;
  comment: string;
}

export type View = 'home' | 'product' | 'cart' | 'checkout' | 'order-status' | 'login' | 'signup';
