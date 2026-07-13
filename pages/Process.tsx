import React, { useRef, useState } from 'react';
import { Reveal } from '../components/Reveal';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Scan, Flag, PenTool, Terminal, Rocket, Info } from 'lucide-react';
import { SEO } from '../components/SEO';

const steps = [
  { 
    num: "01", 
    title: "Discover", 
    desc: "We immerse ourselves in your world. Stakeholder interviews, market analysis, and user research to define the playing field.",
    icon: Scan,
    focus: "Market Intelligence"
  },
  { 
    num: "02", 
    title: "Define", 
    desc: "Synthesizing research into a concrete strategy. This is where we define the roadmap, technical stack, and core brand pillars.",
    icon: Flag,
    focus: "Strategic Blueprint"
  },
  { 
    num: "03", 
    title: "Design", 
    desc: "Iterative visual exploration. We prototype rapidly, testing high-fidelity visuals and interactions against real user needs.",
    icon: PenTool,
    focus: "UI/UX & Motion"
  },
  { 
    num: "04", 
    title: "Develop", 
    desc: "Writing clean, scalable code. We build robust front-ends and secure back-ends that are ready for heavy traffic.",
    icon: Terminal,
    focus: "Full-Stack Engineering"
  },
  { 
    num: "05", 
    title: "Scale", 
    desc: "Launch is just day one. We monitor performance, gather analytics, and iterate to ensure continuous growth.",
    icon: Rocket,
    focus: "Data-Driven Growth"
  }
];

const ProcessStep: React.FC<{ step: typeof steps[0], index: number }> = ({ step, index }) => {
    const ref = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);
    
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center center"]
    });

    // Content animations
    const opacity = useTransform(scrollYProgress, [0, 0.5], [0.3, 1]);
    const x = useTransform(scrollYProgress, [0, 1], [50, 0]);
    
    // Helper for alternating sides
    // We create the negative transform unconditionally to adhere to hook rules
    const negativeX = useTransform(x, (val) => -val);
    const motionX = index % 2 === 0 ? x : negativeX;

    // Dot animations
    const glow = useTransform(scrollYProgress, [0.8, 1], ["0px 0px 0px rgba(204,255,0,0)", "0px 0px 20px rgba(204,255,0,0.5)"]);
    const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1.2]);
    const color = useTransform(scrollYProgress, [0, 1], ["#525252", "#ffffff"]);

    return (
        <motion.div 
            ref={ref}
            style={{ opacity }}
            className={`relative flex flex-col md:flex-row gap-8 mb-32 md:mb-64 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
        >
            {/* Timeline Dot */}
            <div className="absolute left-5 md:left-1/2 top-2 -translate-x-1/2 z-20">
                <motion.div 
                    style={{ 
                        boxShadow: glow,
                        backgroundColor: '#CCFF00', 
                        scale: scale
                    }}
                    className="w-3 h-3 rounded-full border-2 border-dark"
                />
            </div>

            {/* Content Section */}
            <motion.div 
                style={{ x: motionX }}
                className="pl-16 md:pl-0 md:w-1/2 md:px-20"
            >
                <div className={`flex flex-col ${index % 2 === 0 ? 'items-start md:items-start text-left' : 'items-start md:items-end text-left md:text-right'}`}>
                    <motion.span 
                        style={{ color: color }}
                        className="font-display text-4xl md:text-6xl font-bold block mb-4 transition-colors opacity-50"
                    >
                        {step.num}
                    </motion.span>
                    
                    <div 
                        className="relative inline-block"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        <div className="flex items-center gap-4 group cursor-help">
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 font-display uppercase tracking-wider transition-colors duration-300 group-hover:text-accent">
                                {step.title}
                            </h3>
                             {/* Subtle interaction hint */}
                            <div className="hidden md:flex bg-white/10 rounded-full p-1 opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0">
                                <Info size={12} className="text-accent"/>
                            </div>
                        </div>

                        <AnimatePresence>
                            {isHovered && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: 5, scale: 0.95 }}
                                    transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                                    className={`absolute bottom-full mb-4 z-50 w-72 hidden md:block ${index % 2 === 0 ? 'left-0 origin-bottom-left' : 'right-0 origin-bottom-right'}`}
                                >
                                    <div className="bg-neutral-900/95 backdrop-blur-xl border border-white/10 p-5 rounded-xl shadow-2xl relative overflow-hidden">
                                        {/* Decor */}
                                        <div className="absolute top-0 left-0 w-full h-0.5 bg-accent opacity-70" />

                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="bg-accent/10 text-accent p-2 rounded-md">
                                                <step.icon size={18} strokeWidth={2} />
                                            </div>
                                            <span className="font-mono text-[10px] uppercase tracking-widest text-white/70">{step.focus}</span>
                                        </div>
                                        
                                        <p className="text-sm text-neutral-300 leading-relaxed font-sans border-t border-white/5 pt-3">
                                            {step.desc}
                                        </p>
                                    </div>
                                    <div className={`absolute top-full w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-neutral-900/95 ${index % 2 === 0 ? 'left-6' : 'right-6'}`}></div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Static Description - Only Visible on Mobile */}
                    <p className="md:hidden text-neutral-400 text-base leading-relaxed font-sans mt-2">{step.desc}</p>
                </div>
            </motion.div>
            <div className="hidden md:block md:w-1/2" /> 
        </motion.div>
    )
}

const Process: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 70%", "end 70%"]
  });

  // Direct transform for 1:1 scroll feel, removing spring lag for snappier feedback
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div className="w-full">
      <SEO 
        title="Our Process | Bold Blank Studio"
        description="Discover our battle-tested, high-performance process for engineering premium brands and websites. From discovery to development and scaling."
        canonicalUrl="https://boldblank.com/process"
      />
      <section className="pt-24 md:pt-32 pb-20 px-4 md:px-6">
        <div className="max-w-[90rem] mx-auto text-center mb-16 md:mb-24">
          <Reveal width="100%">
            <p className="font-mono text-accent mb-4 tracking-[0.2em]">THE BLUEPRINT</p>
            <h1 className="text-4xl md:text-7xl lg:text-[8vw] font-bold font-display uppercase tracking-tighter">HOW WE BUILD</h1>
          </Reveal>
        </div>

        <div ref={containerRef} className="max-w-5xl mx-auto relative pb-32">
          {/* Base Line */}
          <div className="absolute left-5 md:left-1/2 top-2 bottom-32 w-[2px] -translate-x-1/2 z-0">
             <div className="w-full h-full bg-neutral-800/50" />
          </div>

          {/* Animated Beam */}
          <div className="absolute left-5 md:left-1/2 top-2 bottom-32 w-[2px] -translate-x-1/2 z-10">
              <motion.div 
                style={{ scaleY }}
                className="w-full h-full bg-accent origin-top shadow-[0_0_20px_rgba(204,255,0,0.8)]"
              />
          </div>

          {steps.map((step, index) => (
             <ProcessStep key={index} step={step} index={index} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Process;