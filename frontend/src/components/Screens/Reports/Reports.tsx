import { FileText, Download, Eye, Calendar, Filter } from 'lucide-react';
import './Reports.css';

interface Report {
  id: number;
  title: string;
  type: string;
  date: string;
  size: string;
  status: string;
}

const reports: Report[] = [
  {
    id: 1,
    title: 'TechCorp DCF Valuation Report',
    type: 'DCF',
    date: '2025-11-28',
    size: '2.4 MB',
    status: 'completed',
  },
  {
    id: 2,
    title: 'Healthcare Sector Comps Analysis',
    type: 'Comps',
    date: '2025-11-27',
    size: '1.8 MB',
    status: 'completed',
  },
  {
    id: 3,
    title: 'Portfolio Risk Assessment Q4 2025',
    type: 'Risk',
    date: '2025-11-26',
    size: '3.2 MB',
    status: 'completed',
  },
  {
    id: 4,
    title: 'Statistical Regression Analysis',
    type: 'Stats',
    date: '2025-11-25',
    size: '1.5 MB',
    status: 'completed',
  },
  {
    id: 5,
    title: 'Time-Series Forecast Report',
    type: 'Forecast',
    date: '2025-11-24',
    size: '2.1 MB',
    status: 'completed',
  },
  {
    id: 6,
    title: 'Monte Carlo Simulation Results',
    type: 'Risk',
    date: '2025-11-23',
    size: '4.3 MB',
    status: 'completed',
  },
];

const typeColors: Record<string, string> = {
  'DCF': '#2a65f9',
  'Comps': '#02c9a1',
  'Risk': '#da3a3a',
  'Stats': '#7038ff',
  'Forecast': '#ff7a45',
};

const typeClassMap: Record<string, string> = {
  'DCF': 'report-type-dcf',
  'Comps': 'report-type-comps',
  'Risk': 'report-type-risk',
  'Stats': 'report-type-stats',
  'Forecast': 'report-type-forecast',
};

const getTypeColor = (type: string): string => {
  return typeColors[type] || '#59616a';
};

const getTypeClass = (type: string): string => {
  return typeClassMap[type] || 'report-type-default';
};

export function Reports() {
  return (
    <div className="reports-container">
      <div className="reports-header">
        <div className="header-content">
          <h2 className="reports-title">Generated Reports</h2>
          <p className="reports-subtitle">Access and download your financial analysis reports</p>
        </div>
        <button className="generate-button">
          <FileText className="button-icon" />
          Generate New Report
        </button>
      </div>

      {/* Filters */}
      <div className="filters-section">
        <div className="filters-grid">
          <div className="filter-group">
            <label className="filter-label">Report Type</label>
            <select className="filter-select">
              <option>All Types</option>
              <option>DCF</option>
              <option>Comps</option>
              <option>Risk</option>
              <option>Stats</option>
            </select>
          </div>
          
          <div className="filter-group">
            <label className="filter-label">Date Range</label>
            <select className="filter-select">
              <option>Last 30 Days</option>
              <option>Last Quarter</option>
              <option>Last Year</option>
              <option>All Time</option>
            </select>
          </div>

          <div className="filter-group">
            <label className="filter-label">Status</label>
            <select className="filter-select">
              <option>All Status</option>
              <option>Completed</option>
              <option>In Progress</option>
              <option>Scheduled</option>
            </select>
          </div>
        </div>
      </div>

      {/* Stats Row */}
      <div className="stats-grid">
        <div className="stat-card">
          <p className="stat-label">Total Reports</p>
          <h3 className="stat-value">127</h3>
          <p className="stat-trend stat-trend-positive">+12 this month</p>
        </div>

        <div className="stat-card">
          <p className="stat-label">DCF Reports</p>
          <h3 className="stat-value">45</h3>
          <p className="stat-percentage">35.4% of total</p>
        </div>

        <div className="stat-card">
          <p className="stat-label">Risk Reports</p>
          <h3 className="stat-value">38</h3>
          <p className="stat-percentage">29.9% of total</p>
        </div>

        <div className="stat-card">
          <p className="stat-label">Avg Generation Time</p>
          <h3 className="stat-value">2.3s</h3>
          <p className="stat-trend stat-trend-positive">-0.5s faster</p>
        </div>
      </div>

      {/* Reports List */}
      <div className="reports-list">
        <div className="list-header">
          <h4 className="list-title">Recent Reports</h4>
        </div>

        <div className="list-content">
          {reports.map((report) => (
            <div 
              key={report.id}
              className="report-item"
            >
              <div className="report-content">
                <div 
                  className="report-icon-container"
                  style={{ backgroundColor: getTypeColor(report.type) + '20' }}
                >
                  <FileText 
                    className="report-icon" 
                    style={{ color: getTypeColor(report.type) }} 
                  />
                </div>
                
                <div className="report-details">
                  <h4 className="report-title">{report.title}</h4>
                  <div className="report-meta">
                    <span className={`report-type ${getTypeClass(report.type)}`}>
                      {report.type}
                    </span>
                    <span className="report-date">
                      <Calendar className="meta-icon" />
                      {report.date}
                    </span>
                    <span className="report-size">{report.size}</span>
                    <span className="report-status">{report.status}</span>
                  </div>
                </div>
              </div>

              <div className="report-actions">
                <button className="action-button">
                  <Eye className="action-icon" />
                </button>
                <button className="action-button">
                  <Download className="action-icon" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="list-footer">
          <button className="load-more-button">
            Load More Reports
          </button>
        </div>
      </div>
    </div>
  );
}