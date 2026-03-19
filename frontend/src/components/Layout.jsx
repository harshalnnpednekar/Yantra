import React, { useState, useEffect } from 'react';
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Users, 
  LogOut, 
  Menu, 
  X, 
  Moon, 
  Sun,
  ChevronRight,
  Zap
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import useAuthStore from '../hooks/useAuthStore';

const Layout = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [isDarkMode, setDarkMode] = useState(true);
  const { user, logout } = useAuthStore();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [isDarkMode]);

  const menuItems = [
    { title: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
    { title: 'Community', path: '/community', icon: Users },
  ];

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="flex h-screen bg-slate-50 dark:bg-dark-bg text-slate-900 dark:text-slate-100 transition-colors duration-300">
      {/* Sidebar */}
      <motion.aside 
        initial={false}
        animate={{ width: isSidebarOpen ? 280 : 80 }}
        className="relative bg-white dark:bg-dark-card border-r border-slate-200 dark:border-dark-border flex flex-col z-20"
      >
        <div className="p-6 flex items-center gap-3">
          <div className="w-10 h-10 bg-primary-500 rounded-xl flex items-center justify-center shadow-lg shadow-primary-500/20">
            <Zap className="text-white w-6 h-6" />
          </div>
          {isSidebarOpen && (
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-xl font-display font-extrabold tracking-tight"
            >
              YANTRA
            </motion.span>
          )}
        </div>

        <nav className="flex-1 px-4 space-y-2 py-4">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-200 group ${
                location.pathname === item.path 
                  ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/20' 
                  : 'hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              <item.icon size={22} className={location.pathname === item.path ? '' : 'text-slate-400 group-hover:text-primary-500'} />
              {isSidebarOpen && (
                <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  {item.title}
                </motion.span>
              )}
            </Link>
          ))}
        </nav>

        <div className="p-4 border-t border-slate-200 dark:border-dark-border">
          <button 
            onClick={handleLogout}
            className="w-full flex items-center gap-4 px-4 py-3 rounded-xl text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 transition-all duration-200"
          >
            <LogOut size={22} />
            {isSidebarOpen && <span>Logout</span>}
          </button>
        </div>
        
        {/* Toggle Button */}
        <button 
          onClick={() => setSidebarOpen(!isSidebarOpen)}
          className="absolute -right-3 top-20 w-6 h-6 bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border rounded-full flex items-center justify-center shadow-md text-slate-400 hover:text-primary-500 transition-colors"
        >
          <ChevronRight size={14} className={isSidebarOpen ? 'rotate-180' : ''} />
        </button>
      </motion.aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Topbar */}
        <header className="h-20 glass flex items-center justify-between px-8 border-b border-slate-200 dark:border-dark-border z-10">
          <div className="flex items-center gap-4">
            <h2 className="text-xl font-semibold">
              {menuItems.find(i => i.path === location.pathname)?.title || 'Dashboard'}
            </h2>
          </div>

          <div className="flex items-center gap-6">
            <button 
              onClick={() => setDarkMode(!isDarkMode)}
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <div className="flex items-center gap-3">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-medium">{user?.name || 'User'}</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">{user?.email}</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-primary-500 to-blue-600 p-0.5">
                <div className="w-full h-full rounded-full bg-white dark:bg-dark-card flex items-center justify-center">
                  <span className="font-bold text-primary-500">{(user?.name || 'U')[0]}</span>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <div className="flex-1 overflow-y-auto bg-slate-50/50 dark:bg-dark-bg/50">
          <div className="page-container">
            <AnimatePresence mode="wait">
              <motion.div
                key={location.pathname}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                <Outlet />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Layout;
