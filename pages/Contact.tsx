import React from 'react';
import { Reveal } from '../components/Reveal';
import Button from '../components/Button';
import { SEO } from '../components/SEO';

const Contact: React.FC = () => {
  return (
    <div className="w-full pt-24 md:pt-32 pb-20 px-4 md:px-6 min-h-screen flex flex-col justify-center">
      <SEO 
        title="Contact Us | Bold Blank Studio"
        description="Ready to build something bold? Contact Bold Blank Studio today for a strategic audit and transform your digital presence."
        canonicalUrl="https://boldblank.com/contact"
      />
      <div className="max-w-5xl mx-auto w-full text-center">
          <Reveal width="100%">
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tighter mb-8 leading-[0.9] uppercase break-words">
              LET'S START <br /> SOMETHING <br /> <span className="text-accent">BOLD.</span>
            </h1>
            <p className="text-lg md:text-xl text-neutral-400 mb-16 max-w-2xl mx-auto font-sans">
              Ready to transform your digital presence? Reach out to us directly.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left max-w-3xl mx-auto font-mono text-sm text-neutral-300">
              <div className="flex flex-col items-center md:items-start text-center md:text-left p-6 border border-white/5 rounded-2xl hover:border-accent/50 transition-colors bg-surface/50">
                <p className="text-neutral-500 mb-2 text-xs tracking-widest">GENERAL INQUIRIES</p>
                <a href="mailto:hello@boldblank.com" className="hover:text-accent transition-colors text-lg md:text-xl">hello@boldblank.com</a>
              </div>
              <div className="flex flex-col items-center md:items-start text-center md:text-left p-6 border border-white/5 rounded-2xl hover:border-accent/50 transition-colors bg-surface/50">
                <p className="text-neutral-500 mb-2 text-xs tracking-widest">NEW BUSINESS</p>
                <a href="mailto:hello@boldblank.com" className="hover:text-accent transition-colors text-lg md:text-xl">hello@boldblank.com</a>
              </div>
              <div className="flex flex-col items-center md:items-start text-center md:text-left p-6 border border-white/5 rounded-2xl hover:border-accent/50 transition-colors bg-surface/50">
                <p className="text-neutral-500 mb-2 text-xs tracking-widest">CAREERS</p>
                <a href="mailto:theboldblank@gmail.com" className="hover:text-accent transition-colors text-lg md:text-xl">theboldblank@gmail.com</a>
              </div>
              <div className="flex flex-col items-center md:items-start text-center md:text-left p-6 border border-white/5 rounded-2xl hover:border-accent/50 transition-colors bg-surface/50">
                <p className="text-neutral-500 mb-2 text-xs tracking-widest">VISIT US</p>
                <p className="text-neutral-300 text-lg md:text-xl">
                  Plot No 107, Chandanagar<br />
                  Hyderabad-50
                </p>
              </div>
            </div>
          </Reveal>
      </div>
    </div>
  );
};

export default Contact;