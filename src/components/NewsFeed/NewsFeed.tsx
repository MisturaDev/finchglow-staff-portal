import React from 'react';
import type { AlertItem, Company } from '../../types/portal';
import './NewsFeed.css';

interface NewsFeedProps {
  alerts: AlertItem[];
  companies: Company[];
  selectedCompanyId: string;
}

export const NewsFeed: React.FC<NewsFeedProps> = ({
  alerts,
  companies,
  selectedCompanyId,
}) => {
  const getCompanyLabel = (companyId: string) => {
    if (companyId === 'all') {
      return 'Group Announcement';
    }
    const found = companies.find((c) => c.id === companyId);
    return found ? found.name : 'Subsidiary Update';
  };

  const getSeverityBadgeClass = (severity: string) => {
    switch (severity) {
      case 'critical':
        return 'severity-badge-critical';
      case 'warning':
        return 'severity-badge-warning';
      case 'info':
      default:
        return 'severity-badge-info';
    }
  };

  if (alerts.length === 0) {
    return (
      <div className="news-empty-state" role="status">
        <p>No recent alerts or announcements for this category.</p>
      </div>
    );
  }

  return (
    <div className="news-feed-list" role="feed" aria-label="Company announcements and alerts feed">
      {alerts.map((item) => (
        <article
          key={item.id}
          className={`news-item news-item-${item.severity}`}
          aria-labelledby={`alert-title-${item.id}`}
        >
          <div className="news-item-top">
            <div className="news-item-badges">
              <span className={`severity-badge ${getSeverityBadgeClass(item.severity)}`}>
                {item.severity.toUpperCase()}
              </span>
              <span className="news-scope-badge">
                {getCompanyLabel(item.companyId)}
              </span>
            </div>
            <time className="news-timestamp">{item.timestamp}</time>
          </div>

          <h3 id={`alert-title-${item.id}`} className="news-item-title">
            {item.title}
          </h3>

          <p className="news-item-message">{item.message}</p>

          {item.actionLabel && (
            <div className="news-item-action">
              <a
                href={item.actionUrl || '#'}
                target={item.actionUrl ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="news-action-link"
              >
                <span>{item.actionLabel}</span>
                <span aria-hidden="true"> →</span>
              </a>
            </div>
          )}
        </article>
      ))}
    </div>
  );
};
