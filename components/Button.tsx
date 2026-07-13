import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface ButtonProps {
  to?: string;
  onClick?: () => void;
  children: React.ReactNode;
  variant?: 'primary' | 'outline' | 'ghost';
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ to, onClick, children, variant = 'primary', className = '' }) => {
  const baseStyles = "inline-flex items-center gap-2 px-8 py-4 font-mono text-sm uppercase tracking-widest transition-all duration-300 group relative overflow-hidden cursor-none";
  
  const variants = {
    primary: "bg-white text-black hover:bg-accent hover:text-white",
    outline: "border border-white/20 text-white hover:border-accent hover:text-accent",
    ghost: "text-neutral-400 hover:text-white pl-0"
  };

  const content = (
    <>
      <span className="relative z-10 flex items-center gap-2">
        {children}
        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
      </span>
    </>
  );

  if (to) {
    return (
      <Link to={to} className={`${baseStyles} ${variants[variant]} ${className}`}>
        {content}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={`${baseStyles} ${variants[variant]} ${className}`}>
      {content}
    </button>
  );
};

export default Button;