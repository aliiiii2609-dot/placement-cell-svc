import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { useReducedMotion } from '@/lib/hooks/useReducedMotion';
import { sound } from '@/lib/audio/sound-controller';

/**
 * Cinematic loader, plays once on first load.
 * On repeat visits (sessionStorage flag set), plays an abbreviated variant.
 *
 * Visual choreography:
 *   1. Ambient gold glow pulses behind the centre.
 *   2. 28 particles converge from off-screen radii to the centre.
 *   3. SVC crest (real PNG, /logos/svc-crest.png) emerges with scale+rotate spring.
 *   4. "PLACEMENT CELL" types out letter-by-letter, second word in gold.
 *   5. Subline appears, skip button fades in, loader dismisses on click or after duration.
 */
export function CinematicLoader() {
  const rootRef = useRef<HTMLDivElement>(null);
  const crestRef = useRef<HTMLImageElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const skipRef = useRef<HTMLButtonElement>(null);
  const sublineRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    let visited = false;
    try {
      visited = sessionStorage.getItem('svc-visited') === '1';
      sessionStorage.setItem('svc-visited', '1');
    } catch {
      /* non-fatal */
    }

    if (reduced) {
      // Short fade out only.
      gsap.to(root, { opacity: 0, duration: 0.4, delay: 0.3, onComplete: () => setDismissed(true) });
      return;
    }

    const totalDuration = visited ? 1.4 : 3.4;

    // Spawn particles
    const particles: HTMLDivElement[] = [];
    for (let i = 0; i < 28; i++) {
      const p = document.createElement('div');
      p.className = 'absolute w-1 h-1 rounded-full bg-gold';
      p.style.boxShadow = '0 0 8px #d4a751';
      p.style.left = '50%';
      p.style.top = '50%';
      const angle = Math.random() * Math.PI * 2;
      const dist = 320 + Math.random() * 280;
      p.style.transform = `translate(${Math.cos(angle) * dist}px, ${Math.sin(angle) * dist}px) scale(2)`;
      root.appendChild(p);
      particles.push(p);
    }

    const tl = gsap.timeline({
      onComplete: () => {
        sound.play('load-complete');
      },
    });

    tl.to(particles, {
      x: 0,
      y: 0,
      scale: 0,
      opacity: 0,
      duration: 1.6,
      stagger: 0.025,
      ease: 'power3.inOut',
    }, 0);

    if (crestRef.current) {
      gsap.set(crestRef.current, { scale: 0.6, opacity: 0, rotation: -8 });
      tl.to(crestRef.current, {
        scale: 1,
        opacity: 1,
        rotation: 0,
        duration: 1,
        ease: 'back.out(1.6)',
        onStart: () => sound.play('title-card'),
      }, 0.8);
    }

    if (titleRef.current) {
      const letters = titleRef.current.querySelectorAll<HTMLSpanElement>('span');
      gsap.set(letters, { yPercent: 100, opacity: 0 });
      tl.to(letters, {
        yPercent: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.06,
        ease: 'power3.out',
      }, 1.6);
    }

    if (sublineRef.current) {
      tl.fromTo(sublineRef.current, { opacity: 0 }, { opacity: 1, duration: 0.6 }, 2.4);
    }
    if (skipRef.current) {
      tl.fromTo(skipRef.current, { opacity: 0 }, { opacity: 0.8, duration: 0.4 }, 0.9);
    }

    const dismissTimer = window.setTimeout(() => dismiss(), totalDuration * 1000);

    function dismiss() {
      window.clearTimeout(dismissTimer);
      gsap.to(root, {
        opacity: 0,
        duration: 0.6,
        ease: 'power2.inOut',
        onComplete: () => setDismissed(true),
      });
    }

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' || e.key === ' ') dismiss();
    };
    window.addEventListener('keydown', onKey);
    skipRef.current?.addEventListener('click', dismiss);

    return () => {
      window.clearTimeout(dismissTimer);
      window.removeEventListener('keydown', onKey);
      tl.kill();
      particles.forEach((p) => p.remove());
    };
  }, [reduced]);

  if (dismissed) return null;

  const title = 'PLACEMENT CELL';

  return (
    <div
      ref={rootRef}
      className="fixed inset-0 z-[10000] bg-bg flex items-center justify-center overflow-hidden"
      aria-hidden="true"
    >
      <div className="absolute inset-[-40%] bg-[radial-gradient(circle_at_center,rgba(212,167,81,0.10),transparent_55%)] animate-pulse-slow" />

      <div className="relative w-[200px] h-[200px] flex items-center justify-center">
        <img
          ref={crestRef}
          src="/logos/svc-crest.png"
          alt="Sri Venkateswara College crest"
          className="w-[140px] h-[140px] object-contain"
          style={{ filter: 'drop-shadow(0 0 30px rgba(212,167,81,0.5))' }}
        />
      </div>

      <div
        ref={titleRef}
        className="absolute bottom-[28%] left-1/2 -translate-x-1/2 font-display italic text-[clamp(2rem,5.5vw,3.6rem)] tracking-tight whitespace-nowrap overflow-hidden"
      >
        {title.split('').map((ch, i) => (
          <span
            key={i}
            className={cn('inline-block', i >= 10 ? 'text-gold' : 'text-ink')}
            style={{ display: 'inline-block', willChange: 'transform, opacity' }}
          >
            {ch === ' ' ? '\u00A0' : ch}
          </span>
        ))}
      </div>

      <div
        ref={sublineRef}
        className="absolute bottom-[20%] left-1/2 -translate-x-1/2 font-mono text-xs uppercase tracking-[0.4em] text-ink-3 opacity-0"
      >
        Sri Venkateswara College · University of Delhi
      </div>

      <button
        ref={skipRef}
        className="absolute bottom-6 right-6 font-mono text-[0.7rem] uppercase tracking-wider text-ink-3 hover:text-gold border border-line hover:border-gold rounded px-3 py-1.5 opacity-0 transition-colors"
        aria-label="Skip intro"
      >
        Skip intro
      </button>
    </div>
  );
}

// Local cn used inside this file to avoid a circular import.
function cn(...inputs: Array<string | false | null | undefined>): string {
  return inputs.filter(Boolean).join(' ');
}
