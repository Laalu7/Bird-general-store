import { Product, Review } from './types';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'OpticPro HD 8x42 Binoculars',
    price: 189.00,
    description: 'Experience unparalleled clarity in the wild. The OpticPro HD series is engineered for the dedicated observer, featuring extra-low dispersion glass that eliminates chromatic aberration. Built with a rugged, rubber-armored chassis, these binoculars are waterproof and fog-proof, ensuring performance in the harshest environments.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCFCuFtAS4cNGaOfO0s93CnrPTEa3AWdoOEvi5n88kidhhCYOzH-lJma3C9VI8RYA3mjvNnQBaDilgiwXWerGQwvQun6RQNRXVBDOGiYLpSH63U4gWA4gINBa1-AZYOlHg7haHOU_y6z9ZGvIr5zXjbzPTN5UFJPhGq5-7z4crV8Iw2j2opI1HTgEuZcY2cdDcFRu_EvwHkh0J7Wpk-aNhnV29a6pw8M5DFI-n_nAJK_cH6xBGG-MqTzjm6100E6ZCCD6YoU9zASTs',
    category: 'Binoculars',
    rating: 4.5,
    reviewCount: 128,
    specs: [
      { label: 'Magnification', value: '8x' },
      { label: 'Objective Lens', value: '42mm' },
      { label: 'Field of View', value: '377 ft / 1000 yds' },
      { label: 'Weight', value: '24.5 oz' }
    ]
  },
  {
    id: '2',
    name: 'Summit Weatherproof Shell',
    price: 124.99,
    description: 'A high-performance outer layer designed for birders who don\'t let the weather stop them. Breathable, waterproof, and featuring silent fabric to avoid startling your subjects.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCz2qAyh6Vh-9x9kxnTvEKpum8KNNEtGCq6-XSRkrk7-9mHkW8bmjV3XNeNpjae4rFJnAqitpkCQGeCdnMNTwfKpbzGNK9xljl25kbXFG77EVODY_upjPl0zbtqoHYl84CjSEsdhBw2K8T0LB06OClMqr7au1GdMij9wYlhxAZ6Nzfbk8g17yJahSfpnEDgvzq3JoioO6P-s_N1vkVwZ5hIqqZ7ZKWveXFfLbF2rLzceIUYQ8OSKaOMlN9tCut97hnXfrC-ONraEKU',
    category: 'Apparel',
    rating: 4.8,
    reviewCount: 56
  },
  {
    id: '3',
    name: 'Handcrafted Cedar Feeder',
    price: 45.00,
    description: 'Invite nature to your backyard with this durable, naturally rot-resistant cedar feeder. Designed for easy cleaning and refilling.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuChrw75bu05T-8B5gV0XEKh95z4AgyFkXu8cGhmZ397cpuWoZ9HgN6367HpIAOeOzuqFNdqzEi5ABaMzMAjLa_PwIwZXBbRB4z6qrn3uOnUb7KDsLRvhbZdsbSfT8CxUQXhtxsUI_xiMzRrRY8iW_suYShvbXiX8GgHE3C5K5vXUVhwYoTpuMlTdKCQt3_1G9Hzs5cmd535aduoHyrSDP2v4Y2IxCiwRClI9aBRi6N-q4YDjSJAtfEbO7AK9g0fk56Ex9RYempX3o0',
    category: 'Bird Feeders',
    rating: 4.9,
    reviewCount: 89
  },
  {
    id: '4',
    name: 'North American Bird Guide',
    price: 22.50,
    description: 'The definitive guide for identifying birds across North America. Features high-quality illustrations and detailed habitat information.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCqL6oUBREhHh5Ox8brWuq1_xZ-zDOM2wtMaRACu6sM8qLhEriq4CqRsMhkhOwTnAGd05r-dmmJLYlMZ7g89yCxlUEGuIj_VMUM2WNLQhQocao6n4MTrJ-SjTM40mRXwzyIr7krqSDd35TEF4usSbgn-_DRPQDqYIw4pzd-nztXAOl8McQAGTOCJ9_x9uAx9azsl_AgTaoXDQSjwEp2zH7Dm8vPCaUZPqrUm9ONFyapMpMnv1MYNCb1YXsFisFrh1CHHRVdPuS6wwo',
    category: 'Field Guides',
    rating: 4.7,
    reviewCount: 210
  },
  {
    id: '5',
    name: 'Premium Wild Bird Seed Mix',
    price: 18.99,
    description: 'A high-energy blend of sunflower seeds, millet, and cracked corn. Attracts a wide variety of songbirds to your backyard.',
    image: 'https://images.unsplash.com/photo-1595665593673-bf1ad72905c0?auto=format&fit=crop&q=80&w=800',
    category: 'Bird Feed',
    rating: 4.6,
    reviewCount: 145
  },
  {
    id: '6',
    name: 'Bluebird Nesting Box',
    price: 32.00,
    description: 'Provide a safe home for bluebirds. Made from sustainable pine with proper ventilation and drainage.',
    image: 'https://images.unsplash.com/photo-1590644365607-1c5a519a7a37?auto=format&fit=crop&q=80&w=800',
    category: 'Nesting',
    rating: 4.8,
    reviewCount: 72
  },
  {
    id: '7',
    name: 'Hummingbird Nectar Kit',
    price: 12.50,
    description: 'All-natural nectar mix with a specialized cleaning brush. Keep your hummingbirds healthy and happy.',
    image: 'https://images.unsplash.com/photo-1452570053594-1b985d6ea890?auto=format&fit=crop&q=80&w=800',
    category: 'Bird Feed',
    rating: 4.7,
    reviewCount: 45
  },
  {
    id: '8',
    name: 'Solar Powered Bird Bath',
    price: 59.99,
    description: 'A beautiful addition to any garden. This solar-powered fountain keeps water moving, attracting more birds while preventing mosquitoes.',
    image: 'https://images.unsplash.com/photo-1585336261022-69c6e29ce53b?auto=format&fit=crop&q=80&w=800',
    category: 'Garden',
    rating: 4.5,
    reviewCount: 34
  },
  {
    id: '10',
    name: 'Suet Feeder with Berry Cakes',
    price: 15.99,
    description: 'High-fat suet cakes are perfect for woodpeckers and nuthatches. Includes a durable wire cage feeder.',
    image: 'https://images.unsplash.com/photo-1551085254-e96b210db58a?auto=format&fit=crop&q=80&w=800',
    category: 'Bird Feed',
    rating: 4.4,
    reviewCount: 28
  },
  {
    id: '13',
    name: 'Sky Blue Budgie',
    scientificName: 'Melopsittacus undulatus',
    price: 45.00,
    description: 'This beautiful Sky Blue Budgie is hand-tame and exceptionally social. Budgies make wonderful companions for both beginners and experienced bird owners. They are highly intelligent, can learn to whistle melodies, and sometimes even mimic human speech with training.',
    image: 'https://images.unsplash.com/photo-1522926126624-397111bc45a5?auto=format&fit=crop&q=80&w=800',
    category: 'Birds',
    rating: 4.9,
    reviewCount: 2100,
    traits: {
      age: '6 Months',
      gender: 'Male',
      social: 'Friendly'
    },
    careInstructions: {
      diet: 'High-quality seed mix, fresh leafy greens, and seasonal fruits. Mineral block is essential for calcium.',
      cageSize: 'Minimum 18"x18"x18". Larger horizontal space is preferred for flying exercise.',
      temperature: 'Maintain between 70°F - 80°F (21°C - 27°C). Avoid drafty areas or direct AC airflow.'
    }
  },
  {
    id: '14',
    name: 'Handcrafted Cedar Perch',
    price: 18.00,
    description: 'Eco-friendly and durable perch made from natural cedar wood. Provides a comfortable and natural texture for your bird\'s feet.',
    image: 'https://images.unsplash.com/photo-1520808663317-647b476a81b9?auto=format&fit=crop&q=80&w=800',
    category: 'Accessories',
    rating: 4.8,
    reviewCount: 128
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'r1',
    userName: 'John Doe',
    userInitials: 'JD',
    rating: 5,
    date: 'Oct 12, 2023',
    comment: 'Incredible clarity. I use these for birding and the colors are true to life. The build quality feels like it could survive a drop from a cliff.'
  },
  {
    id: 'r2',
    userName: 'Sarah Miller',
    userInitials: 'SM',
    rating: 4,
    date: 'Sep 28, 2023',
    comment: 'Great value for the price. A bit heavier than my old pair but the optics are 10x better. Perfect for hiking.'
  }
];

