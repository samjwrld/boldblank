import React, { useEffect, useRef } from 'react';

const FluidBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    let animationFrameId: number;

    // Configuration
    const spacing = 80;
    
    interface Point {
      x: number;
      y: number;
      originX: number;
      originY: number;
      vx: number;
      vy: number;
      baseAlpha: number;
      flickerOffset: number;
    }

    let points: Point[] = [];
    let cols = 0;
    let rows = 0;

    const init = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      
      const dpr = window.devicePixelRatio || 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      // Create Grid
      // Add extra padding to ensure coverage
      cols = Math.ceil(width / spacing) + 2;
      rows = Math.ceil(height / spacing) + 2;
      points = [];

      // Start from -1 to cover edges completely
      for (let y = -1; y < rows; y++) {
        for (let x = -1; x < cols; x++) {
          const px = x * spacing;
          const py = y * spacing;
          
          points.push({
            x: px,
            y: py,
            originX: px,
            originY: py,
            vx: 0,
            vy: 0,
            baseAlpha: Math.random() * 0.08 + 0.02, // Very subtle base node
            flickerOffset: Math.random() * 10000
          });
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      
      const time = Date.now() * 0.001;
      const mouse = mouseRef.current;
      const mouseRadius = 300;

      // Update and Draw Points
      points.forEach((p, i) => {
        // --- Physics & Interaction ---
        
        // Distance to mouse
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        // Mouse Repel Force
        if (dist < mouseRadius) {
            const force = (mouseRadius - dist) / mouseRadius;
            const angle = Math.atan2(dy, dx);
            const push = force * 4; // Strength
            
            p.vx += Math.cos(angle) * push;
            p.vy += Math.sin(angle) * push;
        }

        // Return to origin (spring)
        const ox = p.originX - p.x;
        const oy = p.originY - p.y;
        p.vx += ox * 0.03;
        p.vy += oy * 0.03;

        // Subtle ambient wave (generative feel)
        p.vx += Math.sin(time + p.originY * 0.01) * 0.02;
        p.vy += Math.cos(time + p.originX * 0.01) * 0.02;

        // Damping
        p.vx *= 0.9;
        p.vy *= 0.9;

        p.x += p.vx;
        p.y += p.vy;

        // --- Drawing Connections ---
        // Draw connections (Right and Bottom neighbors)
        // Check if not last column to connect right
        if ((i + 1) % cols !== 0 && (i + 1) < points.length) {
            const pRight = points[i + 1];
            // Only draw if relatively close (don't draw long stretched lines if physics goes wild)
            const d = Math.hypot(p.x - pRight.x, p.y - pRight.y);
            if (d < spacing * 1.6) {
                ctx.beginPath();
                ctx.strokeStyle = `rgba(255, 255, 255, 0.03)`;
                ctx.moveTo(p.x, p.y);
                ctx.lineTo(pRight.x, pRight.y);
                ctx.stroke();
            }
        }

        // Check if not last row to connect bottom
        if (i + cols < points.length) {
            const pBottom = points[i + cols];
            const d = Math.hypot(p.x - pBottom.x, p.y - pBottom.y);
             if (d < spacing * 1.6) {
                ctx.beginPath();
                ctx.strokeStyle = `rgba(255, 255, 255, 0.03)`;
                ctx.moveTo(p.x, p.y);
                ctx.lineTo(pBottom.x, pBottom.y);
                ctx.stroke();
            }
        }

        // --- Node Rendering ---
        
        let alpha = p.baseAlpha;
        let color = '255, 255, 255';
        let radius = 1;

        // Interaction Highlight
        if (dist < mouseRadius) {
            const intensity = (mouseRadius - dist) / mouseRadius;
            // Smooth falloff
            alpha = intensity * 0.8;
            color = '204, 255, 0'; // Accent #CCFF00
            radius = 1 + intensity * 2;
        } 
        // Random "Data" Flicker (Generative aspect)
        else if (Math.sin(time * 3 + p.flickerOffset) > 0.99) {
            alpha = 0.6;
            color = '204, 255, 0';
            radius = 2;
        }

        ctx.beginPath();
        ctx.fillStyle = `rgba(${color}, ${alpha})`;
        ctx.arc(p.x, p.y, radius, 0, Math.PI * 2);
        ctx.fill();

      });

      animationFrameId = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
        mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleTouchMove = (e: TouchEvent) => {
        if (e.touches.length > 0) {
            mouseRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
        }
    };

    window.addEventListener('resize', init);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);
    window.addEventListener('touchstart', handleTouchMove);
    
    init();
    animate();

    return () => {
      window.removeEventListener('resize', init);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchstart', handleTouchMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-0 bg-dark pointer-events-none">
       {/* Texture Overlay */}
       <div className="absolute inset-0 opacity-[0.04] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"></div>
       <canvas ref={canvasRef} className="block w-full h-full" />
    </div>
  );
};

export default FluidBackground;