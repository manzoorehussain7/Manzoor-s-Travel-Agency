import { Destination, TourPackage, TravelService } from '../types/travel';

export const DESTINATIONS: Destination[] = [
  {
    id: 'ziarat-balochistan',
    name: 'Ziarat Valley & Juniper Forest',
    urduName: 'زیارت',
    region: 'Balochistan',
    location: 'Ziarat District, Balochistan',
    image: '/src/assets/images/ziarat_balochistan_1791869354755.jpg',
    tagline: "World's 2nd largest ancient juniper forest & Quaid-e-Azam Residency",
    description: 'Located just 120 km from Quetta at an altitude of 2,400 meters, Ziarat is famous for its crisp alpine climate, cherry orchards, and centuries-old juniper trees. It is home to the historic wooden Quaid-e-Azam Residency where Muhammad Ali Jinnah spent his final days.',
    highlights: [
      'Quaid-e-Azam Historic Wooden Residency',
      'Ancient UNESCO biosphere Juniper Forest (over 5,000 years old)',
      'Scenic Chashma Walk and Prospect Point panoramic views',
      'Ziarat apple and cherry orchards with fresh local produce'
    ],
    bestSeason: 'May to October (Cool summer retreat) & Dec to Feb (Snowfall)',
    altitude: '2,400 m (7,874 ft)',
    distanceFromQuetta: '122 km (approx. 2.5 hours via Quetta-Ziarat Highway)',
    popularActivities: ['Heritage walking tours', 'Forest hiking', 'Photography', 'Local sajji & rosh dining'],
    recommendedDays: 2
  },
  {
    id: 'hanna-lake-quetta',
    name: 'Hanna Lake & Urak Valley',
    urduName: 'حنا جھیل کوئٹہ',
    region: 'Balochistan',
    location: 'Quetta Suburbs, Balochistan',
    image: '/src/assets/images/hanna_lake_quetta_1791869356989.jpg',
    tagline: 'Turquoise reservoir cradled by rugged Balochistan mountains',
    description: 'Just 14 km northeast of Quetta city center, Hanna Lake was built during the British era in 1894. Its turquoise waters contrast spectacularly against the barren golden mountains of the Zarghoon range. Adjacent Urak Valley is lush with apple, apricot, and peach orchards.',
    highlights: [
      'Boating and lakeside family picnic spots',
      'Hayat Durrani Water Sports Academy',
      'Urak Valley fresh fruit gardens and mountain streams',
      'Spin Karez reservoir and scenic mountain drive'
    ],
    bestSeason: 'Year-round (Spring blossoming in April & cool autumn)',
    altitude: '1,898 m (6,227 ft)',
    distanceFromQuetta: '14 km (25 minutes from Jinnah Road, Quetta)',
    popularActivities: ['Rowboating', 'Lakeside dining', 'Photography', 'Day picnic'],
    recommendedDays: 1
  },
  {
    id: 'hunza-valley',
    name: 'Hunza Valley & Passu Cones',
    urduName: 'وادی ہنزہ',
    region: 'Gilgit-Baltistan',
    location: 'Hunza District, Gilgit-Baltistan',
    image: '/src/assets/images/hunza_passu_cones_1791869354390.jpg',
    tagline: 'Karakoram Highway jewel with jagged cathedral spires and ancient forts',
    description: 'Hunza Valley is legendary for its snow-capped peaks, 900-year-old Baltit and Altit forts, warm hospitable culture, and the awe-inspiring Passu Cones. Drives along the Karakoram Highway past Attabad Lake offer some of the most striking mountain vistas on earth.',
    highlights: [
      'Passu Cones Cathedral peaks and Passu suspension bridge',
      'Attabad Lake boating and jet skiing in turquoise waters',
      'Baltit Fort and Altit Fort UNESCO heritage monuments',
      'Eagle’s Nest viewpoint in Duikar overlooking Rakaposhi (7,788m)'
    ],
    bestSeason: 'April to October (Spring blossom & golden autumn are peak)',
    altitude: '2,438 m (8,000 ft)',
    distanceFromQuetta: 'Direct flights via Islamabad or 2-day overland route',
    popularActivities: ['Karakoram Highway road trips', 'Fort exploration', 'Trekking', 'Local organic cuisine tasting'],
    recommendedDays: 5
  },
  {
    id: 'skardu-valley',
    name: 'Skardu & Shangrila Resort',
    urduName: 'سکردو',
    region: 'Gilgit-Baltistan',
    location: 'Skardu District, Gilgit-Baltistan',
    image: '/src/assets/images/skardu_shangrila_1791869356188.jpg',
    tagline: 'Gateway to K2, Lower Kachura Lake & Deosai National Park',
    description: 'Skardu is the mountaineering capital of Pakistan, surrounded by four 8,000-meter peaks including K2. Known for the heart-shaped Shangrila Lake, the dramatic cold desert of Katpana where sand dunes meet snow, and the high-altitude plateau of Deosai.',
    highlights: [
      'Lower Kachura Lake (Shangrila Resort) and Upper Kachura',
      'Deosai National Park - the Land of Giants (4,114m)',
      'Katpana Cold Desert star-gazing & dune bashing',
      'Historic Shigar Fort and Khaplu Palace heritage stays'
    ],
    bestSeason: 'May to September (Deosai plateau opens in late June)',
    altitude: '2,228 m (7,310 ft)',
    distanceFromQuetta: 'Flight via Islamabad to Skardu Airport',
    popularActivities: ['High altitude plateau safari', 'Lake boating', 'Desert camping', 'Historic palace tours'],
    recommendedDays: 6
  },
  {
    id: 'hingol-kund-malir',
    name: 'Hingol National Park & Kund Malir',
    urduName: 'ہنگول نیشنل پارک',
    region: 'Balochistan',
    location: 'Makran Coast, Balochistan',
    image: '/src/assets/images/hanna_lake_quetta_1791869356989.jpg', // resilient fallback container with styled overlay
    tagline: 'Makran Coastal Highway, natural rock sphinx & pristine Arabian Sea beaches',
    description: 'Covering 6,100 square kilometers, Hingol is the largest national park in Pakistan. The Makran Coastal Highway cuts through otherworldly sandstone formations including the Princess of Hope and the Natural Sphinx, meeting the turquoise waves of Kund Malir Beach.',
    highlights: [
      'Princess of Hope and Balochistan Natural Sphinx monoliths',
      'Pristine golden sands and turquoise surf at Kund Malir',
      'Chandragup active mud volcanoes',
      'Hinglaj Mata historic cave temple pilgrimage site'
    ],
    bestSeason: 'October to March (Pleasant coastal winter breeze)',
    altitude: 'Sea level to 1,000 m',
    distanceFromQuetta: 'Connected via Khuzdar / RCD Highway and Makran Coast',
    popularActivities: ['Coastal safari', 'Beach camping', 'Geological sightseeing', 'Wildlife spotting'],
    recommendedDays: 3
  },
  {
    id: 'swat-kalam',
    name: 'Swat Valley & Kalam',
    urduName: 'وادی سوات',
    region: 'Khyber Pakhtunkhwa',
    location: 'Swat District, KPK',
    image: '/src/assets/images/hunza_passu_cones_1791869354390.jpg',
    tagline: 'Known as the Switzerland of Pakistan with alpine rivers and pine forests',
    description: 'Swat Valley features roaring glacial rivers, dense pine woods, and the snow-dusted ski slopes of Malam Jabba. Deeper in the valley, Kalam and Mahodand Lake provide peaceful mountain sanctuaries with trout fishing and lush alpine meadows.',
    highlights: [
      'Mahodand Lake alpine boat rides and trout fishing',
      'Malam Jabba ski resort and scenic chairlift rides',
      'Kalam forest walks and Ushu pine forest',
      'Ancient Buddhist stupas and archaeological heritage sites'
    ],
    bestSeason: 'April to October (Spring/summer) & Dec to Feb for skiing',
    altitude: '2,000 m (6,562 ft)',
    distanceFromQuetta: 'Overland or flight to Islamabad + Swat Motorway (3.5 hrs)',
    popularActivities: ['Chairlift rides', 'Trout fishing', 'Jeep ride to Mahodand', 'Forest hiking'],
    recommendedDays: 4
  }
];

