import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Reveal } from '../components/Reveal';
import { articles } from '../data/articles';
import { ArrowUpRight } from 'lucide-react';
import { SEO } from '../components/SEO';

const Insights: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full relative text-light overflow-hidden pt-32 pb-24"
    >
      <SEO 
        title="Insights & Articles - Web Design & Branding Hyderabad | Bold Blank Studio"
        description="Read our latest insights on branding, website design, UI/UX, and digital strategy. Bold Blank Studio is Hyderabad's premier design agency helping businesses grow."
        keywords="branding agency hyderabad, website design company hyderabad, ui ux design hyderabad, digital strategy hyderabad, creative agency hyderabad, bold blank studio"
        canonicalUrl="https://boldblank.com/insights"
        localCity="Hyderabad"
      />
      <section className="max-w-[90rem] mx-auto px-6 mb-20">
        <Reveal width="100%">
          <h1 className="font-display text-4xl md:text-7xl lg:text-[8vw] font-bold uppercase tracking-tighter leading-[0.9] mb-8">
            INSIGHTS <br/>
            <span className="text-neutral-600">& STRATEGY</span>
          </h1>
        </Reveal>
        <Reveal delay={0.2} width="100%">
          <p className="text-xl md:text-2xl text-neutral-400 max-w-3xl font-light leading-relaxed">
            Thoughts, frameworks, and strategies on building premium brands and high-performance digital products.
          </p>
        </Reveal>
      </section>

      <section className="max-w-[90rem] mx-auto px-6">
        <div className="flex flex-col border-t border-white/10">
          {articles.map((article, index) => (
            <Reveal key={article.slug} delay={index * 0.1} width="100%">
              <Link 
                to={`/insights/${article.slug}`}
                className="group block py-10 md:py-16 border-b border-white/10 hover:bg-white/[0.02] transition-colors px-4 -mx-4 md:px-8 md:-mx-8"
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 items-start">
                  <div className="md:col-span-3 flex flex-col gap-2">
                    <span className="font-mono text-xs text-accent uppercase tracking-widest">{article.category}</span>
                    <span className="font-mono text-sm text-neutral-500">{article.date}</span>
                  </div>
                  <div className="md:col-span-8">
                    <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 group-hover:text-accent transition-colors">
                      {article.title}
                    </h2>
                    <p className="text-neutral-400 text-lg leading-relaxed max-w-2xl">
                      {article.description}
                    </p>
                  </div>
                  <div className="md:col-span-1 flex justify-end">
                    <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-accent group-hover:border-accent group-hover:text-black transition-all duration-300">
                      <ArrowUpRight className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Hyderabad Local SEO Footer / Business Section */}
      <section className="max-w-[90rem] mx-auto px-6 mt-24">
        <div className="border-t border-white/10 pt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-4">
            <Reveal>
              <h3 className="font-display text-2xl md:text-3xl font-bold uppercase text-white mb-4">
                Hyderabad's <br className="hidden lg:block"/>
                <span className="text-accent">Strategic Partner</span>
              </h3>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="font-mono text-xs text-neutral-500 uppercase tracking-widest">
                Designing for the elite of the Deccan.
              </p>
            </Reveal>
          </div>
          <div className="lg:col-span-8">
            <Reveal delay={0.2}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-neutral-400 font-light leading-relaxed text-base md:text-lg">
                <p>
                  At Bold Blank Studio, we are deeply embedded in the digital evolution of Hyderabad. From high-growth SaaS startups in <strong>Hitec City</strong> and <strong>Gachibowli</strong> to luxury lifestyle brands in <strong>Jubilee Hills</strong> and <strong>Banjara Hills</strong>, we design world-class brand architectures and web experiences that command respect.
                </p>
                <p>
                  As the best website design and premium branding partner in Telangana, we don't do generic templates. We build custom React systems, high-converting copy, and custom visual strategy to transform your local presence into global authority.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="flex flex-wrap gap-x-8 gap-y-4 mt-8 pt-8 border-t border-white/5">
                <div>
                  <h4 className="font-mono text-xs text-accent uppercase tracking-widest mb-1">Office Location</h4>
                  <p className="text-sm text-neutral-300">Jubilee Hills, Road No. 36, Hyderabad, TS, India</p>
                </div>
                <div>
                  <h4 className="font-mono text-xs text-accent uppercase tracking-widest mb-1">Local Focus</h4>
                  <p className="text-sm text-neutral-300">Madhapur, Gachibowli, Jubilee Hills, Hitec City</p>
                </div>
                <div>
                  <h4 className="font-mono text-xs text-accent uppercase tracking-widest mb-1">Services</h4>
                  <p className="text-sm text-neutral-300">Brand Strategy, Web Design, custom UI/UX</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Insights;
