import React from 'react';
import { motion } from 'framer-motion';
import { Reveal } from '../../components/Reveal';
import Button from '../../components/Button';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { SEO } from '../../components/SEO';

const WebDesign: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full relative text-light overflow-hidden pt-32 pb-24"
    >
      <SEO 
        title="Website Design Agency India | High-Performance Web Development | Bold Blank Studio"
        description="Bold Blank is a premium website design agency in India. We build high-performance, custom-coded websites engineered to convert visitors into high-value clients."
        keywords="website design agency india, custom web development, high-performance websites, bold blank studio"
        canonicalUrl="https://boldblank.com/website-design-agency"
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
              HIGH-PERFORMANCE WEBSITE DESIGN AGENCY IN INDIA
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-xl md:text-2xl text-neutral-400 leading-relaxed max-w-2xl mb-10">
              Websites engineered for conversion and scale. We build high-performance, custom-coded platforms built to convert casual visitors into high-ticket clients.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <Button to="/contact" variant="primary" className="px-8 py-4 text-lg">
              Build Your Website
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
                <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">The Cost of a Slow, Generic Website</h2>
                <p className="text-neutral-400 text-lg leading-relaxed mb-6">
                  A slow, poorly designed website is a silent killer for your business. It frustrates users, tanks your SEO rankings, and signals low quality to potential high-ticket clients. If your website isn't actively generating qualified leads, it's an expense, not an asset.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div>
                <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 text-accent">The Bold Blank Advantage</h2>
                <p className="text-neutral-300 text-lg leading-relaxed mb-6">
                  We don't just build "pretty websites." We architect digital sales assets. Our custom web development process focuses on page speed, mobile optimization, and conversion rate optimization (CRO). We build scalable platforms using modern tech stacks (React, Next.js) that dominate search rankings and drive revenue.
                </p>
                <ul className="space-y-4">
                  {['Lightning-fast load times', 'SEO-optimized architecture', 'Conversion-focused user journeys', 'Custom, scalable codebases'].map((item, i) => (
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
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-16 text-center">Our Web Design Process</h2>
        </Reveal>
        <div className="grid md:grid-cols-4 gap-8">
          {[
            { step: "01", title: "UX Strategy & Wireframing", desc: "Mapping out the user journey to maximize conversions and engagement." },
            { step: "02", title: "UI Design", desc: "Creating stunning, brand-aligned visual interfaces that build trust." },
            { step: "03", title: "Custom Development", desc: "Building robust, high-performance code using modern frameworks." },
            { step: "04", title: "SEO & Launch", desc: "Optimizing for search engines and ensuring a flawless deployment." }
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
                <h3 className="font-bold text-xl mb-3">Do you use templates or custom code?</h3>
                <p className="text-neutral-400">We exclusively build custom-coded websites. Templates are bloated, slow, and limit scalability. Custom code ensures lightning-fast performance, perfect SEO structure, and a unique digital presence tailored to your exact business needs.</p>
              </div>
            </Reveal>
            <Reveal delay={0.2} width="100%">
              <div className="p-6 border border-white/10 bg-dark">
                <h3 className="font-bold text-xl mb-3">Will my website be SEO optimized?</h3>
                <p className="text-neutral-400">Yes. Technical SEO is built into our development process from day one. We ensure proper semantic HTML, fast loading speeds, mobile responsiveness, and optimized meta tags to give you the best foundation for ranking on Google.</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 text-center px-6">
        <Reveal width="100%">
          <h2 className="font-display text-5xl md:text-7xl font-bold mb-8">Ready to Dominate Digital?</h2>
          <p className="text-xl text-neutral-400 mb-10 max-w-2xl mx-auto">Stop losing leads to a slow, outdated website. Let's engineer a platform that drives measurable growth.</p>
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

export default WebDesign;
