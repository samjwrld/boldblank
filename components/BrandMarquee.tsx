import React from 'react';
import { motion } from 'framer-motion';

const brands = [
  "W DESIGN STUDIO", 
  "PEARL WHITE DESIGNS", 
  "PATEL'S GROUP", 
  "THE KONCEPT HOUSE DESIGN STUDIO", 
  "CUREFOREVER.IN",
  "BHARAT IP DEFENSE SOLUTIONS", 
  "MOON CHAIN DAO",
  "SREE SAI TRANSPORT TOGO",
  "TASSK.CO.IN",
  "FLEET OPS",
  "VISTARAATELIER",
  "VIRALVELVET",
  "SPECTRUM ELEVATOR"
];

const defaultLogos = [
    { name: "GOOGLE", url: "https://placehold.co/200x80/transparent/FFFFFF?text=GOOGLE&font=montserrat" },
    { name: "NIKE", url: "https://placehold.co/200x80/transparent/FFFFFF?text=NIKE&font=playfair-display" },
    { name: "SPOTIFY", url: "https://placehold.co/200x80/transparent/FFFFFF?text=SPOTIFY&font=raleway" },
    { name: "APPLE", url: "https://placehold.co/200x80/transparent/FFFFFF?text=APPLE&font=lora" },
    { name: "TESLA", url: "https://placehold.co/200x80/transparent/FFFFFF?text=TESLA&font=exo" },
    { name: "AMAZON", url: "https://placehold.co/200x80/transparent/FFFFFF?text=AMAZON&font=lato" },
    { name: "META", url: "https://placehold.co/200x80/transparent/FFFFFF?text=META&font=roboto" },
    { name: "SONY", url: "https://placehold.co/200x80/transparent/FFFFFF?text=SONY&font=opensans" },
    { name: "SAMSUNG", url: "https://placehold.co/200x80/transparent/FFFFFF?text=SAMSUNG&font=nunito" }
];

const BrandLogoItem: React.FC<{ item: any }> = ({ item }) => {
  const [hasError, setHasError] = React.useState(false);

  const getBrandStyle = (name: string) => {
    switch (name.toUpperCase()) {
      case 'GOOGLE':
        return 'font-sans font-semibold tracking-tight text-white/50 group-hover/logo:text-white';
      case 'NIKE':
        return 'font-serif italic font-extrabold tracking-tight text-white/50 group-hover/logo:text-white';
      case 'SPOTIFY':
        return 'font-sans font-black tracking-normal text-white/50 group-hover/logo:text-green-400';
      case 'APPLE':
        return 'font-serif font-light tracking-widest text-white/50 group-hover/logo:text-white';
      case 'TESLA':
        return 'font-mono font-bold tracking-[0.2em] text-white/50 group-hover/logo:text-red-500';
      case 'AMAZON':
        return 'font-sans italic font-bold tracking-tighter text-white/50 group-hover/logo:text-yellow-500';
      case 'META':
        return 'font-sans font-bold tracking-wide text-white/50 group-hover/logo:text-blue-500';
      case 'SONY':
        return 'font-serif font-black tracking-[0.15em] text-white/50 group-hover/logo:text-white';
      case 'SAMSUNG':
        return 'font-sans font-black tracking-wider text-white/50 group-hover/logo:text-blue-600';
      case 'VIRALVELVET':
      case 'VIRALVELVET.COM':
        return 'font-mono font-bold tracking-widest text-accent/70 group-hover/logo:text-accent';
      case 'BHARAT IP DEFENSE':
        return 'font-mono font-bold tracking-[0.1em] text-accent/70 group-hover/logo:text-accent';
      default:
        return 'font-display font-bold tracking-tight text-white/40 group-hover/logo:text-white';
    }
  };

  if (hasError || !item.url) {
    return (
      <div className="px-8 md:px-16 flex items-center justify-center h-12 select-none group/logo">
        <span className={`text-lg md:text-xl transition-all duration-300 ${getBrandStyle(item.name)}`}>
          {item.name}
        </span>
      </div>
    );
  }

  return (
    <div className="px-8 md:px-16 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500 flex items-center justify-center h-12">
      <img 
        src={item.url} 
        alt={item.name} 
        className="h-6 md:h-8 w-auto object-contain"
        onError={() => setHasError(true)}
        referrerPolicy="no-referrer"
      />
    </div>
  );
};

interface MarqueeRowProps {
    direction: 'left' | 'right';
    speed?: number;
    outlined?: boolean;
    variant?: 'text' | 'logo';
    items?: any[];
}

const MarqueeRow: React.FC<MarqueeRowProps> = ({ 
    direction, 
    speed = 20, 
    outlined = false,
    variant = 'text',
    items
}) => {
  const displayItems = items || (variant === 'text' ? brands : defaultLogos);

  return (
    <div className="flex overflow-hidden relative z-10 select-none py-2 md:py-4 border-b border-white/5 group hover:bg-white/[0.02] transition-colors duration-500">
      <div className="absolute inset-0 bg-gradient-to-r from-dark via-transparent to-dark z-20 pointer-events-none opacity-50" />
      
      <motion.div
         initial={{ x: direction === 'left' ? 0 : "-50%" }}
         animate={{ x: direction === 'left' ? "-50%" : 0 }}
         transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
         className="flex items-center whitespace-nowrap"
      >
        {[...displayItems, ...displayItems, ...displayItems].map((item, i) => (
          <div key={i} className="flex items-center">
             {variant === 'text' ? (
                <span 
                    className={`
                        font-display font-bold text-4xl md:text-8xl uppercase tracking-tighter px-8 md:px-16 transition-all duration-300
                        ${outlined 
                            ? 'text-transparent hover:text-accent' 
                            : 'text-neutral-800 hover:text-white'
                        }
                    `}
                    style={outlined ? { WebkitTextStroke: '1px rgba(255,255,255,0.2)' } : {}}
                >
                    {typeof item === 'string' ? item : item.name}
                </span>
             ) : (
                <BrandLogoItem item={item} />
             )}
             
             {/* Tech Separator */}
             <span className="font-mono text-accent/30 text-xl md:text-2xl">
                +
             </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

interface BrandMarqueeProps {
    variant?: 'text' | 'logo';
    items?: any[];
    title?: string;
    subtitle?: string;
}

const BrandMarquee: React.FC<BrandMarqueeProps> = ({ 
    variant = 'text', 
    items,
    title = "Client Roster",
    subtitle
}) => {
  return (
    <section className="bg-dark relative w-full overflow-hidden border-t border-white/10 pt-16 pb-24">
        {/* Technical Header */}
        <div className="max-w-[90rem] mx-auto px-6 mb-8 flex items-end justify-between">
             <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full animate-pulse shadow-[0_0_10px_#CCFF00]" />
                    <span className="font-mono text-xs text-accent uppercase tracking-[0.2em]">
                        {title}
                    </span>
                </div>
             </div>
             <div className="hidden md:block font-mono text-[10px] text-neutral-600 uppercase tracking-widest">
                {subtitle || `// Selected Works 2020—${new Date().getFullYear()}`}
             </div>
        </div>

        <div className="flex flex-col w-full border-t border-white/5">
            <MarqueeRow direction="left" speed={variant === 'logo' ? 60 : 45} outlined={variant === 'text'} variant={variant} items={items} />
            <MarqueeRow direction="right" speed={variant === 'logo' ? 50 : 35} outlined={false} variant={variant} items={items} />
        </div>
    </section>
  );
};

export default BrandMarquee;
