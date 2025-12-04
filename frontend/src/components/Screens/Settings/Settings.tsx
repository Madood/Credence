import { useState } from 'react';
import { User, CreditCard, Key, Bell, Shield, Save } from 'lucide-react';
import './Settings.css';

type TabType = 'account' | 'billing' | 'api' | 'notifications';

export function Settings() {
  const [activeTab, setActiveTab] = useState<TabType>('account');

  return (
    <div className="settings-container">
      <div className="settings-header">
        <h2 className="settings-title">Settings</h2>
        <p className="settings-subtitle">Manage your account preferences and configurations</p>
      </div>

      <div className="settings-layout">
        {/* Sidebar Navigation */}
        <div className="settings-sidebar">
          <nav className="settings-nav">
            <button
              onClick={() => setActiveTab('account')}
              className={`nav-button ${activeTab === 'account' ? 'nav-button-active' : 'nav-button-inactive'}`}
            >
              <User className="nav-icon" />
              <span>Account</span>
            </button>

            <button
              onClick={() => setActiveTab('billing')}
              className={`nav-button ${activeTab === 'billing' ? 'nav-button-active' : 'nav-button-inactive'}`}
            >
              <CreditCard className="nav-icon" />
              <span>Billing</span>
            </button>

            <button
              onClick={() => setActiveTab('api')}
              className={`nav-button ${activeTab === 'api' ? 'nav-button-active' : 'nav-button-inactive'}`}
            >
              <Key className="nav-icon" />
              <span>API Keys</span>
            </button>

            <button
              onClick={() => setActiveTab('notifications')}
              className={`nav-button ${activeTab === 'notifications' ? 'nav-button-active' : 'nav-button-inactive'}`}
            >
              <Bell className="nav-icon" />
              <span>Notifications</span>
            </button>
          </nav>
        </div>

        {/* Content Area */}
        <div className="settings-content">
          {/* Account Tab */}
          {activeTab === 'account' && (
            <div className="tab-content">
              <div className="settings-card">
                <h4 className="section-title">Profile Information</h4>
                
                <div className="profile-section">
                  <div className="profile-header">
                    <div className="profile-avatar">
                      <span className="avatar-text">JD</span>
                    </div>
                    <div className="profile-actions">
                      <button className="secondary-button">
                        Change Photo
                      </button>
                      <button className="danger-button">
                        Remove
                      </button>
                    </div>
                  </div>

                  <div className="form-grid">
                    <div className="form-group">
                      <label className="form-label">First Name</label>
                      <input
                        type="text"
                        defaultValue="John"
                        className="form-input"
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Last Name</label>
                      <input
                        type="text"
                        defaultValue="Doe"
                        className="form-input"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Email Address</label>
                    <input
                      type="email"
                      defaultValue="john.doe@company.com"
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Company</label>
                    <input
                      type="text"
                      defaultValue="Acme Corp"
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Role</label>
                    <select className="form-select">
                      <option>Financial Analyst</option>
                      <option>Investment Manager</option>
                      <option>CFO</option>
                      <option>Risk Analyst</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="settings-card">
                <h4 className="section-title">Change Password</h4>
                
                <div className="password-section">
                  <div className="form-group">
                    <label className="form-label">Current Password</label>
                    <input
                      type="password"
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">New Password</label>
                    <input
                      type="password"
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Confirm New Password</label>
                    <input
                      type="password"
                      className="form-input"
                    />
                  </div>
                </div>
              </div>

              <div className="actions-row">
                <button className="secondary-button">
                  Cancel
                </button>
                <button className="primary-button">
                  <Save className="button-icon" />
                  Save Changes
                </button>
              </div>
            </div>
          )}

          {/* Billing Tab */}
          {activeTab === 'billing' && (
            <div className="tab-content">
              <div className="settings-card">
                <h4 className="section-title">Current Plan</h4>
                
                <div className="plan-card">
                  <div className="plan-info">
                    <h3 className="plan-name">Professional Plan</h3>
                    <p className="plan-period">Billed monthly</p>
                  </div>
                  <div className="plan-price">
                    <h2 className="price-amount">$149</h2>
                    <p className="price-period">per month</p>
                  </div>
                </div>

                <button className="secondary-button">
                  Change Plan
                </button>
              </div>

              <div className="settings-card">
                <h4 className="section-title">Payment Method</h4>
                
                <div className="payment-method">
                  <div className="payment-card">
                    <div className="card-icon">
                      <CreditCard className="card-icon-svg" />
                    </div>
                    <div className="card-details">
                      <p className="card-type">Visa ending in 4242</p>
                      <p className="card-expiry">Expires 12/2026</p>
                    </div>
                  </div>
                  <button className="secondary-button">
                    Update
                  </button>
                </div>

                <button className="secondary-button">
                  Add Payment Method
                </button>
              </div>

              <div className="settings-card">
                <h4 className="section-title">Billing History</h4>
                
                <div className="invoice-list">
                  {[
                    { date: 'Nov 1, 2025', amount: '$149.00', status: 'Paid' },
                    { date: 'Oct 1, 2025', amount: '$149.00', status: 'Paid' },
                    { date: 'Sep 1, 2025', amount: '$149.00', status: 'Paid' },
                  ].map((invoice, i) => (
                    <div key={i} className="invoice-item">
                      <span className="invoice-date">{invoice.date}</span>
                      <span className="invoice-amount">{invoice.amount}</span>
                      <span className="invoice-status">
                        {invoice.status}
                      </span>
                      <button className="invoice-download">Download</button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* API Keys Tab */}
          {activeTab === 'api' && (
            <div className="tab-content">
              <div className="settings-card">
                <div className="api-header">
                  <h4 className="section-title">API Keys</h4>
                  <button className="primary-button">
                    Generate New Key
                  </button>
                </div>

                <div className="api-keys">
                  <div className="api-key-card">
                    <div className="key-header">
                      <div>
                        <p className="key-name">Production Key</p>
                        <code className="key-value">sk_live_abc123...xyz789</code>
                      </div>
                      <div className="key-actions">
                        <button className="secondary-button">
                          Copy
                        </button>
                        <button className="danger-button">
                          Revoke
                        </button>
                      </div>
                    </div>
                    <p className="key-meta">Created on Nov 15, 2025 • Last used 2 hours ago</p>
                  </div>

                  <div className="api-key-card">
                    <div className="key-header">
                      <div>
                        <p className="key-name">Development Key</p>
                        <code className="key-value">sk_test_def456...uvw012</code>
                      </div>
                      <div className="key-actions">
                        <button className="secondary-button">
                          Copy
                        </button>
                        <button className="danger-button">
                          Revoke
                        </button>
                      </div>
                    </div>
                    <p className="key-meta">Created on Oct 1, 2025 • Last used 1 day ago</p>
                  </div>
                </div>
              </div>

              <div className="settings-card">
                <h4 className="section-title">API Usage</h4>
                <div className="api-stats">
                  <div className="stat-item">
                    <p className="stat-label">Requests This Month</p>
                    <h3 className="stat-value">12,847</h3>
                  </div>
                  <div className="stat-item">
                    <p className="stat-label">Rate Limit</p>
                    <h3 className="stat-value">1000/min</h3>
                  </div>
                  <div className="stat-item">
                    <p className="stat-label">Success Rate</p>
                    <h3 className="stat-value stat-success">99.8%</h3>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Notifications Tab */}
          {activeTab === 'notifications' && (
            <div className="tab-content">
              <div className="settings-card">
                <h4 className="section-title">Notification Preferences</h4>
                
                <div className="notifications-section">
                  <div className="notification-group">
                    <h4 className="notification-group-title">Email Notifications</h4>
                    <div className="notification-list">
                      {[
                        { label: 'Model completion alerts', checked: true },
                        { label: 'Report generation updates', checked: true },
                        { label: 'Weekly analytics summary', checked: false },
                        { label: 'Product updates and announcements', checked: true },
                      ].map((item, i) => (
                        <label key={i} className="notification-item">
                          <span className="notification-label">{item.label}</span>
                          <input
                            type="checkbox"
                            defaultChecked={item.checked}
                            className="notification-checkbox"
                          />
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="notification-group">
                    <h4 className="notification-group-title">In-App Notifications</h4>
                    <div className="notification-list">
                      {[
                        { label: 'Script execution results', checked: true },
                        { label: 'Risk threshold alerts', checked: true },
                        { label: 'Collaboration mentions', checked: true },
                      ].map((item, i) => (
                        <label key={i} className="notification-item">
                          <span className="notification-label">{item.label}</span>
                          <input
                            type="checkbox"
                            defaultChecked={item.checked}
                            className="notification-checkbox"
                          />
                        </label>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="actions-row">
                  <button className="secondary-button">
                    Cancel
                  </button>
                  <button className="primary-button">
                    <Save className="button-icon" />
                    Save Preferences
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}