import React from 'react';
import { 
  BarChart3, 
  Settings, 
  Activity, 
  Globe, 
  Cpu, 
  TrendingUp,
  Box
} from 'lucide-react';
import useAuthStore from '../hooks/useAuthStore';
import useWebSocket from '../hooks/useWebSocket';

const Dashboard = () => {
  const { user } = useAuthStore();
  const { isConnected, lastMessage } = useWebSocket();

  const stats = [
    { label: 'Total Revenue', value: '$45,231.89', change: '+20.1%', icon: BarChart3 },
    { label: 'Active Users', value: '+2,350', change: '+180.1%', icon: Users },
    { label: 'Engine Load', value: '12%', change: '-4.4%', icon: Activity },
    { label: 'AI Responses', value: '1,234', change: '+19%', icon: Cpu },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">System Overview</h1>
          <p className="text-slate-500 dark:text-slate-400">Welcome back, {user?.name}. Here's what's happening today.</p>
        </div>
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-dark-border text-xs font-medium">
          <div className={`w-2 h-2 rounded-full ${isConnected ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`} />
          {isConnected ? 'LIVE ENGINE CONNECTED' : 'DISCONNECTED'}
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div key={stat.label} className="card p-6 flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-1">{stat.label}</p>
              <h3 className="text-2xl font-display font-extrabold">{stat.value}</h3>
              <p className={`text-xs font-semibold mt-2 ${stat.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                {stat.change} <span className="text-slate-400 font-normal ml-0.5">from last month</span>
              </p>
            </div>
            <div className="p-3 bg-slate-100 dark:bg-slate-800 rounded-xl text-slate-500 dark:text-slate-400">
              <stat.icon size={20} />
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Chart Placeholder */}
        <div className="lg:col-span-2 card">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-lg font-bold">Activity Analytics</h3>
            <select className="bg-transparent text-sm font-medium border-none outline-none focus:ring-0">
              <option>Last 7 days</option>
              <option>Last 30 days</option>
            </select>
          </div>
          <div className="h-[300px] w-full bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-dashed border-slate-200 dark:border-dark-border flex items-center justify-center text-slate-400">
            <TrendingUp size={48} className="opacity-20" />
          </div>
        </div>

        {/* System Logs */}
        <div className="card">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-lg font-bold">Live Logs</h3>
            <span className="text-xs font-display text-primary-500 font-bold uppercase tracking-widest">REALTIME</span>
          </div>
          <div className="space-y-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="flex gap-4 items-start text-sm">
                <div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-800 flex-shrink-0 flex items-center justify-center text-slate-500">
                  <Box size={16} />
                </div>
                <div>
                  <p className="font-medium">Block #9,45{i} processed</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Successful entry in the ledger</p>
                </div>
                <span className="ml-auto text-xs text-slate-400">2m ago</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Import needed components
import { Users } from 'lucide-react';

export default Dashboard;
