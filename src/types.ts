export type MenuCategoryId =
  | 'all'
  | 'starters'
  | 'munchies'
  | 'pasta'
  | 'pizzas'
  | 'burgers-sandwiches'
  | 'chinese'
  | 'beverages'
  | 'desserts'
  | 'coffee';

export interface MenuItem {
  id: string;
  name: string;
  category: MenuCategoryId;
  price: string;
  numericPrice: number;
  description?: string;
  isMustTry?: boolean;
  isVegetarian?: boolean;
  isSpicy?: boolean;
  tag?: string;
}

export interface MenuCategoryDisplay {
  id: MenuCategoryId;
  name: string;
  tagline: string;
  description: string;
  image: string;
  itemCount: number;
}

export interface MenuBookPage {
  pageNumber: number;
  title: string;
  subtitle: string;
  image?: string;
  imageCaption?: string;
  sections: {
    heading: string;
    subheading?: string;
    items: {
      name: string;
      price: string;
      description?: string;
      isMustTry?: boolean;
      tag?: string;
    }[];
  }[];
}

export interface MocktailItem {
  id: string;
  name: string;
  flavorProfile: string;
  price: string;
  description: string;
  notes: string[];
}

export interface DessertItem {
  id: string;
  name: string;
  category: 'Cheesecake' | 'Churros' | 'Brownie' | 'Signature';
  price: string;
  description: string;
  isChefSpecial?: boolean;
  tag?: string;
}

export interface CoffeeItem {
  id: string;
  name: string;
  type: 'Hot' | 'Cold' | 'Matcha' | 'Cold Brew' | 'Crème';
  price: string;
  notes: string;
  accent?: string;
}

export interface GalleryPhoto {
  id: string;
  title: string;
  category: 'Ambience' | 'Food' | 'Drinks' | 'Dessert' | 'Floral';
  src: string;
  description: string;
}

export interface ReviewTheme {
  id: string;
  theme: string;
  highlight: string;
  comment: string;
  rating: number;
  visitType: string;
}

export interface ReservationFormData {
  name: string;
  phone: string;
  date: string;
  time: string;
  guests: string;
  specialRequest?: string;
}
