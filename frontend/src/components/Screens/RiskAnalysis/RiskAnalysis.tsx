import { useState } from 'react';
import { BarChart, Bar, LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { AlertTriangle, TrendingDown, Activity } from 'lucide-react';
import './RiskAnalysis.css';

const volatilityData = [
  { date: 'Jan', historical: 12.5, implied: 14.2 },
  { date: 'Feb', historical: 13.8, implied: 15.1 },
  { date: 'Mar', historical: 15.2, implied: 16.8 },
  { date: 'Apr', historical: 14.1, implied: 15.5 },
  { date: 'May', historical: 16.8, implied: 17.9 },
  { date: 'Jun', historical: 18.2, implied: 19.4 },
];

const varDistribution = [
  { value: -15, frequency: 2 },
  { value: -12, frequency: 5 },
  { value: -9, frequency: 12 },
  { value: -6, frequency: 24 },
  { value: -3, frequency: 35 },
  { value: 0, frequency: 44 },
  { value: 3, frequency: 35 },
  { value: 6, frequency: 24 },
  { value: 9, frequency: 12 },
  { value: 12, frequency: 5 },
  { value: 15, frequency: 2 },
];

const monteCarloData = Array.from({ length: 50 }, (_, i) => ({
  scenario: i + 1,
  value: 100 + (Math.random() - 0.5) * 60,
}));

type TabType = 'volatility' | 'var' | 'montecarlo';

export function RiskAnalysis() {
  const [activeTab, setActiveTab] = useState<TabType>('volatility');

  // Tooltip style configuration
  const tooltipStyle = {
    backgroundColor: 'white',
    border: '1px solid #d7dee8',
    borderRadius: '8px',
  };

  return (
    <div className="risk-analysis">
      <div className="analysis-container">
        {/* Page Header */}
        <div className="analysis-header">
          <h2 className="analysis-title">Risk Analysis Tools</h2>
          <p className="analysis-subtitle">Advanced risk metrics and portfolio analytics</p>
        </div>

        {/* Risk Summary Cards */}
        <div className="risk-summary-grid">
          <div className="risk-card">
            <div className="risk-card-header">
              <p className="risk-card-label">30-Day Volatility</p>
              <Activity className="risk-card-icon risk-card-icon-volatility" />
            </div>
            <h3 className="risk-card-value">18.2%</h3>
            <p className="risk-card-trend risk-card-trend-negative">+2.1% vs avg</p>
          </div>

          <div className="risk-card">
            <div className="risk-card-header">
              <p className="risk-card-label">Value at Risk (95%)</p>
              <TrendingDown className="risk-card-icon risk-card-icon-var" />
            </div>
            <h3 className="risk-card-value">-2.5%</h3>
            <p className="risk-card-period">1-day horizon</p>
          </div>

          <div className="risk-card">
            <div className="risk-card-header">
              <p className="risk-card-label">Beta Coefficient</p>
              <AlertTriangle className="risk-card-icon risk-card-icon-beta" />
            </div>
            <h3 className="risk-card-value">1.15</h3>
            <p className="risk-card-trend risk-card-trend-positive">vs market index</p>
          </div>

          <div className="risk-card">
            <div className="risk-card-header">
              <p className="risk-card-label">Sharpe Ratio</p>
              <Activity className="risk-card-icon risk-card-icon-sharpe" />
            </div>
            <h3 className="risk-card-value">1.82</h3>
            <p className="risk-card-trend risk-card-trend-positive">Above benchmark</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="risk-tabs">
          <button
            onClick={() => setActiveTab('volatility')}
            className={`risk-tab ${activeTab === 'volatility' ? 'risk-tab-active' : 'risk-tab-inactive'}`}
          >
            Volatility Analysis
          </button>
          <button
            onClick={() => setActiveTab('var')}
            className={`risk-tab ${activeTab === 'var' ? 'risk-tab-active' : 'risk-tab-inactive'}`}
          >
            Value at Risk (VaR)
          </button>
          <button
            onClick={() => setActiveTab('montecarlo')}
            className={`risk-tab ${activeTab === 'montecarlo' ? 'risk-tab-active' : 'risk-tab-inactive'}`}
          >
            Monte Carlo Simulation
          </button>
        </div>

        {/* Volatility Tab */}
        {activeTab === 'volatility' && (
          <div className="tab-content">
            <div className="chart-card">
              <h4 className="chart-title">Historical vs Implied Volatility</h4>
              <div className="chart-container">
                <ResponsiveContainer width="100%" height={380}>
                  <LineChart data={volatilityData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#d7dee8" />
                    <XAxis dataKey="date" stroke="#59616a" />
                    <YAxis stroke="#59616a" label={{ value: 'Volatility %', angle: -90, position: 'insideLeft' }} />
                    <Tooltip contentStyle={tooltipStyle} />
                    <Line 
                      type="monotone" 
                      dataKey="historical" 
                      stroke="#2a65f9" 
                      strokeWidth={3}
                      name="Historical Volatility"
                      dot={{ fill: '#2a65f9', r: 5 }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="implied" 
                      stroke="#ff7a45" 
                      strokeWidth={3}
                      name="Implied Volatility"
                      dot={{ fill: '#ff7a45', r: 5 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="metrics-grid">
              <div className="metrics-card">
                <h4 className="metrics-title">Volatility Metrics</h4>
                <div className="metrics-list">
                  <div className="metric-item">
                    <div className="metric-header">
                      <span className="metric-label">10-Day Volatility</span>
                      <span className="metric-value">15.3%</span>
                    </div>
                    <div className="progress-bar">
                      <div className="progress-fill progress-fill-10day"></div>
                    </div>
                  </div>

                  <div className="metric-item">
                    <div className="metric-header">
                      <span className="metric-label">30-Day Volatility</span>
                      <span className="metric-value">18.2%</span>
                    </div>
                    <div className="progress-bar">
                      <div className="progress-fill progress-fill-30day"></div>
                    </div>
                  </div>

                  <div className="metric-item">
                    <div className="metric-header">
                      <span className="metric-label">90-Day Volatility</span>
                      <span className="metric-value">16.5%</span>
                    </div>
                    <div className="progress-bar">
                      <div className="progress-fill progress-fill-90day"></div>
                    </div>
                  </div>

                  <div className="metric-item">
                    <div className="metric-header">
                      <span className="metric-label">Annual Volatility</span>
                      <span className="metric-value">24.8%</span>
                    </div>
                    <div className="progress-bar">
                      <div className="progress-fill progress-fill-annual"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="settings-card">
                <h4 className="settings-title">Calculation Settings</h4>
                <div className="settings-list">
                  <div className="setting-group">
                    <label className="setting-label">Time Window</label>
                    <select className="setting-select">
                      <option>30 Days</option>
                      <option>60 Days</option>
                      <option>90 Days</option>
                      <option>1 Year</option>
                    </select>
                  </div>

                  <div className="setting-group">
                    <label className="setting-label">Method</label>
                    <select className="setting-select">
                      <option>Standard Deviation</option>
                      <option>GARCH</option>
                      <option>EWMA</option>
                    </select>
                  </div>

                  <div className="setting-group">
                    <label className="setting-label">Annualization Factor</label>
                    <input
                      type="number"
                      defaultValue={252}
                      className="setting-input"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* VaR Tab */}
        {activeTab === 'var' && (
          <div className="tab-content">
            <div className="var-cards-grid">
              <div className="var-card var-card-primary">
                <p className="var-card-label">Parametric VaR (95%)</p>
                <h2 className="var-card-value">-$2.5M</h2>
                <p className="var-card-description">-2.5% of portfolio</p>
              </div>

              <div className="var-card">
                <p className="var-card-label">Historical VaR (95%)</p>
                <h3 className="var-card-value">-$2.7M</h3>
                <p className="var-card-description">-2.7% of portfolio</p>
              </div>

              <div className="var-card">
                <p className="var-card-label">Monte Carlo VaR (95%)</p>
                <h3 className="var-card-value">-$2.6M</h3>
                <p className="var-card-description">-2.6% of portfolio</p>
              </div>
            </div>

            <div className="chart-card">
              <h4 className="chart-title">Portfolio Return Distribution</h4>
              <div className="chart-container">
                <ResponsiveContainer width="100%" height={350}>
                  <BarChart data={varDistribution}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#d7dee8" />
                    <XAxis dataKey="value" stroke="#59616a" label={{ value: 'Return %', position: 'insideBottom', offset: -5 }} />
                    <YAxis stroke="#59616a" label={{ value: 'Frequency', angle: -90, position: 'insideLeft' }} />
                    <Tooltip contentStyle={tooltipStyle} />
                    <Bar dataKey="frequency" radius={[8, 8, 0, 0]}>
                      {varDistribution.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={entry.value < -6 ? '#da3a3a' : entry.value > 6 ? '#27c46b' : '#3b7bf7'}
                        />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <p className="chart-note">
                Red bars indicate losses beyond VaR threshold (-2.5%)
              </p>
            </div>

            <div className="var-settings-grid">
              <div className="settings-card">
                <h4 className="settings-title">VaR Configuration</h4>
                <div className="settings-list">
                  <div className="setting-group">
                    <label className="setting-label">Confidence Level</label>
                    <select className="setting-select">
                      <option>95%</option>
                      <option>99%</option>
                      <option>99.9%</option>
                    </select>
                  </div>

                  <div className="setting-group">
                    <label className="setting-label">Time Horizon</label>
                    <select className="setting-select">
                      <option>1 Day</option>
                      <option>1 Week</option>
                      <option>1 Month</option>
                    </select>
                  </div>

                  <div className="setting-group">
                    <label className="setting-label">Portfolio Value ($M)</label>
                    <input
                      type="number"
                      defaultValue={100}
                      className="setting-input"
                    />
                  </div>
                </div>
              </div>

              <div className="results-card">
                <h4 className="results-title">Backtesting Results</h4>
                <div className="results-list">
                  <div className="result-item">
                    <span className="result-label">Test Period</span>
                    <span className="result-value">252 days</span>
                  </div>
                  <div className="result-item">
                    <span className="result-label">VaR Breaches</span>
                    <span className="result-value">13</span>
                  </div>
                  <div className="result-item">
                    <span className="result-label">Expected Breaches</span>
                    <span className="result-value">12.6</span>
                  </div>
                  <div className="result-item">
                    <span className="result-label">Accuracy</span>
                    <span className="result-value result-value-good">94.8%</span>
                  </div>
                  <div className="result-item">
                    <span className="result-label">Model Quality</span>
                    <span className="result-value result-value-good">Acceptable</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Monte Carlo Tab */}
        {activeTab === 'montecarlo' && (
          <div className="tab-content">
            <div className="chart-card">
              <h4 className="chart-title">Monte Carlo Simulation - Portfolio Value Scenarios</h4>
              <div className="chart-container">
                <ResponsiveContainer width="100%" height={400}>
                  <LineChart data={monteCarloData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#d7dee8" />
                    <XAxis dataKey="scenario" stroke="#59616a" label={{ value: 'Simulation #', position: 'insideBottom', offset: -5 }} />
                    <YAxis stroke="#59616a" label={{ value: 'Portfolio Value ($M)', angle: -90, position: 'insideLeft' }} />
                    <Tooltip contentStyle={tooltipStyle} />
                    <Line 
                      type="monotone" 
                      dataKey="value" 
                      stroke="#7038ff" 
                      strokeWidth={2}
                      dot={false}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="montecarlo-grid">
              <div className="settings-card">
                <h4 className="settings-title">Simulation Parameters</h4>
                <div className="settings-list">
                  <div className="setting-group">
                    <label className="setting-label">Number of Simulations</label>
                    <input
                      type="number"
                      defaultValue={10000}
                      className="setting-input"
                    />
                  </div>

                  <div className="setting-group">
                    <label className="setting-label">Time Horizon (Days)</label>
                    <input
                      type="number"
                      defaultValue={252}
                      className="setting-input"
                    />
                  </div>

                  <div className="setting-group">
                    <label className="setting-label">Initial Value ($M)</label>
                    <input
                      type="number"
                      defaultValue={100}
                      className="setting-input"
                    />
                  </div>
                </div>
              </div>

              <div className="stats-card">
                <h4 className="stats-title">Distribution Statistics</h4>
                <div className="stats-list">
                  <div className="stat-item">
                    <span className="stat-label">Mean Value</span>
                    <span className="stat-value">$112.5M</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-label">Median Value</span>
                    <span className="stat-value">$110.2M</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-label">Std Deviation</span>
                    <span className="stat-value">$18.4M</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-label">5th Percentile</span>
                    <span className="stat-value stat-value-bad">$82.1M</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-label">95th Percentile</span>
                    <span className="stat-value stat-value-good">$142.8M</span>
                  </div>
                </div>
              </div>

              <div className="probability-card">
                <h4 className="probability-title">Probability Analysis</h4>
                <div className="probability-list">
                  <div className="probability-item">
                    <span className="probability-label">P(Value &gt; $120M)</span>
                    <span className="probability-value probability-value-good">32.4%</span>
                  </div>
                  <div className="probability-item">
                    <span className="probability-label">P(Value &gt; $100M)</span>
                    <span className="probability-value probability-value-good">68.2%</span>
                  </div>
                  <div className="probability-item">
                    <span className="probability-label">P(Value &lt; $100M)</span>
                    <span className="probability-value probability-value-bad">31.8%</span>
                  </div>
                  <div className="probability-item">
                    <span className="probability-label">P(Loss &gt; 20%)</span>
                    <span className="probability-value probability-value-bad">5.2%</span>
                  </div>
                  <div className="probability-item">
                    <span className="probability-label">Expected Return</span>
                    <span className="probability-value probability-value-good">+12.5%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}