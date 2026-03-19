import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Ghost, Home } from 'lucide-react';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-dark-bg flex items-center justify-center p-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="w-24 h-24 bg-red-500/10 rounded-3xl flex items-center justify-center text-red-500 mx-auto mb-8">
          <Ghost size={48} />
        </div>
        <h1 className="text-4xl font-display font-extrabold mb-4">404 - Lost in Space</h1>
        <p className="text-slate-600 dark:text-slate-400 max-w-md mx-auto mb-10">
          The module you are looking for has been decommissioned or moved to a different sector.
        </p>
        <button 
          onClick={() => navigate('/')}
          className="btn-primary flex items-center gap-2 mx-auto"
        >
          <Home size={18} /> Back to Command Center
        </button>
      </motion.div>
    </div>
  );
};

export default NotFound;
