
import React, { useRef, useEffect } from 'react';

const BackgroundAnimation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);
    
    // Stars
    interface Star {
      x: number;
      y: number;
      radius: number;
      color: string;
      velocity: number;
      opacity: number;
      direction: number;
      opacityDirection: number;
    }
    
    const stars: Star[] = Array(150).fill(null).map(() => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 1.5,
      color: `rgba(${240 + Math.random() * 15}, ${240 + Math.random() * 15}, ${255}, 1)`,
      velocity: 0.05 + Math.random() * 0.1,
      opacity: 0.1 + Math.random() * 0.9,
      direction: Math.random() > 0.5 ? 1 : -1,
      opacityDirection: Math.random() > 0.5 ? 1 : -1
    }));
    
    // Nebulas (colorful gas-like elements)
    interface Nebula {
      x: number;
      y: number;
      radius: number;
      color: string;
      opacity: number;
      opacityDir: number;
    }
    
    const nebulas: Nebula[] = Array(5).fill(null).map(() => {
      const colors = [
        'rgba(110, 86, 207, 0.05)', // cosmic-accent
        'rgba(240, 86, 193, 0.05)', // cosmic-highlight
        'rgba(86, 207, 197, 0.05)'  // cosmic-neon
      ];
      
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: 100 + Math.random() * 200,
        color: colors[Math.floor(Math.random() * colors.length)],
        opacity: 0.05 + Math.random() * 0.1,
        opacityDir: Math.random() > 0.5 ? 0.0005 : -0.0005
      };
    });
    
    // Animation
    let frameId: number;
    
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw background gradient
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, '#0a0a16'); // dark top
      gradient.addColorStop(1, '#0f0f1b'); // slightly lighter bottom
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Draw nebulas
      nebulas.forEach(nebula => {
        const gradient = ctx.createRadialGradient(
          nebula.x, nebula.y, 0,
          nebula.x, nebula.y, nebula.radius
        );
        
        gradient.addColorStop(0, nebula.color.replace('0.05', `${nebula.opacity}`));
        gradient.addColorStop(1, 'rgba(10, 10, 22, 0)');
        
        ctx.beginPath();
        ctx.arc(nebula.x, nebula.y, nebula.radius, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
        
        // Update opacity for pulsing effect
        nebula.opacity += nebula.opacityDir;
        if (nebula.opacity > 0.2 || nebula.opacity < 0.05) {
          nebula.opacityDir *= -1;
        }
      });
      
      // Draw and update stars
      stars.forEach(star => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = star.color.replace('1)', `${star.opacity})`);
        ctx.fill();
        
        // Twinkle effect
        star.opacity += 0.005 * star.opacityDirection;
        if (star.opacity >= 1 || star.opacity <= 0.1) {
          star.opacityDirection *= -1;
        }
        
        // Subtle movement
        star.y += star.velocity * star.direction;
        
        // Loop stars if they move off canvas
        if (star.y < -10) star.y = canvas.height + 10;
        if (star.y > canvas.height + 10) star.y = -10;
      });
      
      frameId = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('resize', setCanvasSize);
    };
  }, []);

  return <canvas ref={canvasRef} className="canvas-container" />;
};

export default BackgroundAnimation;
