import { motion } from 'framer-motion';
import { SplitFlapCounter } from '@/components/ui/SplitFlapCounter';
import { currentCycleStats } from '@/lib/data/stats';

const cells = [
  { label: 'Placement offers', value: currentCycleStats.totalPlacementOffers, decimals: 0, suffix: '', cap: 'Final selections across streams' },
  { label: 'Internship offers', value: currentCycleStats.totalInternshipOffers, decimals: 0, suffix: '', cap: 'Summer plus PPO-track' },
  { label: 'Peak CTC', value: currentCycleStats.peakCtcLPA, decimals: 2, suffix: 'LPA', cap: 'Highest fixed offer this cycle' },
  { label: 'Average CTC', value: currentCycleStats.averageCtcLPA, decimals: 2, suffix: 'LPA', cap: 'Mean of accepted offers' },
  { label: 'Gross offer value', value: currentCycleStats.grossOfferValueCr, decimals: 2, suffix: 'Cr', cap: 'Cumulative CTC across offers' },
  { label: 'Recruiters engaged', value: currentCycleStats.recruitersEngaged, decimals: 0, suffix: '+', cap: 'Firms that ran a process' },
];

export function StatsBar() {
  return (
    <section className="section-spacing bg-bg-2 border-t border-line border-b" id="stats">
      <div className="container-svc">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-12"
        >
          <span className="eyebrow">Cycle {currentCycleStats.cycle} / Aggregate</span>
          <h2 className="font-display text-4xl md:text-5xl mt-2 mb-3 display-italic">
            The numbers, <em>plain.</em>
          </h2>
          <p className="text-ink-2 text-base">
            Aggregate placement and internship data for the running cycle. Individual offers
            are never paired with named students. Per-company offer counts and CTC values
            are never disclosed alongside named firms.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-line">
          {cells.map((c, i) => (
            <motion.div
              key={c.label}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="bg-bg p-6 md:p-8"
            >
              <div className="font-mono text-[0.7rem] uppercase tracking-widest text-ink-3 mb-3">
                {c.label}
              </div>
              <div className="text-4xl md:text-5xl text-ink mb-2">
                <SplitFlapCounter value={c.value} decimals={c.decimals} suffix={c.suffix} />
              </div>
              <div className="text-xs text-ink-2">{c.cap}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
