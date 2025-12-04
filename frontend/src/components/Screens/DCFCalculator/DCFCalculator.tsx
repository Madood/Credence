// DCFCalculator.tsx
import { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Calculator, Download, Save, TrendingUp } from 'lucide-react';
import './DCFCalculator.css';

const cashFlowData = [
  { year: 'Year 1', fcf: 100, pv: 93 },
  { year: 'Year 2', fcf: 115, pv: 98 },
  { year: 'Year 3', fcf: 132, pv: 105 },
  { year: 'Year 4', fcf: 152, pv: 110 },
  { year: 'Year 5', fcf: 175, pv: 115 },
  { year: 'Terminal', fcf: 2100, pv: 1380 },
];

export function DCFCalculator() {
  const [inputs, setInputs] = useState({
    revenue: '1000',
    revenueGrowth: '15',
    ebitdaMargin: '25',
    taxRate: '21',
    capex: '50',
    nwcChange: '20',
    wacc: '8.5',
    terminalGrowth: '2.5',
  });

  const [activeTab, setActiveTab] = useState<'inputs' | 'output' | 'sensitivity'>('inputs');

  const handleInputChange = (field: string, value: string) => {
    setInputs(prev => ({ ...prev, [field]: value }));
  };

  const intrinsicValue = 125.50;
  const currentPrice = 110.00;
  const upside = ((intrinsicValue - currentPrice) / currentPrice * 100).toFixed(1);

  const customTooltipStyle = {
    backgroundColor: 'white',
    border: '1px solid #e2e8f0',
    borderRadius: '12px',
    padding: '12px 16px',
    boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)'
  };

  return (
    <div className="dcf-container">
      <div className="dcf-wrapper">
        
        {/* Page Header */}
        <div className="dcf-header">
          <div>
            <h2 className="dcf-title">DCF Valuation Model</h2>
            <p className="dcf-subtitle">Discounted Cash Flow analysis and valuation</p>
          </div>
          <div className="header-actions">
            <button className="save-button">
              <Save className="save-icon" />
              Save Model
            </button>
            <button className="export-button">
              <Download className="export-icon" />
              Export PDF
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="tabs-container">
          <button
            onClick={() => setActiveTab('inputs')}
            className={`tab-button ${activeTab === 'inputs' ? 'tab-button-active' : 'tab-button-inactive'}`}
          >
            Model Inputs
          </button>
          <button
            onClick={() => setActiveTab('output')}
            className={`tab-button ${activeTab === 'output' ? 'tab-button-active' : 'tab-button-inactive'}`}
          >
            Valuation Output
          </button>
          <button
            onClick={() => setActiveTab('sensitivity')}
            className={`tab-button ${activeTab === 'sensitivity' ? 'tab-button-active' : 'tab-button-inactive'}`}
          >
            Sensitivity Analysis
          </button>
        </div>

        {/* Inputs Tab */}
        {activeTab === 'inputs' && (
          <div className="inputs-grid">
            <div className="input-card">
              <h4 className="card-title">Revenue Assumptions</h4>
              
              <div className="input-group">
                <div className="input-field">
                  <label className="input-label">Base Revenue ($M)</label>
                  <input
                    type="number"
                    value={inputs.revenue}
                    onChange={(e) => handleInputChange('revenue', e.target.value)}
                    className="input-control"
                  />
                </div>

                <div className="input-field">
                  <label className="input-label">Revenue Growth Rate (%)</label>
                  <input
                    type="number"
                    value={inputs.revenueGrowth}
                    onChange={(e) => handleInputChange('revenueGrowth', e.target.value)}
                    className="input-control"
                  />
                </div>

                <div className="input-field">
                  <label className="input-label">EBITDA Margin (%)</label>
                  <input
                    type="number"
                    value={inputs.ebitdaMargin}
                    onChange={(e) => handleInputChange('ebitdaMargin', e.target.value)}
                    className="input-control"
                  />
                </div>

                <div className="input-field">
                  <label className="input-label">Tax Rate (%)</label>
                  <input
                    type="number"
                    value={inputs.taxRate}
                    onChange={(e) => handleInputChange('taxRate', e.target.value)}
                    className="input-control"
                  />
                </div>
              </div>
            </div>

            <div className="input-card">
              <h4 className="card-title">Capital & Discount Assumptions</h4>
              
              <div className="input-group">
                <div className="input-field">
                  <label className="input-label">CapEx (% of Revenue)</label>
                  <input
                    type="number"
                    value={inputs.capex}
                    onChange={(e) => handleInputChange('capex', e.target.value)}
                    className="input-control"
                  />
                </div>

                <div className="input-field">
                  <label className="input-label">NWC Change ($M)</label>
                  <input
                    type="number"
                    value={inputs.nwcChange}
                    onChange={(e) => handleInputChange('nwcChange', e.target.value)}
                    className="input-control"
                  />
                </div>

                <div className="input-field">
                  <label className="input-label">WACC (%)</label>
                  <input
                    type="number"
                    value={inputs.wacc}
                    onChange={(e) => handleInputChange('wacc', e.target.value)}
                    className="input-control"
                  />
                </div>

                <div className="input-field">
                  <label className="input-label">Terminal Growth Rate (%)</label>
                  <input
                    type="number"
                    value={inputs.terminalGrowth}
                    onChange={(e) => handleInputChange('terminalGrowth', e.target.value)}
                    className="input-control"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Output Tab */}
        {activeTab === 'output' && (
          <div className="output-content">
            {/* Valuation Summary */}
            <div className="valuation-grid">
              <div className="valuation-card-primary">
                <p className="valuation-label">Intrinsic Value per Share</p>
                <h1 className="valuation-value-primary">${intrinsicValue}</h1>
                <div className="upside-indicator">
                  <TrendingUp className="trend-icon" />
                  <span className="upside-text">+{upside}% upside potential</span>
                </div>
              </div>
              
              <div className="valuation-card-secondary">
                <p className="valuation-label-secondary">Current Market Price</p>
                <h2 className="valuation-value-secondary">${currentPrice}</h2>
                <p className="valuation-description">As of today</p>
              </div>

              <div className="valuation-card-secondary">
                <p className="valuation-label-secondary">Enterprise Value</p>
                <h2 className="valuation-value-secondary">$1,901M</h2>
                <p className="valuation-description">Total PV of FCF</p>
              </div>
            </div>

            {/* Cash Flow Chart */}
            <div className="chart-container">
              <h4 className="chart-title">Free Cash Flow Projection</h4>
              <div className="chart-wrapper">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={cashFlowData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
                    <XAxis 
                      dataKey="year" 
                      stroke="#94a3b8" 
                      tick={{ fill: '#64748b', fontSize: 13 }}
                      tickLine={false}
                      axisLine={{ stroke: '#e2e8f0' }}
                    />
                    <YAxis 
                      stroke="#94a3b8" 
                      tick={{ fill: '#64748b', fontSize: 13 }}
                      tickLine={false}
                      axisLine={{ stroke: '#e2e8f0' }}
                    />
                    <Tooltip contentStyle={customTooltipStyle} />
                    <Bar dataKey="fcf" fill="#3b7bf7" name="Free Cash Flow ($M)" radius={[8, 8, 0, 0]} />
                    <Bar dataKey="pv" fill="#02c9a1" name="Present Value ($M)" radius={[8, 8, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Assumptions Table */}
            <div className="assumptions-container">
              <h4 className="chart-title">Key Assumptions</h4>
              <div className="table-wrapper">
                <table className="assumptions-table">
                  <thead>
                    <tr className="table-header-row">
                      <th className="table-header">Metric</th>
                      <th className="table-header table-header-right">Value</th>
                      <th className="table-header table-header-right">Impact</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="table-row">
                      <td className="table-cell table-cell-metric">WACC</td>
                      <td className="table-cell table-cell-right table-cell-value">{inputs.wacc}%</td>
                      <td className="table-cell table-cell-right impact-high">High</td>
                    </tr>
                    <tr className="table-row">
                      <td className="table-cell table-cell-metric">Terminal Growth</td>
                      <td className="table-cell table-cell-right table-cell-value">{inputs.terminalGrowth}%</td>
                      <td className="table-cell table-cell-right impact-high">High</td>
                    </tr>
                    <tr className="table-row">
                      <td className="table-cell table-cell-metric">Revenue Growth</td>
                      <td className="table-cell table-cell-right table-cell-value">{inputs.revenueGrowth}%</td>
                      <td className="table-cell table-cell-right impact-medium">Medium</td>
                    </tr>
                    <tr className="table-row">
                      <td className="table-cell table-cell-metric">EBITDA Margin</td>
                      <td className="table-cell table-cell-right table-cell-value">{inputs.ebitdaMargin}%</td>
                      <td className="table-cell table-cell-right impact-medium">Medium</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Sensitivity Tab */}
        {activeTab === 'sensitivity' && (
          <div className="sensitivity-container">
            <h4 className="chart-title">Two-Way Sensitivity Analysis: WACC vs Terminal Growth</h4>
            <div className="table-wrapper">
              <table className="sensitivity-table">
                <thead>
                  <tr className="sensitivity-header-row">
                    <th className="sensitivity-header sensitivity-header-label">WACC / Terminal Growth</th>
                    <th className="sensitivity-header">1.5%</th>
                    <th className="sensitivity-header">2.0%</th>
                    <th className="sensitivity-header">2.5%</th>
                    <th className="sensitivity-header">3.0%</th>
                    <th className="sensitivity-header">3.5%</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="sensitivity-row">
                    <td className="sensitivity-label-cell">7.5%</td>
                    <td className="sensitivity-cell bg-emerald-50">$142.30</td>
                    <td className="sensitivity-cell bg-emerald-50">$148.50</td>
                    <td className="sensitivity-cell bg-emerald-50">$155.20</td>
                    <td className="sensitivity-cell bg-amber-50">$162.40</td>
                    <td className="sensitivity-cell bg-amber-50">$170.10</td>
                  </tr>
                  <tr className="sensitivity-row">
                    <td className="sensitivity-label-cell">8.0%</td>
                    <td className="sensitivity-cell bg-emerald-50">$132.80</td>
                    <td className="sensitivity-cell bg-emerald-50">$138.40</td>
                    <td className="sensitivity-cell bg-emerald-50">$144.50</td>
                    <td className="sensitivity-cell bg-amber-50">$151.10</td>
                    <td className="sensitivity-cell bg-amber-50">$158.20</td>
                  </tr>
                  <tr className="sensitivity-row">
                    <td className="sensitivity-label-cell">8.5%</td>
                    <td className="sensitivity-cell bg-emerald-50">$118.90</td>
                    <td className="sensitivity-cell bg-emerald-50">$122.20</td>
                    <td className="sensitivity-cell bg-emerald-100 current-valuation">$125.50</td>
                    <td className="sensitivity-cell bg-amber-50">$128.90</td>
                    <td className="sensitivity-cell bg-amber-50">$132.40</td>
                  </tr>
                  <tr className="sensitivity-row">
                    <td className="sensitivity-label-cell">9.0%</td>
                    <td className="sensitivity-cell bg-amber-50">$110.20</td>
                    <td className="sensitivity-cell bg-amber-50">$113.10</td>
                    <td className="sensitivity-cell bg-amber-50">$116.00</td>
                    <td className="sensitivity-cell bg-red-50">$119.00</td>
                    <td className="sensitivity-cell bg-red-50">$122.10</td>
                  </tr>
                  <tr className="sensitivity-row">
                    <td className="sensitivity-label-cell">9.5%</td>
                    <td className="sensitivity-cell bg-amber-50">$102.40</td>
                    <td className="sensitivity-cell bg-amber-50">$104.90</td>
                    <td className="sensitivity-cell bg-red-50">$107.50</td>
                    <td className="sensitivity-cell bg-red-50">$110.20</td>
                    <td className="sensitivity-cell bg-red-50">$113.00</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="analysis-note">
              <span className="note-highlight">Current valuation: $125.50</span> (highlighted in blue border). Green = Upside potential, Yellow = Neutral, Red = Downside risk
            </p>
          </div>
        )}

      </div>
    </div>
  );
}