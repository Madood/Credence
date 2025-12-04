import { useState } from 'react';
import { ImageWithFallback } from '../../common/ImageWithFallback.tsx';
import { Footer } from '../Footer/Footer.tsx';
import { 
  Calculator, 
  TrendingUp, 
  BarChart3, 
  Shield, 
  Check, 
  Sparkles, 
  Brain, 
  Lock, 
  Menu, 
  X, 
  Play,
  ArrowRight
} from 'lucide-react';
import './Home.css';

interface HomepageProps {
  onNavigate: (page: string) => void;
}

const credenceLogo = '/Logo2.png';

export function Homepage({ onNavigate }: HomepageProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const features = [
    { 
      icon: Brain, 
      title: 'AI-Powered Analysis', 
      description: 'Machine learning models for predictive portfolio optimization and intelligent risk assessment' 
    },
    { 
      icon: Calculator, 
      title: 'DCF Valuation', 
      description: 'Build comprehensive discounted cash flow models with advanced scenario analysis' 
    },
    { 
      icon: TrendingUp, 
      title: 'Smart Rebalancing', 
      description: 'Automated portfolio rebalancing based on real-time market conditions and AI insights' 
    },
    { 
      icon: BarChart3, 
      title: 'Statistical Models', 
      description: 'Run regression, correlation, time-series, and advanced variance analysis' 
    },
    { 
      icon: Shield, 
      title: 'Risk Analytics', 
      description: 'Calculate VaR, volatility metrics, and run Monte Carlo simulations instantly' 
    },
    { 
      icon: Lock, 
      title: 'Enterprise Security', 
      description: 'Bank-level encryption, compliance standards, and institutional-grade security' 
    },
  ];

  const pricingTiers = [
    {
      name: 'Starter',
      price: '$99',
      period: '/month',
      features: ['AI Portfolio Recommendations', 'Up to $50K AUM', 'Basic Analytics', 'Email Support', 'Mobile App Access'],
    },
    {
      name: 'Professional',
      price: '$299',
      period: '/month',
      features: ['Advanced AI Models', 'Up to $500K AUM', 'Full Analytics Suite', 'Priority Support', 'API Access', 'Custom Reports'],
      highlighted: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      features: ['Unlimited AUM', 'Dedicated AI Models', 'White-label Solution', 'Dedicated Support', 'Custom Integrations', 'SLA Guarantee'],
    },
  ];

  return (
    <div className="homepage-container">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-content">
          <div className="logo-container">
            <img 
              src={credenceLogo} 
              alt="Credence.AI Logo" 
              className="w-12 h-12 lg:w-14 lg:h-14 object-contain"
            />
            <span className="logo-text">Credence.AI</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="desktop-menu">
            <a href="#features" className="nav-link">Features</a>
            <a href="#pricing" className="nav-link">Pricing</a>
            <a href="#about" className="nav-link">About</a>
            <button 
              onClick={() => onNavigate('login')}
              className="login-btn"
            >
              Login
            </button>
            <button 
              onClick={() => onNavigate('signup')}
              className="signup-btn"
            >
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="mobile-menu-btn"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="mobile-menu">
            <a href="#features" className="mobile-menu-link">Features</a>
            <a href="#pricing" className="mobile-menu-link">Pricing</a>
            <a href="#about" className="mobile-menu-link">About</a>
            <button 
              onClick={() => onNavigate('login')}
              className="w-full py-3 text-[#0a3d91] border border-[#e2e8f0] rounded-xl"
            >
              Login
            </button>
            <button 
              onClick={() => onNavigate('signup')}
              className="w-full py-3 bg-gradient-to-r from-[#1a73e8] to-[#0a3d91] text-white rounded-xl"
            >
              Get Started
            </button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="hero-section">
        {/* Background Pattern */}
        <div className="hero-pattern">
          <div className="pattern-circle-1"></div>
          <div className="pattern-circle-2"></div>
        </div>

        <div className="hero-content">
          <div>
            <div className="badge">
              <Sparkles className="badge-icon" />
              <span className="badge-text">Trusted by 10,000+ Financial Professionals</span>
            </div>
            
            <h1 className="hero-title">
              AI-Powered Robo-Advisor Platform for Enterprise Analytics
            </h1>
            
            <p className="hero-description">
              Trusted by investment analysts, wealth managers, and financial professionals worldwide. 
              Intelligent portfolio management, automated rebalancing, and AI-driven investment insights.
            </p>
            
            <div className="hero-buttons">
              <button 
                onClick={() => onNavigate('signup')}
                className="primary-btn"
              >
                Start Free Trial
                <ArrowRight className="btn-icon" />
              </button>
              
              <button className="secondary-btn">
                <Play className="w-5 h-5" />
                Watch Demo
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="trust-indicators">
              <div className="trust-item">
                <Check className="check-icon" />
                <span className="trust-text">No credit card required</span>
              </div>
              <div className="trust-item">
                <Check className="check-icon" />
                <span className="trust-text">14-day free trial</span>
              </div>
              <div className="trust-item">
                <Check className="check-icon" />
                <span className="trust-text">Cancel anytime</span>
              </div>
            </div>
          </div>
          
          <div className="dashboard-preview">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1080"
              alt="Dashboard preview"
              className="dashboard-image"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features-section">
        <div className="features-container">
          <div className="features-header">
            <div className="section-badge">
              <Sparkles className="badge-icon-blue" />
              <span className="badge-text-blue">Platform Features</span>
            </div>
            <h2 className="section-title">AI-Driven Financial Intelligence</h2>
            <p className="section-description">
              Everything you need for intelligent portfolio management, advanced analytics, and institutional-grade risk assessment
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
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="pricing-section">
        <div className="pricing-container">
          <div className="pricing-header">
            <div className="section-badge">
              <Sparkles className="badge-icon-blue" />
              <span className="badge-text-blue">Pricing Plans</span>
            </div>
            <h2 className="section-title">Simple, Transparent Pricing</h2>
            <p className="section-description">Choose the plan that fits your investment needs</p>
          </div>
          
          <div className="pricing-grid">
            {pricingTiers.map((tier, index) => (
              <div 
                key={index} 
                className={`pricing-card ${tier.highlighted ? 'pricing-card-highlighted' : ''}`}
              >
                {tier.highlighted && (
                  <div className="highlight-badge">
                    <span className="highlight-text">Most Popular</span>
                  </div>
                )}
                <h3 className="plan-title">{tier.name}</h3>
                <div className="price-container">
                  <span className="price">{tier.price}</span>
                  {tier.price !== 'Custom' && <span className="price-period">{tier.period}</span>}
                </div>
                
                <ul className="features-list">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="feature-item">
                      <Check className="list-icon" />
                      <span className="feature-text">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button 
                  onClick={() => onNavigate('signup')}
                  className={`plan-button ${tier.highlighted ? 'highlighted-button' : 'regular-button'}`}
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        {/* Background Pattern */}
        <div className="cta-pattern">
          <div className="cta-circle"></div>
        </div>

        <div className="cta-content">
          <h2 className="cta-title">Ready to Transform Your Investment Strategy?</h2>
          <p className="cta-description">
            Join thousands of wealth managers and financial professionals using Credence.AI to make smarter investment decisions
          </p>
          <button 
            onClick={() => onNavigate('signup')}
            className="cta-button"
          >
            Start Your Free Trial
            <ArrowRight className="cta-icon" />
          </button>
        </div>
      </section>

      {/* Footer Component */}
      <Footer />
    </div>
  );
}
