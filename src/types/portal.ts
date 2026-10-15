export type Severity = 'critical' | 'warning' | 'info';

export type AppCategory =
  | 'booking'
  | 'operations'
  | 'corporate'
  | 'learning'
  | 'support';

export interface Company {
  id: string;
  name: string;
  shortName: string;
  tagline: string;
  brandColor: string;
  brandColorDark: string;
  brandColorSoft: string;
  logoMark: string;
  description: string;
}

export type RoleId =
  | 'contact_agent'
  | 'travel_consultant'
  | 'facilities_tech'
  | 'academy_trainer'
  | 'general_staff';

export interface Role {
  id: RoleId;
  label: string;
  description: string;
  defaultShortcuts: string[]; // App IDs prioritized for this role
}

export interface Employee {
  id: string;
  name: string;
  initials: string;
  email: string;
  companyId: string;
  roleId: RoleId;
}

export interface AppItem {
  id: string;
  name: string;
  description: string;
  category: AppCategory;
  companyIds: string[]; // 'all' means accessible group-wide
  roleIds?: RoleId[]; // undefined means accessible to all roles
  icon: string;
  url: string;
  badge?: string;
  isExternal?: boolean;
}

export interface AlertItem {
  id: string;
  title: string;
  message: string;
  severity: Severity;
  companyId: string; // 'all' means group-wide (must always remain visible)
  timestamp: string;
  actionLabel?: string;
  actionUrl?: string;
}
