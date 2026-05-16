import { motion } from 'framer-motion';
import { faq } from '@/lib/data/faq';
import { currentCycleStats } from '@/lib/data/stats';
import { SplitFlapCounter } from '@/components/ui/SplitFlapCounter';

export function ParentsPage() {
  return (
    <>
      <section className="section-spacing border-b border-line">
        <div className="container-svc">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="eyebrow">For Parents</span>
            <h1 className="font-display text-5xl mt-3 mb-5 display-italic">
              How the cycle <em>actually works.</em>
            </h1>
            <p className="text-lg text-ink-2 max-w-2xl leading-relaxed">
              Placements are a multi-month, multi-stage process. Outcomes vary by stream, by sector,
              by year. This page tells the honest version: what to expect, what to support, and where
              to ask for help.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-spacing border-b border-line">
        <div className="container-svc">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-line rounded-xl overflow-hidden mb-8">
            <div className="bg-bg p-5"><div className="font-mono text-[0.65rem] uppercase tracking-widest text-ink-3 mb-2">Cycle</div><div className="font-display italic text-2xl">{currentCycleStats.cycle}</div></div>
            <div className="bg-bg p-5"><div className="font-mono text-[0.65rem] uppercase tracking-widest text-ink-3 mb-2">Offers</div><div className="font-display italic text-2xl"><SplitFlapCounter value={currentCycleStats.totalPlacementOffers} /></div></div>
            <div className="bg-bg p-5"><div className="font-mono text-[0.65rem] uppercase tracking-widest text-ink-3 mb-2">Avg CTC</div><div className="font-display italic text-2xl"><SplitFlapCounter value={currentCycleStats.averageCtcLPA} decimals={2} suffix=" LPA" /></div></div>
            <div className="bg-bg p-5"><div className="font-mono text-[0.65rem] uppercase tracking-widest text-ink-3 mb-2">Highest stipend</div><div className="font-display italic text-2xl"><SplitFlapCounter value={currentCycleStats.highestStipendLPM ?? 1.75} decimals={2} suffix=" LPM" /></div></div>
          </div>

          <h2 className="font-display italic text-3xl mb-6">Common questions from parents</h2>
          <div className="space-y-4 max-w-3xl">
            {faq.parents.map((q, i) => (
              <details key={i} className="bg-surface border border-line rounded-xl p-5 group open:border-gold transition-colors">
                <summary className="font-display italic text-lg cursor-pointer flex items-center justify-between">
                  <span>{q.question}</span>
                  <span className="text-gold group-open:rotate-180 transition-transform">▾</span>
                </summary>
                <p className="text-sm text-ink-2 leading-relaxed mt-3">{q.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
