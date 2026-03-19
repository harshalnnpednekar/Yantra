import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Zap, Shield, Cpu, Code, ChevronRight } from 'lucide-react';

const Landing = () => {
  const navigate = useNavigate();

  const features = [
    { title: 'FastAPI Backend', icon: Zap, desc: 'High-performance async Python backend.' },
    { title: 'AI Integration', icon: Cpu, desc: 'HuggingFace & Transformers ready.' },
    { title: 'Cyber Security', icon: Shield, desc: 'Built-in encryption & security tools.' },
    { title: 'React Frontend', icon: Code, desc: 'Modern UI with Tailwind & Vite.' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-dark-bg text-slate-900 dark:text-slate-100 selection:bg-primary-500/30">
      {/* Hero Section */}
      <section className="relative pt-24 pb-32 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] bg-primary-500/10 dark:bg-primary-500/5 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="px-4 py-1.5 rounded-full bg-primary-500/10 text-primary-600 dark:text-primary-400 text-sm font-semibold tracking-wide border border-primary-500/20 mb-8 inline-block">
              HACKATHON STARTER KIT
            </span>
            <h1 className="text-6xl md:text-8xl font-display font-extrabold tracking-tight mb-8">
              Build the Future with <span className="bg-gradient-to-tr from-primary-500 to-blue-600 bg-clip-text text-transparent">Yantra</span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-12">
              The ultimate full-stack boilerplate for builders. Rapidly prototype with AI, Blockchain, and a production-ready DevOps stack.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button 
                onClick={() => navigate('/login')}
                className="btn-primary flex items-center gap-2 group"
              >
                Launch App <ChevronRight size={18} className="group-hover:translate-x-0.5 transition-transform" />
              </button>
              <button className="btn-secondary">
                View on GitHub
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-white dark:bg-dark-card/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="card group hover:border-primary-500/50 transition-colors"
              >
                <div className="w-12 h-12 bg-primary-500/10 rounded-xl flex items-center justify-center text-primary-500 mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 bg-primary-500 rounded-3xl p-12 text-white shadow-2xl shadow-primary-500/20">
            <div>
              <p className="text-4xl font-display font-extrabold mb-2">99.9%</p>
              <p className="text-primary-100">Uptime Reliability</p>
            </div>
            <div className="border-x border-primary-400/30">
              <p className="text-4xl font-display font-extrabold mb-2">10ms</p>
              <p className="text-primary-100">API Response Time</p>
            </div>
            <div>
              <p className="text-4xl font-display font-extrabold mb-2">1-Click</p>
              <p className="text-primary-100">Cloud Deployment</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;
