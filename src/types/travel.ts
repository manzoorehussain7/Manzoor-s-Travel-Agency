export type Region = 'All' | 'Balochistan' | 'Gilgit-Baltistan' | 'Khyber Pakhtunkhwa' | 'Punjab & Heritage';

export interface Destination {
  id: string;
  name: string;
  urduName?: string;
  region: Region;
  location: string;
  image: string;
  tagline: string;
  description: string;
  highlights: string[];
  bestSeason: string;
  altitude?: string;
  distanceFromQuetta?: string;
  popularActivities: string[];
  recommendedDays: number;
}

export interface TourPackage {
  id: string;
  title: string;
  subtitle: string;
  region: Region;
  durationDays: number;
  durationNights: number;
  startingCity: string;
  pricePerPersonPKR: number;
  featured: boolean;
  image: string;
  departureSchedule: string;
  groupType: 'Small Group' | 'Private Family' | 'Adventure Trek' | 'Executive';
  highlights: string[];
  itinerary: {
    day: number;
    title: string;
    details: string;
  }[];
  included: string[];
  excluded: string[];
}

export interface TravelService {
  id: string;
  title: string;
  description: string;
  iconName: string;
  features: string[];
}

export interface BookingInquiry {
  fullName: string;
  phone: string;
  email: string;
  selectedPackage?: string;
  destinationInterest: string;
  travelDate: string;
  numberOfTravelers: number;
  departureCity: string;
  specialRequests?: string;
}
