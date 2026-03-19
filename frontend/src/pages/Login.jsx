import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Zap, Mail, Lock, Loader2, ArrowRight } from 'lucide-react';
import useAuthStore from '../hooks/useAuthStore';
import toast from 'react-hot-toast';

const Login = () => {
  const [email, setEmail] = useState('admin@yantra.io'); // Defaults for hackathon ease
  const [password, setPassword] = useState('password123');
  const { login, isLoading } = useAuthStore();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = await login(email, password);
    if (success) {
      toast.success('Welcome back to Yantra!');
      navigate('/dashboard');
    } else {
      toast.error('Invalid credentials. Try again.');
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-dark-bg flex items-center justify-center p-6">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[20%] w-[300px] h-[300px] bg-primary-500/10 blur-[100px] rounded-full" />
        <div className="absolute bottom-[10%] right-[20%] w-[400px] h-[400px] bg-blue-500/10 blur-[120px] rounded-full" />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-md"
      >
        <div className="text-center mb-10">
          <div className="w-16 h-16 bg-primary-500 rounded-2xl flex items-center justify-center shadow-2xl shadow-primary-500/20 mx-auto mb-6">
            <Zap className="text-white w-8 h-8" />
          </div>
          <h2 className="text-3xl font-display font-extrabold mb-2">Welcome Back</h2>
          <p className="text-slate-500 dark:text-slate-400">Enter your data to launch the engine</p>
        </div>

        <form onSubmit={handleSubmit} className="card space-y-5 p-8">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2 pl-1">Email address</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="input pl-10" 
                  placeholder="name@company.com" 
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 pl-1">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="input pl-10" 
                  placeholder="••••••••" 
                  required
                />
              </div>
            </div>
          </div>

          <button 
            type="submit" 
            disabled={isLoading}
            className="btn-primary w-full flex items-center justify-center gap-2"
          >
            {isLoading ? <Loader2 className="animate-spin" size={20} /> : (
              <>Sign in to Engine <ArrowRight size={18} /></>
            )}
          </button>

          <div className="text-center mt-6">
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Don't have an account? <a href="#" className="text-primary-500 font-semibold hover:underline">Request access</a>
            </p>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default Login;
