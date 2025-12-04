import { useState } from 'react';
import { MainLayout } from '../../Layout/MainLayout.tsx';
import { 
  Calculator, 
  TrendingUp, 
  BarChart3, 
  Shield, 
  Brain, 
  Lock
} from 'lucide-react';
import './Dashboard.css';

const ImageWithFallback = ({ src, alt, className }: { src: string; alt: string; className?: string }) => {
  const [imgSrc, setImgSrc] = useState(src);

  const handleError = () => {
    setImgSrc('https://via.placeholder.com/600x400/1a73e8/ffffff?text=Dashboard+Preview');
  };

  return (
    <img 
      src={imgSrc} 
      alt={alt} 
      className={className}
      onError={handleError}
    />
  );
};

interface DashboardProps {
  onNavigate: (page: string) => void;
}

export function Dashboard({ onNavigate }: DashboardProps) {

  const features = [
    { icon: Brain, title: 'AI-Powered Analysis', description: 'Machine learning models for predictive portfolio optimization and intelligent risk assessment' },
    { icon: Calculator, title: 'DCF Valuation', description: 'Build comprehensive discounted cash flow models with advanced scenario analysis' },
    { icon: TrendingUp, title: 'Smart Rebalancing', description: 'Automated portfolio rebalancing based on real-time market conditions and AI insights' },
    { icon: BarChart3, title: 'Statistical Models', description: 'Run regression, correlation, time-series, and advanced variance analysis' },
    { icon: Shield, title: 'Risk Analytics', description: 'Calculate VaR, volatility metrics, and run Monte Carlo simulations instantly' },
    { icon: Lock, title: 'Enterprise Security', description: 'Bank-level encryption, compliance standards, and institutional-grade security' },
  ];

  return (
    <MainLayout
      title="Dashboard Overview"
      activePath="/dashboard"   // REQUIRED
      onNavigate={onNavigate}   // REQUIRED
    >
      <div className="dashboard-content">

        <div className="welcome-section">
          <h1 className="welcome-title">Welcome back, John</h1>
          <p className="welcome-subtitle">Here's what's happening with your portfolio today.</p>
        </div>

        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-header">
              <h3 className="stat-title">Total AUM</h3>
              <span className="stat-change positive">+12.5%</span>
            </div>
            <p className="stat-value">$2.4M</p>
            <p className="stat-description">Across 45 portfolios</p>
          </div>

          <div className="stat-card">
            <div className="stat-header">
              <h3 className="stat-title">Daily Returns</h3>
              <span className="stat-change positive">+1.8%</span>
            </div>
            <p className="stat-value">+$12,450</p>
            <p className="stat-description">Today's performance</p>
          </div>

          <div className="stat-card">
            <div className="stat-header">
              <h3 className="stat-title">Risk Score</h3>
              <span className="stat-change negative">-0.3</span>
            </div>
            <p className="stat-value">6.2/10</p>
            <p className="stat-description">Moderate risk</p>
          </div>

          <div className="stat-card">
            <div className="stat-header">
              <h3 className="stat-title">AI Insights</h3>
              <span className="stat-change positive">3 New</span>
            </div>
            <p className="stat-value">12</p>
            <p className="stat-description">Actionable recommendations</p>
          </div>
        </div>

        <section className="dashboard-features">
          <div className="features-header">
            <h2 className="section-title">Platform Capabilities</h2>
            <p className="section-description">
              Everything you need for intelligent portfolio management and advanced analytics
            </p>
          </div>

          <div className="features-grid">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="feature-card">
                  <div className="icon-container">
                    <Icon className="feature-icon" />
                  </div>
                  <h4 className="feature-title">{feature.title}</h4>
                  <p className="feature-description">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </section>

      </div>
    </MainLayout>
  );
}
