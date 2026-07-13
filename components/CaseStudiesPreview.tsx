import React from 'react';
import { Reveal } from './Reveal';
import { SmartLink } from './SmartLink';
import { ArrowRight } from 'lucide-react';

const projects = [
  { client: "ViralVelvet.com", type: "Performance Marketing", outcome: "3.2x ROAS Increase", year: "2024", link: "/work/viral-velvet" },
  { client: "TASSK.CO.IN", type: "Web Platform & Automation", outcome: "50% Faster Delivery", year: "2024", link: "/work/tassk" },
  { client: "Sree Sai Transport Togo", type: "Fleet Management App", outcome: "Machine, Fuel & Maintenance Tracking", year: "2024", link: "/work/07" },
  { client: "Bharat IP Defense Solutions", type: "Website & Branding", outcome: "Global Digital Presence", year: "2024", link: "/work/04" },
  { client: "Pearl White Designs", type: "Brand Identity", outcome: "Market Positioning", year: "2024", link: "/work/06" },
  { client: "Patel's Group", type: "Digital Strategy", outcome: "Business Growth", year: "2023", link: "/work/02" }
];

const CaseStudiesPreview: React.FC = () => {
  return (
    <section className="py-24 bg-surface border-y border-white/5" aria-labelledby="case-studies-title">
      <div className="max-w-[90rem] mx-auto px-6">
        <Reveal width="100%">
          <div className="flex justify-between items-end mb-16 w-full">
            <h2 id="case-studies-title" className="font-display text-3xl md:text-5xl font-bold uppercase">Recent Work</h2>
            <span className="font-mono text-xs text-accent uppercase tracking-widest hidden md:block">Latest Projects</span>
          </div>
        </Reveal>

        <div className="flex flex-col">
          {projects.map((project, i) => (
            <Reveal key={i} delay={i * 0.1} width="100%">
              <SmartLink 
                to={project.link} 
                className="group relative grid grid-cols-1 md:grid-cols-12 gap-y-4 md:gap-4 items-center py-6 md:py-10 border-t border-white/10 hover:bg-white/[0.02] transition-colors px-4 w-full block"
              >
                <div className="md:col-span-5">
                  <h3 className="font-display text-2xl md:text-3xl md:text-4xl font-bold text-white group-hover:text-accent transition-colors">{project.client}</h3>
                </div>
                <div className="md:col-span-3">
                  <span className="font-mono text-sm text-neutral-500 uppercase tracking-widest">{project.type}</span>
                </div>
                <div className="md:col-span-4 flex justify-between items-center">
                  <span className="font-sans text-neutral-300">{project.outcome}</span>
                  <ArrowRight className="w-6 h-6 text-neutral-600 group-hover:text-accent -translate-x-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                </div>
              </SmartLink>
            </Reveal>
          ))}
          <div className="border-t border-white/10" />
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesPreview;
