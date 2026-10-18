import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { SearchBar } from '../components/SearchBar/SearchBar';

describe('SearchBar Component', () => {
  const defaultProps = {
    searchQuery: '',
    onSearchChange: vi.fn(),
    selectedCategory: 'all' as const,
    onCategoryChange: vi.fn(),
    filterByRoleOnly: false,
    onToggleFilterByRole: vi.fn(),
    roleLabel: 'Group Staff (General)',
    totalResults: 12,
  };

  it('renders search input and category filter buttons', () => {
    render(<SearchBar {...defaultProps} />);

    expect(screen.getByRole('searchbox')).toBeInTheDocument();
    expect(screen.getByText('All Tools')).toBeInTheDocument();
    expect(screen.getByText('Booking & GDS')).toBeInTheDocument();
    expect(screen.getByText('Operations & Desk')).toBeInTheDocument();
    expect(screen.getByText('My Role Shortcuts')).toBeInTheDocument();
    expect(screen.getByText('12 tools available')).toBeInTheDocument();
  });

  it('triggers onSearchChange when user types', () => {
    const onSearchChange = vi.fn();
    render(<SearchBar {...defaultProps} onSearchChange={onSearchChange} />);

    const input = screen.getByRole('searchbox');
    fireEvent.change(input, { target: { value: 'amadeus' } });

    expect(onSearchChange).toHaveBeenCalledWith('amadeus');
  });

  it('shows clear button when searchQuery is non-empty and resets on click', () => {
    const onSearchChange = vi.fn();
    render(
      <SearchBar
        {...defaultProps}
        searchQuery="oracle"
        onSearchChange={onSearchChange}
      />
    );

    const clearBtn = screen.getByRole('button', { name: /clear search input/i });
    expect(clearBtn).toBeInTheDocument();

    fireEvent.click(clearBtn);
    expect(onSearchChange).toHaveBeenCalledWith('');
  });

  it('toggles role shortcut filter when clicking My Role Shortcuts button', () => {
    const onToggleFilterByRole = vi.fn();
    render(
      <SearchBar
        {...defaultProps}
        onToggleFilterByRole={onToggleFilterByRole}
      />
    );

    const roleShortcutBtn = screen.getByRole('button', { name: /my role shortcuts/i });
    fireEvent.click(roleShortcutBtn);

    expect(onToggleFilterByRole).toHaveBeenCalledTimes(1);
  });
});
