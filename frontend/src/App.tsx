import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from 'react-router-dom';

import { Homepage } from './components/Screens/Home/Homepage.tsx';
import { Dashboard } from './components/Screens/Dashboard/Dashboard.tsx';
import { CompsAnalysis } from './components/Screens/CompsAnalysis/CompsAnalysis.tsx';
import { Login } from './components/Auth/Login/Login.tsx';
import { Signup } from './components/Auth/signup/signup.tsx';
import { Settings } from './components/Screens/Settings/Settings.tsx';
import { StatisticalModels } from './components/Screens/StatisticalModels/StatisticalModels.tsx';
import { PythonScripts } from './components/Screens/PythonScripts/PythonScripts.tsx';
import { Reports } from './components/Screens/Reports/Reports.tsx';
import { RiskAnalysis } from './components/Screens/RiskAnalysis/RiskAnalysis.tsx';

import './App.css';

// --------------------------------------
// Placeholder for unfinished pages
// --------------------------------------
const PlaceholderPage = ({ title }: { title: string }) => (
  <div className="placeholder-page">
    <h1>{title} Page</h1>
    <p>This page is under construction</p>
  </div>
);

// --------------------------------------
// Wrapper for Homepage
// --------------------------------------
function HomepageWrapper() {
  const navigate = useNavigate();

  const handleNavigate = (page: string) => {
    navigate(`/${page}`);
  };

  return <Homepage onNavigate={handleNavigate} />;
}

// --------------------------------------
// Wrapper for Login
// --------------------------------------
function LoginWrapper() {
  const navigate = useNavigate();

  const handleNavigate = (page: string) => {
    navigate(`/${page}`);
  };

  return <Login onNavigate={handleNavigate} />;
}

// --------------------------------------
// Wrapper for Signup
// --------------------------------------
function SignupWrapper() {
  const navigate = useNavigate();

  const handleNavigate = (page: string) => {
    navigate(`/${page}`);
  };

  return <Signup onNavigate={handleNavigate} />;
}

// --------------------------------------
// Wrapper for Dashboard (FIX FOR THE ERROR)
// --------------------------------------
function DashboardWrapper() {
  const navigate = useNavigate();

  const handleNavigate = (page: string) => {
    navigate(`/${page}`);
  };

  return <Dashboard onNavigate={handleNavigate} />;
}

// --------------------------------------
// MAIN APP
// --------------------------------------
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>

          {/* Public Routes */}
          <Route path="/" element={<HomepageWrapper />} />
          <Route path="/login" element={<LoginWrapper />} />
          <Route path="/signup" element={<SignupWrapper />} />

          {/* Dashboard + App Screens */}
          <Route path="/dashboard" element={<DashboardWrapper />} />
          <Route path="/analytics" element={<PlaceholderPage title="Analytics" />} />
          <Route path="/portfolio" element={<PlaceholderPage title="Portfolio" />} />
          <Route path="/risk" element={<RiskAnalysis />} />
          <Route path="/valuation" element={<PlaceholderPage title="Valuation" />} />
          <Route path="/comps" element={<CompsAnalysis />} />
          <Route path="/statistical-models" element={<StatisticalModels />} />
          <Route path="/python-scripts" element={<PythonScripts />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/data" element={<PlaceholderPage title="Data Sources" />} />
          <Route path="/clients" element={<PlaceholderPage title="Clients" />} />
          <Route path="/billing" element={<PlaceholderPage title="Billing" />} />
          <Route path="/settings" element={<Settings />} />

          {/* Catch-all redirect */}
          <Route path="*" element={<Navigate to="/" replace />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
