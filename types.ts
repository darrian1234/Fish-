
export type MenuCategory = 'Fish' | 'Sides' | 'Drinks' | 'Specials';

export interface MenuItem {
  name: string;
  description: string;
  image: string;
}

export interface MenuData {
  Fish: MenuItem[];
  Sides: MenuItem[];
  Drinks: MenuItem[];
  Specials: MenuItem[];
}

export interface Location {
  name: string;
  address: string;
  phone: string;
  directionsUrl: string;
}

export interface Testimonial {
  quote: string;
  author: string;
}

export interface GalleryImage {
    src: string;
    alt: string;
}

export interface SignatureDish {
  name: string;
  image: string;
}