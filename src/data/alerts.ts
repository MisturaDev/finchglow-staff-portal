import type { AlertItem } from '../types/portal';

export const alerts: AlertItem[] = [
  // --- Critical Alerts (Must be impossible to miss) ---
  {
    id: 'crit-01',
    title: 'Payment Gateway Timeout (Interswitch / Paystack)',
    message:
      'Card payments and automated ticket issuance are currently timing out across Travelden OTA and Finchglow Trade. The payment operations team is running manual confirmations. Do not retry failed transactions repeatedly.',
    severity: 'critical',
    companyId: 'all', // Group-wide impact - must remain visible on all views!
    timestamp: '12 mins ago',
    actionLabel: 'View Status Page',
    actionUrl: 'https://status.finchglowgroup.com',
  },
  {
    id: 'crit-02',
    title: 'GDS Core Maintenance - Sabre & Amadeus',
    message:
      'Scheduled switchover in progress for Europe/Africa routing. PNR queues may experience 3-5 minute latency. Offline queueing is enabled for corporate consultant desks.',
    severity: 'warning',
    companyId: 'b2b',
    timestamp: '45 mins ago',
    actionLabel: 'Queue Guide',
  },

  // --- Company-Specific & Group Warnings ---
  {
    id: 'warn-01',
    title: 'HQ Server Room UPS Battery Testing',
    message:
      'Facilities will conduct scheduled battery discharge testing at the Lagos HQ between 19:00 - 21:00 WAT today. Core network links are isolated to secondary backup generators.',
    severity: 'warning',
    companyId: 'facilities',
    timestamp: '2 hours ago',
  },
  {
    id: 'warn-02',
    title: 'UK & Schengen Visa Biometric Appointment Delays',
    message:
      'VFS and TLScontact in Lagos and Abuja have announced extended turnaround times for Q4 leisure travel. Advise all corporate and holiday clients to apply at least 6 weeks in advance.',
    severity: 'warning',
    companyId: 'tmc',
    timestamp: '4 hours ago',
    actionLabel: 'Advisory Note',
  },

  // --- Information / News Updates ---
  {
    id: 'info-01',
    title: 'Finchglow Group All-Hands Townhall: Q4 Strategy & Growth',
    message:
      'Join Group Executive Chairman and subsidiary heads this Thursday at 2:00 PM WAT. Available on Microsoft Teams and in the 4th floor main auditorium.',
    severity: 'info',
    companyId: 'all', // Group-wide announcement
    timestamp: 'Today at 09:30',
    actionLabel: 'Add to Calendar',
  },
  {
    id: 'info-02',
    title: 'Lagos Aviation Academy: 2026 Batch 4 IATA Registrations Open',
    message:
      'Registrations for the Foundation in Travel & Tourism with Amadeus GDS are now open. Staff referral discounts apply for immediate family members.',
    severity: 'info',
    companyId: 'academy',
    timestamp: 'Yesterday',
    actionLabel: 'Course Details',
  },
  {
    id: 'info-03',
    title: 'Finchglow Holidays Launches 2026 Maldives & Zanzibar Catalog',
    message:
      'The new corporate retreat and executive leisure packages are now live on the intranet. Partner rates available for all group staff.',
    severity: 'info',
    companyId: 'holidays',
    timestamp: '2 days ago',
  },
];
