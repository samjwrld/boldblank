import React from 'react';
import { motion } from 'framer-motion';
import { Reveal } from '../../components/Reveal';
import Button from '../../components/Button';
import { ArrowRight, CheckCircle2, BrainCircuit, Cpu, Sparkles, Workflow, Zap } from 'lucide-react';
import { SEO } from '../../components/SEO';

const AiConsultancy: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full relative text-light overflow-hidden pt-32 pb-24"
    >
      <SEO 
        title="AI Consultancy India | Custom AI Solutions & Automation | Bold Blank Studio"
        description="Bold Blank is a leading AI consultancy in India. We architect custom intelligence layers, automate workflows, and integrate LLMs to give your brand an exponential edge."
        keywords="ai consultancy india, custom ai solutions, workflow automation, llm integration, ai strategy, bold blank studio"
        canonicalUrl="https://boldblank.com/ai-consultancy-india"
      />
      {/* Hero Section */}
      <section className="max-w-[90rem] mx-auto px-6 mb-24">
        <div className="max-w-4xl">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent/30 bg-accent/10 text-accent text-xs font-mono uppercase tracking-widest mb-6">
              <span>The Intelligence Layer</span>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="font-display text-4xl md:text-7xl lg:text-8xl font-bold leading-[0.9] tracking-tighter mb-8 uppercase">
              AI <br/>
              <span className="text-accent">CONSULTANCY</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-xl md:text-2xl text-neutral-400 leading-relaxed max-w-2xl mb-10">
              We don't just use AI tools. We architect custom intelligence layers that enhance your Brand, Product, and Growth engines for exponential scale.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <Button to="/contact" variant="primary" className="px-8 py-4 text-lg">
              Architect Your AI Strategy
            </Button>
          </Reveal>
        </div>
      </section>

      {/* The Problem & Solution */}
      <section className="py-24 bg-surface border-y border-white/5">
        <div className="max-w-[90rem] mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            <Reveal>
              <div>
                <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">The "Manual" Ceiling</h2>
                <p className="text-neutral-400 text-lg leading-relaxed mb-6">
                  Fragmented systems and manual workflows are the silent killers of scale. Most businesses are drowning in repetitive tasks and underutilized data. Using generic AI tools is a band-aid; what you need is a custom-engineered intelligence layer that works for your specific business logic.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div>
                <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 text-accent">The Intelligence Edge</h2>
                <p className="text-neutral-300 text-lg leading-relaxed mb-6">
                  We integrate AI at the core of your operations. From custom LLM agents that handle complex customer queries to predictive analytics that forecast market trends, we build the "brain" of your digital ecosystem. This isn't just automation; it's augmentation.
                </p>
                <ul className="space-y-4">
                  {['Custom LLM & Agent Integration', 'End-to-end Workflow Automation', 'Predictive Data Modeling', 'AI-Driven Content Engines'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-neutral-300">
                      <CheckCircle2 className="w-5 h-5 text-accent" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-24 max-w-[90rem] mx-auto px-6">
        <Reveal width="100%">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-16 text-center uppercase">Intelligence Pillars</h2>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { 
              icon: <Workflow className="w-8 h-8 text-accent" />, 
              title: "Workflow Automation", 
              desc: "Mapping and automating manual processes to free up your team for high-level creative and strategic work." 
            },
            { 
              icon: <Sparkles className="w-8 h-8 text-accent" />, 
              title: "Custom LLM Solutions", 
              desc: "Building proprietary AI agents trained on your data to handle support, sales, or internal knowledge management." 
            },
            { 
              icon: <Cpu className="w-8 h-8 text-accent" />, 
              title: "AI Strategy & Roadmapping", 
              desc: "A comprehensive audit of your business to identify high-impact AI opportunities and a multi-year execution plan." 
            }
          ].map((item, i) => (
            <Reveal key={i} delay={i * 0.1} width="100%">
              <div className="p-8 border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] transition-colors h-full">
                <div className="mb-6">{item.icon}</div>
                <h3 className="font-display text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-neutral-400">{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-24 bg-dark border-y border-white/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Reveal width="100%">
            <h2 className="font-display text-4xl font-bold mb-8 uppercase">Seamless Integration</h2>
            <p className="text-xl text-neutral-400 leading-relaxed mb-12">
              Our AI solutions don't live in a vacuum. They are designed to plug directly into your existing tech stack—whether it's your CRM, CMS, or custom-built product.
            </p>
            <div className="flex flex-wrap justify-center gap-8 opacity-50 grayscale">
                <span className="font-mono text-xs uppercase tracking-widest">OpenAI</span>
                <span className="font-mono text-xs uppercase tracking-widest">Anthropic</span>
                <span className="font-mono text-xs uppercase tracking-widest">LangChain</span>
                <span className="font-mono text-xs uppercase tracking-widest">Pinecone</span>
                <span className="font-mono text-xs uppercase tracking-widest">Make.com</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 text-center px-6">
        <Reveal width="100%">
          <h2 className="font-display text-5xl md:text-7xl font-bold mb-8 uppercase">Ready for the <span className="text-accent">Future?</span></h2>
          <p className="text-xl text-neutral-400 mb-10 max-w-2xl mx-auto">Don't get left behind in the AI revolution. Let's build the intelligence layer your business needs to dominate.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button to="/contact" variant="primary" className="px-10 py-5 text-xl">
              Book a Strategy Call
            </Button>
            <Button to="/work" variant="outline" className="px-10 py-5 text-xl">
              View Case Studies
            </Button>
          </div>
        </Reveal>
      </section>
    </motion.div>
  );
};

export default AiConsultancy;
