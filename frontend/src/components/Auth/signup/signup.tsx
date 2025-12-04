import { ImageWithFallback } from '../../common/ImageWithFallback.tsx';
import { Mail, Lock, Eye, EyeOff, User } from 'lucide-react';
import { useState } from 'react';
import './signup.css';

interface SignupProps {
  onNavigate: (page: string) => void;
}

export function Signup({ onNavigate }: SignupProps) {
  const [showPassword, setShowPassword] = useState(false);

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    onNavigate('dashboard');
  };

  return (
    <div className="signup-container">
      {/* Left Panel - Image */}
      <div className="signup-left-panel">
        <div className="signup-left-content">
          <h1 className="signup-left-title">Join StatTools Pro</h1>
          <p className="signup-left-description">
            Start building professional financial models and analytics in minutes
          </p>
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1758520144486-18f072e583ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjB0ZWFtJTIwb2ZmaWNlfGVufDF8fHx8MTc2NDQzOTM3NHww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Professional team"
            className="signup-image"
          />
        </div>
      </div>

      {/* Right Panel - Signup Form */}
      <div className="signup-right-panel">
        <div className="signup-form-container">
          <div className="signup-header">
            <h2 className="signup-title">Create Account</h2>
            <p className="signup-subtitle">
              Already have an account?{' '}
              <button 
                onClick={() => onNavigate('login')}
                className="signup-link"
              >
                Sign in
              </button>
            </p>
          </div>

          <form onSubmit={handleSignup} className="signup-form">
            <div className="form-group">
              <label className="form-label">Full Name</label>
              <div className="input-wrapper">
                <User className="input-icon" />
                <input
                  type="text"
                  placeholder="John Doe"
                  className="form-input"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Email Address</label>
              <div className="input-wrapper">
                <Mail className="input-icon" />
                <input
                  type="email"
                  placeholder="john.doe@company.com"
                  className="form-input"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Password</label>
              <div className="input-wrapper">
                <Lock className="input-icon" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Create a strong password"
                  className="form-input"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="password-toggle"
                >
                  {showPassword ? <EyeOff className="eye-icon" /> : <Eye className="eye-icon" />}
                </button>
              </div>
              <p className="password-requirements">
                Must be at least 8 characters with numbers and symbols
              </p>
            </div>

            <label className="terms-checkbox">
              <input type="checkbox" className="checkbox-input" required />
              <span className="checkbox-text">
                I agree to the <a href="#" className="terms-link">Terms of Service</a> and{' '}
                <a href="#" className="terms-link">Privacy Policy</a>
              </span>
            </label>

            <button
              type="submit"
              className="submit-button"
            >
              Create Account
            </button>

            <div className="divider">
              <div className="divider-line"></div>
              <div className="divider-text">or sign up with</div>
            </div>

            <div className="social-buttons">
              <button
                type="button"
                className="social-button"
              >
                Google
              </button>
              <button
                type="button"
                className="social-button"
              >
                Microsoft
              </button>
            </div>
          </form>

          <p className="back-home">
            <button 
              onClick={() => onNavigate('home')}
              className="back-button"
            >
              ← Back to homepage
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}