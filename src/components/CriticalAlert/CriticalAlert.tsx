import React, { useState } from 'react';
import type { AlertItem } from '../../types/portal';
import { Icon } from '../common/Icon';
import './CriticalAlert.css';

interface CriticalAlertProps {
  alerts: AlertItem[];
}

export const CriticalAlert: React.FC<CriticalAlertProps> = ({ alerts }) => {
  const [isDismissed, setIsDismissed] = useState<boolean>(false);

  const criticalAlerts = alerts.filter((a) => a.severity === 'critical');

  if (criticalAlerts.length === 0 || isDismissed) {
    return null;
  }

  const primaryAlert = criticalAlerts[0];

  return (
    <aside
      className="critical-alert-banner"
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
    >
      <div className="critical-alert-content">
        <div className="critical-alert-badge">
          <Icon name="alert-triangle" size={14} strokeWidth={2.5} />
          <span>CRITICAL OUTAGE</span>
        </div>

        <div className="critical-alert-body">
          <h3 className="critical-alert-title">{primaryAlert.title}</h3>
          <p className="critical-alert-message">{primaryAlert.message}</p>
        </div>

        <div className="critical-alert-actions">
          {primaryAlert.actionUrl && (
            <a
              href={primaryAlert.actionUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="critical-btn critical-btn-primary"
            >
              <span>{primaryAlert.actionLabel || 'View Status'}</span>
              <Icon name="external-link" size={12} strokeWidth={2.5} />
            </a>
          )}
          <button
            type="button"
            className="critical-btn critical-btn-dismiss"
            onClick={() => setIsDismissed(true)}
            aria-label="Acknowledge and dismiss critical alert"
          >
            Acknowledge
          </button>
        </div>
      </div>
    </aside>
  );
};
