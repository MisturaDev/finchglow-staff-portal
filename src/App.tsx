import { useState, useMemo } from 'react'
import { companies, apps, alerts } from './data'
import type { AppCategory } from './types/portal'
import { CompanySwitcher } from './components/CompanySwitcher/CompanySwitcher'
import { CriticalAlert } from './components/CriticalAlert/CriticalAlert'
import { SearchBar } from './components/SearchBar/SearchBar'
import { AppLauncher } from './components/AppLauncher/AppLauncher'
import { NewsFeed } from './components/NewsFeed/NewsFeed'
import './App.css'

function App() {
  const [selectedCompanyId, setSelectedCompanyId] = useState<string>('all')
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [selectedCategory, setSelectedCategory] = useState<AppCategory | 'all'>('all')
  const [isLoading] = useState<boolean>(false)


  const activeCompany =
    companies.find((c) => c.id === selectedCompanyId) || companies[0]

  const themeStyles = {
    '--accent': activeCompany.brandColor,
    '--accent-dark': activeCompany.brandColorDark,
    '--accent-soft': activeCompany.brandColorSoft,
  } as React.CSSProperties

  // Time-aware greeting
  const greeting = useMemo(() => {
    const hour = new Date().getHours()
    if (hour < 12) return 'Good morning'
    if (hour < 17) return 'Good afternoon'
    return 'Good evening'
  }, [])

  // Filter apps by company, category, and search query
  const filteredApps = useMemo(() => {
    return apps.filter((app) => {
      const companyMatch =
        selectedCompanyId === 'all'
          ? true
          : app.companyIds.includes(selectedCompanyId) || app.companyIds.includes('all')

      const categoryMatch =
        selectedCategory === 'all' ? true : app.category === selectedCategory

      const query = searchQuery.trim().toLowerCase()
      const searchMatch =
        !query ||
        app.name.toLowerCase().includes(query) ||
        app.description.toLowerCase().includes(query) ||
        app.category.toLowerCase().includes(query)

      return companyMatch && categoryMatch && searchMatch
    })
  }, [selectedCompanyId, selectedCategory, searchQuery])

  // Filter alerts by company (keeping group-wide visible) and search query
  const filteredAlerts = useMemo(() => {
    return alerts.filter((alert) => {
      const companyMatch =
        selectedCompanyId === 'all'
          ? true
          : alert.companyId === selectedCompanyId || alert.companyId === 'all'

      const query = searchQuery.trim().toLowerCase()
      const searchMatch =
        !query ||
        alert.title.toLowerCase().includes(query) ||
        alert.message.toLowerCase().includes(query)

      return companyMatch && searchMatch
    })
  }, [selectedCompanyId, searchQuery])

  const handleResetFilters = () => {
    setSearchQuery('')
    setSelectedCategory('all')
  }

  return (
    <>
      <a href="#portal-content" className="skip-link">
        Skip to main content
      </a>

      <main className="portal" style={themeStyles} id="portal-content">
        {/* High-visibility Critical Outage Banner */}
        <CriticalAlert alerts={alerts} />


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

      {/* Personal Welcome Hero */}
      <section className="welcome">
        <p className="eyebrow">
          {activeCompany.id === 'all'
            ? 'GROUP STAFF PORTAL'
            : `${activeCompany.shortName.toUpperCase()} WORKSPACE`}
        </p>
        <h2>{greeting}, Mistura</h2>
        <p>
          {activeCompany.id === 'all'
            ? 'Everything you need to work across Finchglow Holdings, in one place.'
            : `Showing dedicated applications, alerts, and operational updates for ${activeCompany.name}.`}
        </p>
      </section>

      {/* Accessible Company Switcher */}
      <CompanySwitcher
        companies={companies}
        selectedCompanyId={selectedCompanyId}
        onSelectCompany={setSelectedCompanyId}
      />


      {/* Cross-Cutting Search & Filter */}
      <SearchBar
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        totalResults={filteredApps.length}
      />

      {/* Loading Skeleton Simulation */}
      {isLoading ? (
        <section className="portal-section loading-skeleton" aria-busy="true">
          <div className="skeleton-bar" style={{ width: '40%', height: '24px' }} />
          <div className="skeleton-grid">
            <div className="skeleton-card" />
            <div className="skeleton-card" />
            <div className="skeleton-card" />
          </div>
        </section>
      ) : (
        <>
          {/* Applications Launcher Grid */}
          <section className="portal-section" aria-labelledby="apps-heading">
            <div className="section-heading">
              <div>
                <h2 id="apps-heading">Your applications</h2>
                <p>
                  Access your tools across{' '}
                  <strong>{activeCompany.name}</strong> and group utilities.
                </p>
              </div>
            </div>

            <AppLauncher
              apps={filteredApps}
              searchQuery={searchQuery}
              onClearSearch={handleResetFilters}
            />
          </section>

          {/* Severity-Tiered News & Alerts Feed */}
          <section className="portal-section" aria-labelledby="updates-heading">
            <div className="section-heading">
              <div>
                <h2 id="updates-heading">Alerts and updates</h2>
                <p>
                  Operational advisories and news from {activeCompany.shortName} and group headquarters.
                </p>
              </div>
            </div>

            <NewsFeed
              alerts={filteredAlerts}
              companies={companies}
              selectedCompanyId={selectedCompanyId}
            />
          </section>
        </>
      )}
    </main>
    </>
  )
}


export default App