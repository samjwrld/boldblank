import React from 'react';
import { Reveal } from '../components/Reveal';
import Button from '../components/Button';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { SEO } from '../components/SEO';
import BrandMarquee from '../components/BrandMarquee';

const team = [
  { 
    name: "SAM", 
    role: "FOUNDER, CREATIVE & TECHNICAL DIRECTOR", 
    img: "/images/sam.png",
    colorImg: "/images/sam.png"
  }
];

const partners = [
    { name: "VIRALVELVET", role: "Social Media Managing Partner", url: "https://viralvelvet.com" },
    { name: "TASSK", role: "Event & Photography Partner", url: "https://tassk.co.in" },
    { name: "BHARAT IP DEFENSE", role: "Legal Partner", url: "https://ipdefensesolutions.com" },
    { name: "VORTEX DATA", role: "Analytics" }
];

const brandLogos = [
    { name: "GOOGLE", url: "https://placehold.co/200x80/transparent/FFFFFF?text=GOOGLE&font=montserrat" },
    { name: "NIKE", url: "https://placehold.co/200x80/transparent/FFFFFF?text=NIKE&font=playfair-display" },
    { name: "SPOTIFY", url: "https://placehold.co/200x80/transparent/FFFFFF?text=SPOTIFY&font=raleway" },
    { name: "VIRALVELVET", url: "https://placehold.co/200x80/transparent/FFFFFF?text=VIRALVELVET&font=space-mono" },
    { name: "APPLE", url: "https://placehold.co/200x80/transparent/FFFFFF?text=APPLE&font=lora" },
    { name: "TESLA", url: "https://placehold.co/200x80/transparent/FFFFFF?text=TESLA&font=exo" },
    { name: "BHARAT IP DEFENSE", url: "https://placehold.co/200x80/transparent/FFFFFF?text=BHARAT+IP+DEFENSE&font=space-mono" },
    { name: "AMAZON", url: "https://placehold.co/200x80/transparent/FFFFFF?text=AMAZON&font=lato" },
    { name: "META", url: "https://placehold.co/200x80/transparent/FFFFFF?text=META&font=roboto" },
    { name: "SONY", url: "https://placehold.co/200x80/transparent/FFFFFF?text=SONY&font=opensans" },
    { name: "SAMSUNG", url: "https://placehold.co/200x80/transparent/FFFFFF?text=SAMSUNG&font=nunito" }
];

