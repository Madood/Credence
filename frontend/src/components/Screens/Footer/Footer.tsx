import React from "react";
import {
  Shield,
  Award,
  Users,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  Globe,
  TrendingUp
} from "lucide-react";
import "./Footer.css";

export function Footer() {
  return (
    <footer className="footer-container">
      <div className="content-wrap">
        {/* TRUST BADGES */}
        <div className="trust-section">
          <div className="trust-item">
            <div className="trust-icon-wrapper">
              <Shield size={24} />
            </div>
            <div>
              <h4>Bank-Grade Security</h4>
              <p>256-bit encryption</p>
            </div>
          </div>

          <div className="trust-item">
            <div className="trust-icon-wrapper">
              <Award size={24} />
            </div>
            <div>
              <h4>Fully Certified</h4>
              <p>FINRA & SEC compliant</p>
            </div>
          </div>

          <div className="trust-item">
            <div className="trust-icon-wrapper">
              <TrendingUp size={24} />
            </div>
            <div>
              <h4>Proven Results</h4>
              <p>$2B+ AUM managed</p>
            </div>
          </div>

          <div className="trust-item">
            <div className="trust-icon-wrapper">
              <Users size={24} />
            </div>
            <div>
              <h4>Trusted Worldwide</h4>
              <p>10,000+ clients</p>
            </div>
          </div>
        </div>

        {/* MAIN GRID */}
        <div className="footer-grid">
          {/* BRAND COLUMN */}
          <div className="brand-block">
            <div className="footer-logo-container">
              <div className="footer-logo-icon">
                <span className="logo-initials">CA</span>
              </div>
              <h2 className="footer-logo-text">Credence.AI</h2>
            </div>

            <p className="brand-description">
              AI-powered investment intelligence platform delivering real-time portfolio insights 
              and advanced analytics for wealth managers and financial professionals.
            </p>

            {/* SOCIALS */}
            <div className="footer-social-block">
              <a href="#" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
              <a href="#" aria-label="Twitter">
                <Twitter size={18} />
              </a>
              <a href="#" aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href="#" aria-label="Instagram">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* LINKS COLUMNS */}
          <div className="links-block-main">
            {/* PRODUCT */}
            <div className="links-block">
              <h4>Product</h4>
              <a href="#">Features</a>
              <a href="#">Pricing</a>
              <a href="#">Security</a>
              <a href="#">Integrations</a>
              <a href="#">API Docs</a>
            </div>

            {/* RESOURCES */}
            <div className="links-block">
              <h4>Resources</h4>
              <a href="#">Blog & Insights</a>
              <a href="#">Case Studies</a>
              <a href="#">Whitepapers</a>
              <a href="#">Help Center</a>
              <a href="#">Webinars</a>
            </div>

            {/* COMPANY */}
            <div className="links-block">
              <h4>Company</h4>
              <a href="#">About Us</a>
              <a href="#">Careers</a>
              <a href="#">Partners</a>
              <a href="#">Contact</a>
              <a href="#">Press Kit</a>
            </div>

            {/* LEGAL */}
            <div className="links-block">
              <h4>Legal</h4>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Cookie Policy</a>
              <a href="#">Compliance</a>
              <a href="#">Licenses</a>
            </div>
          </div>
        </div>

        {/* FOOTER BOTTOM */}
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Credence.AI. All rights reserved. Your trusted partner in AI-powered wealth management.</p>
          <div className="footer-bottom-links">
            <button className="lang-switch">
              <Globe size={16} />
              <span>English (US)</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
