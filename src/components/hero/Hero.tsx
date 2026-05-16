import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/Button';
import { HeroParticleField } from './HeroParticleField';
import { currentCycleStats } from '@/lib/data/stats';
import { cn } from '@/lib/utils/cn';

const lettersAnim = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.04, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
};

function LetterCascade({ text, className }: { text: string; className?: string }) {
  return (
    <span className={cn('inline-block', className)} aria-label={text}>
      {text.split('').map((ch, i) => (
        <motion.span
          key={i}
          custom={i}
          variants={lettersAnim}
          initial="hidden"
          animate="visible"
          aria-hidden="true"
          className="inline-block will-change-transform"
        >
          {ch === ' ' ? '\u00A0' : ch}
        </motion.span>
      ))}
    </span>
  );
}

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[100svh] overflow-hidden flex items-center"
      aria-label="Hero"
    >
      <HeroParticleField />

      <div className="container-svc relative z-10 grid lg:grid-cols-[1.2fr_1fr] gap-12 items-center py-24">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="inline-flex items-center gap-3 px-3 py-1.5 rounded-full border border-line bg-surface/60 backdrop-blur-sm mb-6"
          >
            <span className="relative inline-flex w-2 h-2">
              <span className="absolute inset-0 rounded-full bg-gold animate-ping opacity-75" />
              <span className="relative rounded-full w-2 h-2 bg-gold" />
            </span>
            <span className="text-xs font-mono uppercase tracking-widest text-ink-2">
              Cycle {currentCycleStats.cycle} is live
            </span>
            <span className="text-xs text-ink-3 font-mono">
              · {currentCycleStats.totalPlacementOffers} offers · {currentCycleStats.totalInternshipOffers} internships
            </span>
          </motion.div>

          <h1 className="font-display text-[clamp(2.4rem,6vw,5rem)] leading-[1.05] tracking-tight mb-6">
            <LetterCascade text="Where preparation" />
            <br />
            <LetterCascade text="meets " />
            <em className="text-gold">opportunity.</em>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="text-lg text-ink-2 max-w-xl leading-relaxed mb-8"
          >
            The Placement Cell is the operational hub between Sri Venkateswara College and
            India&apos;s most considered employers. Honest cycle data. Published process. One
            point of contact per drive.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 0.6 }}
            className="flex flex-wrap gap-3"
          >
            <Button as="a" href="/SVC_Brochure_2025-26.pdf" target="_blank" rel="noopener" size="lg">
              Download recruitment brochure
            </Button>
            <Button as={Link as never} to="/recruiters" size="lg" variant="secondary">
              Recruiter desk
            </Button>
          </motion.div>
        </div>

        <div className="relative aspect-[4/5] max-w-md mx-auto lg:mx-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.92, rotate: -3 }}
            animate={{ opacity: 1, scale: 1, rotate: -3 }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="absolute top-0 left-0 w-[70%] aspect-[4/5] rounded-xl overflow-hidden border border-line bg-surface"
          >
            <div className="real-asset-badge">SVC campus photo</div>
            <div className="w-full h-full bg-gradient-to-br from-[#2a1f10] via-[#1a1a25] to-[#0a1620] flex items-center justify-center">
              <img
                src="/logos/svc-crest.png"
                alt="Sri Venkateswara College crest, real asset"
                className="w-2/3 opacity-30"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 5 }}
            transition={{ delay: 0.45, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="absolute bottom-0 right-0 w-[60%] aspect-[3/4] rounded-xl overflow-hidden border border-line bg-surface"
          >
            <div className="real-asset-badge">Event photo</div>
            <div className="w-full h-full bg-gradient-to-br from-[#3a2820] via-[#1a1a25] to-[#1f3a30] flex items-center justify-center">
              <span className="font-mono text-[0.6rem] text-ink-3 uppercase tracking-widest px-4 text-center">
                Real event photograph awaiting Documentation upload
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="absolute top-1/2 right-[-20px] z-10 bg-bg/90 backdrop-blur-md border border-gold rounded-xl px-4 py-3 shadow-xl"
          >
            <div className="font-mono text-[0.65rem] uppercase tracking-widest text-gold">NIRF</div>
            <div className="font-display italic text-2xl">11<span className="text-base text-ink-3"> th</span></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.05, duration: 0.6 }}
            className="absolute bottom-[20%] left-[-12px] z-10 bg-bg/90 backdrop-blur-md border border-line rounded-xl px-4 py-3 shadow-xl"
          >
            <div className="font-mono text-[0.65rem] uppercase tracking-widest text-gold">NAAC</div>
            <div className="font-display italic text-2xl">A+</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
