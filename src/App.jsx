import { useState } from 'react'
import './App.css'

function App() {
  const [search, setSearch] = useState('')
  const [activePage, setActivePage] = useState('Dashboard')

  const incidents = [
    { id: 1, service: 'Payment Service', severity: 'Critical', status: 'Open', time: '10:42 AM' },
    { id: 2, service: 'User Service', severity: 'High', status: 'Investigating', time: '10:35 AM' },
    { id: 3, service: 'Order Service', severity: 'Medium', status: 'Resolved', time: '10:20 AM' },
  ]

  const filteredIncidents = incidents.filter((incident) =>
    incident.service.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="dashboard">
      <aside className="sidebar">
        <h2>SentinelOps</h2>
        <p className="menu-title">MAIN MENU</p>

        {['Dashboard', 'Services', 'Incidents', 'Recovery History'].map((page) => (
          <button
            key={page}
            className={`menu-item ${activePage === page ? 'active' : ''}`}
            onClick={() => setActivePage(page)}
          >
            {page}
          </button>
        ))}

        <div className="sidebar-bottom">
          System Monitoring
          <span>● Online</span>
        </div>
      </aside>

      <main className="main-content">

        {/* Dashboard */}
        {activePage === 'Dashboard' && (
          <>
            <header className="topbar">
              <div>
                <h1>Dashboard Overview</h1>
                <p>Monitor your services and incidents</p>
              </div>

              <div className="user-profile">
                <div className="avatar">H</div>
                <span>Admin</span>
              </div>
            </header>

            <section className="welcome">
              <h2>Welcome to SentinelOps 👋</h2>
              <p>
                Monitor service health, investigate incidents,
                and track recovery outcomes.
              </p>
            </section>

            <section className="stats">
              <div className="stat-card">
                <p>Total Services</p>
                <h2>12</h2>
                <span className="stat-note">Monitored services</span>
              </div>

              <div className="stat-card">
                <p>Healthy Services</p>
                <h2 className="green">9</h2>
                <span className="stat-note">Currently operational</span>
              </div>

              <div className="stat-card">
                <p>Active Incidents</p>
                <h2 className="red">3</h2>
                <span className="stat-note">Needs attention</span>
              </div>

              <div className="stat-card">
                <p>Resolved Today</p>
                <h2 className="blue">8</h2>
                <span className="stat-note">Recovery completed</span>
              </div>
            </section>

            <section className="incident-section">
              <div className="section-header">
                <div>
                  <h2>Recent Incidents</h2>
                  <p>Latest service alerts and recovery status</p>
                </div>

                <div className="incident-actions">
                  <input
                    type="text"
                    placeholder="Search service..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="search-input"
                  />

                  <button
                    className="view-button"
                    onClick={() => setActivePage('Incidents')}
                  >
                    View All
                  </button>
                </div>
              </div>

              <div className="table-container">
                <table>
                  <thead>
                    <tr>
                      <th>Incident ID</th>
                      <th>Service</th>
                      <th>Severity</th>
                      <th>Status</th>
                      <th>Time</th>
                    </tr>
                  </thead>

                  <tbody>
                    {filteredIncidents.length > 0 ? (
                      filteredIncidents.map((incident) => (
                        <tr key={incident.id}>
                          <td>INC-00{incident.id}</td>
                          <td>{incident.service}</td>
                          <td>
                            <span className={`badge ${incident.severity.toLowerCase()}`}>
                              {incident.severity}
                            </span>
                          </td>
                          <td>{incident.status}</td>
                          <td>{incident.time}</td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="5">No incidents found</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </section>

            <section className="ai-section">
              <h2>AI Incident Insights</h2>

              <div className="ai-card">
                <h3>Payment Service</h3>
                <p>
                  High response time detected. The service may be
                  experiencing database connection delays.
                </p>

                <span className="ai-label">AI Recommendation</span>

                <p>
                  Check database connectivity and review recent
                  application logs before attempting recovery.
                </p>
              </div>
            </section>
          </>
        )}

        {/* Services */}
        {activePage === 'Services' && (
          <section className="container-fluid my-4">
            <h2>Services</h2>
            <p>Monitor your application services.</p>

            <div className="row g-3">
              {['Payment Service', 'User Service', 'Order Service'].map((service) => (
                <div className="col-md-4" key={service}>
                  <div className="card p-3">
                    <h5>{service}</h5>
                    <span className="badge bg-success">Healthy</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Incidents */}
        {activePage === 'Incidents' && (
          <section className="container-fluid my-4">
            <h2>Incidents</h2>
            <p>Monitor and investigate service incidents.</p>

            {incidents.map((incident) => (
              <div className="card p-3 mb-3" key={incident.id}>
                <h5>{incident.service}</h5>
                <p>Incident ID: INC-00{incident.id}</p>
                <p>Severity: {incident.severity}</p>
                <p>Status: {incident.status}</p>
                <p>Time: {incident.time}</p>
              </div>
            ))}
          </section>
        )}

        {/* Recovery History */}
        {activePage === 'Recovery History' && (
          <section className="container-fluid my-4">
            <h2>Recovery History</h2>
            <p>View previous incident recovery outcomes.</p>

            <div className="card p-3">
              <h5>Order Service</h5>
              <p>Incident: INC-003</p>
              <p>Status: Resolved</p>
              <p>Recovery Outcome: Successful</p>
            </div>
          </section>
        )}

      </main>
    </div>
  )
}

export default App