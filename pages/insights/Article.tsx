import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Reveal } from '../../components/Reveal';
import { articles } from '../../data/articles';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { SEO } from '../../components/SEO';

const Article: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const article = articles.find(a => a.slug === slug);

  useEffect(() => {
    if (!article) {
      navigate('/insights');
    }
  }, [article, navigate]);

  if (!article) return null;

  const articleKeywordsMap: Record<string, string> = {
    "Branding": `${article.title}, branding cost in hyderabad, branding agency hyderabad, brand strategy hyderabad, logo design company hyderabad, creative branding hyderabad, best branding studio in telangana`,
    "Web Design": `${article.title}, best website design agency in india, web design company hyderabad, website developers hyderabad, custom web development hyderabad, web designers in madhapur, hitec city web design`,
    "UI/UX": `${article.title}, ui ux trends, ui ux design hyderabad, product designers hyderabad, app design agency hyderabad, user experience design gachibowli, high performance design studio`,
    "Strategy": `${article.title}, branding vs marketing, digital strategy hyderabad, business growth consulting hyderabad, marketing consultant telangana, brand consultants in jubilee hills`,
    "SaaS": `${article.title}, saas product design hyderabad, saas design partner, ui ux designer for software hyderabad, design system agency hyderabad, app developers in hitec city`,
  };

  const articleKeywords = articleKeywordsMap[article.category] || `${article.title}, hyderabad design agency, bold blank studio`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://boldblank.com/insights/${slug}`
    },
    "headline": article.title,
    "description": article.description,
    "image": "https://boldblank.com/images/og-image.jpg",
    "datePublished": "2026-03-27T08:00:00+05:30",
    "dateModified": "2026-03-27T08:00:00+05:30",
    "author": {
      "@type": "Organization",
      "name": "Bold Blank Studio",
      "url": "https://boldblank.com"
    },
    "publisher": {
      "@type": "ProfessionalService",
      "name": "Bold Blank Studio",
      "logo": {
        "@type": "ImageObject",
        "url": "https://boldblank.com/images/logo.png"
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Jubilee Hills, Road No. 36",
        "addressLocality": "Hyderabad",
        "addressRegion": "Telangana",
        "postalCode": "500033",
        "addressCountry": "IN"
      }
    },
    "contentLocation": {
      "@type": "City",
      "name": "Hyderabad"
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full relative text-light overflow-hidden pt-32 pb-24"
    >
      <SEO 
        title={`${article.title} - Hyderabad Design Insight | Bold Blank Studio`}
        description={article.description || `Read our latest insight on ${article.title}.`}
        keywords={articleKeywords}
        canonicalUrl={`https://boldblank.com/insights/${slug}`}
        ogType="article"
        schema={articleSchema}
        localCity="Hyderabad"
      />
      <section className="max-w-4xl mx-auto px-6 mb-20">
        <Reveal>
          <Link to="/insights" className="inline-flex items-center gap-2 text-neutral-400 hover:text-accent transition-colors mb-12 font-mono text-sm uppercase tracking-widest">
            <ArrowLeft className="w-4 h-4" />
            Back to Insights
          </Link>
        </Reveal>
        
        <Reveal delay={0.1}>
          <div className="flex items-center gap-4 mb-8">
            <span className="font-mono text-xs text-accent uppercase tracking-widest">{article.category}</span>
            <span className="w-1 h-1 bg-white/20 rounded-full" />
            <span className="font-mono text-xs text-neutral-500 uppercase tracking-widest">{article.date}</span>
          </div>
        </Reveal>

        <Reveal delay={0.2} width="100%">
          <h1 className="font-display text-4xl md:text-6xl font-bold leading-tight mb-8">
            {article.title}
          </h1>
        </Reveal>

        <Reveal delay={0.3} width="100%">
          <p className="text-xl md:text-2xl text-neutral-400 leading-relaxed mb-16">
            {article.description}
          </p>
        </Reveal>

        <Reveal delay={0.4} width="100%">
          <div 
            className="prose prose-invert prose-lg max-w-none prose-headings:font-display prose-headings:font-bold prose-h2:text-3xl prose-h2:mt-16 prose-h2:mb-8 prose-h3:text-2xl prose-h3:mt-12 prose-h3:mb-6 prose-p:text-neutral-300 prose-p:leading-relaxed prose-li:text-neutral-300 prose-a:text-accent hover:prose-a:text-white transition-colors"
            dangerouslySetInnerHTML={{ __html: article.content.replace(/\n/g, '<br/>').replace(/## (.*?)<br\/>/g, '<h2>$1</h2>').replace(/### (.*?)<br\/>/g, '<h3>$1</h3>').replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>').replace(/\* (.*?)<br\/>/g, '<li>$1</li>') }}
          />
        </Reveal>

        {/* Localized Hyderabad SEO & CTA Section */}
        <Reveal delay={0.5} width="100%">
          <div className="mt-20 pt-12 border-t border-white/10">
            <div className="bg-neutral-900/40 border border-white/5 rounded-2xl p-8 md:p-12 relative overflow-hidden group hover:border-accent/30 transition-all duration-500">
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl pointer-events-none transition-all group-hover:bg-accent/10 duration-500" />
              <div className="relative z-10">
                <span className="font-mono text-xs text-accent uppercase tracking-widest mb-4 block">// Local Agency Presence • Hyderabad, India</span>
                <h3 className="font-display text-2xl md:text-3xl font-bold mb-4 text-white">
                  Elevate Your Brand with Hyderabad's Premier Design Studio
                </h3>
                <p className="text-neutral-400 text-base md:text-lg mb-8 max-w-2xl font-light leading-relaxed">
                  Based out of Hyderabad's thriving tech hub, Bold Blank Studio partners with high-growth companies in Gachibowli, Hitec City, Madhapur, and Jubilee Hills. We engineer stunning visual identities and lightning-fast custom websites that stand out globally.
                </p>
                <div className="flex flex-wrap gap-4 items-center">
                  <Link 
                    to="/contact" 
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-accent hover:text-black transition-all duration-300 font-mono text-xs uppercase tracking-wider"
                  >
                    Partner with Us
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                  <span className="text-neutral-600 font-mono text-xs">Serving Hyderabad, Bangalore & Global Markets</span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </motion.div>
  );
};

export default Article;
