import React from 'react';
import { Reveal } from '../components/Reveal';
import Button from '../components/Button';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Target, TrendingUp, Cpu, ArrowRight, Zap, GitMerge, BrainCircuit, ArrowDownRight } from 'lucide-react';
import { SEO } from '../components/SEO';
import Service3DModel from '../components/Service3DModel';

const pillars = [
  {
    id: 'brand',
    type: 'brand' as const,
    title: 'BRAND',
    subtitle: 'BRAND & DESIGN',
    problem: 'If you look like everyone else, customers will ignore you.',
    strategy: 'We design brands that stand out and build trust instantly.',
    execution: ['Logo & Identity', 'User Experience (UX)', 'Visual Design', 'Brand Strategy'],
    outcome: 'More Attention & Trust',
    icon: Target,
    link: '/branding-agency-india',
  },
  {
    id: 'product',
    type: 'product' as const,
    title: 'PRODUCT',
    subtitle: 'WEBSITES & APPS',
    problem: 'Slow, confusing websites lose customers.',
    strategy: 'We build fast, easy-to-use websites and apps that convert visitors.',
    execution: ['Custom Websites', 'Mobile Apps', 'Web Applications', 'E-commerce'],
    outcome: 'Happy Users & More Sales',
    icon: Cpu,
    link: '/website-design-agency',
  },
  {
    id: 'growth',
    type: 'growth' as const,
    title: 'GROWTH',
    subtitle: 'MARKETING & GROWTH',
    problem: 'Wasting money on ads that don\'t bring in sales.',
    strategy: 'We use data to find your best customers and help you grow.',
    execution: ['Digital Marketing', 'SEO & Content', 'Paid Advertising', 'Email Marketing'],
    outcome: 'Predictable Revenue',
    icon: TrendingUp,
    link: '/digital-marketing-agency-india',
  },
  {
    id: 'ai-consultancy',
    type: 'ai-consultancy' as const,
    title: 'AI CONSULTANCY',
    subtitle: 'THE INTELLIGENCE LAYER',
    problem: 'Fragmented systems and manual workflows limit your ability to scale and innovate.',
    strategy: 'We architect a custom intelligence layer that enhances your Brand, Product, and Growth engines.',
    execution: ['AI Strategy & Roadmapping', 'Workflow Automation', 'Custom LLM Integration', 'Predictive Analytics'],
    outcome: 'Exponential Scale & Insight',
    icon: BrainCircuit,
    link: '/ai-consultancy-india',
  }
];

