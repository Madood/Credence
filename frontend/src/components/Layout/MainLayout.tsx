import { ReactNode, useState } from 'react';
import { Sidebar } from '../Navigation/Sidebar/sidebar.tsx';
import { TopNav } from '../Navigation/TopNav/TopNav.tsx';
import { Footer } from '../Screens/Footer/Footer.tsx';
import './MainLayout.css';

interface MainLayoutProps {
  children: ReactNode;
  title?: string;
  activePath: string;
  onNavigate: (path: string) => void;
}

export function MainLayout({ 
  children, 
  title = 'Dashboard', 
  activePath,
  onNavigate 
}: MainLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className={`main-layout ${sidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
      <Sidebar 
        isOpen={sidebarOpen} 
        onToggle={toggleSidebar}
        activePath={activePath}
        onNavigate={onNavigate}
      />

      <div className="main-content">
        <TopNav title={title} onMenuClick={toggleSidebar} />

        <main className="main-container">
          {children}
        </main>

        <Footer />
      </div>
    </div>
  );
}
