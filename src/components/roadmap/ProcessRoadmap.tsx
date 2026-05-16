import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { processSteps } from '@/lib/data/process';

export function ProcessRoadmap() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const pathLength = useTransform(scrollYProgress, [0.1, 0.85], [0, 1]);

  return (
    <section ref={ref} className="section-spacing relative" id="process">
      <div className="container-svc">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16"
        >
          <span className="eyebrow">The Process</span>
          <h2 className="font-display text-4xl md:text-5xl mt-2 mb-3 display-italic">
            JD to offer, <em>eight steps.</em>
          </h2>
          <p className="text-ink-2">
            How a drive runs from first contact to onboarding. Every step has an owner, a duration, and an output. No surprises.
          </p>
        </motion.div>

        <div className="relative">
          <svg
            className="absolute left-7 top-0 h-full w-2 hidden md:block"
            viewBox="0 0 8 1000"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <motion.line
              x1="4"
              y1="0"
              x2="4"
              y2="1000"
              stroke="#d4a751"
              strokeWidth="2"
              strokeDasharray="6 6"
              style={{ pathLength }}
            />
          </svg>

          <ol className="space-y-6">
            {processSteps.map((step, i) => (
              <motion.li
                key={step.index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="grid md:grid-cols-[60px_1fr] gap-5"
              >
                <div className="flex md:flex-col items-center md:items-stretch gap-3">
                  <div className="relative w-[58px] h-[58px] rounded-full bg-bg border-2 border-gold flex items-center justify-center font-display italic text-xl text-gold shrink-0">
                    {step.index.toString().padStart(2, '0')}
                  </div>
                </div>
                <div className="bg-surface border border-line hover:border-gold rounded-xl p-6 transition-colors">
                  <div className="flex flex-wrap items-baseline gap-3 mb-2">
                    <h3 className="font-display italic text-xl text-ink">{step.title}</h3>
                    <span className="font-mono text-[0.7rem] uppercase tracking-widest text-gold">{step.duration}</span>
                  </div>
                  <p className="text-sm text-ink-2 leading-relaxed mb-4">{step.description}</p>
                  <div className="grid sm:grid-cols-2 gap-4 pt-4 border-t border-line text-xs">
                    <div>
                      <div className="font-mono uppercase tracking-widest text-ink-3 text-[0.65rem] mb-0.5">Owner</div>
                      <div className="text-ink-2">{step.owner}</div>
                    </div>
                    <div>
                      <div className="font-mono uppercase tracking-widest text-ink-3 text-[0.65rem] mb-0.5">Output</div>
                      <div className="text-ink-2">{step.output}</div>
                    </div>
                  </div>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
