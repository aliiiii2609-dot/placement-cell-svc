import { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from '@/lib/hooks/useReducedMotion';

type CursorState = 'default' | 'text' | 'link' | 'view' | 'drag' | 'plus' | 'hidden';

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<CursorState>('default');
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced || typeof window === 'undefined') return;
    if (window.matchMedia('(pointer: coarse)').matches) {
      setState('hidden');
      return;
    }

    const dot = dotRef.current!;
    const ring = ringRef.current!;
    const label = labelRef.current!;
    let mouseX = -100;
    let mouseY = -100;
    let ringX = mouseX;
    let ringY = mouseY;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
    };

    const tick = () => {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      ring.style.transform = `translate(${ringX.toFixed(2)}px, ${ringY.toFixed(2)}px)`;
      label.style.transform = `translate(${mouseX + 18}px, ${mouseY + 18}px)`;
      requestAnimationFrame(tick);
    };

    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (!t || !t.closest) return setState('default');
      if (t.closest('input, textarea, [contenteditable="true"]')) return setState('text');
      if (t.closest('a, button, [role="button"], [data-cursor="link"]')) return setState('link');
      if (t.closest('img, [data-cursor="view"]')) return setState('view');
      if (t.closest('[data-cursor="drag"]')) return setState('drag');
      if (t.closest('[data-cursor="plus"]')) return setState('plus');
      return setState('default');
    };

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseover', onOver);
    const raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseover', onOver);
      cancelAnimationFrame(raf);
    };
  }, [reduced]);

  if (state === 'hidden' || reduced) return null;

  const label = {
    default: '',
    text: '',
    link: '→',
    view: 'view',
    drag: '⇄',
    plus: '+',
    hidden: '',
  }[state];

  return (
    <>
      <div
        ref={dotRef}
        className="fixed left-0 top-0 z-[9999] pointer-events-none -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-gold rounded-full transition-[width,height] duration-200"
        style={{ width: state === 'text' ? 2 : 6, height: state === 'text' ? 18 : 6 }}
      />
      <div
        ref={ringRef}
        className="fixed left-0 top-0 z-[9998] pointer-events-none -translate-x-1/2 -translate-y-1/2 border border-gold rounded-full transition-[width,height,opacity] duration-300"
        style={{
          width: state === 'link' || state === 'view' ? 48 : state === 'text' ? 0 : 28,
          height: state === 'link' || state === 'view' ? 48 : state === 'text' ? 0 : 28,
          opacity: state === 'text' ? 0 : 0.7,
        }}
      />
      <div
        ref={labelRef}
        className="fixed left-0 top-0 z-[9997] pointer-events-none font-mono text-[0.65rem] uppercase tracking-wider text-gold transition-opacity duration-200"
        style={{ opacity: label ? 1 : 0 }}
      >
        {label}
      </div>
    </>
  );
}
