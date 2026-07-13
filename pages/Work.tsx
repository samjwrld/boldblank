import React, { useState } from 'react';
import { Reveal } from '../components/Reveal';
import BrandMarquee from '../components/BrandMarquee';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, CheckCircle2, Zap, Layers, Box, BrainCircuit, Bot, Sparkles, Workflow, Stethoscope, Ruler, Building2, Truck, Plane } from 'lucide-react';
import { SEO } from '../components/SEO';

// --- Data ---

type Category = 'All' | 'Brand' | 'Growth' | 'Product' | 'Intelligence';

interface Project {
  id: string;
  client: string;
  category: Category;
  subcategory: string;
  deliverables: string[];
  challenge: string;
  approach: string;
  impact: string;
  image: string;
  year: string;
  aiRole?: string; // New field for Intelligence layer
}

const projects: Project[] = [
  { 
    id: "viral-velvet", 
    client: "VIRALVELVET.COM", 
    category: "Growth", 
    subcategory: "Performance Marketing", 
    deliverables: ["Paid Acquisition", "CRO", "Funnel Architecture"],
    challenge: "Scaling high-ticket customer acquisition while lowering customer acquisition costs (CAC).",
    approach: "We engineered high-converting bespoke landing pages, optimized the paid media funnel, and set up continuous multi-variant CRO testing.",
    impact: "3.2x ROAS Increase",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
    year: "2024"
  },
  { 
    id: "fleet-ops", 
    client: "FLEET OPS", 
    category: "Product", 
    subcategory: "Fleet Management", 
    deliverables: ["Web App", "Analytics", "Tracking"],
    challenge: "Managing large-scale fleet operations efficiently.",
    approach: "We developed a comprehensive dashboard for real-time fleet tracking and analytics.",
    impact: "30% Cost Reduction",
    image: "https://picsum.photos/seed/fleetops/800/600",
    year: "2024"
  },
  { 
    id: "tassk", 
    client: "TASSK.CO.IN", 
    category: "Product", 
    subcategory: "Task Management", 
    deliverables: ["Web Platform", "UX/UI Design", "Automation"],
    challenge: "Streamlining team collaboration and task tracking.",
    approach: "We built an intuitive task management platform with automated workflows.",
    impact: "50% Faster Delivery",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    year: "2024"
  },
  { 
    id: "01", 
    client: "THE KONCEPT HOUSE", 
    category: "Product", 
    subcategory: "Web Experience", 
    deliverables: ["Website", "3D Design", "Development"],
    challenge: "Showcasing architectural excellence in a digital format.",
    approach: "We built an immersive 3D portfolio that brings spaces to life online.",
    impact: "300% Lead Increase",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800&auto=format&fit=crop",
    year: "2024"
  },
  { 
    id: "02", 
    client: "PATEL'S GROUP", 
    category: "Growth", 
    subcategory: "Digital Strategy", 
    deliverables: ["UX Design", "Frontend", "Data Viz"],
    challenge: "Complex business data was difficult for stakeholders to digest.",
    approach: "We created a unified digital strategy and intuitive data dashboards.",
    impact: "40% Efficiency Boost",
    image: "https://picsum.photos/seed/patel/800/600",
    year: "2023"
  },
  { 
    id: "03", 
    client: "W DESIGN STUDIO", 
    category: "Brand", 
    subcategory: "Identity System", 
    deliverables: ["Strategy", "Logo", "Visuals"],
    challenge: "Needed a cohesive visual language for diverse verticals.",
    approach: "We developed a flexible brand architecture that unifies their portfolio.",
    impact: "Brand Value +40%",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop",
    year: "2023"
  },
  { 
    id: "04", 
    client: "BHARAT IP DEFENSE", 
    category: "Intelligence", 
    subcategory: "AI Security", 
    deliverables: ["Automation", "AI Agent", "Analytics"],
    challenge: "Protecting intellectual property in a fast-paced digital world.",
    approach: "We deployed AI-driven monitoring for automated threat detection.",
    impact: "99% Threat Block Rate",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=800&auto=format&fit=crop",
    year: "2025",
    aiRole: "AI Threat Monitor"
  },
  { 
    id: "05", 
    client: "MOON CHAIN DAO", 
    category: "Growth", 
    subcategory: "Community", 
    deliverables: ["Strategy", "Social Media", "Governance UI"],
    challenge: "Building trust and engagement in a crowded web3 space.",
    approach: "We designed a transparent governance interface and community hub.",
    impact: "50k+ New Members",
    image: "https://picsum.photos/seed/moon/800/600",
    year: "2024"
  },
  { 
    id: "06", 
    client: "PEARL WHITE DESIGNS", 
    category: "Brand", 
    subcategory: "Rebranding", 
    deliverables: ["Naming", "Logo", "Guidelines"],
    challenge: "Existing brand identity didn't reflect their premium positioning.",
    approach: "We crafted a minimalist, high-end visual identity system.",
    impact: "2x Client Retention",
    image: "https://picsum.photos/seed/pearl/800/600",
    year: "2024"
  },
  { 
    id: "07", 
    client: "SREE SAI TRANSPORT TOGO", 
    category: "Product", 
    subcategory: "Fleet Management App", 
    deliverables: ["Mobile App", "Fuel Tracking", "Maintenance"],
    challenge: "Tracking machine work, fuel consumption, and maintenance schedules was manual and inefficient.",
    approach: "We built a centralized app to track machine hours, fuel usage, and maintenance logs in real-time.",
    impact: "100% Digital Tracking",
    image: "https://picsum.photos/seed/sree/800/600",
    year: "2024"
  },
  { 
    id: "08", 
    client: "CUREFOREVER.IN", 
    category: "Product", 
    subcategory: "Health Platform", 
    deliverables: ["App", "Web Platform"],
    challenge: "Simplifying patient access to chronic care management.",
    approach: "We built a user-centric telemedicine platform for seamless care.",
    impact: "10k+ Active Users",
    image: "https://picsum.photos/seed/cure/800/600",
    year: "2024"
  }
];

