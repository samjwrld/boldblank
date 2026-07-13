import React, { useRef, useEffect } from 'react';
import { motion, useInView, useAnimation, useScroll, useTransform } from 'framer-motion';

interface RevealProps {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
  delay?: number;
  className?: string;
  yOffset?: number;
}

export const Reveal: React.FC<RevealProps> = ({ children, width = "fit-content", delay = 0.25, className = "", yOffset = 75 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`} style={{ width }}>
      <motion.div
        className={width === "100%" ? "h-full" : ""}
        variants={{
          hidden: { opacity: 0, y: yOffset },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.7, delay: delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export const RevealCover: React.FC<{ children: React.ReactNode, className?: string, delay?: number }> = ({ children, className = "", delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      slideControls.start("visible");
    }
  }, [isInView, mainControls, slideControls]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div
        variants={{
          hidden: { opacity: 0, scale: 1.1 },
          visible: { opacity: 1, scale: 1 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.8, delay: delay, ease: "easeOut" }}
      >
        {children}
      </motion.div>
      <motion.div
        variants={{
          hidden: { left: 0 },
          visible: { left: "100%" },
        }}
        initial="hidden"
        animate={slideControls}
        transition={{ duration: 0.5, delay: delay, ease: "easeIn" }}
        className="absolute top-0 bottom-0 left-0 right-0 bg-accent z-20"
      />
    </div>
  );
}

export const TextReveal: React.FC<{text: string, className?: string, delay?: number}> = ({ text, className = "", delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  
  return (
    <h2 ref={ref} className={className}>
      <span className="sr-only">{text}</span>
      <motion.span 
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ staggerChildren: 0.05, delayChildren: delay }}
        aria-hidden
      >
        {text.split("").map((char, i) => (
          <motion.span
            key={i}
            className="inline-block"
            variants={{
              hidden: { y: "110%", rotateZ: 5 },
              visible: { y: 0, rotateZ: 0, transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] } }
            }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.span>
    </h2>
  );
}

export const WordReveal: React.FC<{ text: string, className?: string, delay?: number }> = ({ text, className = "", delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px -20% 0px" });

  return (
    <p ref={ref} className={className}>
      <span className="sr-only">{text}</span>
      <motion.span
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ staggerChildren: 0.035, delayChildren: delay }}
        aria-hidden
      >
        {text.split(" ").map((word, i) => (
            <motion.span
                key={i}
                className="inline-block mr-[0.25em]"
                variants={{
                    hidden: { opacity: 0, y: 20, filter: 'blur(10px)' },
                    visible: { 
                        opacity: 1, 
                        y: 0, 
                        filter: 'blur(0px)',
                        transition: { duration: 0.8, ease: [0.2, 0.65, 0.3, 0.9] } 
                    }
                }}
            >
                {word}
            </motion.span>
        ))}
      </motion.span>
    </p>
  )
}

export const StaggeredWordReveal: React.FC<{ text: string, className?: string, delay?: number }> = ({ text, className = "", delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px -20% 0px" });

  return (
    <p ref={ref} className={className}>
      <span className="sr-only">{text}</span>
      <motion.span
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ staggerChildren: 0.08, delayChildren: delay }}
        aria-hidden
        className="block leading-tight"
      >
        {text.split(" ").map((word, i) => (
            <span key={i} className="inline-block mr-[0.25em] overflow-hidden align-top">
                <motion.span
                    className="inline-block"
                    variants={{
                        hidden: { y: "110%" },
                        visible: { 
                            y: 0, 
                            transition: { duration: 0.5, ease: [0.33, 1, 0.68, 1] } 
                        }
                    }}
                >
                    {word}
                </motion.span>
            </span>
        ))}
      </motion.span>
    </p>
  )
}

export const Parallax: React.FC<{ children: React.ReactNode, offset?: number, className?: string }> = ({ children, offset = 50, className = "" }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"]});
    const y = useTransform(scrollYProgress, [0, 1], [-offset, offset]);
    
    return (
        <div ref={ref} className={className}>
            <motion.div style={{ y }}>
                {children}
            </motion.div>
        </div>
    )
}