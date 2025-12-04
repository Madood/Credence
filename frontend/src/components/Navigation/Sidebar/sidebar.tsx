import { 
  LayoutDashboard, 
  TrendingUp, 
  BarChart3, 
  Calculator, 
  FileText, 
  Shield,
  Settings,
  Brain,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import './sidebar.css';

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
  activePath: string;
  onNavigate: (path: string) => void;
}

const menuItems = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/authenticated' },
  { icon: TrendingUp, label: 'Portfolio', path: '/portfolio' },
  { icon: BarChart3, label: 'Analytics', path: '/analytics' },
  { icon: Calculator, label: 'Valuation', path: '/valuation' },
  { icon: Shield, label: 'Risk Analysis', path: '/risk' },
  { icon: FileText, label: 'Reports', path: '/reports' },
  { icon: Brain, label: 'AI Models', path: '/statistical-models' },
  { icon: Settings, label: 'Settings', path: '/settings' },
];

export function Sidebar({ isOpen, onToggle, activePath, onNavigate }: SidebarProps) {
  return (
    <div className={`sidebar ${isOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
      <div className="sidebar-header">
        {isOpen && (
          <div className="sidebar-logo">
            <div className="sidebar-logo-icon">
              <span className="sidebar-logo-text">CA</span>
            </div>
            <span className="sidebar-brand">Credence.AI</span>
          </div>
        )}
        <button className="sidebar-toggle" onClick={onToggle}>
          {isOpen ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
        </button>
      </div>

      <nav className="sidebar-nav">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activePath === item.path;
          
          return (
            <button
              key={item.path}
              onClick={() => onNavigate(item.path)}
              className={`sidebar-nav-item ${isActive ? 'sidebar-nav-item-active' : ''}`}
              title={!isOpen ? item.label : undefined}
            >
              <Icon className="sidebar-nav-icon" size={20} />
              {isOpen && <span className="sidebar-nav-label">{item.label}</span>}
            </button>
          );
        })}
      </nav>
    </div>
  );
}