export const CATEGORIES = [
  { name: 'Binoculars', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAye753BmyHV2bhGkEyeUArovVBzQGIuLcS8d1JwkDzBkVihtd9uWVxN6ZuB6McZaSj391eOZkPPLTJ8R2xK_faPnFLOU9cUx0Px6rjAG5b41UPEcDnQ2DucKrBgjkUE7Y9_bIEvlDbi-ZcbvqFhpwmo1IFxmdb7BBO2ir1eg4gFu1CmbHeGk0kE65mbiu1rxKdXzbZeHd5sYDbkREvN5LVYHqW3tJwON7h7HWgou_zMTtW6qZ0GPYSqxXD0s43n9rkdzFrY8dXogk' },
  { name: 'Field Guides', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDg8JqlN5S4T3YxxJbsTQ0QPtRBUQP9VNWkQj_3qMKpejdhOOKeFoAzVyIgeKiVY-iDwFDJmwjDz_mYUy_4qX7orqFjFW5RerH6xtv7-M2uJ08XI1Ey_SLN_CkJ5h86TeFMeFsgTUWLGgk2T3v_2hG14zfM0R6hD2NVsyeALVDCqDm_zcG5DqUAy_DnsdMZJg4aekjDwQNW1A9x35XxXkUJwBtyGAcWv76PRAgF3Y6aMXdVEZtNl1ctMcwH8dWPtLxVm7fMjq3dEf4' },
  { name: 'Bird Feeders', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC3JzdlJ8wClB5PQpQKkLbmAr1ImwhueV7NDaYJ1qbdn9gBw7f245KgrSdDQ2KI-mVUe9AqEHcvrrq4N25n4m5QM5nhpJb57i0qrgRhWDiz5-7QB2A_ZZJ4FRA2MIcCvDoKwQnkF_A3mZMGNLSP5chKaCGleyBmAh_T6ir-gl1SkTpFEu53dHC_kSEbHkRq56q1qQM1E2F-mUL2JFdcJgGPgcHVaPyFsloXvhUUBM7U60NRttpdjWfu3BCCVX3Xf37-cCuZr83xAHs' },
  { name: 'Bird Feed', image: 'https://images.unsplash.com/photo-1595665593673-bf1ad72905c0?auto=format&fit=crop&q=80&w=800' },
  { name: 'Apparel', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC_Bdk0rsvRWMFIMUE2L8UXadhux21J_m0FGBo3q7Ny1l4A4XOlflhz4l7liz_wGIWUPZmlrMn3VeT2tZ3g8_QKHQydg3JUZOagyqgzmQ7sduo9W1L21E7_tdi3ABNwu10H4nGhqeKaGCLHLiEipvGFPQNJs0lzq7FbdmcpS8Z1hCUEVJKNqG8RsC11kK75sgMZhpQXDUi_xUEGzJg011Blc7A2Wc_Ae4ijSKQZg2VlyppJmfhml7t6WKCX3rfLy_IClDAvyXjSdH0' }
];

export const GUIDES = [
  {
    id: 'g1',
    title: 'Top 10 Nutritious Foods for Parrots',
    category: 'Nutrition',
    description: 'Essential vitamins and minerals your bird needs...',
    image: 'https://images.unsplash.com/photo-1522926126624-397111bc45a5?auto=format&fit=crop&q=80&w=800',
    readTime: '5 min read'
  },
  {
    id: 'g2',
    title: 'How to Train Your Budgie: A Step-by-Step Guide',
    category: 'Training',
    description: 'Master the basics of budgie training with our expert tips.',
    image: 'https://images.unsplash.com/photo-1522926126624-397111bc45a5?auto=format&fit=crop&q=80&w=800',
    readTime: '8 min read'
  },
  {
    id: 'g3',
    title: 'Signs of a Healthy Bird: What to Look For',
    category: 'Health',
    description: 'Learn how to spot early signs of illness and maintain peak health.',
    image: 'https://images.unsplash.com/photo-1444464666168-49d633b867ad?auto=format&fit=crop&q=80&w=800',
    readTime: '5 min read'
  },
  {
    id: 'g4',
    title: 'Creating the Perfect Nesting Environment',
    category: 'Habitat',
    description: 'Everything you need to know about bird houses and nesting materials.',
    image: 'https://images.unsplash.com/photo-1590644365607-1c5a519a7a37?auto=format&fit=crop&q=80&w=800',
    readTime: '12 min read'
  }
];
