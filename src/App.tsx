import './App.css'

function App() {
  return (
    <main className="portal">
      <header className="portal-header">
        <div className="brand">
          <span className="brand-mark">F</span>
          <div>
            <h1>Finchglow</h1>
            <p>Group Staff Portal</p>
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

      <section className="welcome">
        <p className="eyebrow">GROUP STAFF PORTAL</p>
        <h2>Good evening, Mistura 👋</h2>
        <p>Everything you need to work across Finchglow, in one place.</p>
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