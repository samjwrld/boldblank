import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Reveal } from '../../components/Reveal';
import Button from '../../components/Button';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import { SEO } from '../../components/SEO';

// Mock data for case studies. In a real app, this would come from a CMS or API.
const projectsData: Record<string, any> = {
  "fleet-ops": {
    client: "FLEET OPS",
    category: "Product",
    year: "2024",
    heroImage: "https://picsum.photos/seed/fleetops/1920/1080",
    problem: "Fleet Ops was struggling with a legacy system that caused data silos, delayed reporting, and high operational costs. They needed a modern, centralized dashboard to track vehicles, maintenance, and fuel consumption in real-time.",
    solution: "We engineered a custom, high-performance web application from the ground up. By focusing on a frictionless UI and robust data architecture, we created a centralized hub that gives fleet managers complete visibility and control.",
    process: [
      "Deep-dive UX research with actual fleet managers.",
      "Wireframing and prototyping the new dashboard interface.",
      "Custom frontend development using React and Tailwind CSS.",
      "Integration with existing GPS and telematics APIs."
    ],
    results: [
      "30% reduction in operational costs within 6 months.",
      "100% elimination of manual data entry errors.",
      "Increased fleet utilization by 15%."
    ]
  },
  "tassk": {
    client: "TASSK.CO.IN",
    category: "Product",
    year: "2024",
    heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    problem: "Tassk.co.in needed to differentiate themselves in a crowded project management market. Their existing MVP was functional but suffered from high user friction and a generic brand identity that failed to attract enterprise clients.",
    solution: "We completely overhauled their brand identity and product UI. We positioned them as a premium, enterprise-grade solution and redesigned the core user flows to drastically reduce the time it takes to create and manage tasks.",
    process: [
      "Strategic brand repositioning and visual identity design.",
      "Comprehensive UX audit of the existing MVP.",
      "Redesign of the core task management interface.",
      "Creation of a scalable design system for future features."
    ],
    results: [
      "50% faster task delivery reported by beta users.",
      "Secured 3 new enterprise contracts within 30 days of launch.",
      "40% increase in user retention."
    ]
  },
  "01": {
    client: "THE KONCEPT HOUSE",
    category: "Product",
    year: "2024",
    heroImage: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1920&auto=format&fit=crop",
    problem: "The Koncept House, a premium architectural firm, had a website that didn't reflect the quality of their physical work. It was slow, hard to navigate, and failed to capture the immersive experience of their designs.",
    solution: "We built a highly visual, immersive digital portfolio. Using smooth animations and a minimalist UI, we let their architectural work take center stage while ensuring the site remained lightning-fast and SEO-optimized.",
    process: [
      "Information architecture restructuring for better flow.",
      "Minimalist UI design focusing on large-scale imagery.",
      "Implementation of smooth, hardware-accelerated animations.",
      "Technical SEO optimization for local search dominance."
    ],
    results: [
      "300% increase in qualified leads.",
      "60% decrease in bounce rate.",
      "Ranked #1 for 'Premium Architects in Hyderabad'."
    ]
  },
  "07": {
    client: "SREE SAI TRANSPORT TOGO",
    category: "Product",
    year: "2024",
    heroImage: "https://picsum.photos/seed/sree/1920/1080",
    problem: "Tracking machine work, fuel consumption, and maintenance schedules was manual and inefficient, leading to inaccurate reporting and higher operational costs.",
    solution: "We built a centralized app to track machine hours, fuel usage, and maintenance logs in real-time, providing complete visibility and control.",
    process: [
      "Process mapping and requirements gathering.",
      "Mobile app design and prototyping.",
      "Development of a secure, scalable backend.",
      "Deployment and training for field operators."
    ],
    results: [
      "100% Digital Tracking implemented.",
      "Significant reduction in fuel discrepancies.",
      "Improved maintenance scheduling and machine uptime."
    ]
  },
  "04": {
    client: "BHARAT IP DEFENSE",
    category: "Intelligence",
    year: "2024",
    heroImage: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1920&auto=format&fit=crop",
    problem: "Protecting intellectual property in a fast-paced digital world was becoming increasingly difficult with manual monitoring methods.",
    solution: "We deployed an AI-driven monitoring system that detects and blocks intellectual property threats in real-time, securing their digital assets globally.",
    process: [
      "Threat modeling and AI algorithm selection.",
      "Custom AI agent development and training.",
      "Integration with global IP databases.",
      "Creation of a real-time analytics dashboard."
    ],
    results: [
      "99% Threat Block Rate achieved.",
      "Automated detection of thousands of potential infringements.",
      "Established a robust global digital presence."
    ]
  },
  "06": {
    client: "PEARL WHITE DESIGNS",
    category: "Brand",
    year: "2024",
    heroImage: "https://picsum.photos/seed/pearl/1920/1080",
    problem: "Their existing brand identity didn't reflect their premium positioning, making it difficult to attract high-end clients in a competitive market.",
    solution: "We crafted a minimalist, high-end visual identity system that perfectly aligned with their premium service offerings and target audience.",
    process: [
      "In-depth brand strategy and market positioning.",
      "Naming and logo design exploration.",
      "Development of comprehensive brand guidelines.",
      "Rollout across all digital and physical touchpoints."
    ],
    results: [
      "2x Client Retention rate.",
      "Successfully repositioned as a premium market leader.",
      "Increased inbound leads from high-net-worth individuals."
    ]
  },
  "02": {
    client: "PATEL'S GROUP",
    category: "Growth",
    year: "2023",
    heroImage: "https://picsum.photos/seed/patel/1920/1080",
    problem: "Complex business data was difficult for stakeholders to digest, leading to slow decision-making and missed growth opportunities.",
    solution: "We created a unified digital strategy and intuitive data dashboards that transformed complex data into actionable insights.",
    process: [
      "Data architecture and flow analysis.",
      "UX design for complex data visualization.",
      "Frontend development of interactive dashboards.",
      "Implementation of a scalable digital growth strategy."
    ],
    results: [
      "40% Efficiency Boost in reporting.",
      "Faster, data-driven decision making across departments.",
      "Significant overall business growth."
    ]
  },
  "viral-velvet": {
    client: "VIRALVELVET.COM",
    category: "Growth",
    year: "2024",
    heroImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1920&auto=format&fit=crop",
    problem: "ViralVelvet.com faced stagnating acquisition rates and escalating customer acquisition costs (CAC). They needed a scalable performance marketing infrastructure with high-converting funnels to expand their digital dominance.",
    solution: "We engineered high-converting custom landing pages, structured an advanced attribution engine, and launched a multi-channel paid acquisition strategy backed by granular CRO data.",
    process: [
      "Conducted a rigorous audit of historical performance and customer segments.",
      "Designed high-intent bespoke landing pages optimized for maximum conversion rate (CRO).",
      "Architected advanced retargeting flows and programmatic ad placements across Search and Social.",
      "Implemented a robust tracking and attribution layer to eliminate data leakage."
    ],
    results: [
      "3.2x Return on Ad Spend (ROAS) achieved.",
      "45% Reduction in overall Customer Acquisition Cost (CAC).",
      "180% Increase in qualified inbound conversion volume."
    ]
  }
};

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project = id ? projectsData[id] : null;

  useEffect(() => {
    if (!project && id) {
      // Fallback for projects not in the mock data
      navigate('/work');
    }
  }, [project, id, navigate]);

  if (!project) return null;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full relative text-light overflow-hidden pt-32 pb-24"
    >
      <SEO 
        title={`${project.client} Case Study | Bold Blank Studio`}
        description={project.solution || `Case study on how we built a strategic solution for ${project.client}.`}
        canonicalUrl={`https://boldblank.com/work/${id}`}
      />
      {/* Hero */}
      <section className="max-w-[90rem] mx-auto px-6 mb-16">
        <Reveal>
          <Link to="/work" className="inline-flex items-center gap-2 text-neutral-400 hover:text-accent transition-colors mb-12 font-mono text-sm uppercase tracking-widest">
            <ArrowLeft className="w-4 h-4" />
            Back to Work
          </Link>
        </Reveal>
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <Reveal delay={0.1}>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.9] tracking-tighter">
              {project.client}
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="flex gap-6 font-mono text-sm uppercase tracking-widest text-neutral-500">
              <span>{project.category}</span>
              <span>{project.year}</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Hero Image */}
      <section className="w-full px-4 md:px-6 mb-24">
        <Reveal delay={0.3} width="100%">
          <div className="w-full h-[50vh] md:h-[80vh] bg-surface overflow-hidden">
            <img 
              src={project.heroImage} 
              alt={project.client} 
              className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-700"
              referrerPolicy="no-referrer"
            />
          </div>
        </Reveal>
      </section>

      {/* The Case Study Content */}
      <section className="max-w-5xl mx-auto px-6">
        
        {/* Problem & Solution */}
        <div className="grid md:grid-cols-2 gap-16 mb-24">
          <Reveal>
            <div>
              <h2 className="font-display text-3xl font-bold mb-6 text-neutral-500">The Problem</h2>
              <p className="text-xl leading-relaxed text-neutral-300">
                {project.problem}
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div>
              <h2 className="font-display text-3xl font-bold mb-6 text-accent">The Solution</h2>
              <p className="text-xl leading-relaxed text-neutral-300">
                {project.solution}
              </p>
            </div>
          </Reveal>
        </div>

        {/* Process */}
        <Reveal width="100%">
          <div className="mb-24 p-8 md:p-12 border border-white/10 bg-white/[0.02]">
            <h2 className="font-display text-3xl font-bold mb-8">The Process</h2>
            <ul className="space-y-6">
              {project.process.map((step: string, i: number) => (
                <li key={i} className="flex items-start gap-4 text-lg text-neutral-300">
                  <span className="font-mono text-accent mt-1">0{i + 1}</span>
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        {/* Results */}
        <Reveal width="100%">
          <div className="mb-24">
            <h2 className="font-display text-4xl font-bold mb-12 text-center">The Impact</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {project.results.map((result: string, i: number) => (
                <div key={i} className="p-8 border-t border-accent/30 bg-gradient-to-b from-accent/5 to-transparent">
                  <CheckCircle2 className="w-8 h-8 text-accent mb-6" />
                  <p className="text-xl font-medium text-white">{result}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

      </section>

      {/* CTA */}
      <section className="py-32 text-center px-6 bg-surface border-y border-white/5">
        <Reveal width="100%">
          <h2 className="font-display text-5xl md:text-7xl font-bold mb-8">Facing a Similar Challenge?</h2>
          <p className="text-xl text-neutral-400 mb-10 max-w-2xl mx-auto">Let's engineer your solution. Partner with us to build digital assets that drive measurable growth.</p>
          <Button to="/contact" variant="primary" className="px-10 py-5 text-xl">
            Start Your Project
          </Button>
        </Reveal>
      </section>

    </motion.div>
  );
};

export default ProjectDetail;
