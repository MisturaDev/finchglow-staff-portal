import React, { useState, useRef, useEffect } from 'react';
import type { Employee, Role } from '../../types/portal';
import { Icon } from '../common/Icon';
import './RoleSwitcher.css';

interface RoleSwitcherProps {
  currentEmployee: Employee;
  employees: Employee[];
  roles: Role[];
  onSelectEmployee: (employee: Employee) => void;
}

export const RoleSwitcher: React.FC<RoleSwitcherProps> = ({
  currentEmployee,
  employees,
  roles,
  onSelectEmployee,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on click outside or Escape key
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const currentRole = roles.find((r) => r.id === currentEmployee.roleId);

  return (
    <div className="role-switcher-container" ref={dropdownRef}>
      <button
        type="button"
        className="role-switcher-trigger"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-label={`Switch employee persona. Current: ${currentEmployee.name}, ${currentRole?.label}`}
      >
        <span className="employee-avatar" aria-hidden="true">
          {currentEmployee.initials}
        </span>
        <div className="role-switcher-details">
          <p className="employee-name">{currentEmployee.name}</p>
          <p className="employee-role">{currentRole?.label || 'Staff'}</p>
        </div>
        <span className="role-switcher-chevron" aria-hidden="true">
          <Icon name="chevron-down" size={13} strokeWidth={2.5} />
        </span>
      </button>

      {isOpen && (
        <div
          className="role-switcher-dropdown"
          role="listbox"
          aria-label="Select test persona for role-based view"
        >
          <div className="role-dropdown-header">
            <span>SWITCH ROLE</span>
          </div>

          <div className="role-dropdown-list">
            {employees.map((emp) => {
              const empRole = roles.find((r) => r.id === emp.roleId);
              const isSelected = emp.id === currentEmployee.id;

              return (
                <button
                  key={emp.id}
                  role="option"
                  aria-selected={isSelected}
                  type="button"
                  className={`role-option ${isSelected ? 'role-option-active' : ''}`}
                  onClick={() => {
                    onSelectEmployee(emp);
                    setIsOpen(false);
                  }}
                >
                  <span className="role-option-avatar" aria-hidden="true">
                    {emp.initials}
                  </span>
                  <div className="role-option-info">
                    <p className="role-option-name">{emp.name}</p>
                    <p className="role-option-title">{empRole?.label}</p>
                    <p className="role-option-desc">{empRole?.description}</p>
                  </div>
                  {isSelected && (
                    <span className="role-option-check" aria-hidden="true">
                      <Icon name="check" size={14} strokeWidth={3} />
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