const Services: React.FC = () => {
  return (
    <div className="w-full">
      <SEO 
        title="Our Services | Bold Blank Studio"
        description="Explore our core services: Branding, Website Design, UI/UX Design, and Digital Marketing. We build high-performance digital systems for ambitious brands."
        keywords="branding, website design, ui ux design, digital marketing agency, growth marketing, bold blank studio"
        canonicalUrl="https://boldblank.com/services"
      />
      
      {/* 1. INTRO — STRATEGIC POSITIONING */}
      <section className="pt-32 md:pt-48 pb-20 px-4 md:px-6">
        <div className="max-w-[90rem] mx-auto">
          <Reveal width="100%">
            <h1 className="font-display text-4xl md:text-7xl lg:text-[6.5vw] font-bold uppercase tracking-tighter leading-[0.9] mb-8">
              SYSTEMS <br/>
              <span className="text-neutral-600">NOT SERVICES.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2} width="100%">
            <p className="text-xl md:text-2xl text-neutral-400 max-w-3xl font-light leading-relaxed">
              We don't just do tasks. We build complete systems that help your business look good, work well, and grow fast.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 2. CORE CAPABILITY PILLARS */}
      <section className="px-4 md:px-6 pb-32">
        <div className="max-w-[90rem] mx-auto flex flex-col gap-8">
          {pillars.map((pillar, index) => (
            <motion.div 
              key={pillar.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className="group relative bg-surface border border-white/5 rounded-3xl overflow-hidden hover:border-white/20 transition-colors duration-500"
            >
              <div className="flex flex-col lg:flex-row">
                
                {/* Header / Icon Side */}
                <div className="lg:w-1/3 p-8 md:p-12 border-b lg:border-b-0 lg:border-r border-white/5 bg-white/[0.02] flex flex-col justify-between min-h-[300px] lg:min-h-0 relative">
                  <Service3DModel type={pillar.type} />
                  <div className="flex justify-between items-start relative z-10">
                    <motion.div 
                      animate={{ 
                        y: [0, -8, 0],
                        scale: [1, 1.05, 1],
                      }}
                      transition={{ 
                        duration: 5, 
                        repeat: Infinity, 
                        ease: "easeInOut",
                        delay: index * 0.2
                      }}
                      className="p-4 bg-white/5 rounded-2xl text-accent group-hover:scale-110 transition-transform duration-500"
                    >
                      <pillar.icon size={40} strokeWidth={1.5} />
                    </motion.div>
                    <span className="font-mono text-xs text-neutral-500">0{index + 1}</span>
                  </div>
                  <div className="relative z-10">
                    <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold uppercase mb-2 text-white break-words">{pillar.title}</h2>
                    <p className="font-mono text-xs text-accent uppercase tracking-widest">{pillar.subtitle}</p>
                  </div>
                </div>

                {/* Content Side */}
                <div className="lg:w-2/3 p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-12">
                  
                  {/* Problem & Strategy */}
                  <div className="space-y-8">
                    <div>
                      <h3 className="font-mono text-[10px] uppercase text-neutral-500 mb-3 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-500/50"></span>
                        The Problem
                      </h3>
                      <p className="text-neutral-300 text-lg leading-relaxed">
                        {pillar.problem}
                      </p>
                    </div>
                    <div>
                      <h3 className="font-mono text-[10px] uppercase text-neutral-500 mb-3 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                        Our Solution
                      </h3>
                      <p className="text-white text-lg leading-relaxed font-medium">
                        {pillar.strategy}
                      </p>
                    </div>
                  </div>

                  {/* Execution & Outcome */}
                  <div className="flex flex-col justify-between space-y-8">
                    <div>
                      <h3 className="font-mono text-[10px] uppercase text-neutral-500 mb-4">What We Do</h3>
                      <ul className="space-y-3">
                        {pillar.execution.map((item, i) => (
                          <li key={i} className="flex items-start gap-3 text-neutral-400 text-sm border-b border-white/5 pb-2 last:border-0">
                            <ArrowRight size={12} className="text-accent mt-1 shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="bg-white/5 rounded-xl p-6 border border-white/5">
                      <h3 className="font-mono text-[10px] uppercase text-neutral-500 mb-2">The Result</h3>
                      <div className="flex items-center gap-3">
                        <Zap size={18} className="text-accent fill-accent/20" />
                        <span className="text-white font-bold text-lg">{pillar.outcome}</span>
                      </div>
                    </div>

                    <Link to={pillar.link} className="group/link flex items-center gap-2 text-accent font-mono text-xs uppercase tracking-widest hover:gap-4 transition-all duration-300">
                        <span>Learn More About {pillar.title}</span>
                        <ArrowDownRight size={14} className="group-hover/link:rotate-45 transition-transform" />
                    </Link>
                  </div>

                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 7. INTEGRATION SECTION */}
      <section className="py-24 bg-dark border-y border-white/10">
        <div className="max-w-6xl mx-auto px-4 md:px-6 text-center">
          <Reveal width="100%">
            <div className="inline-flex items-center justify-center p-3 bg-white/5 rounded-full mb-8">
              <GitMerge size={24} className="text-accent" />
            </div>
            <h2 className="font-display text-3xl md:text-5xl font-bold uppercase mb-8">IT ALL WORKS TOGETHER</h2>
            <p className="text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed mb-12">
              Brand + Product + Growth + Intelligence. When these four things work together, your business grows faster.
            </p>
          </Reveal>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 opacity-50">
             <div className="h-1 bg-gradient-to-r from-transparent via-accent to-transparent" />
             <div className="h-1 bg-gradient-to-r from-transparent via-accent to-transparent delay-100" />
             <div className="h-1 bg-gradient-to-r from-transparent via-accent to-transparent delay-200" />
             <div className="h-1 bg-gradient-to-r from-transparent via-accent to-transparent delay-300" />
          </div>
        </div>
      </section>

      {/* 8. PROCESS LINK */}
      <section className="py-24 px-4 md:px-6">
        <div className="max-w-[90rem] mx-auto bg-surface border border-white/10 rounded-3xl p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2">
             <span className="font-mono text-accent text-xs uppercase tracking-widest mb-4 block">How We Work</span>
             <h2 className="font-display text-4xl md:text-5xl font-bold uppercase mb-6">Our Process</h2>
             <p className="text-neutral-400 text-lg mb-8">
               Discover → Define → Design → Develop → Scale. <br/>
               <span className="text-white">Simple, effective, and enhanced by AI.</span>
             </p>
             <div className="flex flex-wrap gap-4 font-mono text-xs uppercase text-neutral-500">
                <span>Discover</span> <span className="text-accent">→</span>
                <span>Define</span> <span className="text-accent">→</span>
                <span>Design</span> <span className="text-accent">→</span>
                <span>Develop</span> <span className="text-accent">→</span>
                <span>Scale</span>
             </div>
          </div>
          <div className="md:w-auto">
             <Button to="/process" variant="outline">View Process</Button>
          </div>
        </div>
      </section>

      {/* 9. FINAL CTA */}
      <section className="py-32 md:py-48 px-6 relative overflow-hidden flex flex-col items-center justify-center text-center">
        <Reveal width="100%">
            <h2 className="font-display text-4xl md:text-7xl font-bold mb-8 tracking-tighter text-center">
                READY TO <span className="text-accent">GROW?</span>
            </h2>
        </Reveal>
        
        <Reveal delay={0.2} width="100%">
            <div className="flex justify-center w-full">
                <Button to="/contact" variant="primary" className="px-12 py-5 text-xl">
                    Start a Project
                </Button>
            </div>
        </Reveal>
      </section>

    </div>
  );
};

export default Services;