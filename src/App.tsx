import { useState } from 'react'
import { companies } from './data'
import { CompanySwitcher } from './components/CompanySwitcher/CompanySwitcher'
import './App.css'

function App() {
  const [selectedCompanyId, setSelectedCompanyId] = useState<string>('all')

  const activeCompany =
    companies.find((c) => c.id === selectedCompanyId) || companies[0]

  const themeStyles = {
    '--accent': activeCompany.brandColor,
    '--accent-dark': activeCompany.brandColorDark,
    '--accent-soft': activeCompany.brandColorSoft,
  } as React.CSSProperties

  return (
    <main className="portal" style={themeStyles} id="portal-content">
      <header className="portal-header">
        <div className="brand">
          <span className="brand-mark" aria-hidden="true">
            {activeCompany.logoMark}
          </span>
          <div>
            <h1>{activeCompany.name}</h1>
            <p>{activeCompany.tagline}</p>
          </div>
        </div>

        <div className="employee">
          <span className="employee-avatar" aria-hidden="true">
            MI
          </span>
          <div>
            <p className="employee-name">Mistura Ishola</p>
            <p className="employee-role">Group Staff</p>
          </div>
        </div>
      </header>

      {/* Accessible Company Switcher */}
      <CompanySwitcher
        companies={companies}
        selectedCompanyId={selectedCompanyId}
        onSelectCompany={setSelectedCompanyId}
      />

      <section className="welcome">
        <p className="eyebrow">
          {activeCompany.id === 'all'
            ? 'GROUP STAFF PORTAL'
            : `${activeCompany.shortName.toUpperCase()} PORTAL`}
        </p>
        <h2>Good evening, Mistura 👋</h2>
        <p>
          {activeCompany.id === 'all'
            ? 'Everything you need to work across Finchglow Holdings, in one place.'
            : `Showing dedicated workspace, tools, and updates for ${activeCompany.name}.`}
        </p>
      </section>

      <section className="portal-section" aria-labelledby="apps-heading">
        <div className="section-heading">
          <div>
            <h2 id="apps-heading">Your applications</h2>
            <p>Access your workplace tools and services.</p>
          </div>
        </div>

        <div className="app-grid">
          <p>Your applications will appear here.</p>
        </div>
      </section>

      <section className="portal-section" aria-labelledby="updates-heading">
        <div className="section-heading">
          <div>
            <h2 id="updates-heading">Alerts and updates</h2>
            <p>Important information from across the group.</p>
          </div>
        </div>

        <div className="updates-placeholder">
          <p>Company alerts and group news will appear here.</p>
        </div>
      </section>
    </main>
  )
}

export default App