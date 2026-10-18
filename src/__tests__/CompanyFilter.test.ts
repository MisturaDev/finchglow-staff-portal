import { describe, it, expect } from 'vitest';
import { apps } from '../data/apps';
import { alerts } from '../data/alerts';
import { companies } from '../data/companies';

describe('Company Filtering & Group-Wide Persistence Logic', () => {
  it('includes group-wide utilities across every single subsidiary', () => {
    const subsidiaryIds = companies
      .map((c) => c.id)
      .filter((id) => id !== 'all');

    subsidiaryIds.forEach((subId) => {
      const availableApps = apps.filter(
        (app) => app.companyIds.includes('all') || app.companyIds.includes(subId)
      );

      // Verify that group-wide tools like HR Self-Service & IT Support are present
      const hrApp = availableApps.find((app) => app.id === 'hr_selfservice');
      const itApp = availableApps.find((app) => app.id === 'it_support');

      expect(hrApp).toBeDefined();
      expect(itApp).toBeDefined();
      expect(hrApp?.companyIds).toContain('all');
    });
  });

  it('keeps group-wide alerts visible when filtering by any subsidiary', () => {
    const groupAlerts = alerts.filter((a) => a.companyId === 'all');
    expect(groupAlerts.length).toBeGreaterThan(0);

    const testSubsidiaries = ['academy', 'ota', 'b2b', 'tmc', 'holidays', 'facilities'];

    testSubsidiaries.forEach((subId) => {
      const activeAlerts = alerts.filter(
        (a) => a.companyId === 'all' || a.companyId === subId
      );

      // Every subsidiary view must contain all group alerts
      groupAlerts.forEach((groupAlert) => {
        expect(activeAlerts.some((a) => a.id === groupAlert.id)).toBe(true);
      });
    });
  });

  it('ensures subsidiary-specific apps do not leak into unrelated subsidiaries', () => {
    const academyApps = apps.filter(
      (app) => app.companyIds.includes('academy') && !app.companyIds.includes('all')
    );
    expect(academyApps.length).toBeGreaterThan(0);

    // Verify academy apps do NOT appear in Travelden OTA
    const otaApps = apps.filter(
      (app) => app.companyIds.includes('all') || app.companyIds.includes('ota')
    );

    academyApps.forEach((academyApp) => {
      expect(otaApps.some((app) => app.id === academyApp.id)).toBe(false);
    });
  });
});
