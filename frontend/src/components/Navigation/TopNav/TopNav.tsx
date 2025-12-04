import { Search, Bell, User, Menu } from 'lucide-react';
import './TopNav.css';

interface TopNavProps {
  title: string;
  onMenuClick: () => void;
}

export function TopNav({ title, onMenuClick }: TopNavProps) {
  return (
    <header className="topnav">
      <div className="topnav-left">
        <button className="topnav-menu-btn" onClick={onMenuClick}>
          <Menu size={20} />
        </button>
        <h1 className="topnav-title">{title}</h1>
      </div>

      <div className="topnav-right">
        <div className="topnav-search">
          <Search className="topnav-search-icon" size={18} />
          <input
            type="text"
            placeholder="Search..."
            className="topnav-search-input"
          />
        </div>

        <button className="topnav-icon-btn">
          <Bell size={20} />
          <span className="topnav-badge">3</span>
        </button>

        <button className="topnav-user-btn">
          <div className="topnav-user-avatar">
            <User size={18} />
          </div>
          <span className="topnav-user-name">John Doe</span>
        </button>
      </div>
    </header>
  );
}
