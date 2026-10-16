import React from 'react';
import type { Company } from '../../types/portal';
import './CompanySwitcher.css';

interface CompanySwitcherProps {
  companies: Company[];
  selectedCompanyId: string;
  onSelectCompany: (companyId: string) => void;
}

export const CompanySwitcher: React.FC<CompanySwitcherProps> = ({
  companies,
  selectedCompanyId,
  onSelectCompany,
}) => {
  return (
    <nav
      className="company-switcher"
      aria-label="Select business subsidiary"
    >
      <div className="company-switcher-label">
        <span className="switcher-icon" aria-hidden="true">🏢</span>
        <span>Business:</span>
      </div>

      <div
        className="company-switcher-list"
        role="tablist"
        aria-orientation="horizontal"
      >
        {companies.map((company) => {
          const isSelected = company.id === selectedCompanyId;

          return (
            <button
              key={company.id}
              role="tab"
              type="button"
              id={`tab-${company.id}`}
              aria-selected={isSelected}
              aria-controls="portal-content"
              tabIndex={isSelected ? 0 : -1}
              className={`company-tab ${isSelected ? 'company-tab-active' : ''}`}
              onClick={() => onSelectCompany(company.id)}
              style={
                isSelected
                  ? ({
                      '--tab-accent': company.brandColor,
                      '--tab-accent-dark': company.brandColorDark,
                      '--tab-accent-soft': company.brandColorSoft,
                    } as React.CSSProperties)
                  : undefined
              }
            >
              <span
                className="company-tab-mark"
                style={{
                  backgroundColor: isSelected ? company.brandColorDark : company.brandColor,
                }}
                aria-hidden="true"
              >
                {company.logoMark}
              </span>
              <span className="company-tab-name">{company.shortName}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
