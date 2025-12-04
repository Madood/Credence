// CompsAnalysis.tsx
import { useState } from 'react';
import { Search, Download, TrendingUp } from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  ScatterChart, 
  Scatter, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  Cell 
} from 'recharts';
import './CompsAnalysis.css';

const companiesData = [
  { name: 'TechCorp Inc', sector: 'Technology', mcap: 125.5, evEbitda: 18.2, pe: 24.5, revenue: 2500, growth: 15.2 },
  { name: 'HealthPlus Ltd', sector: 'Healthcare', mcap: 89.3, evEbitda: 14.8, pe: 21.3, revenue: 1800, growth: 12.5 },
  { name: 'FinServe Co', sector: 'Finance', mcap: 156.2, evEbitda: 12.5, pe: 16.8, revenue: 3200, growth: 8.3 },
  { name: 'EnergyMax', sector: 'Energy', mcap: 78.9, evEbitda: 8.9, pe: 11.2, revenue: 2100, growth: 5.1 },
  { name: 'CloudSystems', sector: 'Technology', mcap: 98.7, evEbitda: 22.3, pe: 32.1, revenue: 1500, growth: 22.8 },
  { name: 'BioMed Corp', sector: 'Healthcare', mcap: 67.4, evEbitda: 16.4, pe: 19.7, revenue: 1200, growth: 14.3 },
  { name: 'InvestBank', sector: 'Finance', mcap: 134.5, evEbitda: 11.2, pe: 14.5, revenue: 2800, growth: 6.8 },
  { name: 'SolarTech', sector: 'Energy', mcap: 45.2, evEbitda: 10.5, pe: 13.4, revenue: 980, growth: 18.5 },
];

const sectorColors: Record<string, string> = {
  'Technology': '#2a65f9',
  'Healthcare': '#02c9a1',
  'Finance': '#7038ff',
  'Energy': '#ff7a45',
};

const getSectorBgClass = (sector: string): string => {
  switch(sector) {
    case 'Technology': return 'technology-bg';
    case 'Healthcare': return 'healthcare-bg';
    case 'Finance': return 'finance-bg';
    case 'Energy': return 'energy-bg';
    default: return '';
  }
};

const getSectorColorClass = (sector: string): string => {
  switch(sector) {
    case 'Technology': return 'technology-color';
    case 'Healthcare': return 'healthcare-color';
    case 'Finance': return 'finance-color';
    case 'Energy': return 'energy-color';
    default: return '';
  }
};