const About: React.FC = () => {
  return (
    <div className="w-full">
      <SEO 
        title="About Us | Bold Blank Studio"
        description="Learn more about Bold Blank Studio, a premium branding and website design agency in India. We partner with ambitious companies to build high-performance digital systems."
        canonicalUrl="https://boldblank.com/about"
      />
      {/* Intro */}
      <section className="py-24 md:py-32 px-4 md:px-6">
        <div className="max-w-[90rem] mx-auto">
          <Reveal width="100%">
            <h1 className="font-display text-4xl md:text-7xl lg:text-[8vw] font-bold tracking-tighter mb-16 leading-none">
              WE ARE <br className="hidden md:block"/>
              <span className="text-accent">NOT FOR EVERYONE.</span>
            </h1>
          </Reveal>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="md:col-span-2">
              <Reveal delay={0.2} width="100%">
                <p className="text-xl md:text-2xl leading-relaxed text-neutral-300 font-sans">
                  Bold Blank was founded on a rejection of the "good enough." We are a collective of strategists, engineers, and artists who believe that digital presence is the most valuable asset a modern company holds.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Image / Visual Break */}
      <section className="w-full h-[60vh] bg-neutral-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-accent/20 mix-blend-overlay z-10"></div>
        <img 
          src="/images/studio-atmosphere.jpg" 
          alt="Studio Atmosphere" 
          className="w-full h-full object-cover opacity-60 grayscale contrast-125"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 flex items-center justify-center z-20">
            <h2 className="font-display text-[15vw] font-bold text-transparent stroke-white opacity-20" style={{ WebkitTextStroke: '2px white' }}>STUDIO</h2>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 md:py-32 px-4 md:px-6 bg-surface relative z-10">
        <div className="max-w-[90rem] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="lg:sticky lg:top-32 h-fit">
              <Reveal width="100%">
                <h3 className="text-sm font-mono text-accent mb-4 tracking-widest">OUR DNA</h3>
                <h2 className="font-display text-3xl md:text-6xl font-bold mb-6 tracking-tighter uppercase">Built on principles,<br/>not trends.</h2>
                <Button to="/contact">Join Us</Button>
              </Reveal>
            </div>
            
            <div className="space-y-16 md:space-y-24">
              {[
                { title: "01. Clarity First", desc: "If you can't explain it simply, you don't understand it. We strip away jargon and fluff to find the core truth of your brand." },
                { title: "02. Design with Intent", desc: "No decoration. Every pixel, animation, and line of code serves a specific function in the user journey." },
                { title: "03. Code is Art", desc: "We don't just use templates. We build custom architectures that are performant, accessible, and scalable." },
                { title: "04. Long-term Vision", desc: "We don't care about the launch day as much as we care about year three. We build systems that grow." }
              ].map((value, idx) => (
                <Reveal key={idx} delay={idx * 0.1} width="100%">
                  <div className="border-l-2 border-white/10 pl-6 md:pl-8 hover:border-accent transition-colors duration-300 w-full">
                    <h4 className="text-2xl md:text-3xl font-bold mb-4 font-display uppercase">{value.title}</h4>
                    <p className="text-neutral-400 text-base md:text-lg leading-relaxed font-sans">{value.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Friends & Partners Section */}
      <section className="py-24 md:py-32 px-4 md:px-6 border-t border-white/10 bg-dark relative z-10">
        <div className="max-w-[90rem] mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
                <Reveal width="100%">
                    <h2 className="font-display text-4xl md:text-7xl lg:text-8xl font-bold uppercase tracking-tighter leading-none py-2 pr-8 lg:pr-12 text-white">
                        Friends & <br/> <span className="text-accent">Partners</span>
                    </h2>
                </Reveal>
                <Reveal delay={0.2} width="100%">
                    <p className="font-mono text-sm text-neutral-300 uppercase tracking-widest max-w-xs text-left md:text-right ml-auto">
                        The minds behind the machine.<br/>Leadership and key collaborators.
                    </p>
                </Reveal>
            </div>

            {/* Team Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12 mb-32">
                {team.map((member, i) => (
                    <Reveal key={i} delay={i * 0.1} width="100%">
                        <div className="group cursor-none w-full">
                            <div className="relative overflow-hidden mb-6 aspect-[3/4] bg-neutral-900">
                                {/* Grayscale Base Image */}
                                <img 
                                    src={member.img} 
                                    alt={member.name}
                                    className="absolute inset-0 w-full h-full object-cover grayscale transition-opacity duration-500 opacity-100 group-hover:opacity-0"
                                />
                                {/* Color Hover Image */}
                                <motion.img 
                                    src={member.colorImg} 
                                    alt={member.name}
                                    className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100"
                                    initial={{ scale: 1.1 }}
                                    whileHover={{ scale: 1 }}
                                    transition={{ duration: 0.5 }}
                                />
                                
                                {/* Overlay Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                     <div className="bg-accent text-black p-2 rounded-full transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                                        <ArrowUpRight size={20} />
                                     </div>
                                </div>
                            </div>
                            
                            <div className="flex flex-col">
                                <h3 className="font-display text-2xl font-bold uppercase text-white group-hover:text-accent transition-colors duration-300">
                                    {member.name}
                                </h3>
                                <p className="font-mono text-xs text-neutral-500 uppercase tracking-widest mt-1 group-hover:text-white transition-colors duration-300">
                                    {member.role}
                                </p>
                            </div>
                        </div>
                    </Reveal>
                ))}
            </div>

            {/* Trusted Partners List */}
            <div className="border-t border-white/10 pt-16">
                 <Reveal width="100%">
                    <h3 className="font-mono text-xs text-accent uppercase tracking-widest mb-8">
                        Trusted Partner
                    </h3>
                 </Reveal>
                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {partners.map((partner, i) => {
                        const CardTag = partner.url ? 'a' : 'div';
                        const extraProps = partner.url ? { href: partner.url, target: "_blank", rel: "noopener noreferrer" } : {};
                        return (
                            <Reveal key={i} delay={0.2 + (i * 0.05)} width="100%">
                                <CardTag 
                                    {...extraProps}
                                    className={`group border-b border-white/5 pb-4 hover:border-accent/50 transition-colors w-full block ${partner.url ? 'cursor-pointer' : ''}`}
                                >
                                    <div className="flex justify-between items-baseline">
                                        <h4 className="font-display text-xl font-bold text-neutral-300 group-hover:text-white transition-colors flex items-center gap-1.5">
                                            {partner.name}
                                            {partner.url && (
                                                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-accent font-mono text-xs">
                                                    ↗
                                                </span>
                                            )}
                                        </h4>
                                    </div>
                                    <p className="font-mono text-[10px] text-neutral-600 uppercase tracking-wider mt-1 group-hover:text-accent transition-colors">
                                        {partner.role}
                                    </p>
                                </CardTag>
                            </Reveal>
                        );
                    })}
                 </div>
            </div>

        </div>
      </section>


    </div>
  );
};

export default About;