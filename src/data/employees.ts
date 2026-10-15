import type { Employee } from '../types/portal';

export const defaultEmployee: Employee = {
  id: 'emp-01',
  name: 'Mistura Ishola',
  initials: 'MI',
  email: 'mistura.ishola@finchglowgroup.com',
  companyId: 'all',
  roleId: 'general_staff',
};

/**
 * Pre-configured test personas for quick evaluation during the interview walkthrough
 */
export const demoPersonas: Employee[] = [
  {
    id: 'emp-01',
    name: 'Mistura Ishola',
    initials: 'MI',
    email: 'mistura.ishola@finchglowgroup.com',
    companyId: 'all',
    roleId: 'general_staff',
  },
  {
    id: 'emp-02',
    name: 'Chioma Adeyemi',
    initials: 'CA',
    email: 'chioma.a@travelden.com',
    companyId: 'ota',
    roleId: 'contact_agent',
  },
  {
    id: 'emp-03',
    name: 'Babatunde Balogun',
    initials: 'BB',
    email: 'babatunde.b@fcmtravel.ng',
    companyId: 'tmc',
    roleId: 'travel_consultant',
  },
  {
    id: 'emp-04',
    name: 'Emeka Nwosu',
    initials: 'EN',
    email: 'emeka.n@finchglowfacilities.com',
    companyId: 'facilities',
    roleId: 'facilities_tech',
  },
  {
    id: 'emp-05',
    name: 'Fatima Garba',
    initials: 'FG',
    email: 'fatima.g@lagosaviationacademy.com',
    companyId: 'academy',
    roleId: 'academy_trainer',
  },
];
