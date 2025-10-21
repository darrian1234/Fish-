import { MenuData, Location, Testimonial, GalleryImage, SignatureDish } from './types';

export const heroSliderImages: string[] = [
  'https://cdn.prod.website-files.com/5c8537767c584be61ce7c76b/5c87c6aeb774e4b68e1fb405_295%20Queen%20Street%20East%20Image.jpg',
  'https://cdn.prod.website-files.com/5c8537767c584be61ce7c76b/5c92cc4e199a680046dc6b84_image2%203.jpeg'
];

export const signatureDishes: SignatureDish[] = [
  { name: 'Halibut Steak', image: 'https://cdn.prod.website-files.com/5c8537767c584be61ce7c76b/5ca3e8b990094840495b0bbe_Halibut%20Steak.jpg' },
  { name: 'Grilled Trout', image: 'https://cdn.prod.website-files.com/5c8537767c584be61ce7c76b/5cfd05b7982a747286f0cd3e_Trout-p-500.jpeg' },
  { name: 'Mushy Peas', image: 'https://cdn.prod.website-files.com/5c8537767c584be61ce7c76b/5ca3e8d8900948e44c5b0cc4_PEAS%20NEW.jpeg' },
  { name: 'Sweet Potato Fries', image: 'https://cdn.prod.website-files.com/5c8537767c584be61ce7c76b/5ca3e904a41a5d0d86d0100c_Sweet%20Fries.png' },
  { name: 'Fish Tacos', image: 'https://cdn.prod.website-files.com/5c8537767c584be61ce7c76b/5c86e8c23f656cdbead2b136_Home%2024.jpg' },
  { name: 'Garlic Shrimp', image: 'https://cdn.prod.website-files.com/5c8537767c584be61ce7c76b/5c86e9a7b774e4f30a1e2fa0_Home%208.jpg' },
  { name: 'Seafood Platter', image: 'https://cdn.prod.website-files.com/5c8537767c584be61ce7c76b/5c86e64bb4d0cae39ae6b3be_Home%2031.jpg' },
];

export const menuData: MenuData = {
  Fish: [
    { name: 'Haddock & Chips', description: 'Classic haddock, battered and fried to golden perfection, served with our signature chips.', image: 'https://cdn.prod.website-files.com/5c8537767c584be61ce7c76b/5c8eb46138c07d68faa575a6_3.jpg' },
    { name: 'Cod & Chips', description: 'Flaky cod fillet, a local favorite, with a generous portion of crispy chips.', image: 'https://cdn.prod.website-files.com/5c8537767c584be61ce7c76b/5c92cd2e61394f275c559fce_image1.png' },
    { name: 'Halibut & Chips', description: 'Premium halibut steak, known for its firm texture and sweet flavor.', image: 'https://cdn.prod.website-files.com/5c8537767c584be61ce7c76b/5ca3e8b990094840495b0bbe_Halibut%20Steak.jpg' },
    { name: 'Grilled Salmon', description: 'A healthy and delicious option, seasoned and grilled to perfection.', image: 'https://cdn.prod.website-files.com/5c8537767c584be61ce7c76b/5ca3e7f7a41a5dc9b6d00700_SALMON%20NEW.jpeg' },
  ],
  Sides: [
    { name: 'Onion Rings', description: 'Thick-cut onion rings, beer-battered and fried until crispy.', image: 'https://cdn.prod.website-files.com/5c8537767c584be61ce7c76b/5c8eb4952f2b6759d9bb0b5c_7.jpg' },
    { name: 'Mushy Peas', description: 'A traditional British side, creamy and full of flavor.', image: 'https://cdn.prod.website-files.com/5c8537767c584be61ce7c76b/5ca3e8d8900948e44c5b0cc4_PEAS%20NEW.jpeg' },
    { name: 'Coleslaw', description: 'Freshly made coleslaw with a tangy dressing.', image: 'https://picsum.photos/seed/coleslaw/600/400' },
  ],
  Drinks: [
    { name: 'Craft Beer', description: 'A selection of local and imported craft beers.', image: 'https://picsum.photos/seed/beer/600/400' },
    { name: 'Soft Drinks', description: 'Coke, Pepsi, Sprite, and more.', image: 'https://picsum.photos/seed/soda/600/400' },
    { name: 'Iced Tea', description: 'Freshly brewed and served cold.', image: 'https://picsum.photos/seed/iced-tea/600/400' },
  ],
  Specials: [
    { name: 'Family Feast', description: 'Two large haddock, two small cod, large chips, and four drinks. Perfect for the whole family.', image: 'https://cdn.prod.website-files.com/5c8537767c584be61ce7c76b/5c86e64bb4d0cae39ae6b3be_Home%2031.jpg' },
    { name: 'Lunch Special', description: 'A smaller portion of our classic cod & chips with a drink, available weekdays.', image: 'https://cdn.prod.website-files.com/5c8537767c584be61ce7c76b/5c92cd2e61394f275c559fce_image1.png' },
  ],
};

export const locationsData: Location[] = [
  { name: 'Bramrose Plaza', address: '295 Queen St. E., Brampton, ON', phone: '555-123-4567', directionsUrl: 'https://www.google.com/maps' },
  { name: 'Fishermen Drive', address: '13 Fishermen Dr., Brampton, ON', phone: '555-234-5678', directionsUrl: 'https://www.google.com/maps' },
  { name: 'Downtown Metropolis', address: '456 Main Street, Metropolis, ON', phone: '555-345-6789', directionsUrl: 'https://www.google.com/maps' },
  { name: 'Seaside Way', address: '789 Ocean Ave, Coast City, ON', phone: '555-456-7890', directionsUrl: 'https://www.google.com/maps' },
];

export const galleryImages: GalleryImage[] = [
  { src: 'https://cdn.prod.website-files.com/5c8537767c584be61ce7c76b/5c8eb46138c07d68faa575a6_3.jpg', alt: 'Delicious fish and chips with lemon.' },
  { src: 'https://cdn.prod.website-files.com/5c8537767c584be61ce7c76b/5c8eb4760fcf5a19dac6d037_8.jpg', alt: 'Interior of the restaurant with customers.' },
  { src: 'https://cdn.prod.website-files.com/5c8537767c584be61ce7c76b/5c8eb4952f2b6759d9bb0b5c_7.jpg', alt: 'A plate of calamari and dipping sauce.' },
  { src: 'https://cdn.prod.website-files.com/5c8537767c584be61ce7c76b/5c92cd2e61394f275c559fce_image1.png', alt: 'Fish and chips in a takeout box.' },
  { src: 'https://cdn.prod.website-files.com/5c8537767c584be61ce7c76b/5c86e92eb4d0ca2dd2e6baba_Home%2013.jpg', alt: 'Another view of the cozy restaurant interior.' },
  { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNipWNAsjRBJCijF4hBjIkuPrOpxJ0Da6-Ag&s', alt: 'Close-up of crispy fried fish.' },
];

export const testimonialsData: Testimonial[] = [
  { quote: "The best fish and chips I've had outside of the UK! The batter is light and crispy, and the fish is so fresh.", author: 'John D.' },
  { quote: 'A true family tradition. We\'ve been coming here for years and it never disappoints. The quality is always top-notch.', author: 'Sarah P.' },
  { quote: 'Fantastic service and even better food. The staff are always so welcoming. It feels like coming home.', author: 'Michael B.' },
];