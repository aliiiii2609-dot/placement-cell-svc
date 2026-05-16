import { motion } from 'framer-motion';
import { currentCycleStats } from '@/lib/data/stats';

export function StreamSplitDonut() {
  const split = currentCycleStats.streamSplit;
  const segments = [
    { label: 'Commerce', value: split.commerce, color: '#d4a751' },
    { label: 'Arts', value: split.arts, color: '#4a9a8f' },
    { label: 'Science', value: split.science, color: '#b8754a' },
  ];
  const radius = 80;
  const circ = 2 * Math.PI * radius;

  let cumulative = 0;
  const arcs = segments.map((s) => {
    const len = (s.value / 100) * circ;
    const offset = circ - cumulative;
    cumulative += len;
    return { ...s, len, offset };
  });

  return (
    <div className="bg-surface border border-line rounded-2xl p-8">
      <div className="font-mono text-[0.65rem] uppercase tracking-widest text-gold mb-2">Stream split</div>
      <div className="font-display italic text-2xl mb-6 display-italic">
        Where the <em>offers landed.</em>
      </div>

      <div className="grid sm:grid-cols-[200px_1fr] gap-8 items-center">
        <div className="relative aspect-square">
          <svg viewBox="0 0 200 200" className="w-full h-full -rotate-90">
            <circle cx="100" cy="100" r={radius} fill="none" stroke="#272731" strokeWidth="22" />
            {arcs.map((a, i) => (
              <motion.circle
                key={a.label}
                cx="100"
                cy="100"
                r={radius}
                fill="none"
                stroke={a.color}
                strokeWidth="22"
                strokeLinecap="butt"
                strokeDasharray={`${a.len} ${circ}`}
                strokeDashoffset={a.offset}
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 1, delay: i * 0.25, ease: [0.22, 1, 0.36, 1] }}
              />
            ))}
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
            <div className="font-display italic text-3xl">{currentCycleStats.totalPlacementOffers}</div>
            <div className="font-mono text-[0.6rem] text-ink-3 uppercase tracking-widest">offers</div>
          </div>
        </div>

        <ul className="space-y-3">
          {segments.map((s) => (
            <li key={s.label} className="flex items-center justify-between border-b border-line pb-2">
              <div className="flex items-center gap-3">
                <span className="w-3 h-3 rounded-full" style={{ background: s.color }} />
                <span className="text-ink">{s.label}</span>
              </div>
              <span className="font-display italic text-xl">{s.value}<span className="text-base text-ink-3">%</span></span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
