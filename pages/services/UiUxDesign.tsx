import React from 'react';
import { motion } from 'framer-motion';
import { Reveal } from '../../components/Reveal';
import Button from '../../components/Button';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { SEO } from '../../components/SEO';

const UiUxDesign: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full relative text-light overflow-hidden pt-32 pb-24"
    >
      <SEO 
        title="UI/UX Design Agency India | Intuitive Product Design | Bold Blank Studio"
        description="Bold Blank is a leading UI/UX design agency in India. We create frictionless, intuitive product experiences rooted in user psychology and data-driven insights."
        keywords="ui ux design agency india, product design, user experience design, bold blank studio"
        canonicalUrl="https://boldblank.com/ui-ux-design-agency"
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
              DATA-DRIVEN UI/UX DESIGN AGENCY IN INDIA
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-xl md:text-2xl text-neutral-400 leading-relaxed max-w-2xl mb-10">
              Intuitive digital products that users love. Frictionless, intuitive product experiences rooted in user psychology and data.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <Button to="/contact" variant="primary" className="px-8 py-4 text-lg">
              Design Your Product
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
                <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">The Cost of High Friction</h2>
                <p className="text-neutral-400 text-lg leading-relaxed mb-6">
                  A confusing interface is the fastest way to lose a user. High bounce rates, low retention, and frustrated customers are symptoms of poor UX design. If your digital product requires a manual to use, you are bleeding revenue and damaging your brand reputation.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div>
                <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 text-accent">The Bold Blank Advantage</h2>
                <p className="text-neutral-300 text-lg leading-relaxed mb-6">
                  We design digital products that feel effortless. Our UI/UX design process is rooted in deep user research, behavioral psychology, and data analysis. We focus on reducing friction, increasing user retention, and building scalable design systems for SaaS, mobile apps, and complex enterprise platforms.
                </p>
                <ul className="space-y-4">
                  {['Reduce user friction and drop-offs', 'Increase user retention and engagement', 'Build scalable, consistent design systems', 'Data-driven design decisions'].map((item, i) => (
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
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-16 text-center">Our UI/UX Process</h2>
        </Reveal>
        <div className="grid md:grid-cols-4 gap-8">
          {[
            { step: "01", title: "User Research & Personas", desc: "Understanding your users' needs, behaviors, and pain points." },
            { step: "02", title: "Information Architecture", desc: "Structuring content and navigation for intuitive user flows." },
            { step: "03", title: "Prototyping & Testing", desc: "Creating interactive wireframes and validating with real users." },
            { step: "04", title: "High-Fidelity UI Design", desc: "Delivering pixel-perfect, accessible, and brand-aligned interfaces." }
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
                <h3 className="font-bold text-xl mb-3">Do you redesign existing apps?</h3>
                <p className="text-neutral-400">Absolutely. We frequently audit and redesign existing SaaS platforms and mobile apps to improve usability, modernize the aesthetic, and fix conversion bottlenecks. We start with a comprehensive UX audit to identify areas for immediate impact.</p>
              </div>
            </Reveal>
            <Reveal delay={0.2} width="100%">
              <div className="p-6 border border-white/10 bg-dark">
                <h3 className="font-bold text-xl mb-3">How do you measure UX success?</h3>
                <p className="text-neutral-400">We measure success through tangible metrics: reduced bounce rates, increased time-on-page, higher conversion rates, lower customer support tickets, and improved user retention. Good design is measurable.</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 text-center px-6">
        <Reveal width="100%">
          <h2 className="font-display text-5xl md:text-7xl font-bold mb-8">Ready to Build Better Products?</h2>
          <p className="text-xl text-neutral-400 mb-10 max-w-2xl mx-auto">Stop frustrating your users with poor design. Let's create an intuitive experience that drives engagement and loyalty.</p>
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

export default UiUxDesign;
