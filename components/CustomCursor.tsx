import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  // Mouse position
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  // Smooth physics for movement - optimized for snappy follow
  const springConfig = { damping: 20, stiffness: 350, mass: 0.5 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768 || 'ontouchstart' in window);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const moveCursor = (e: MouseEvent | TouchEvent) => {
      if (isMobile) return;
      
      let clientX, clientY;
      
      if ('touches' in e) {
        clientX = e.touches[0].clientX;
        clientY = e.touches[0].clientY;
      } else {
        clientX = (e as MouseEvent).clientX;
        clientY = (e as MouseEvent).clientY;
      }

      cursorX.set(clientX);
      cursorY.set(clientY);
    };

    const handleMouseOver = (e: MouseEvent | TouchEvent) => {
      if (isMobile) return;
      const target = e.target as HTMLElement;
      
      // Extended interactive detection including computed style
      let isInteractive = false;
      
      // 1. Check tags
      if (
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.tagName === 'INPUT' || 
        target.tagName === 'TEXTAREA' || 
        target.tagName === 'SELECT'
      ) {
        isInteractive = true;
      }
      
      // 2. Check closest interactive containers
      if (!isInteractive && (
        target.closest('a') || 
        target.closest('button') || 
        target.closest('[role="button"]') || 
        target.closest('.cursor-hover')
      )) {
        isInteractive = true;
      }

      // 3. Check computed cursor style (catch-all for clickable divs)
      if (!isInteractive) {
        const style = window.getComputedStyle(target);
        if (style.cursor === 'pointer') {
            isInteractive = true;
        }
      }

      setIsHovered(isInteractive);
    };

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('touchmove', moveCursor);
    window.addEventListener('touchstart', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('touchstart', handleMouseDown);
    window.addEventListener('touchend', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('touchmove', moveCursor);
      window.removeEventListener('touchstart', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchstart', handleMouseDown);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [cursorX, cursorY]);

  if (isMobile) return null;

  return (
    <motion.div 
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference flex items-center justify-center"
        style={{
            x: smoothX,
            y: smoothY,
            translateX: "-50%",
            translateY: "-50%",
        }}
    >
        <motion.div
           className="rounded-full flex items-center justify-center relative bg-accent"
           animate={{
              width: isHovered ? 80 : 12,
              height: isHovered ? 80 : 12,
              scale: isClicked ? 0.9 : 1,
              // When hovered, solid block for maximum inversion effect
              // When not hovered, solid dot
              opacity: 1
           }}
           transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
              mass: 0.5
           }}
        />
    </motion.div>
  );
};

export default CustomCursor;