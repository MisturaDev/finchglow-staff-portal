import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { CriticalAlert } from '../components/CriticalAlert/CriticalAlert';
import type { AlertItem } from '../types/portal';

const mockAlerts: AlertItem[] = [
  {
    id: 'crit-01',
    title: 'Payment Gateway Outage',
    message: 'Card payments and automated ticketing are currently timing out.',
    severity: 'critical',
    companyId: 'all',
    timestamp: '10 mins ago',
    actionLabel: 'Status Page',
    actionUrl: 'https://status.example.com',
  },
  {
    id: 'warn-01',
    title: 'Scheduled Server Maintenance',
    message: 'Planned maintenance tonight.',
    severity: 'warning',
    companyId: 'all',
    timestamp: '1 hour ago',
  },
];

describe('CriticalAlert Component (WCAG 2.1 AA Compliance)', () => {
  it('renders critical alert with accessible role="alert" and aria-live="assertive"', () => {
    render(<CriticalAlert alerts={mockAlerts} />);

    const alertBanner = screen.getByRole('alert');
    expect(alertBanner).toBeInTheDocument();
    expect(alertBanner).toHaveAttribute('aria-live', 'assertive');
    expect(screen.getByText('CRITICAL OUTAGE')).toBeInTheDocument();
    expect(screen.getByText('Payment Gateway Outage')).toBeInTheDocument();
  });

  it('allows the user to dismiss the critical alert', () => {
    render(<CriticalAlert alerts={mockAlerts} />);

    const dismissButton = screen.getByRole('button', { name: /dismiss critical alert/i });
    expect(dismissButton).toBeInTheDocument();

    fireEvent.click(dismissButton);

    expect(screen.queryByRole('alert')).not.toBeInTheDocument();
  });

  it('renders nothing when there are no critical alerts', () => {
    const nonCriticalAlerts: AlertItem[] = [mockAlerts[1]];
    const { container } = render(<CriticalAlert alerts={nonCriticalAlerts} />);

    expect(container.firstChild).toBeNull();
  });
});
