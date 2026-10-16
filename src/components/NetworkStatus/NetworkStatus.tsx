import React from 'react';
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
          {isLoading ? '⏳ Loading State: ON' : 'Simulate Loading'}
        </button>

        <button
          type="button"
          className={`sim-btn ${hasError ? 'sim-btn-error' : ''}`}
          onClick={onToggleError}
          aria-pressed={hasError}
        >
          {hasError ? '⚠️ API Failure: ON' : 'Simulate API Failure'}
        </button>
      </div>

      {hasError && (
        <div className="api-error-banner" role="alert">
          <div className="api-error-text">
            <strong>Finchglow API Unreachable:</strong> Network gateway timed out. Displaying cached offline data.
          </div>
          <button type="button" className="api-retry-btn" onClick={onRetry}>
            Retry Connection
          </button>
        </div>
      )}
    </aside>
  );
};
