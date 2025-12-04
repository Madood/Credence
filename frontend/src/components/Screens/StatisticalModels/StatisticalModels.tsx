import { useState } from 'react';
import { ScatterChart, Scatter, LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, Cell } from 'recharts';
import { Play, Download, TrendingUp, BarChart3, GitBranch } from 'lucide-react';
import './StatisticalModels.css';

const regressionData = [
  { x: 10, y: 25.2, predicted: 24.8 },
  { x: 15, y: 31.8, predicted: 31.2 },
  { x: 20, y: 38.5, predicted: 37.6 },
  { x: 25, y: 44.2, predicted: 44.0 },
  { x: 30, y: 51.8, predicted: 50.4 },
  { x: 35, y: 58.1, predicted: 56.8 },
  { x: 40, y: 64.5, predicted: 63.2 },
  { x: 45, y: 70.2, predicted: 69.6 },
  { x: 50, y: 76.8, predicted: 76.0 },
];

const correlationMatrix = [
  { var: 'Revenue', revenue: 1.00, ebitda: 0.87, expenses: 0.64, profit: 0.92 },
  { var: 'EBITDA', revenue: 0.87, ebitda: 1.00, expenses: 0.58, profit: 0.85 },
  { var: 'Expenses', revenue: 0.64, ebitda: 0.58, expenses: 1.00, profit: 0.52 },
  { var: 'Profit', revenue: 0.92, ebitda: 0.85, expenses: 0.52, profit: 1.00 },
];

const timeSeriesData = [
  { period: 'Q1 21', actual: 125, forecast: null },
  { period: 'Q2 21', actual: 138, forecast: null },
  { period: 'Q3 21', actual: 145, forecast: null },
  { period: 'Q4 21', actual: 152, forecast: null },
  { period: 'Q1 22', actual: 168, forecast: null },
  { period: 'Q2 22', actual: 182, forecast: null },
  { period: 'Q3 22', actual: null, forecast: 195 },
  { period: 'Q4 22', actual: null, forecast: 208 },
  { period: 'Q1 23', actual: null, forecast: 222 },
  { period: 'Q2 23', actual: null, forecast: 235 },
];

const residualData = [
  { index: 1, residual: 0.4 },
  { index: 2, residual: 0.6 },
  { index: 3, residual: 0.9 },
  { index: 4, residual: 0.2 },
  { index: 5, residual: 1.4 },
  { index: 6, residual: 1.3 },
  { index: 7, residual: 1.3 },
  { index: 8, residual: 0.6 },
  { index: 9, residual: 0.8 },
];

type TabType = 'regression' | 'correlation' | 'timeseries';

