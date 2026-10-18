import React from 'react';
import type { AppItem, Role } from '../../types/portal';
import { Icon } from '../common/Icon';
import './RoleShortcuts.css';

interface RoleShortcutsProps {
  currentRole: Role;
  apps: AppItem[];
  filterByRoleOnly: boolean;
  onToggleFilterByRole: () => void;
}

export const RoleShortcuts: React.FC<RoleShortcutsProps> = ({
  currentRole,
  apps,
  filterByRoleOnly,
  onToggleFilterByRole,
}) => {
  // Find the shortcut apps configured for this role
  const shortcutApps = apps.filter((app) =>
    currentRole.defaultShortcuts.includes(app.id)
  );

  if (shortcutApps.length === 0) {
    return null;
  }

  return (
    <section className="role-shortcuts-panel" aria-labelledby="role-shortcuts-heading">
      <div className="role-shortcuts-header">
        <div className="role-shortcuts-title-area">
          <span className="role-shortcuts-icon" aria-hidden="true">
            <Icon name="star" size={17} strokeWidth={2.2} />
          </span>
          <div>
            <h3 id="role-shortcuts-heading" className="role-shortcuts-title">
              Fast-Track Shortcuts for {currentRole.label}
            </h3>
            <p className="role-shortcuts-desc">
              Curated daily tools prioritised for your job responsibilities.
            </p>
          </div>
        </div>

        <button
          type="button"
          className={`role-filter-toggle ${filterByRoleOnly ? 'role-filter-toggle-active' : ''}`}
          onClick={onToggleFilterByRole}
          aria-pressed={filterByRoleOnly}
        >
          {filterByRoleOnly ? 'Showing Role Tools Only' : 'Filter by Role'}
        </button>
      </div>

      <div className="role-shortcuts-grid">
        {shortcutApps.map((app) => (
          <a
            key={app.id}
            href={app.url}
            target="_blank"
            rel="noopener noreferrer"
            className="role-shortcut-chip"
            aria-label={`Quick launch ${app.name}`}
          >
            <div className="role-shortcut-info">
              <span className="role-shortcut-name">{app.name}</span>
              <span className="role-shortcut-cat">{app.category}</span>
            </div>
            <Icon name="external-link" size={13} strokeWidth={2.5} className="role-shortcut-arrow" />
          </a>
        ))}
      </div>
    </section>
  );
};
