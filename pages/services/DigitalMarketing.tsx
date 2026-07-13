import React from 'react';
import { motion } from 'framer-motion';
import { Reveal } from '../../components/Reveal';
import Button from '../../components/Button';
import { ArrowRight, CheckCircle2, TrendingUp, BarChart3, Target, Zap } from 'lucide-react';
import { SEO } from '../../components/SEO';

const DigitalMarketing: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full relative text-light overflow-hidden pt-32 pb-24"
    >
      <SEO 
        title="Digital Marketing Agency India | Growth & Performance Marketing | Bold Blank Studio"
        description="Bold Blank is a premier digital marketing agency in India. We specialize in data-driven growth strategies, SEO, and performance marketing that scale your revenue predictably."
        keywords="digital marketing agency india, performance marketing, growth marketing, seo agency india, bold blank studio"
        canonicalUrl="https://boldblank.com/digital-marketing-agency-india"
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
            <h1 className="font-display text-4xl md:text-7xl lg:text-8xl font-bold leading-[0.9] tracking-tighter mb-8 uppercase">
              DATA-DRIVEN <br/>
              <span className="text-accent">DIGITAL MARKETING</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-xl md:text-2xl text-neutral-400 leading-relaxed max-w-2xl mb-10">
              We stop the guesswork. We use data to find your best customers and build high-performance marketing systems that scale your revenue predictably.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <Button to="/contact" variant="primary" className="px-8 py-4 text-lg">
              Scale Your Growth
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
                <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">The Trap of "Vanity Metrics"</h2>
                <p className="text-neutral-400 text-lg leading-relaxed mb-6">
                  Many agencies focus on likes, shares, and impressions. But you can't pay your bills with "engagement." Most businesses waste thousands on ads that don't convert because they lack a strategic growth engine. Without a data-driven approach, marketing is just expensive gambling.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div>
                <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 text-accent">The Bold Blank Growth Engine</h2>
                <p className="text-neutral-300 text-lg leading-relaxed mb-6">
                  We focus on the only metric that matters: **ROI**. Our digital marketing systems are built on deep analytics, psychological triggers, and continuous optimization. We don't just run ads; we architect full-funnel journeys that turn complete strangers into high-value, loyal customers.
                </p>
                <ul className="space-y-4">
                  {['Predictable revenue scaling', 'Lower customer acquisition costs', 'Data-backed decision making', 'Full-funnel optimization'].map((item, i) => (
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
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-16 text-center uppercase">Our Growth Pillars</h2>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { 
              icon: <Target className="w-8 h-8 text-accent" />, 
              title: "SEO & Content Strategy", 
              desc: "Dominating search results for high-intent keywords that bring in qualified leads organically." 
            },
            { 
              icon: <Zap className="w-8 h-8 text-accent" />, 
              title: "Performance Marketing", 
              desc: "Hyper-targeted paid advertising across Meta, Google, and LinkedIn with a focus on conversion." 
            },
            { 
              icon: <TrendingUp className="w-8 h-8 text-accent" />, 
              title: "Conversion Rate Optimization", 
              desc: "Using heatmaps and A/B testing to squeeze more profit out of your existing traffic." 
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

      {/* FAQ */}
      <section className="py-24 bg-surface border-y border-white/5">
        <div className="max-w-4xl mx-auto px-6">
          <Reveal width="100%">
            <h2 className="font-display text-4xl font-bold mb-12 text-center">Growth Strategy FAQ</h2>
          </Reveal>
          <div className="space-y-6">
            <Reveal delay={0.1} width="100%">
              <div className="p-6 border border-white/10 bg-dark">
                <h3 className="font-bold text-xl mb-3">How soon can we expect results?</h3>
                <p className="text-neutral-400">Paid advertising can show results within days, while SEO is a long-term play that typically takes 3-6 months to gain significant traction. We build a balanced strategy for both immediate wins and long-term dominance.</p>
              </div>
            </Reveal>
            <Reveal delay={0.2} width="100%">
              <div className="p-6 border border-white/10 bg-dark">
                <h3 className="font-bold text-xl mb-3">Do you handle ad creative and copywriting?</h3>
                <p className="text-neutral-400">Yes. We are a full-service agency. Our creative team works hand-in-hand with our performance marketers to ensure your ads not only reach the right people but also compel them to act.</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 text-center px-6">
        <Reveal width="100%">
          <h2 className="font-display text-5xl md:text-7xl font-bold mb-8">Ready to Scale Your Revenue?</h2>
          <p className="text-xl text-neutral-400 mb-10 max-w-2xl mx-auto">Stop guessing and start growing. Let's build a marketing system that delivers predictable results for your business.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button to="/contact" variant="primary" className="px-10 py-5 text-xl">
              Start Your Audit
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

export default DigitalMarketing;