export function StatisticalModels() {
  const [activeTab, setActiveTab] = useState<TabType>('regression');

  const getCellColor = (value: number) => {
    if (value >= 0.8) return 'correlation-strong';
    if (value >= 0.5) return 'correlation-moderate';
    if (value >= 0.3) return 'correlation-weak';
    return 'correlation-very-weak';
  };

  // Custom tooltip styles
  const tooltipStyle = {
    backgroundColor: 'white',
    border: '1px solid #d7dee8',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    padding: '12px',
  };

  return (
    <div className="statistical-models">
      {/* Header */}
      <div className="models-header">
        <div className="header-content">
          <h2 className="models-title">Statistical Models & Analysis</h2>
          <p className="models-subtitle">Advanced statistical tools for financial data analysis</p>
        </div>
        <button className="export-button">
          <Download className="button-icon" />
          Export Analysis
        </button>
      </div>

      {/* Tabs */}
      <div className="models-tabs">
        <button
          onClick={() => setActiveTab('regression')}
          className={`tab-button ${activeTab === 'regression' ? 'tab-button-active' : 'tab-button-inactive'}`}
        >
          <TrendingUp className="tab-icon" />
          Regression Analysis
        </button>
        <button
          onClick={() => setActiveTab('correlation')}
          className={`tab-button ${activeTab === 'correlation' ? 'tab-button-active' : 'tab-button-inactive'}`}
        >
          <GitBranch className="tab-icon" />
          Correlation Matrix
        </button>
        <button
          onClick={() => setActiveTab('timeseries')}
          className={`tab-button ${activeTab === 'timeseries' ? 'tab-button-active' : 'tab-button-inactive'}`}
        >
          <BarChart3 className="tab-icon" />
          Time-Series Forecasting
        </button>
      </div>

      {/* Regression Analysis Tab */}
      {activeTab === 'regression' && (
        <div className="tab-content">
          {/* Controls */}
          <div className="models-controls">
            <div className="controls-grid">
              <div className="control-group">
                <label className="control-label">Dependent Variable (Y)</label>
                <select className="control-select">
                  <option>Revenue Growth</option>
                  <option>Operating Margin</option>
                  <option>Stock Price</option>
                </select>
              </div>
              <div className="control-group">
                <label className="control-label">Independent Variable (X)</label>
                <select className="control-select">
                  <option>Marketing Spend</option>
                  <option>R&D Investment</option>
                  <option>Market Cap</option>
                </select>
              </div>
              <div className="control-group">
                <label className="control-label">Model Type</label>
                <select className="control-select">
                  <option>Linear Regression</option>
                  <option>Polynomial Regression</option>
                  <option>Ridge Regression</option>
                </select>
              </div>
              <div className="control-action">
                <button className="run-button">
                  <Play className="action-icon" />
                  Run Analysis
                </button>
              </div>
            </div>
          </div>

          {/* Main Chart and Stats */}
          <div className="main-content-grid">
            {/* Regression Chart */}
            <div className="chart-container">
              <div className="chart-header">
                <h4 className="chart-title">Regression Plot</h4>
                <div className="chart-legend">
                  <div className="legend-item">
                    <div className="legend-dot legend-dot-actual"></div>
                    <span className="legend-label">Actual</span>
                  </div>
                  <div className="legend-item">
                    <div className="legend-dot legend-dot-predicted"></div>
                    <span className="legend-label">Predicted</span>
                  </div>
                </div>
              </div>
              <div className="chart-wrapper">
                <ResponsiveContainer width="100%" height={380}>
                  <ScatterChart margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e8ecf2" />
                    <XAxis 
                      type="number" 
                      dataKey="x" 
                      name="Marketing Spend ($M)"
                      stroke="#59616a"
                      tick={{ fill: '#59616a', fontSize: 12 }}
                      tickLine={false}
                      axisLine={{ stroke: '#d7dee8' }}
                      label={{ value: 'Marketing Spend ($M)', position: 'insideBottom', offset: -5, fill: '#59616a' }}
                    />
                    <YAxis 
                      type="number" 
                      dataKey="y" 
                      name="Revenue ($M)"
                      stroke="#59616a"
                      tick={{ fill: '#59616a', fontSize: 12 }}
                      tickLine={false}
                      axisLine={{ stroke: '#d7dee8' }}
                      label={{ value: 'Revenue ($M)', angle: -90, position: 'insideLeft', fill: '#59616a' }}
                    />
                    <Tooltip 
                      cursor={{ strokeDasharray: '3 3' }}
                      contentStyle={tooltipStyle}
                    />
                    <Scatter name="Actual Values" data={regressionData} fill="#1a73e8" />
                    <Line 
                      type="monotone" 
                      dataKey="predicted" 
                      data={regressionData}
                      stroke="#27c46b" 
                      strokeWidth={3}
                      dot={false}
                    />
                  </ScatterChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Statistics Panel */}
            <div className="stats-panel">
              <h4 className="panel-title">Model Statistics</h4>
              <div className="stats-grid">
                <div className="stat-card">
                  <p className="stat-label">R-Squared (R²)</p>
                  <p className="stat-value">0.926</p>
                  <p className="stat-badge stat-badge-excellent">Excellent fit</p>
                </div>
                <div className="stat-card">
                  <p className="stat-label">Adjusted R²</p>
                  <p className="stat-value">0.915</p>
                </div>
                <div className="stat-card">
                  <p className="stat-label">F-Statistic</p>
                  <p className="stat-value">87.42</p>
                </div>
                <div className="stat-card">
                  <p className="stat-label">P-Value</p>
                  <p className="stat-value stat-value-significant">&lt; 0.001</p>
                  <p className="stat-badge stat-badge-significant">Highly significant</p>
                </div>
                <div className="stat-card">
                  <p className="stat-label">RMSE</p>
                  <p className="stat-value">1.82</p>
                </div>
              </div>
            </div>
          </div>

          {/* Coefficients Table and Residuals */}
          <div className="bottom-content-grid">
            {/* Coefficients */}
            <div className="table-container">
              <h4 className="table-title">Regression Coefficients</h4>
              <div className="table-wrapper">
                <table className="coefficients-table">
                  <thead>
                    <tr className="table-header">
                      <th className="table-header-cell">Variable</th>
                      <th className="table-header-cell">Coefficient</th>
                      <th className="table-header-cell">Std Error</th>
                      <th className="table-header-cell">t-value</th>
                      <th className="table-header-cell">P-value</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="table-row">
                      <td className="table-cell table-cell-variable">Intercept</td>
                      <td className="table-cell">5.234</td>
                      <td className="table-cell">1.456</td>
                      <td className="table-cell">3.594</td>
                      <td className="table-cell table-cell-significant">0.002</td>
                    </tr>
                    <tr className="table-row">
                      <td className="table-cell table-cell-variable">Marketing Spend</td>
                      <td className="table-cell">1.628</td>
                      <td className="table-cell">0.176</td>
                      <td className="table-cell">9.250</td>
                      <td className="table-cell table-cell-significant">&lt; 0.001</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Residual Plot */}
            <div className="residual-container">
              <h4 className="chart-title">Residual Analysis</h4>
              <div className="chart-wrapper">
                <ResponsiveContainer width="100%" height={260}>
                  <BarChart data={residualData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e8ecf2" vertical={false} />
                    <XAxis 
                      dataKey="index" 
                      stroke="#59616a"
                      tick={{ fill: '#59616a', fontSize: 12 }}
                      tickLine={false}
                      axisLine={{ stroke: '#d7dee8' }}
                      label={{ value: 'Observation', position: 'insideBottom', offset: -5, fill: '#59616a' }}
                    />
                    <YAxis 
                      stroke="#59616a"
                      tick={{ fill: '#59616a', fontSize: 12 }}
                      tickLine={false}
                      axisLine={{ stroke: '#d7dee8' }}
                      label={{ value: 'Residual', angle: -90, position: 'insideLeft', fill: '#59616a' }}
                    />
                    <Tooltip contentStyle={tooltipStyle} />
                    <Bar dataKey="residual" fill="#1a73e8" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Correlation Matrix Tab */}
      {activeTab === 'correlation' && (
        <div className="tab-content">
          <div className="correlation-container">
            <div className="correlation-header">
              <h4 className="correlation-title">Correlation Matrix</h4>
              <div className="correlation-controls">
                <span className="method-label">Method:</span>
                <select className="method-select">
                  <option>Pearson</option>
                  <option>Spearman</option>
                  <option>Kendall</option>
                </select>
              </div>
            </div>

            <div className="matrix-wrapper">
              <table className="correlation-table">
                <thead>
                  <tr>
                    <th className="matrix-header"></th>
                    <th className="matrix-header">Revenue</th>
                    <th className="matrix-header">EBITDA</th>
                    <th className="matrix-header">Expenses</th>
                    <th className="matrix-header">Profit</th>
                  </tr>
                </thead>
                <tbody>
                  {correlationMatrix.map((row, i) => (
                    <tr key={i} className="matrix-row">
                      <td className="matrix-variable">{row.var}</td>
                      <td className={`matrix-cell ${getCellColor(row.revenue)}`}>
                        {row.revenue.toFixed(2)}
                      </td>
                      <td className={`matrix-cell ${getCellColor(row.ebitda)}`}>
                        {row.ebitda.toFixed(2)}
                      </td>
                      <td className={`matrix-cell ${getCellColor(row.expenses)}`}>
                        {row.expenses.toFixed(2)}
                      </td>
                      <td className={`matrix-cell ${getCellColor(row.profit)}`}>
                        {row.profit.toFixed(2)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Legend */}
            <div className="correlation-legend">
              <div className="legend-item">
                <div className="legend-color legend-strong"></div>
                <span className="legend-text">Strong (&gt; 0.8)</span>
              </div>
              <div className="legend-item">
                <div className="legend-color legend-moderate"></div>
                <span className="legend-text">Moderate (0.5-0.8)</span>
              </div>
              <div className="legend-item">
                <div className="legend-color legend-weak"></div>
                <span className="legend-text">Weak (0.3-0.5)</span>
              </div>
              <div className="legend-item">
                <div className="legend-color legend-very-weak"></div>
                <span className="legend-text">Very Weak (&lt; 0.3)</span>
              </div>
            </div>
          </div>

          {/* Insights */}
          <div className="insights-grid">
            <div className="insight-card insight-card-strong">
              <h4 className="insight-title">Strongest Correlations</h4>
              <ul className="insight-list">
                <li className="insight-item">• Revenue ↔ Profit: <span className="insight-value">0.92</span></li>
                <li className="insight-item">• Revenue ↔ EBITDA: <span className="insight-value">0.87</span></li>
                <li className="insight-item">• EBITDA ↔ Profit: <span className="insight-value">0.85</span></li>
              </ul>
            </div>
            <div className="insight-card insight-card-moderate">
              <h4 className="insight-title">Moderate Correlations</h4>
              <ul className="insight-list">
                <li className="insight-item">• Revenue ↔ Expenses: <span className="insight-value">0.64</span></li>
                <li className="insight-item">• EBITDA ↔ Expenses: <span className="insight-value">0.58</span></li>
                <li className="insight-item">• Profit ↔ Expenses: <span className="insight-value">0.52</span></li>
              </ul>
            </div>
            <div className="insight-card insight-card-insights">
              <h4 className="insight-title">Key Insights</h4>
              <p className="insight-description">
                Strong positive correlation between revenue and profit indicates healthy business fundamentals. 
                Moderate expense correlation suggests effective cost management.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Time-Series Forecasting Tab */}
      {activeTab === 'timeseries' && (
        <div className="tab-content">
          {/* Controls */}
          <div className="models-controls">
            <div className="controls-grid">
              <div className="control-group">
                <label className="control-label">Time Series</label>
                <select className="control-select">
                  <option>Quarterly Revenue</option>
                  <option>Monthly Sales</option>
                  <option>Daily Stock Price</option>
                </select>
              </div>
              <div className="control-group">
                <label className="control-label">Model</label>
                <select className="control-select">
                  <option>ARIMA</option>
                  <option>Exponential Smoothing</option>
                  <option>Prophet</option>
                </select>
              </div>
              <div className="control-group">
                <label className="control-label">Forecast Periods</label>
                <input 
                  type="number" 
                  defaultValue={4}
                  className="control-input"
                />
              </div>
              <div className="control-action">
                <button className="run-button">
                  <Play className="action-icon" />
                  Generate Forecast
                </button>
              </div>
            </div>
          </div>

          {/* Forecast Chart */}
          <div className="timeseries-container">
            <div className="timeseries-header">
              <h4 className="chart-title">Time-Series Forecast</h4>
              <div className="timeseries-legend">
                <div className="legend-item">
                  <div className="legend-dot legend-dot-historical"></div>
                  <span className="legend-label">Historical</span>
                </div>
                <div className="legend-item">
                  <div className="legend-dot legend-dot-forecast"></div>
                  <span className="legend-label">Forecast</span>
                </div>
              </div>
            </div>
            <div className="chart-wrapper">
              <ResponsiveContainer width="100%" height={420}>
                <LineChart data={timeSeriesData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e8ecf2" vertical={false} />
                  <XAxis 
                    dataKey="period" 
                    stroke="#59616a"
                    tick={{ fill: '#59616a', fontSize: 12 }}
                    tickLine={false}
                    axisLine={{ stroke: '#d7dee8' }}
                  />
                  <YAxis 
                    stroke="#59616a"
                    tick={{ fill: '#59616a', fontSize: 12 }}
                    tickLine={false}
                    axisLine={{ stroke: '#d7dee8' }}
                    label={{ value: 'Revenue ($M)', angle: -90, position: 'insideLeft', fill: '#59616a' }}
                  />
                  <Tooltip contentStyle={tooltipStyle} />
                  <Line 
                    type="monotone" 
                    dataKey="actual" 
                    stroke="#1a73e8" 
                    strokeWidth={3}
                    dot={{ fill: '#1a73e8', r: 4 }}
                    name="Historical Data"
                  />
                  <Line 
                    type="monotone" 
                    dataKey="forecast" 
                    stroke="#27c46b" 
                    strokeWidth={3}
                    strokeDasharray="5 5"
                    dot={{ fill: '#27c46b', r: 4 }}
                    name="Forecast"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Forecast Statistics */}
          <div className="forecast-stats">
            <div className="forecast-stat-card">
              <p className="forecast-stat-label">Model Accuracy (MAPE)</p>
              <p className="forecast-stat-value">5.2%</p>
              <p className="forecast-stat-badge">Excellent</p>
            </div>
            <div className="forecast-stat-card">
              <p className="forecast-stat-label">Next Period Forecast</p>
              <p className="forecast-stat-value">$195M</p>
              <p className="forecast-stat-period">Q3 2022</p>
            </div>
            <div className="forecast-stat-card">
              <p className="forecast-stat-label">Growth Rate</p>
              <p className="forecast-stat-value forecast-stat-growth">+7.1%</p>
              <p className="forecast-stat-period">QoQ Average</p>
            </div>
            <div className="forecast-stat-card">
              <p className="forecast-stat-label">Confidence Level</p>
              <p className="forecast-stat-value">95%</p>
              <p className="forecast-stat-period">High confidence</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}