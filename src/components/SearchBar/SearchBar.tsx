import React from 'react';
import type { AppCategory } from '../../types/portal';
import { Icon } from '../common/Icon';
import './SearchBar.css';

interface SearchBarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedCategory: AppCategory | 'all';
  onCategoryChange: (category: AppCategory | 'all') => void;
  filterByRoleOnly: boolean;
  onToggleFilterByRole: () => void;
  roleLabel: string;
  totalResults: number;
}

const CATEGORIES: { id: AppCategory | 'all'; label: string }[] = [
  { id: 'all', label: 'All Tools' },
  { id: 'booking', label: 'Booking & GDS' },
  { id: 'operations', label: 'Operations & Desk' },
  { id: 'corporate', label: 'Corporate & HR' },
  { id: 'learning', label: 'Academy & LMS' },
  { id: 'support', label: 'IT & Support' },
];

export const SearchBar: React.FC<SearchBarProps> = ({
  searchQuery,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
  filterByRoleOnly,
  onToggleFilterByRole,
  roleLabel,
  totalResults,
}) => {
  return (
    <div className="search-filter-section" role="search" aria-label="Search applications and updates">
      <div className="search-input-wrapper">
        <span className="search-icon" aria-hidden="true">
          <Icon name="search" size={17} strokeWidth={2} />
        </span>
        <input
          type="search"
          className="search-input"
          placeholder="Search tools, platforms, guides, or operational updates..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          aria-label="Search across applications and announcements"
        />
        {searchQuery && (
          <button
            type="button"
            className="search-clear-btn"
            onClick={() => onSearchChange('')}
            aria-label="Clear search input"
          >
            <Icon name="close" size={13} strokeWidth={2.5} />
          </button>
        )}
      </div>

      <div className="category-filter-bar" role="group" aria-label="Filter applications by category">
        {CATEGORIES.map((cat) => {
          const isActive = selectedCategory === cat.id && !filterByRoleOnly;
          return (
            <button
              key={cat.id}
              type="button"
              className={`category-pill ${isActive ? 'category-pill-active' : ''}`}
              aria-pressed={isActive}
              onClick={() => {
                if (filterByRoleOnly) onToggleFilterByRole();
                onCategoryChange(cat.id);
              }}
            >
              {cat.label}
            </button>
          );
        })}

        {/* Seamless Role Shortcuts Filter Button */}
        <button
          type="button"
          className={`category-pill role-filter-pill ${filterByRoleOnly ? 'category-pill-active' : ''}`}
          aria-pressed={filterByRoleOnly}
          onClick={onToggleFilterByRole}
          title={`Filter tools specifically prioritized for ${roleLabel}`}
        >
          <Icon name="star" size={13} strokeWidth={2.5} />
          <span>My Role Shortcuts</span>
        </button>

        <div className="search-counter" aria-live="polite">
          <span className="counter-bullet" aria-hidden="true">•</span>
          <span>{totalResults} {totalResults === 1 ? 'tool' : 'tools'} available</span>
        </div>
      </div>
    </div>
  );
};
