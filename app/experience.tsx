'use client';

import { useEffect, useRef } from 'react';

type Particle = { x: number; y: number; z: number; previousZ: number; color: string };

// Adapted from ThreeUI Community ParticleNetwork (MIT): https://github.com/MengTo/threeui
export function ThreeUiParticleNetwork({ className = '' }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext('2d');
    if (!context) return;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let frame = 0;
    let width = 0;
    let height = 0;
    let particles: Particle[] = [];

    const reset = (particle?: Particle) => {
      const angle = Math.random() * Math.PI * 2;
      const radius = 30 + Math.random() * Math.max(width, height) * 0.62;
      const next = particle ?? ({} as Particle);
      next.x = Math.cos(angle) * radius;
      next.y = Math.sin(angle) * radius;
      next.z = 80 + Math.random() * 920;
      next.previousZ = next.z + 20;
      next.color = Math.random() > 0.45 ? '#d9ff43' : Math.random() > 0.5 ? '#9f8cff' : '#ffffff';
      return next;
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      width = Math.max(1, rect.width);
      height = Math.max(1, rect.height);
      canvas.width = width * ratio;
      canvas.height = height * ratio;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      const count = width < 600 ? 54 : 92;
      particles = Array.from({ length: count }, () => reset());
    };

    const draw = () => {
      context.fillStyle = 'rgba(24, 9, 61, .22)';
      context.fillRect(0, 0, width, height);
      const originX = width * 0.52;
      const originY = height * 0.64;
      const fov = 310;
      for (const particle of particles) {
        particle.previousZ = particle.z;
        particle.z -= reducedMotion ? 0 : 3.1;
        if (particle.z < 8) reset(particle);
        const scale = fov / particle.z;
        const previousScale = fov / particle.previousZ;
        const x = originX + particle.x * scale;
        const y = originY + particle.y * scale;
        const previousX = originX + particle.x * previousScale;
        const previousY = originY + particle.y * previousScale;
        if (x < -40 || x > width + 40 || y < -40 || y > height + 40) {
          reset(particle);
          continue;
        }
        context.beginPath();
        context.moveTo(previousX, previousY);
        context.lineTo(x, y);
        context.strokeStyle = particle.color;
        context.globalAlpha = Math.min(0.82, 1 - particle.z / 1200);
        context.lineWidth = Math.max(0.6, 2.2 * scale);
        context.stroke();
      }
      context.globalAlpha = 1;
      if (!reducedMotion) frame = window.requestAnimationFrame(draw);
    };

    resize();
    context.fillStyle = '#1d1038';
    context.fillRect(0, 0, width, height);
    draw();
    const observer = new ResizeObserver(resize);
    observer.observe(canvas);
    return () => {
      observer.disconnect();
      window.cancelAnimationFrame(frame);
    };
  }, []);

  return <canvas ref={canvasRef} className={className} aria-hidden="true" />;
}

export function Reveal({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      node.dataset.visible = 'true';
      return;
    }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        node.dataset.visible = 'true';
        observer.disconnect();
      }
    }, { rootMargin: '0px 0px -10% 0px', threshold: 0.08 });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);
  return <div ref={ref} className={`reveal-section ${className}`}>{children}</div>;
}

export function SectionTransitions() {
  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>('main > section'));
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion) return;
    sections.forEach((section, index) => {
      if (index === 0) return;
      section.classList.add('section-transition');
    });
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          (entry.target as HTMLElement).dataset.revealed = 'true';
          observer.unobserve(entry.target);
        }
      }
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.06 });
    sections.slice(1).forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);
  return null;
}
