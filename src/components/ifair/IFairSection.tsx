import { motion } from 'framer-motion';
import { SplitFlapCounter } from '@/components/ui/SplitFlapCounter';

const ifairEditions = [
  { year: '2023', edition: 'Seventh', orgs: 52, regs: 680, offers: 295, status: 'past' as const, note: 'Chief Guest: Eti Gupta, GM at Asteria Aerospace' },
  { year: '2024', edition: 'Eighth', orgs: 62, regs: 595, offers: 540, status: 'past' as const, note: 'Chief Guest: Shalabh Hajela, CA + IFRS from ACCA UK' },
  { year: '2025', edition: 'Ninth', orgs: 55, regs: 347, offers: 165, status: 'past' as const, note: 'Chief Guest: Leandro D Sylva, Global Training Director at Miller Wymann USA' },
  { year: '2026', edition: 'Tenth', orgs: 60, regs: null, offers: null, status: 'upcoming' as const, note: 'Date: 25 March 2026. Recruiter EOI open.' },
];

export function IFairSection() {
  return (
    <section className="section-spacing border-t border-line" id="ifair">
      <div className="container-svc">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-[1.2fr_1fr] gap-10 items-start mb-12"
        >
          <div>
            <span className="eyebrow">The IFair / Tenth Edition · 25 March 2026</span>
            <h2 className="font-display text-4xl md:text-5xl mt-2 mb-4 display-italic">
              <em>One day.</em> One floor. Offers by sundown.
            </h2>
            <p className="text-ink-2 text-lg leading-relaxed mb-6">
              The Internship Fair is the cell&apos;s flagship event. Corporates, startups, and NGOs converge on
              the SVC campus. Resume shortlisting and interviews happen on the spot. Results declared
              by end of day. Nine editions over nine years. The tenth is upcoming.
            </p>
            <a
              href="mailto:placement@svc.du.ac.in?subject=IFair%202026%20recruiter%20expression%20of%20interest"
              className="inline-flex items-center gap-2 text-gold hover:text-ink transition-colors font-mono text-sm uppercase tracking-widest"
            >
              Express interest for IFair 2026
              <span aria-hidden>→</span>
            </a>
          </div>

          <div className="relative aspect-square max-w-md rounded-2xl border border-line bg-surface overflow-hidden">
            <div className="real-asset-badge">IFair photo pending</div>
            <div className="w-full h-full bg-gradient-to-br from-[#3a2820] via-[#1a1a25] to-[#1f3a30] flex items-center justify-center p-6">
              <div className="text-center">
                <div className="font-display italic text-8xl text-gold mb-3">10</div>
                <div className="font-mono text-xs uppercase tracking-widest text-ink-2">th Edition</div>
                <div className="font-display italic text-2xl mt-4 text-ink">Opportunity Calls</div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {ifairEditions.map((ed, i) => (
            <motion.div
              key={ed.year}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`bg-surface border ${ed.status === 'upcoming' ? 'border-gold' : 'border-line'} rounded-xl p-5`}
            >
              <div className="flex items-baseline justify-between mb-4">
                <div className="font-display italic text-3xl text-ink">IFair&apos;{ed.year.slice(2)}</div>
                <div className="font-mono text-[0.65rem] uppercase tracking-widest text-gold">
                  {ed.status === 'upcoming' ? 'Upcoming' : ed.edition}
                </div>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between border-b border-line pb-2">
                  <span className="text-ink-3">Organizations</span>
                  <span className="text-ink">
                    {ed.orgs ? <SplitFlapCounter value={ed.orgs} suffix="+" /> : 'TBD'}
                  </span>
                </div>
                <div className="flex justify-between border-b border-line pb-2">
                  <span className="text-ink-3">Registrations</span>
                  <span className="text-ink">
                    {ed.regs ? <SplitFlapCounter value={ed.regs} suffix="+" /> : 'Open'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-ink-3">Offers</span>
                  <span className="text-gold">
                    {ed.offers ? <SplitFlapCounter value={ed.offers} suffix="+" /> : 'TBD'}
                  </span>
                </div>
              </div>
              <p className="text-xs text-ink-3 mt-4 leading-relaxed">{ed.note}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
