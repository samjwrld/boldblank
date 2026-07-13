import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-surface pt-20 pb-10 border-t border-white/5 relative z-10 overflow-hidden">
      <div className="max-w-[90rem] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-16">
          <div className="md:col-span-2">
             <div className="font-display text-3xl font-bold tracking-tighter flex items-center gap-1 mb-2">
                <span className="text-white">BOLD</span>
                <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
                <span className="text-white">BLANK</span>
              </div>
              <p className="flex items-center gap-2 text-xs font-mono text-neutral-500 uppercase tracking-widest mb-6">
                <span>Proudly Handcrafted In India</span>
                <img 
                  src="https://flagcdn.com/in.svg" 
                  alt="Indian Flag" 
                  className="w-4 h-auto rounded-[1px]"
                />
              </p>
            <p className="text-neutral-400 max-w-sm mb-8 font-sans">
              We build brands from scratch and scale them to infinity. 
              Strategic design and development for the future.
            </p>
            <div className="flex gap-4">
              {['Twitter', 'LinkedIn', 'Instagram'].map(social => (
                <a key={social} href="#" className="text-sm font-mono text-neutral-500 hover:text-accent transition-colors uppercase">
                  {social}
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold font-display uppercase mb-6 tracking-wider">Sitemap</h4>
            <ul className="space-y-4 font-mono text-sm">
              <li><Link to="/work" className="text-neutral-400 hover:text-accent transition-colors">Selected Work</Link></li>
              <li><Link to="/services" className="text-neutral-400 hover:text-accent transition-colors">Our Services</Link></li>
              <li><Link to="/about" className="text-neutral-400 hover:text-accent transition-colors">Studio</Link></li>
              <li><Link to="/contact" className="text-neutral-400 hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold font-display uppercase mb-6 tracking-wider">Expertise</h4>
            <ul className="space-y-4 font-mono text-sm">
              <li><Link to="/branding-agency-india" className="text-neutral-400 hover:text-accent transition-colors">Branding Agency</Link></li>
              <li><Link to="/website-design-agency" className="text-neutral-400 hover:text-accent transition-colors">Website Design</Link></li>
              <li><Link to="/ui-ux-design-agency" className="text-neutral-400 hover:text-accent transition-colors">UI/UX Design</Link></li>
              <li><Link to="/digital-marketing-agency-india" className="text-neutral-400 hover:text-accent transition-colors">Digital Marketing</Link></li>
              <li><Link to="/ai-consultancy-india" className="text-neutral-400 hover:text-accent transition-colors">AI Consultancy</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold font-display uppercase mb-6 tracking-wider">Get in Touch</h4>
            
            <style>{`
              @keyframes neon-flicker {
                0%, 19%, 21%, 23%, 25%, 54%, 56%, 100% {
                  text-shadow: 0 0 7px #CCFF00, 0 0 10px #CCFF00;
                  opacity: 1;
                  color: #fff;
                }
                20%, 24%, 55% {
                  text-shadow: none;
                  opacity: 0.6;
                  color: #CCFF00;
                }
              }
              .neon-flicker {
                animation: neon-flicker 4s infinite;
              }
              .neon-flicker:hover {
                animation: none;
                text-shadow: 0 0 10px #CCFF00, 0 0 20px #CCFF00;
                opacity: 1;
                color: #CCFF00;
              }
            `}</style>

            <a href="mailto:hello@boldblank.com" className="block w-fit mb-6">
              <span className="neon-flicker text-lg md:text-xl text-white transition-all font-sans lowercase">
                hello@boldblank.com
              </span>
            </a>

            <p className="text-neutral-500 text-sm font-mono">
              Plot No 107, Chandanagar<br />
              Hyderabad-50
            </p>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-xs text-neutral-600 font-mono">
          <p>&copy; {new Date().getFullYear()} Bold Blank Studio. All Rights Reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;