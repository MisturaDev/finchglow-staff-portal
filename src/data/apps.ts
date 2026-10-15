import type { AppItem } from '../types/portal';

export const apps: AppItem[] = [
  // --- Group-wide shared utilities ---
  {
    id: 'hr_selfservice',
    name: 'HR Self-Service & Leave',
    description: 'Apply for annual leave, view monthly payslips, and update benefits',
    category: 'corporate',
    companyIds: ['all'],
    icon: 'user-check',
    url: 'https://hr.finchglowgroup.com',
  },
  {
    id: 'it_support',
    name: 'IT Service Desk',
    description: 'Log hardware tickets, request VPN access, and get network support',
    category: 'support',
    companyIds: ['all'],
    icon: 'life-buoy',
    url: 'https://support.finchglowgroup.com',
    badge: '24/7',
  },
  {
    id: 'erp_finance',
    name: 'Oracle ERP & Procurement',
    description: 'Raise purchase requisitions, approve vendor invoices, and track budgets',
    category: 'corporate',
    companyIds: ['all'],
    icon: 'credit-card',
    url: 'https://erp.finchglowgroup.com',
  },
  {
    id: 'townhall_portal',
    name: 'Group Intranet & Policies',
    description: 'Employee handbook, code of conduct, and executive leadership announcements',
    category: 'corporate',
    companyIds: ['all'],
    icon: 'book-open',
    url: 'https://intranet.finchglowgroup.com',
  },

  // --- Travel / GDS & Booking Tools ---
  {
    id: 'amadeus_gds',
    name: 'Amadeus & Sabre GDS',
    description: 'Global distribution workspace for flight search, PNR issuance, and ticket reissues',
    category: 'booking',
    companyIds: ['ota', 'b2b', 'tmc'],
    roleIds: ['contact_agent', 'travel_consultant'],
    icon: 'globe',
    url: 'https://sellingplatform.amadeus.com',
    badge: 'Core Tool',
  },
  {
    id: 'crm_desk',
    name: 'Travel CRM & Omni-Channel',
    description: 'Customer contact history, inbound call queue, and WhatsApp escalation desk',
    category: 'operations',
    companyIds: ['ota', 'b2b', 'tmc', 'holidays'],
    roleIds: ['contact_agent', 'travel_consultant'],
    icon: 'message-square',
    url: 'https://crm.finchglowgroup.com',
    badge: 'Live',
  },
  {
    id: 'supplier_gateway',
    name: 'Airline & Hotel Supplier Gateway',
    description: 'Direct NDC airline connections, hotel bed banks, and wholesale net fares',
    category: 'booking',
    companyIds: ['b2b', 'ota', 'tmc', 'holidays'],
    roleIds: ['travel_consultant'],
    icon: 'layers',
    url: 'https://suppliers.finchglowgroup.com',
  },

  // --- B2B Platform (Finchglow Travels Trade) ---
  {
    id: 'b2b_agent_portal',
    name: 'Trade Consolidator Desk',
    description: 'Manage sub-agent credit limits, commission markups, and wallet top-ups',
    category: 'booking',
    companyIds: ['b2b'],
    icon: 'briefcase',
    url: 'https://trade.finchglowtravels.com',
    badge: 'B2B',
  },

  // --- TMC (FCM Travel Solutions) ---
  {
    id: 'fcm_portal',
    name: 'FCM Client Travel Desk',
    description: 'Corporate client travel policy engine, approval hierarchies, and duty of care tracking',
    category: 'corporate',
    companyIds: ['tmc'],
    roleIds: ['travel_consultant'],
    icon: 'shield',
    url: 'https://hub.fcmtravel.com',
    badge: 'TMC',
  },

  // --- OTA (Travelden) ---
  {
    id: 'travelden_backoffice',
    name: 'Travelden E-Commerce Control',
    description: 'Manage promo codes, direct web flight inventory, and payment gateway logs',
    category: 'operations',
    companyIds: ['ota'],
    roleIds: ['contact_agent'],
    icon: 'shopping-cart',
    url: 'https://admin.travelden.com',
    badge: 'OTA',
  },

  // --- Academy (Lagos Aviation Academy) ---
  {
    id: 'laa_lms',
    name: 'LAA Learning Management System',
    description: 'IATA course syllabi, student attendance registers, and online testing portal',
    category: 'learning',
    companyIds: ['academy'],
    roleIds: ['academy_trainer'],
    icon: 'award',
    url: 'https://learn.lagosaviationacademy.com',
    badge: 'IATA',
  },
  {
    id: 'student_records',
    name: 'Academy Admissions & Records',
    description: 'Student enrollments, tuition fee billing, and certification verification',
    category: 'learning',
    companyIds: ['academy'],
    roleIds: ['academy_trainer'],
    icon: 'file-text',
    url: 'https://portal.lagosaviationacademy.com',
  },

  // --- Holidays ---
  {
    id: 'holidays_builder',
    name: 'Tour & Itinerary Designer',
    description: 'Custom vacation packages, visa document review, and safari/cruise bookings',
    category: 'booking',
    companyIds: ['holidays'],
    icon: 'compass',
    url: 'https://itinerary.finchglowholidays.com',
  },

  // --- Facilities & IT Operations ---
  {
    id: 'facilities_workorder',
    name: 'Facilities Maintenance Desk',
    description: 'Generator fuel logs, HVAC maintenance, office repairs, and space requests',
    category: 'operations',
    companyIds: ['facilities'],
    roleIds: ['facilities_tech'],
    icon: 'tool',
    url: 'https://facilities.finchglowgroup.com',
    badge: 'Active',
  },
  {
    id: 'fleet_tracker',
    name: 'Fleet Logistics & Vehicle Booking',
    description: 'Corporate shuttle scheduling, driver dispatch, and fuel voucher reconciliation',
    category: 'operations',
    companyIds: ['facilities'],
    roleIds: ['facilities_tech'],
    icon: 'truck',
    url: 'https://fleet.finchglowgroup.com',
  },
];
