import React from 'react';
import type { AppItem } from '../../types/portal';
import { Icon } from '../common/Icon';
import './AppLauncher.css';

interface AppLauncherProps {
  apps: AppItem[];
  searchQuery: string;
  onClearSearch: () => void;
}

export const AppLauncher: React.FC<AppLauncherProps> = ({
  apps,
  searchQuery,
  onClearSearch,
}) => {
  if (apps.length === 0) {
    return (
      <div className="app-empty-state" role="status">
        <div className="app-empty-icon" aria-hidden="true">
          <Icon name="search" size={32} strokeWidth={1.5} />
        </div>
        <h3 className="app-empty-title">No applications found</h3>
        <p className="app-empty-desc">
          {searchQuery
            ? `No workplace tools matching "${searchQuery}" were found in this directory.`
            : 'No tools match the selected category filter for this business.'}
        </p>
        <button
          type="button"
          className="app-empty-reset-btn"
          onClick={onClearSearch}
        >
          Reset Filters & Search
        </button>
      </div>
    );
  }

  return (
    <div className="app-launcher-grid" role="list" aria-label="Application launcher grid">
      {apps.map((app) => (
        <article key={app.id} className="app-card" role="listitem">
          <div className="app-card-header">
            <div className="app-card-icon" aria-hidden="true">
              <Icon name={app.icon} size={20} strokeWidth={1.75} />
            </div>
            {app.badge && (
              <span className="app-badge">{app.badge}</span>
            )}
          </div>

          <div className="app-card-body">
            <h3 className="app-card-name">{app.name}</h3>
            <p className="app-card-desc">{app.description}</p>
          </div>

          <div className="app-card-footer">
            <span className="app-category-tag">{app.category}</span>
            <a
              href={app.url}
              target="_blank"
              rel="noopener noreferrer"
              className="app-launch-link"
              aria-label={`Launch ${app.name} in new window`}
            >
              <span>Launch</span>
              <Icon name="external-link" size={13} strokeWidth={2} />
            </a>
          </div>
        </article>
      ))}
    </div>
  );
};
