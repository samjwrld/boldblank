import React from 'react';
import { motion } from 'framer-motion';
import { Reveal } from '../../components/Reveal';
import Button from '../../components/Button';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { SEO } from '../../components/SEO';

const Branding: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full relative text-light overflow-hidden pt-32 pb-24"
    >
      <SEO 
        title="Branding Agency India | Strategic Brand Identity | Bold Blank Studio"
        description="Bold Blank is a leading branding agency in India. We create strategic brand identities that demand attention and command market share. Elevate your brand with our premium services."
        keywords="branding agency india, brand identity design, strategic branding, bold blank studio"
        canonicalUrl="https://boldblank.com/branding-agency-india"
      />
      {/* Hero Section */}
      <section className="max-w-[90rem] mx-auto px-6 mb-24">
        <div className="max-w-4xl">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent/30 bg-accent/10 text-accent text-xs font-mono uppercase tracking-widest mb-6">
              <span>Service</span>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="font-display text-4xl md:text-7xl lg:text-8xl font-bold leading-[0.9] tracking-tighter mb-8">
              STRATEGIC BRANDING AGENCY IN INDIA
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-xl md:text-2xl text-neutral-400 leading-relaxed max-w-2xl mb-10">
              We build brands that command authority and premium pricing. Visuals that demand attention and strategy that commands market share.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <Button to="/contact" variant="primary" className="px-8 py-4 text-lg">
              Discuss Your Brand
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
                <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">The Cost of a Weak Brand</h2>
                <p className="text-neutral-400 text-lg leading-relaxed mb-6">
                  In today's hyper-competitive market, a generic brand identity is a liability. It forces you to compete on price, makes customer acquisition expensive, and fails to build long-term loyalty. If your brand doesn't instantly communicate premium value, you are leaving money on the table.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div>
                <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 text-accent">The Bold Blank Advantage</h2>
                <p className="text-neutral-300 text-lg leading-relaxed mb-6">
                  We don't just design logos; we engineer brand perception. Our strategic branding process dives deep into your business objectives, target audience psychology, and market positioning. We craft comprehensive brand identities that justify premium pricing and turn casual buyers into loyal advocates.
                </p>
                <ul className="space-y-4">
                  {['Command higher prices', 'Reduce customer acquisition costs', 'Build unwavering trust', 'Stand out in saturated markets'].map((item, i) => (
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

      {/* Process */}
      <section className="py-24 max-w-[90rem] mx-auto px-6">
        <Reveal width="100%">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-16 text-center">Our Branding Process</h2>
        </Reveal>
        <div className="grid md:grid-cols-4 gap-8">
          {[
            { step: "01", title: "Brand Discovery & Auditing", desc: "We analyze your current positioning, competitors, and market gaps." },
            { step: "02", title: "Positioning Strategy", desc: "Defining your unique value proposition, brand voice, and core messaging." },
            { step: "03", title: "Visual Identity Design", desc: "Crafting the logo, typography, color palette, and visual language." },
            { step: "04", title: "Brand Guidelines & Rollout", desc: "Delivering a comprehensive rulebook to maintain brand consistency." }
          ].map((item, i) => (
            <Reveal key={i} delay={i * 0.1} width="100%">
              <div className="p-8 border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] transition-colors h-full">
                <span className="font-mono text-accent text-xl mb-4 block">{item.step}</span>
                <h3 className="font-display text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-neutral-400">{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-surface border-y border-white/5">
        <div className="max-w-4xl mx-auto px-6">
          <Reveal width="100%">
            <h2 className="font-display text-4xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
          </Reveal>
          <div className="space-y-6">
            <Reveal delay={0.1} width="100%">
              <div className="p-6 border border-white/10 bg-dark">
                <h3 className="font-bold text-xl mb-3">How long does a branding project take?</h3>
                <p className="text-neutral-400">A comprehensive brand identity project typically takes 4 to 8 weeks, depending on the complexity of the strategy and the number of deliverables required.</p>
              </div>
            </Reveal>
            <Reveal delay={0.2} width="100%">
              <div className="p-6 border border-white/10 bg-dark">
                <h3 className="font-bold text-xl mb-3">Do you provide brand strategy or just logo design?</h3>
                <p className="text-neutral-400">We are a full-service branding agency. We believe a logo is useless without a strategy. Every visual identity we create is rooted in deep market research and positioning strategy.</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 text-center px-6">
        <Reveal width="100%">
          <h2 className="font-display text-5xl md:text-7xl font-bold mb-8">Ready to Elevate Your Brand?</h2>
          <p className="text-xl text-neutral-400 mb-10 max-w-2xl mx-auto">Stop losing clients to competitors with better branding. Let's build an identity that reflects your true value.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button to="/contact" variant="primary" className="px-10 py-5 text-xl">
              Start Your Project
            </Button>
            <Button to="/work" variant="outline" className="px-10 py-5 text-xl">
              View Our Work
            </Button>
          </div>
        </Reveal>
      </section>
    </motion.div>
  );
};

export default Branding;
