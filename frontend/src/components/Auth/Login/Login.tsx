import { ImageWithFallback } from '../../common/ImageWithFallback.tsx';
import { Mail, Lock, Eye, EyeOff, Brain } from 'lucide-react';
import { useState } from 'react';
import './login.css';

interface LoginProps {
  onNavigate: (page: string) => void;
}

export function Login({ onNavigate }: LoginProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    console.log('Logging in with:', email);

    // ✅ Redirect to Dashboard
    onNavigate('dashboard');
  };

  return (
    <div className="login-container">
      {/* Left Panel - Image */}
      <div className="login-left-panel">
        <div className="login-left-overlay">
          <div className="login-left-circle login-left-circle-top"></div>
          <div className="login-left-circle login-left-circle-bottom"></div>
        </div>

        <div className="login-left-content">
          <div className="login-logo-section">
            <div className="login-logo-icon">
              <Brain className="login-logo-brain" />
            </div>
            <h1 className="login-logo-text">Credence.AI</h1>
          </div>

          <p className="login-left-description">
            AI-Powered Robo-Advisor Platform for Enterprise Financial Analytics
          </p>

          <div className="login-image-wrapper">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1080"
              alt="Financial analytics dashboard"
              className="login-image"
            />
          </div>
        </div>
      </div>

      {/* Right Panel - Login Form */}
      <div className="login-right-panel">
        <div className="login-form-container">
          <div className="login-header">
            <h2 className="login-title">Welcome Back</h2>
            <p className="login-subtitle">
              Don't have an account?{' '}
              <button
                onClick={() => onNavigate('signup')}
                className="login-link"
              >
                Sign up
              </button>
            </p>
          </div>

          <form onSubmit={handleLogin} className="login-form">
            <div className="form-group">
              <label className="form-label">Email Address</label>
              <div className="input-wrapper">
                <Mail className="input-icon" />
                <input
                  type="email"
                  placeholder="john.doe@company.com"
                  className="form-input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                  placeholder="Enter your password"
                  className="form-input"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="password-toggle"
                >
                  {showPassword ? (
                    <EyeOff className="eye-icon" />
                  ) : (
                    <Eye className="eye-icon" />
                  )}
                </button>
              </div>
            </div>

            <div className="form-options">
              <label className="checkbox-label">
                <input type="checkbox" className="checkbox-input" />
                <span className="checkbox-text">Remember me</span>
              </label>

              <button
                type="button"
                onClick={() => onNavigate('forgot-password')}
                className="forgot-password"
              >
                Forgot password?
              </button>
            </div>

            <button type="submit" className="submit-button">
              Sign In
            </button>

            <div className="divider">
              <div className="divider-line"></div>
              <div className="divider-text">or continue with</div>
            </div>

            <div className="social-buttons">
              <button type="button" className="social-button">
                Google
              </button>

              <button type="button" className="social-button">
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
