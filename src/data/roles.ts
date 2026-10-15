import type { Role } from '../types/portal';

export const roles: Role[] = [
  {
    id: 'general_staff',
    label: 'Group Staff (General)',
    description: 'Standard group employee with access to core workspace and HR tools',
    defaultShortcuts: ['hr_selfservice', 'it_support', 'townhall_portal'],
  },
  {
    id: 'contact_agent',
    label: 'Contact-Centre Agent',
    description: 'Frontline agent handling customer bookings, support tickets, and chat queues',
    defaultShortcuts: ['amadeus_gds', 'crm_desk', 'it_support'],
  },
  {
    id: 'travel_consultant',
    label: 'Corporate Travel Consultant',
    description: 'Corporate travel specialist managing corporate client itineraries and approvals',
    defaultShortcuts: ['fcm_portal', 'amadeus_gds', 'supplier_gateway'],
  },
  {
    id: 'facilities_tech',
    label: 'Facilities Technician',
    description: 'Field & operations technician managing physical plant, IT, and maintenance requests',
    defaultShortcuts: ['facilities_workorder', 'fleet_tracker', 'it_support'],
  },
  {
    id: 'academy_trainer',
    label: 'Academy Trainer',
    description: 'Instructor conducting IATA training batches, testing, and grading',
    defaultShortcuts: ['laa_lms', 'student_records', 'hr_selfservice'],
  },
];
