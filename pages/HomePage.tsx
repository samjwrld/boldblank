import React, { Suspense, lazy } from 'react';
import { Reveal } from '../components/Reveal';
import Button from '../components/Button';
import Magnetic from '../components/Magnetic';
import BrandMarquee from '../components/BrandMarquee';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { 
  ArrowDownRight, 
  CheckCircle2, 
  BrainCircuit, 
  Zap, 
  BarChart3, 
  Layers, 
  Star
} from 'lucide-react';

import { SEO } from '../components/SEO';
import { SmartLink } from '../components/SmartLink';

// Lazy load the Case Studies section for better initial load performance
const CaseStudiesPreview = lazy(() => import('../components/CaseStudiesPreview'));

const HomePage: React.FC = () => {
  const { scrollY } = useScroll();
  const shouldReduceMotion = useReducedMotion();
  
  // Hero parallax effects
  const opacity = useTransform(scrollY, [0, 300], [1, shouldReduceMotion ? 1 : 0]);

  // Structured Data for SEO
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Bold Blank Studio",
    "image": "/images/logo.png",
    "url": "https://boldblank.com",
    "telephone": "+910000000000",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Hyderabad",
      "addressRegion": "Telangana",
      "addressCountry": "IN"
    },
    "priceRange": "₹₹₹",
    "description": "Premium Branding and Website Design Agency in India. We build high-performance digital systems for ambitious brands."
  };

  return (
    <main className="w-full relative text-light overflow-hidden">
      <SEO 
        title="Branding & Website Design Agency in India | Bold Blank Studio"
        description="Bold Blank is a premium branding and website design agency in India. We engineer strategic brand identities and high-performance websites that convert visitors into high-value clients."
        keywords="branding agency india, website design agency, ui ux design agency india, premium digital agency, bold blank studio"
        canonicalUrl="https://boldblank.com/"
        schema={schema}
      />
      
      {/* 1. HERO — CLEAR POSITIONING + CTA */}
      <header 
        className="h-[100dvh] min-h-[600px] relative flex flex-col justify-center items-center overflow-hidden px-4 pt-24 md:pt-32 pb-20 perspective-1000"
      >
        <motion.div style={{ opacity }} className="relative z-10 w-full max-w-[95vw] flex flex-col items-center justify-center gap-2">
            {/* Semantic H1 for SEO, visually artistic typography */}
            <h1 className="sr-only">Branding & Website Design Agency in India</h1>
            <div className="relative leading-[0.9] md:leading-[0.8] w-full flex flex-col items-center justify-center perspective-1000">
                <motion.div 
                    aria-hidden="true"
                    initial={shouldReduceMotion ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    className="font-display font-bold text-[16vw] md:text-[12vw] lg:text-[10rem] xl:text-[11rem] text-white tracking-tighter mix-blend-difference w-full text-center"
                >
                    BOLD
                </motion.div>
                <div className="relative -mt-[1vw] md:-mt-[1vw] w-full text-center perspective-1000">
                    <motion.div 
                        aria-hidden="true"
                        initial={shouldReduceMotion ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: shouldReduceMotion ? 0 : 0.2, ease: [0.22, 1, 0.36, 1] }}
                        className="font-display font-bold text-[16vw] md:text-[12vw] lg:text-[10rem] xl:text-[11rem] text-accent tracking-tighter mix-blend-difference w-full text-center"
                    >
                        BLANK
                    </motion.div>
                </div>
            </div>

            <motion.div 
                initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: shouldReduceMotion ? 0 : 0.8, duration: 0.8 }}
                className="flex flex-col items-center gap-6 md:gap-8 max-w-2xl"
            >
                <p 
                    className="text-sm md:text-lg text-neutral-400 font-mono uppercase tracking-widest text-center px-4"
                    style={{ letterSpacing: "0.2em" }}
                >
                    We engineer digital dominance for ambitious brands.
                </p>
                <Magnetic>
                    <Button to="/contact" variant="primary" className="px-6 py-3 md:px-8 md:py-4 text-base md:text-lg">
                        Start Your Project
                    </Button>
                </Magnetic>

                {/* Scroll Indicator */}
                <motion.div 
                    initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: shouldReduceMotion ? 0 : 1.5 }}
                    className="flex flex-col items-center gap-2 pointer-events-none mt-12"
                >
                    <span className="font-mono text-[10px] uppercase tracking-widest text-neutral-500">Scroll</span>
                    <div className="w-px h-12 bg-gradient-to-b from-accent to-transparent" />
                </motion.div>
            </motion.div>
        </motion.div>
      </header>

      {/* 2. BRAND STATEMENT */}
      <section className="py-20 md:py-32 px-4 md:px-6 overflow-hidden relative">
        <div className="max-w-[100rem] mx-auto relative z-10">
            <Reveal width="100%">
                <h2 className="font-display text-4xl md:text-8xl lg:text-[10rem] xl:text-[12rem] font-bold uppercase tracking-tighter leading-[0.85] text-white">
                    START <span className="text-neutral-700">BLANK.</span> <br/>
                    BUILD <span className="text-accent">BOLD.</span>
                </h2>
            </Reveal>
        </div>
      </section>

      {/* 3. SERVICES — TECHNICAL GRID DESIGN */}
      <section className="py-24 md:py-48 px-4 md:px-6 bg-surface relative border-y border-white/5" aria-labelledby="services-title">
        <div className="max-w-[100rem] mx-auto">
            <Reveal width="100%">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
                    <div className="max-w-2xl">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-[1px] bg-accent" />
                            <h2 id="services-title" className="font-mono text-xs text-accent uppercase tracking-[0.3em] m-0">Core Capabilities</h2>
                        </div>
                        <h3 className="font-display text-3xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tighter leading-none">
                            WE BUILD <br/>
                            <span className="text-neutral-600">SYSTEMS.</span>
                        </h3>
                    </div>
                    <p className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest max-w-[200px] leading-relaxed">
                        05 Strategic Pillars <br/>
                        Engineered for <br/>
                        Exponential Scale.
                    </p>
                </div>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 border-t border-l border-white/10">
                {[
                    {
                        title: "Brand Identity",
                        desc: "Visuals that demand attention and strategy that commands market share. We build premium authority.",
                        link: "/branding-agency-india",
                        icon: <Star className="w-5 h-5" />
                    },
                    {
                        title: "Website Design",
                        desc: "High-performance, custom-coded platforms built to convert casual visitors into high-ticket leads.",
                        link: "/website-design-agency",
                        icon: <Zap className="w-5 h-5" />
                    },
                    {
                        title: "UI/UX Design",
                        desc: "Frictionless, intuitive product experiences rooted in user psychology and data-driven insights.",
                        link: "/ui-ux-design-agency",
                        icon: <Layers className="w-5 h-5" />
                    },
                    {
                        title: "Digital Marketing",
                        desc: "Data-driven growth strategies that find your best customers and scale your revenue predictably.",
                        link: "/digital-marketing-agency-india",
                        icon: <BarChart3 className="w-5 h-5" />
                    },
                    {
                        title: "AI Consultancy",
                        desc: "Custom intelligence layers and workflow automation to give your brand an exponential scale edge.",
                        link: "/ai-consultancy-india",
                        icon: <BrainCircuit className="w-5 h-5" />
                    }
                ].map((item, i) => (
                    <Reveal key={i} delay={i * 0.05} className="h-full" width="100%">
                        <SmartLink 
                            to={item.link} 
                            className="group relative p-6 md:p-8 xl:p-6 2xl:p-10 border-r border-b border-white/10 bg-transparent hover:bg-accent transition-all duration-700 h-full flex flex-col justify-between min-h-[450px] overflow-hidden block"
                        >
                            {/* Background Number Accent */}
                            <span className="absolute -bottom-4 -right-4 font-display text-[10rem] 2xl:text-[12rem] font-bold text-white/[0.02] group-hover:text-black/[0.05] transition-colors duration-700 pointer-events-none">
                                0{i + 1}
                            </span>

                            <div className="relative z-10">
                                <div className="flex justify-between items-center mb-12">
                                    <div className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center text-accent group-hover:text-black group-hover:border-black/20 transition-all duration-700">
                                        {item.icon}
                                    </div>
                                    <span className="font-mono text-[10px] text-neutral-500 group-hover:text-black/50 transition-colors duration-700 uppercase tracking-widest">
                                        Pillar 0{i + 1}
                                    </span>
                                </div>
                                
                                <h4 className="font-display text-2xl xl:text-xl 2xl:text-3xl font-bold mb-6 text-white group-hover:text-black transition-colors duration-700 uppercase leading-[0.9] tracking-tighter min-h-[4rem] xl:min-h-[3.5rem] 2xl:min-h-[5.5rem] flex items-start break-words text-balance">
                                    {item.title}
                                </h4>
                                <p className="text-neutral-500 group-hover:text-black/70 transition-colors duration-700 text-sm leading-relaxed font-sans">
                                    {item.desc}
                                </p>
                            </div>

                            <div className="relative z-10 mt-12 flex items-center gap-3 text-accent group-hover:text-black font-mono text-[10px] uppercase tracking-[0.2em] transition-all duration-700">
                                <span className="w-8 h-[1px] bg-accent group-hover:bg-black transition-colors duration-700" />
                                <span>Explore Expertise</span>
                                <ArrowDownRight className="w-3 h-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-700" />
                            </div>
                        </SmartLink>
                    </Reveal>
                ))}
            </div>
        </div>
      </section>

      {/* 3. WHY CHOOSE US — STRATEGIC DIFFERENTIATORS */}
      <section className="py-24 md:py-32 px-6 relative overflow-hidden" aria-labelledby="why-us-title">
        <div className="absolute inset-0 bg-accent/5" />
        <div className="max-w-[90rem] mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                <Reveal width="100%">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent/30 bg-accent/10 text-accent text-xs font-mono uppercase tracking-widest mb-6">
                            <BrainCircuit className="w-3 h-3" />
                            <span>Why Bold Blank</span>
                        </div>
                        <h2 id="why-us-title" className="font-display text-4xl md:text-6xl font-bold mb-8 leading-tight">
                            BEING "GOOD ENOUGH" IS <br />
                            A <span className="text-accent">LIABILITY.</span>
                        </h2>
                        <p className="text-neutral-400 text-lg leading-relaxed max-w-xl mb-8">
                            In a saturated market, a generic brand identity and a slow website signal low value. We help you communicate premium authority instantly.
                        </p>
                        <div className="space-y-4">
                            {["Systems over services", "Intelligence over guesswork", "Strategy over trends"].map((text, i) => (
                                <div key={i} className="flex items-center gap-3 text-white font-mono text-sm uppercase tracking-widest">
                                    <CheckCircle2 className="w-5 h-5 text-accent" />
                                    <span>{text}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </Reveal>

                <div className="grid sm:grid-cols-2 gap-6">
                    {[
                        {
                            icon: <Layers className="w-6 h-6" />,
                            title: "Operations",
                            desc: "Automate daily tasks so you can focus on high-level growth."
                        },
                        {
                            icon: <BarChart3 className="w-6 h-6" />,
                            title: "Marketing",
                            desc: "Use data to find and reach the right customers with precision."
                        },
                        {
                            icon: <Zap className="w-6 h-6" />,
                            title: "Products",
                            desc: "Build features that learn and adapt to users' needs."
                        },
                        {
                            icon: <BrainCircuit className="w-6 h-6" />,
                            title: "Support",
                            desc: "24/7 instant answers for your customers via AI."
                        }
                    ].map((item, i) => (
                        <Reveal key={i} delay={0.2 + (i * 0.1)} width="100%">
                            <article className="p-6 bg-dark border border-white/10 hover:border-accent/50 transition-colors group h-full">
                                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-accent mb-4 group-hover:scale-110 transition-transform">
                                    {item.icon}
                                </div>
                                <h3 className="font-display text-xl font-bold text-white mb-2">{item.title}</h3>
                                <p className="text-neutral-400 text-sm">{item.desc}</p>
                            </article>
                        </Reveal>
                    ))}
                </div>
            </div>
        </div>
      </section>

      {/* 4. TRUST — SOCIAL PROOF */}
      <section className="py-20 bg-dark border-t border-white/10">
        <div className="max-w-[90rem] mx-auto px-6 mb-12 text-center flex flex-col items-center">
            <Reveal width="100%">
                <h2 className="font-mono text-xs md:text-sm text-neutral-500 uppercase tracking-widest mb-4 text-center">Trusted by industry leaders to drive measurable growth.</h2>
            </Reveal>
        </div>
        <BrandMarquee />
      </section>

      {/* 5. CASE STUDIES — LAZY LOADED */}
      <Suspense fallback={<div className="h-96 flex items-center justify-center font-mono text-accent">Loading Portfolio...</div>}>
        <CaseStudiesPreview />
      </Suspense>

      {/* 6. FINAL CTA — CONVERSION FOCUS */}
      <section className="py-32 md:py-48 px-6 relative overflow-hidden" aria-labelledby="cta-title">
        <div className="absolute inset-0 bg-accent/5 radial-gradient" />
        
        <div className="max-w-[90rem] mx-auto relative z-10 flex flex-col items-center text-center">
            <Reveal width="100%">
                <h2 id="cta-title" className="font-display text-4xl sm:text-5xl md:text-8xl font-bold mb-8 tracking-tighter leading-tight md:leading-none text-center uppercase">
                    READY TO BUILD<br />
                    SOMETHING <span className="text-accent">BOLD?</span>
                </h2>
            </Reveal>
            
            <Reveal delay={0.2} width="100%">
                <p className="text-neutral-300 text-xl mb-12 max-w-2xl mx-auto text-center">
                    We partner with ambitious companies ready to invest in their next stage of growth. Request a strategic audit today.
                </p>
                <div className="flex flex-col md:flex-row gap-6 justify-center">
                    <Button to="/contact" variant="primary" className="w-full md:w-auto px-12 py-5 text-xl justify-center">
                        Request a Strategic Audit
                    </Button>
                    <Button to="/work" variant="outline" className="w-full md:w-auto px-12 py-5 text-xl justify-center">
                        View Our Work
                    </Button>
                </div>
            </Reveal>
        </div>
      </section>

    </main>
  );
};

export default HomePage;