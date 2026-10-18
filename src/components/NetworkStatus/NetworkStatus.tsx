import React from 'react';
import { Icon } from '../common/Icon';
import './NetworkStatus.css';

interface NetworkStatusProps {
  isLoading: boolean;
  onToggleLoading: () => void;
  hasError: boolean;
  onToggleError: () => void;
  onRetry: () => void;
}

export const NetworkStatus: React.FC<NetworkStatusProps> = ({
  isLoading,
  onToggleLoading,
  hasError,
  onToggleError,
  onRetry,
}) => {
  return (
    <aside className="network-simulator" aria-label="Developer simulation controls">
      <div className="network-simulator-label">
        <span className="network-dot" aria-hidden="true" />
        <span>Resilience Controls:</span>
      </div>

      <div className="network-simulator-actions">
        <button
          type="button"
          className={`sim-btn ${isLoading ? 'sim-btn-active' : ''}`}
          onClick={onToggleLoading}
          aria-pressed={isLoading}
        >
          <Icon name="refresh" size={13} strokeWidth={2} />
          <span>{isLoading ? 'Loading Skeleton: Active' : 'Simulate Loading'}</span>
        </button>

        <button
          type="button"
          className={`sim-btn ${hasError ? 'sim-btn-error' : ''}`}
          onClick={onToggleError}
          aria-pressed={hasError}
        >
          <Icon name="alert-triangle" size={13} strokeWidth={2} />
          <span>{hasError ? 'API Outage: Simulated' : 'Simulate API Failure'}</span>
        </button>
      </div>

      {hasError && (
        <div className="api-error-banner" role="alert">
          <div className="api-error-body">
            <Icon name="alert-triangle" size={16} strokeWidth={2} className="api-error-icon" />
            <div className="api-error-text">
              <strong>Finchglow API Gateway Unreachable:</strong> Network timeout detected. Displaying verified offline cache.
            </div>
          </div>
          <button type="button" className="api-retry-btn" onClick={onRetry}>
            <Icon name="refresh" size={13} strokeWidth={2} />
            <span>Retry Connection</span>
          </button>
        </div>
      )}
    </aside>
  );
};