export function CompsAnalysis() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSector, setSelectedSector] = useState('All');
  const [sortBy, setSortBy] = useState<'name' | 'evEbitda' | 'pe' | 'mcap'>('mcap');

  const filteredData = companiesData
    .filter(c => 
      (selectedSector === 'All' || c.sector === selectedSector) &&
      c.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      return b[sortBy] - a[sortBy];
    });

  const scatterData = companiesData.map(c => ({
    x: c.growth,
    y: c.evEbitda,
    name: c.name,
    sector: c.sector,
  }));

  const sectorAverages = [
    { sector: 'Technology', evEbitda: 20.3 },
    { sector: 'Healthcare', evEbitda: 15.6 },
    { sector: 'Finance', evEbitda: 11.9 },
    { sector: 'Energy', evEbitda: 9.7 },
  ];

  const customTooltipStyle = {
    backgroundColor: 'white',
    border: '1px solid #e2e8f0',
    borderRadius: '12px',
    padding: '12px 16px',
    boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)'
  };

  return (
    <div className="comps-container">
      <div className="comps-wrapper">
        
        {/* Page Header */}
        <div>
          <div className="comps-header">
            <h2 className="comps-title">Comparable Company Analysis</h2>
          </div>
          <p className="comps-subtitle">Industry peer valuation multiples and comparison</p>
        </div>

        {/* Search and Filters */}
        <div className="search-filters-container">
          <div className="search-filters-grid">
            <div className="search-container">
              <Search className="search-icon" />
              <input
                type="text"
                placeholder="Search companies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
            </div>
            
            <select
              value={selectedSector}
              onChange={(e) => setSelectedSector(e.target.value)}
              className="filter-select"
            >
              <option value="All">All Sectors</option>
              <option value="Technology">Technology</option>
              <option value="Healthcare">Healthcare</option>
              <option value="Finance">Finance</option>
              <option value="Energy">Energy</option>
            </select>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="filter-select"
            >
              <option value="mcap">Sort by Market Cap</option>
              <option value="evEbitda">Sort by EV/EBITDA</option>
              <option value="pe">Sort by P/E</option>
              <option value="name">Sort by Name</option>
            </select>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="stats-grid">
          <div className="stat-card">
            <p className="stat-label">Median EV/EBITDA</p>
            <h3 className="stat-value">14.2x</h3>
            <p className="stat-change-positive">+2.3% vs last quarter</p>
          </div>
          
          <div className="stat-card">
            <p className="stat-label">Median P/E</p>
            <h3 className="stat-value">18.5x</h3>
            <p className="stat-change-negative">-1.2% vs last quarter</p>
          </div>
          
          <div className="stat-card">
            <p className="stat-label">Avg Revenue Growth</p>
            <h3 className="stat-value">12.9%</h3>
            <p className="stat-change-positive">+0.8% vs last quarter</p>
          </div>
          
          <div className="stat-card">
            <p className="stat-label">Companies Analyzed</p>
            <h3 className="stat-value">{filteredData.length}</h3>
            <p className="stat-description">Across 4 sectors</p>
          </div>
        </div>

        {/* Charts */}
        <div className="charts-grid">
          {/* Sector Averages */}
          <div className="chart-card">
            <div className="chart-header">
              <h4 className="chart-title">Sector Average EV/EBITDA</h4>
              <Download className="download-icon" />
            </div>
            <div className="chart-container">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={sectorAverages}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
                  <XAxis 
                    dataKey="sector" 
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
                  <Bar dataKey="evEbitda" radius={[8, 8, 0, 0]}>
                    {sectorAverages.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={sectorColors[entry.sector]} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Scatter Plot */}
          <div className="chart-card">
            <div className="chart-header">
              <h4 className="chart-title">Growth vs EV/EBITDA</h4>
              <Download className="download-icon" />
            </div>
            <div className="chart-container">
              <ResponsiveContainer width="100%" height="100%">
                <ScatterChart>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis 
                    type="number" 
                    dataKey="x" 
                    name="Growth" 
                    unit="%" 
                    stroke="#94a3b8"
                    tick={{ fill: '#64748b', fontSize: 13 }}
                    tickLine={false}
                    axisLine={{ stroke: '#e2e8f0' }}
                  />
                  <YAxis 
                    type="number" 
                    dataKey="y" 
                    name="EV/EBITDA" 
                    unit="x" 
                    stroke="#94a3b8"
                    tick={{ fill: '#64748b', fontSize: 13 }}
                    tickLine={false}
                    axisLine={{ stroke: '#e2e8f0' }}
                  />
                  <Tooltip 
                    cursor={{ strokeDasharray: '3 3' }}
                    contentStyle={customTooltipStyle}
                  />
                  {Object.keys(sectorColors).map((sector) => (
                    <Scatter
                      key={sector}
                      name={sector}
                      data={scatterData.filter(d => d.sector === sector)}
                      fill={sectorColors[sector]}
                    />
                  ))}
                </ScatterChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Companies Table */}
        <div className="companies-table-container">
          <div className="table-header">
            <h4 className="table-title">Companies Overview</h4>
            <button className="export-button">
              <Download className="export-icon" />
              Export Table
            </button>
          </div>
          
          <div className="table-wrapper">
            <table className="companies-table">
              <thead className="table-head">
                <tr>
                  <th className="table-header-cell">Company</th>
                  <th className="table-header-cell">Sector</th>
                  <th className="table-header-cell table-header-cell-right">Market Cap ($B)</th>
                  <th className="table-header-cell table-header-cell-right">EV/EBITDA</th>
                  <th className="table-header-cell table-header-cell-right">P/E Ratio</th>
                  <th className="table-header-cell table-header-cell-right">Revenue ($M)</th>
                  <th className="table-header-cell table-header-cell-right">Growth %</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((company, index) => (
                  <tr 
                    key={index}
                    className="table-row"
                  >
                    <td className="table-cell">
                      <div className="company-cell">
                        <div className={`company-icon-container ${getSectorBgClass(company.sector)}`}>
                          <TrendingUp className={`company-icon ${getSectorColorClass(company.sector)}`} />
                        </div>
                        <span className="company-name">{company.name}</span>
                      </div>
                    </td>
                    <td className="table-cell">
                      <span 
                        className="sector-badge" 
                        style={{ backgroundColor: sectorColors[company.sector] }}
                      >
                        {company.sector}
                      </span>
                    </td>
                    <td className="table-cell table-cell-right">
                      <span className="data-value">${company.mcap.toFixed(1)}</span>
                    </td>
                    <td className="table-cell table-cell-right">
                      <span className="data-value">{company.evEbitda.toFixed(1)}x</span>
                    </td>
                    <td className="table-cell table-cell-right">
                      <span className="data-value">{company.pe.toFixed(1)}x</span>
                    </td>
                    <td className="table-cell table-cell-right">
                      <span className="data-value">${company.revenue.toFixed(0)}</span>
                    </td>
                    <td className="table-cell table-cell-right">
                      <span className={company.growth > 10 ? 'growth-positive' : 'growth-neutral'}>
                        {company.growth.toFixed(1)}%
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}