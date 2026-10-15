import type { Company } from '../types/portal';

/**
 * Finchglow Holdings Subsidiaries
 * 
 * DESIGN FOR GROWTH:
 * To add a 7th subsidiary, simply append an entry to this array.
 * No components, routes, or styles need to be rewritten.
 */
export const companies: Company[] = [
  {
    id: 'all',
    name: 'Finchglow Holdings',
    shortName: 'Group',
    tagline: 'Leading travel, hospitality & aviation conglomerate',
    brandColor: '#00AEEF',
    brandColorDark: '#00395C',
    brandColorSoft: '#E6F7FD',
    logoMark: 'F',
    description: 'Unified group-wide portal view across all subsidiaries',
  },
  {
    id: 'academy',
    name: 'Lagos Aviation Academy',
    shortName: 'Academy',
    tagline: 'Premier aviation training & IATA authorized centre',
    brandColor: '#D97706',
    brandColorDark: '#78350F',
    brandColorSoft: '#FEF3C7',
    logoMark: 'LAA',
    description: 'Aviation certifications, cabin crew training, and ticketing school',
  },
  {
    id: 'ota',
    name: 'Travelden',
    shortName: 'OTA',
    tagline: 'Online travel agency & smart booking engine',
    brandColor: '#EA580C',
    brandColorDark: '#7C2D12',
    brandColorSoft: '#FFEDD5',
    logoMark: 'TD',
    description: 'Consumer flight bookings, hotel reservations, and self-service travel',
  },
  {
    id: 'b2b',
    name: 'Finchglow Travels (Trade)',
    shortName: 'B2B Platform',
    tagline: "Nigeria's #1 travel consolidator for travel agents",
    brandColor: '#0284C7',
    brandColorDark: '#0C4A6E',
    brandColorSoft: '#E0F2FE',
    logoMark: 'FT',
    description: 'Sub-agent ticketing portal, GDS aggregation, and commission management',
  },
  {
    id: 'tmc',
    name: 'FCM Travel Nigeria',
    shortName: 'TMC',
    tagline: 'Global corporate travel & expense management',
    brandColor: '#E11D48',
    brandColorDark: '#881337',
    brandColorSoft: '#FFE4E6',
    logoMark: 'FCM',
    description: 'Corporate client travel desks, compliance policies, and executive VIP desks',
  },
  {
    id: 'holidays',
    name: 'Finchglow Holidays',
    shortName: 'Holidays',
    tagline: 'Curated leisure, vacation packages & luxury tours',
    brandColor: '#059669',
    brandColorDark: '#064E3B',
    brandColorSoft: '#D1FAE5',
    logoMark: 'FH',
    description: 'Destination packages, holiday visa concierge, and custom tours',
  },
  {
    id: 'facilities',
    name: 'Finchglow Shared Facilities',
    shortName: 'Facilities',
    tagline: 'Group facilities, fleet logistics & operational support',
    brandColor: '#6366F1',
    brandColorDark: '#312E81',
    brandColorSoft: '#EEF2FF',
    logoMark: 'FS',
    description: 'Office operations, IT infrastructure, meeting spaces, and fleet management',
  },
];