export const TOUR_PACKAGES: TourPackage[] = [
  {
    id: 'pkg-ziarat-balochistan',
    title: 'Ziarat Valley & Quetta Heritage Experience',
    subtitle: 'Exclusive local tour curated by Manzoor’s Quetta team',
    region: 'Balochistan',
    durationDays: 3,
    durationNights: 2,
    startingCity: 'Quetta',
    pricePerPersonPKR: 32000,
    featured: true,
    image: '/src/assets/images/ziarat_balochistan_1791869354755.jpg',
    departureSchedule: 'Every Friday & Custom Private Departures Daily',
    groupType: 'Private Family',
    highlights: [
      'Quaid-e-Azam Residency guided VIP tour',
      'Ancient Juniper Forest nature walk & Prospect Point sunset',
      'Hanna Lake boating & Urak Valley fresh fruit tasting',
      'Traditional Quetta Rosh & Namkeen Sajji dinner'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Quetta & Hanna Lake Excursion',
        details: 'Pickup from Quetta International Airport or Railway Station. Check-in to Serena Hotel Quetta or Bloom Star Hotel. Afternoon drive to Hanna Lake for boating and mountain views, followed by traditional tea in Urak Valley. Dinner featuring authentic Quetta Rosh.'
      },
      {
        day: 2,
        title: 'Quetta to Ziarat Juniper Valley',
        details: 'Early morning departure through mountain passes to Ziarat (2.5 hrs). Tour the historic wooden Quaid-e-Azam Residency, visit Chashma Walk, and drive up to Prospect Point for sunset over the vast juniper forest canopy. Overnight stay at PTDC Ziarat or luxury cottage.'
      },
      {
        day: 3,
        title: 'Baba Kharwari Shrine & Return to Quetta',
        details: 'Morning nature walk in the juniper biosphere reserve. Visit Baba Kharwari shrine and local apple markets. Scenic drive back to Quetta with a stop at Pishin Valley orchards. Departure transfer.'
      }
    ],
    included: [
      'Private air-conditioned Toyota Prado / Saloon car with driver & fuel',
      '2 nights accommodation in standard/deluxe hotel',
      'Daily breakfast & mineral water',
      'Local Quetta expert tour coordinator',
      'All toll taxes, parking fees, and entry passes'
    ],
    excluded: [
      'Lunch and dinner (unless requested in meal add-on)',
      'Personal gear and gratuities',
      'Air or train tickets to/from Quetta'
    ]
  },
  {
    id: 'pkg-hunza-karakoram',
    title: 'Grand Hunza & Passu Cones Expedition',
    subtitle: 'The ultimate Karakoram Highway journey to the roof of the world',
    region: 'Gilgit-Baltistan',
    durationDays: 7,
    durationNights: 6,
    startingCity: 'Islamabad / Rawalpindi',
    pricePerPersonPKR: 78000,
    featured: true,
    image: '/src/assets/images/hunza_passu_cones_1791869354390.jpg',
    departureSchedule: 'Every Saturday (April to November)',
    groupType: 'Small Group',
    highlights: [
      'Karakoram Highway scenic road drive through Babusar Pass',
      'Attabad Lake boat cruise and Passu Cones photography',
      'Khunjerab Pass (4,693m) - World’s highest paved border with China',
      'Baltit and Altit Forts heritage walkthrough'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Islamabad to Naran / Chilas',
        details: 'Departure from Islamabad early morning via Hazara Motorway. Travel along Kaghan Valley, crossing scenic Babusar Pass (summer) to reach Chilas or Naran for overnight stay.'
      },
      {
        day: 2,
        title: 'Chilas to Karimabad Hunza',
        details: 'Drive along the Karakoram Highway with stops at the junction point of three great mountain ranges (Himalayas, Karakoram, Hindu Kush) and Rakaposhi viewpoint. Arrive in Karimabad, Hunza.'
      },
      {
        day: 3,
        title: 'Historical Forts & Duikar Sunset',
        details: 'Visit the 900-year-old Baltit Fort and 1,100-year-old Altit Fort. Evening sunset at Duikar (Eagle’s Nest) with 360-degree views of Rakaposhi, Diran, and Golden Peak.'
      },
      {
        day: 4,
        title: 'Attabad Lake & Passu Cones',
        details: 'Drive through the Karakoram Highway tunnels to turquoise Attabad Lake for a boat safari. Continue to Passu village, walk on the Hussaini suspension bridge, and admire the Passu Cones Cathedral.'
      },
      {
        day: 5,
        title: 'Khunjerab Pass (Pak-China Border)',
        details: 'Excursion to Khunjerab National Park and the Pak-China border at 15,397 ft. Spot Himalayan ibex and golden marmots in their natural alpine habitat. Return to Hunza.'
      },
      {
        day: 6,
        title: 'Hunza to Besham / Naran',
        details: 'Begin return journey along the Karakoram Highway with photo stops and local apricot shopping in Gilgit. Overnight in Besham or Naran.'
      },
      {
        day: 7,
        title: 'Return to Islamabad',
        details: 'Drive back to Islamabad via Hazara Motorway. Drop-off at Islamabad International Airport or hotel with cherished memories.'
      }
    ],
    included: [
      'Comfortable Toyota Grand Cabin or 4x4 Prado with fuel and road taxes',
      '6 nights hotel stays in scenic family hotels / resorts',
      'Breakfast and dinner buffets',
      'Experienced Northern Pakistan tour guide',
      'Boating ticket at Attabad Lake and fort entrance permits'
    ],
    excluded: [
      'Air tickets to Islamabad',
      'Lunch meals and personal snacks',
      'Extra activities (jet ski, zipline)'
    ]
  },
  {
    id: 'pkg-skardu-deosai',
    title: 'Skardu Valley & Deosai Plains Safari',
    subtitle: 'Enchanting lakes, cold desert sand dunes, and high mountain fortresses',
    region: 'Gilgit-Baltistan',
    durationDays: 8,
    durationNights: 7,
    startingCity: 'Islamabad / Skardu',
    pricePerPersonPKR: 89000,
    featured: true,
    image: '/src/assets/images/skardu_shangrila_1791869356188.jpg',
    departureSchedule: 'Every Monday (June to October)',
    groupType: 'Small Group',
    highlights: [
      'Shangrila Resort at Lower Kachura Lake and Upper Kachura hike',
      'Deosai National Park - second highest alpine plateau on earth',
      'Katpana Cold Desert dune sunset and traditional music night',
      'Ancient Shigar Fort and Khaplu Palace royal residences'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Skardu',
        details: 'Scenic mountain flight or overland transfer to Skardu. Check in at hotel with views of the Indus River. Afternoon visit to Kharpocho Fort overlooking the valley.'
      },
      {
        day: 2,
        title: 'Kachura Lakes & Shangrila Resort',
        details: 'Full day exploring Lower Kachura Lake (Shangrila) with its famous red-roofed cottages and blooming cherry trees. Short hike to pristine Upper Kachura Lake for trout fishing and boating.'
      },
      {
        day: 3,
        title: 'Deosai National Park & Sheosar Lake',
        details: 'Exciting 4x4 Land Cruiser expedition to Deosai Plateau (4,114 m). Visit sparkling Sheosar Lake and Bara Pani, searching for Himalayan brown bears and wild alpine flora.'
      },
      {
        day: 4,
        title: 'Shigar Valley & Cold Desert',
        details: 'Drive to Shigar Valley, tour the 400-year-old Serena Shigar Fort, and spend late afternoon in the Katpana Cold Desert admiring sand dunes flanked by snow peaks.'
      },
      {
        day: 5,
        title: 'Khaplu Palace & Chaqchan Mosque',
        details: 'Day trip to Khaplu Valley, visiting the royal Khaplu Palace and 700-year-old wooden Chaqchan Mosque, a masterwork of Kashmiri-Tibetan architecture.'
      },
      {
        day: 6,
        title: 'Manthoka Waterfall & Indus Confluence',
        details: 'Excursion to the thundering Manthoka Waterfall and riverside villages. Interaction with local Balti artisans.'
      },
      {
        day: 7,
        title: 'Leisure Day & Local Bazaar',
        details: 'Shopping for precious gemstones, dry fruits, and handwoven woolens in Skardu Main Bazaar. Farewell dinner.'
      },
      {
        day: 8,
        title: 'Flight Back to Islamabad',
        details: 'Transfer to Skardu Airport for morning flight back to Islamabad with breathtaking aerial views of Nanga Parbat and K2.'
      }
    ],
    included: [
      'Dedicated 4x4 Prado/Jeep for Deosai Plains excursion',
      '7 nights quality hotel accommodation in Skardu and Shigar',
      'Breakfast and dinner included daily',
      'Licensed Baltistan tour leader',
      'Deosai National Park permit fees'
    ],
    excluded: [
      'Domestic flights to Skardu (can be booked by our agency upon request)',
      'Personal laundry, beverages and tips'
    ]
  },
  {
    id: 'pkg-hingol-gwadar',
    title: 'Makran Coastal Highway & Gwadar Safari',
    subtitle: 'From golden beaches to the mysterious sphinx of Balochistan',
    region: 'Balochistan',
    durationDays: 4,
    durationNights: 3,
    startingCity: 'Quetta / Karachi',
    pricePerPersonPKR: 44000,
    featured: false,
    image: '/src/assets/images/hanna_lake_quetta_1791869356989.jpg',
    departureSchedule: 'Every Thursday (October to March)',
    groupType: 'Small Group',
    highlights: [
      'Makran Coastal Highway - rated one of the world’s most scenic drives',
      'Kund Malir beach camping and fresh seafood feast',
      'Princess of Hope and Balochistan Sphinx monoliths',
      'Gwadar Hammerhead peninsula and Koh-e-Batil sunset'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Journey to Kund Malir Beach',
        details: 'Depart via Makran Coastal Highway. Marvel at coastal rock arches, cross Hingol River, and reach Kund Malir Beach for turquoise waters and beachside BBQ.'
      },
      {
        day: 2,
        title: 'Hingol Rock Formations & Ormara',
        details: 'Visit the Princess of Hope and Natural Sphinx in Hingol National Park. Drive along the coastal cliffs to Ormara Beach. Overnight stay with ocean views.'
      },
      {
        day: 3,
        title: 'Gwadar Port & Koh-e-Batil Sunset',
        details: 'Continue to Gwadar city. Visit the deep-sea port, fish harbor, and climb Koh-e-Batil for panoramic views of the hammerhead coastline. Overnight at luxury coastal hotel.'
      },
      {
        day: 4,
        title: 'Return Journey',
        details: 'Morning visit to Gwadar local artisan markets for traditional Baloch handicrafts. Scenic return drive or flight transfer.'
      }
    ],
    included: [
      'Luxury air-conditioned coastal van or 4x4 SUV',
      '3 nights accommodation (Beach resort / 4-star hotel in Gwadar)',
      'Daily breakfast, dinner & live seafood BBQ at Kund Malir',
      'Local Baloch guide with deep cultural knowledge'
    ],
    excluded: [
      'Lunch and snacks along highway',
      'Water sports & boat rides'
    ]
  }
];

