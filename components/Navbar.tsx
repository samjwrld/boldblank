import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Work', path: '/work' },
  { label: 'Services', path: '/services' },
  { label: 'Insights', path: '/insights' },
  { label: 'Process', path: '/process' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

const Navbar: React.FC = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const formatTime = (date: Date) => {
    const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
    
    const dayName = days[date.getDay()];
    const day = date.getDate().toString().padStart(2, '0');
    const month = months[date.getMonth()];
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');

    return `${dayName} ${day} ${month} // ${hours}:${minutes}:${seconds}`;
  };

  return (
    <>
      {/* Top Brand Indicator */}
      <div className="fixed top-6 left-6 z-[80] mix-blend-difference">
         <Link to="/" className="flex items-center gap-2 leading-none">
            <span className="font-display font-bold text-xl tracking-tighter text-white">BOLD</span>
            <span className="font-display font-bold text-xl tracking-tighter text-white">BLANK</span>
         </Link>
      </div>

      {/* Top Right Status (Desktop) */}
      <div className="fixed top-6 right-6 z-50 mix-blend-difference hidden md:block">
        <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <span className="font-mono text-xs text-white uppercase tracking-widest">
              {formatTime(time)}
            </span>
        </div>
      </div>

      {/* Mobile Menu Toggle (Bottom Right) */}
      <div className="fixed bottom-6 right-6 z-[90] md:hidden">
        <motion.button 
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(!isOpen)}
          className={`w-16 h-16 rounded-full flex flex-col items-center justify-center gap-1.5 shadow-2xl transition-colors duration-500 ${isOpen ? 'bg-white text-black' : 'bg-accent text-black'}`}
          aria-label="Toggle Menu"
        >
          <motion.div 
            animate={isOpen ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }}
            className="w-6 h-0.5 bg-current"
          />
          <motion.div 
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
            className="w-6 h-0.5 bg-current"
          />
          <motion.div 
            animate={isOpen ? { rotate: -45, y: -4 } : { rotate: 0, y: 0 }}
            className="w-6 h-0.5 bg-current"
          />
        </motion.button>
      </div>

      {/* Desktop Floating Bottom Dock */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 hidden md:block">
        <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-full px-1 py-1 flex items-center gap-1 shadow-2xl shadow-black/50">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            
            return (
              <Link
                key={item.path}
                to={item.path}
                className="relative px-5 py-3 rounded-full transition-all duration-300 group"
              >
                {isActive && (
                  <motion.div
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-white rounded-full"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                
                <span className={`relative z-10 text-xs font-bold uppercase tracking-wider transition-colors duration-200 ${isActive ? 'text-black' : 'text-white group-hover:text-white/80'}`}>
                  {item.label}
                </span>
                
                {!isActive && (
                    <div className="absolute inset-0 rounded-full bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                )}
              </Link>
            );
          })}
        </div>
      </div>

      {/* Mobile Fullscreen Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ clipPath: 'circle(0% at 90% 90%)' }}
            animate={{ clipPath: 'circle(150% at 90% 90%)' }}
            exit={{ clipPath: 'circle(0% at 90% 90%)' }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[85] bg-neutral-950 md:hidden flex flex-col p-8 pt-32"
          >
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
            
            <div className="flex flex-col gap-4 w-full relative z-10">
              <span className="font-mono text-[10px] text-neutral-600 uppercase tracking-[0.3em] mb-4">Navigation</span>
              {navItems.map((item, index) => {
                const isActive = location.pathname === item.path;
                return (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + index * 0.05, duration: 0.5 }}
                  >
                    <Link
                      to={item.path}
                      className="group flex items-baseline gap-4"
                    >
                      <span className="font-mono text-[10px] text-neutral-700 group-hover:text-accent transition-colors">0{index + 1}</span>
                      <span className={`text-5xl font-display font-bold uppercase tracking-tighter transition-all duration-300 ${isActive ? 'text-accent' : 'text-white group-hover:translate-x-2'}`}>
                        {item.label}
                      </span>
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            <div className="mt-auto relative z-10">
               <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/10">
                  <div className="space-y-4">
                    <span className="font-mono text-[10px] text-neutral-600 uppercase tracking-widest block">Social</span>
                    <div className="flex flex-col gap-2">
                      {['Instagram', 'LinkedIn', 'Twitter', 'Behance'].map((social) => (
                        <a key={social} href="#" className="text-sm text-neutral-400 hover:text-white transition-colors">{social}</a>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-4">
                    <span className="font-mono text-[10px] text-neutral-600 uppercase tracking-widest block">Status</span>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
                        <span className="text-xs text-neutral-300 uppercase tracking-wider">Available for work</span>
                      </div>
                      <span className="font-mono text-[10px] text-neutral-500 block">
                        {formatTime(time)}
                      </span>
                    </div>
                  </div>
               </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