const industries = [
  { name: "Fintech", icon: Box },
  { name: "E-Commerce", icon: Zap },
  { name: "Web3 / Crypto", icon: Layers },
  { name: "SaaS", icon: CheckCircle2 },
  { name: "Healthcare", icon: Stethoscope },
  { name: "Interiors & Architects", icon: Ruler },
  { name: "Real-Estate", icon: Building2 },
  { name: "Logistics", icon: Truck },
  { name: "Tourism & Hospitality", icon: Plane },
];

const Work: React.FC = () => {
  const [filter, setFilter] = useState<Category>('All');

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div className="w-full">
      <SEO 
        title="Our Work | Portfolio | Bold Blank Studio"
        description="Explore our portfolio of strategic branding, high-performance websites, and intuitive product designs. See how we help ambitious companies scale."
        canonicalUrl="https://boldblank.com/work"
      />
      
      {/* 1. INTRO — POSITIONING */}
      <section className="pt-32 md:pt-48 pb-20 px-4 md:px-6">
        <div className="max-w-[90rem] mx-auto">
          <Reveal width="100%">
            <h1 className="font-display text-4xl md:text-7xl lg:text-[7vw] font-bold uppercase tracking-tighter leading-[0.9] mb-8">
              WE BUILD THINGS<br/>
              <span className="text-accent">THAT WORK.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2} width="100%">
            <p className="text-xl md:text-2xl text-neutral-400 max-w-3xl font-light leading-relaxed">
              We build brands, products, and systems that solve real problems and help businesses grow.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 2. PROJECT TYPE FILTER */}
      <section className="px-4 md:px-6 mb-12 sticky top-20 md:top-24 z-30">
        <div className="max-w-[90rem] mx-auto">
          <div className="flex flex-wrap gap-4 p-2 bg-surface/80 backdrop-blur-md border border-white/10 rounded-full w-fit">
            {(['All', 'Brand', 'Growth', 'Product', 'Intelligence'] as Category[]).map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 md:px-6 py-2 rounded-full font-mono text-xs uppercase tracking-widest transition-all duration-300 ${
                  filter === cat 
                    ? 'bg-accent text-black font-bold' 
                    : 'text-neutral-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {cat === 'Intelligence' ? 'AI' : cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CAPABILITY GRID & 5. OUTCOME LAYER */}
      <section className="px-4 md:px-6 pb-32 min-h-screen">
        <div className="max-w-[90rem] mx-auto">
          <motion.div layout className="grid grid-cols-1 gap-8">
            <AnimatePresence mode='popLayout'>
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5 }}
                  className="group relative bg-surface border border-white/5 hover:border-white/20 transition-colors duration-500 rounded-3xl overflow-hidden block"
                >
                  <Link to={`/work/${project.id}`} className="flex flex-col lg:flex-row h-full">
                    
                    {/* Visual Side */}
                    <div className="lg:w-2/5 relative h-64 lg:h-auto overflow-hidden">
                      <div className="absolute inset-0 bg-neutral-900/20 group-hover:bg-transparent transition-colors z-10" />
                      <img 
                        src={project.image} 
                        alt={project.client}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
                      />
                      <div className="absolute top-4 left-4 z-20 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                        <span className="font-mono text-[10px] uppercase tracking-widest text-white">{project.category === 'Intelligence' ? 'AI' : project.category}</span>
                      </div>
                      {project.aiRole && (
                        <div className="absolute bottom-4 left-4 z-20 bg-accent/90 backdrop-blur-md px-3 py-1 rounded-full border border-accent/20 flex items-center gap-2">
                            <BrainCircuit size={12} className="text-black" />
                            <span className="font-mono text-[10px] uppercase tracking-widest text-black font-bold">{project.aiRole}</span>
                        </div>
                      )}
                    </div>

                    {/* Content Side */}
                    <div className="lg:w-3/5 p-6 md:p-12 flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between items-start mb-6">
                          <div>
                            <h2 className="font-display text-2xl md:text-5xl font-bold uppercase mb-2 text-white">{project.client}</h2>
                            <p className="font-mono text-xs text-accent uppercase tracking-widest">{project.subcategory}</p>
                          </div>
                          <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-full border border-white/10 group-hover:bg-accent group-hover:text-black group-hover:border-accent transition-all duration-300">
                            <ArrowUpRight size={24} />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8">
                          <div>
                            <h4 className="font-mono text-[10px] uppercase text-neutral-500 mb-2">The Problem</h4>
                            <p className="text-neutral-300 text-sm leading-relaxed">{project.challenge}</p>
                          </div>
                          <div>
                            <h4 className="font-mono text-[10px] uppercase text-neutral-500 mb-2">Our Solution</h4>
                            <p className="text-neutral-300 text-sm leading-relaxed">{project.approach}</p>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-2 mb-8">
                          {project.deliverables.map((item, i) => (
                            <span key={i} className="px-3 py-1 border border-white/10 rounded-full text-[10px] font-mono text-neutral-400 uppercase tracking-wider">
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="pt-6 border-t border-white/10">
                        <div className="flex items-center gap-3">
                          <Zap size={16} className="text-accent" />
                          <span className="font-bold text-white text-lg">{project.impact}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* 4. INTELLIGENCE LAYER — AI IN ACTION */}
      <section className="py-24 bg-dark border-y border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-accent/5" />
        <div className="max-w-[90rem] mx-auto px-6 relative z-10">
            <Reveal width="100%">
                <div className="flex items-center gap-3 mb-8">
                    <div className="p-2 bg-accent/10 rounded-lg text-accent">
                        <BrainCircuit size={24} />
                    </div>
                    <h2 className="font-display text-3xl md:text-5xl font-bold uppercase">AI & Automation</h2>
                </div>
                <p className="text-xl text-neutral-400 max-w-3xl leading-relaxed mb-16">
                    We use AI to make your business smarter and faster. We automate boring tasks and help you understand your customers better.
                </p>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                    {
                        icon: Workflow,
                        title: "Automation",
                        desc: "Let AI handle the repetitive work 24/7."
                    },
                    {
                        icon: Sparkles,
                        title: "Predictions",
                        desc: "Know what your customers want before they ask."
                    },
                    {
                        icon: Bot,
                        title: "Smart Chatbots",
                        desc: "Instant answers for your customers, anytime."
                    }
                ].map((item, i) => (
                    <Reveal key={i} delay={i * 0.1} width="100%" className="h-full">
                        <div className="p-8 bg-surface border border-white/10 hover:border-accent/50 transition-colors group h-full flex flex-col">
                            <item.icon className="w-8 h-8 text-neutral-500 group-hover:text-accent mb-6 transition-colors" />
                            <h3 className="font-display text-xl font-bold text-white mb-3">{item.title}</h3>
                            <p className="text-neutral-400 text-sm leading-relaxed flex-grow">{item.desc}</p>
                        </div>
                    </Reveal>
                ))}
            </div>
        </div>
      </section>

      {/* 6. FEATURED INTELLIGENT CASE STUDIES */}
      <section className="py-24 bg-surface">
        <div className="max-w-[90rem] mx-auto px-4 md:px-6">
          <Reveal width="100%">
            <div className="mb-16">
              <span className="font-mono text-accent text-xs uppercase tracking-widest mb-2 block">Case Studies</span>
              <h2 className="font-display text-4xl md:text-6xl font-bold uppercase">Featured Work</h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Case Study 1: AI Focus */}
            <Reveal delay={0.1} width="100%">
              <div className="group w-full">
                <div className="aspect-video bg-neutral-900 rounded-2xl overflow-hidden mb-8 relative">
                   <img src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1200&auto=format&fit=crop" alt="Bharat IP Defense Case Study" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
                      <h3 className="font-display text-4xl font-bold text-white">BHARAT IP DEFENSE</h3>
                   </div>
                   <div className="absolute top-4 right-4 bg-accent text-black px-3 py-1 font-mono text-xs font-bold uppercase tracking-widest rounded-full">
                        AI Powered
                   </div>
                </div>
                <div className="space-y-6">
                   <div className="grid grid-cols-3 gap-4 border-b border-white/10 pb-6">
                      <div>
                        <span className="block font-mono text-[10px] text-neutral-500 uppercase mb-1">Problem</span>
                        <p className="text-sm text-neutral-300">IP Theft Risk</p>
                      </div>
                      <div>
                        <span className="block font-mono text-[10px] text-neutral-500 uppercase mb-1">Solution</span>
                        <p className="text-sm text-neutral-300">AI Threat Monitor</p>
                      </div>
                      <div>
                        <span className="block font-mono text-[10px] text-neutral-500 uppercase mb-1">Result</span>
                        <p className="text-sm text-accent font-bold">99% Block Rate</p>
                      </div>
                   </div>
                   <p className="text-neutral-400 leading-relaxed">
                      We deployed an AI-driven monitoring system that detects and blocks intellectual property threats in real-time, securing their digital assets globally.
                   </p>
                   <Button to="/work/04" variant="outline" className="mt-4">Read Story</Button>
                </div>
              </div>
            </Reveal>

            {/* Case Study 2: Product Focus */}
            <Reveal delay={0.2} width="100%">
              <div className="group w-full">
                <div className="aspect-video bg-neutral-900 rounded-2xl overflow-hidden mb-8 relative">
                   <img src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200&auto=format&fit=crop" alt="The Koncept House Case Study" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
                      <h3 className="font-display text-4xl font-bold text-white">THE KONCEPT HOUSE</h3>
                   </div>
                </div>
                <div className="space-y-6">
                   <div className="grid grid-cols-3 gap-4 border-b border-white/10 pb-6">
                      <div>
                        <span className="block font-mono text-[10px] text-neutral-500 uppercase mb-1">Problem</span>
                        <p className="text-sm text-neutral-300">Static Portfolio</p>
                      </div>
                      <div>
                        <span className="block font-mono text-[10px] text-neutral-500 uppercase mb-1">Solution</span>
                        <p className="text-sm text-neutral-300">Immersive 3D Web</p>
                      </div>
                      <div>
                        <span className="block font-mono text-[10px] text-neutral-500 uppercase mb-1">Result</span>
                        <p className="text-sm text-accent font-bold">300% More Leads</p>
                      </div>
                   </div>
                   <p className="text-neutral-400 leading-relaxed">
                      We transformed their digital presence from a standard portfolio into an immersive 3D experience, allowing clients to virtually tour architectural spaces.
                   </p>
                   <Button to="/work/01" variant="outline" className="mt-4">Read Story</Button>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 7. INDUSTRY / USE CASE RANGE */}
      <section className="py-24 px-4 md:px-6">
        <div className="max-w-5xl mx-auto text-center flex flex-col items-center">
            <Reveal width="100%">
                <h2 className="font-display text-3xl font-bold mb-12 uppercase text-center">Industries We Help</h2>
            </Reveal>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                {industries.map((ind, i) => (
                    <Reveal key={i} delay={i * 0.1} width="100%" className="h-full">
                        <div className="flex flex-col items-center gap-4 p-6 border border-white/5 rounded-2xl hover:bg-white/5 transition-colors group h-full w-full justify-center">
                            <div className="p-4 bg-white/5 rounded-full text-neutral-400 group-hover:text-accent group-hover:bg-accent/10 transition-colors">
                                <ind.icon size={32} strokeWidth={1.5} />
                            </div>
                            <span className="font-mono text-sm uppercase tracking-widest">{ind.name}</span>
                        </div>
                    </Reveal>
                ))}
            </div>
        </div>
      </section>

      {/* 8. TRUST STRIP */}
      <section className="py-20 bg-dark border-t border-white/10">
        <div className="max-w-[90rem] mx-auto px-6 mb-12 text-center flex flex-col items-center">
            <Reveal width="100%">
                <h3 className="font-display text-2xl md:text-3xl font-bold text-white text-center">
                    Trusted by <span className="text-accent">smart companies.</span>
                </h3>
            </Reveal>
        </div>
        <BrandMarquee />
      </section>

      {/* 9. FINAL CTA */}
      <section className="py-32 md:py-48 px-6 relative overflow-hidden flex flex-col items-center justify-center text-center bg-surface">
        <Reveal width="100%">
            <h2 className="font-display text-4xl md:text-7xl font-bold mb-8 tracking-tighter text-center">
                READY TO <span className="text-accent">BUILD?</span>
            </h2>
        </Reveal>
        
        <Reveal delay={0.2} width="100%">
            <div className="flex justify-center w-full">
                <Button to="/contact" variant="primary" className="px-12 py-5 text-xl">
                    Start Your Project
                </Button>
            </div>
        </Reveal>
      </section>

    </div>
  );
};

export default Work;