export const TRAVEL_SERVICES: TravelService[] = [
  {
    id: 'srv-tours',
    title: 'Tailored Pakistan Tour Packages',
    description: 'Bespoke family holidays, honeymoon escapes, and corporate group expeditions across Balochistan, Gilgit-Baltistan, KPK, and Punjab.',
    iconName: 'Compass',
    features: ['Custom day-by-day itineraries', 'Family and women-friendly packages', 'Budget to 5-star luxury options']
  },
  {
    id: 'srv-balochistan',
    title: 'Quetta & Balochistan Guided Excursions',
    description: 'As a Quetta-native agency, we offer exclusive access to Ziarat’s juniper forests, Hanna Lake boating, Urak Valley, Chaman, and Gwadar beaches.',
    iconName: 'Mountain',
    features: ['Native Baloch and Pashtun tour guides', 'Safe & vetted travel routes', 'Day trips and multi-day retreats']
  },
  {
    id: 'srv-transport',
    title: '4x4 Prado, Land Cruiser & Van Rental',
    description: 'Modern fleet of well-maintained Toyota Prado, Land Cruisers, Hiace Grand Cabins, and Coaster buses driven by experienced mountain drivers.',
    iconName: 'Car',
    features: ['Mountain-certified drivers', 'Comprehensive vehicle insurance', 'Available from Quetta, Islamabad, and Karachi']
  },
  {
    id: 'srv-flights',
    title: 'Domestic Air & Railway Ticketing',
    description: 'Instant flight bookings for PIA, Airblue, SereneAir, and Fly Jinnah, plus Pakistan Railway executive berth reservations from Quetta Station.',
    iconName: 'Plane',
    features: ['Lowest available group fares', 'Quetta to Islamabad/Karachi direct flights', 'Hassle-free date change support']
  },
  {
    id: 'srv-hotels',
    title: 'Hotel & Luxury Resort Reservations',
    description: 'Discounted corporate rates with Serena Hotels, Pearl Continental, PTDC Motels, Shangrila Resorts, and luxury glamping sites across Pakistan.',
    iconName: 'Hotel',
    features: ['Direct partner discounts', 'Verified clean amenities', 'Free room upgrade requests']
  },
  {
    id: 'srv-trekking',
    title: 'Adventure Trekking & 4x4 Safaris',
    description: 'Expeditions to Fairy Meadows, Nanga Parbat base camp, Deosai plateau safaris, and Balochistan canyon trekking for outdoor enthusiasts.',
    iconName: 'Footprints',
    features: ['Licensed high-altitude guides', 'Complete camping & safety gear', 'Emergency rescue coordination']
  }
];

export const AGENCY_INFO = {
  name: "Manzoor's Travel Agency",
  tagline: "Your Gateway to Pakistan's Hidden Natural Wonders",
  city: 'Quetta',
  province: 'Balochistan',
  country: 'Pakistan',
  headOffice: 'Office #14, 2nd Floor, Al-Naseeb Commercial Plaza, Jinnah Road (Near Meezan Chowk), Quetta, Balochistan, Pakistan',
  phonePrimary: '+92 81 2834567',
  phoneMobile: '+92 333 7891234',
  whatsapp: '+92 333 7891234',
  email: 'manzoortravelsqta@gmail.com',
  dtsLicense: 'DTS License No. 4182 (Govt of Pakistan Tourist Services)',
  operatingHours: 'Monday - Saturday: 9:00 AM – 9:00 PM | Sunday: On-Call Support',
  yearsActive: 14,
  satisfiedTravelers: '12,500+',
  completedTours: '1,450+'
};

export const REVIEWS = [
  {
    id: 'rev-1',
    author: 'Engr. Tariq Kasi',
    city: 'Quetta',
    rating: 5,
    text: "Manzoor's Travel arranged our family trip from Quetta to Hunza and Khunjerab Pass. Everything was flawless—the Grand Cabin was comfortable, the driver was courteous, and the hotels in Karimabad and Attabad were top notch. Best agency in Quetta!",
    package: 'Hunza & Karakoram Expedition'
  },
  {
    id: 'rev-2',
    author: 'Dr. Ayesha Mengal',
    city: 'Karachi',
    rating: 5,
    text: "We wanted to explore Balochistan safely. Manzoor's team took us to Ziarat, Quaid-e-Azam residency, Hanna Lake, and down to Kund Malir. Their local knowledge of Balochistan and hospitality is unmatched. Highly recommended!",
    package: 'Ziarat & Balochistan Heritage'
  },
  {
    id: 'rev-3',
    author: 'Naveed Akhtar',
    city: 'Lahore',
    rating: 5,
    text: "The Skardu & Deosai 8-day package was a dream come true. The 4x4 Prado was in prime condition and conquered Deosai plains easily. Manzoor Bhai personally ensured our comfort throughout the tour.",
    package: 'Skardu Valley & Deosai Safari'
  }
];
