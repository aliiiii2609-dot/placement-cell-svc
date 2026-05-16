import { motion } from 'framer-motion';
import { trendCycles } from '@/lib/data/stats';

export function TrendLineChart() {
  const width = 600;
  const height = 240;
  const pad = 30;
  const maxOffers = Math.max(...trendCycles.map((c) => c.offers));
  const maxPeak = Math.max(...trendCycles.map((c) => c.peak));
  const stepX = (width - pad * 2) / (trendCycles.length - 1);

  const offersPath = trendCycles
    .map((c, i) => {
      const x = pad + i * stepX;
      const y = height - pad - (c.offers / maxOffers) * (height - pad * 2);
      return `${i === 0 ? 'M' : 'L'} ${x.toFixed(1)} ${y.toFixed(1)}`;
    })
    .join(' ');

  const peakPath = trendCycles
    .map((c, i) => {
      const x = pad + i * stepX;
      const y = height - pad - (c.peak / maxPeak) * (height - pad * 2);
      return `${i === 0 ? 'M' : 'L'} ${x.toFixed(1)} ${y.toFixed(1)}`;
    })
    .join(' ');

  return (
    <div className="bg-surface border border-line rounded-2xl p-8">
      <div className="font-mono text-[0.65rem] uppercase tracking-widest text-gold mb-2">Five-year trend</div>
      <div className="font-display italic text-2xl mb-6 display-italic">
        Offers and <em>peak CTC,</em> by cycle.
      </div>

      <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto">
        <line x1={pad} y1={height - pad} x2={width - pad} y2={height - pad} stroke="#272731" />
        <line x1={pad} y1={pad} x2={pad} y2={height - pad} stroke="#272731" />

        <motion.path
          d={offersPath}
          fill="none"
          stroke="#d4a751"
          strokeWidth="2.5"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        />
        <motion.path
          d={peakPath}
          fill="none"
          stroke="#4a9a8f"
          strokeWidth="2"
          strokeDasharray="5 5"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1.4, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        />

        {trendCycles.map((c, i) => {
          const x = pad + i * stepX;
          const yOffers = height - pad - (c.offers / maxOffers) * (height - pad * 2);
          const yPeak = height - pad - (c.peak / maxPeak) * (height - pad * 2);
          return (
            <g key={c.cycle}>
              <motion.circle
                cx={x} cy={yOffers} r="4" fill="#d4a751"
                initial={{ scale: 0 }} whileInView={{ scale: 1 }}
                viewport={{ once: true }} transition={{ delay: 1.2 + i * 0.07 }}
              />
              <motion.circle
                cx={x} cy={yPeak} r="3" fill="#4a9a8f"
                initial={{ scale: 0 }} whileInView={{ scale: 1 }}
                viewport={{ once: true }} transition={{ delay: 1.5 + i * 0.07 }}
              />
              <text x={x} y={height - 10} textAnchor="middle" fill="#807c70" fontSize="10" fontFamily="JetBrains Mono">
                {c.cycle}
              </text>
            </g>
          );
        })}
      </svg>

      <div className="flex gap-4 mt-4 text-xs">
        <span className="flex items-center gap-2"><span className="w-3 h-px bg-gold" /> <span className="text-ink-2">Offers</span></span>
        <span className="flex items-center gap-2"><span className="w-3 h-px bg-teal border-dashed" style={{ borderTop: '1px dashed #4a9a8f' }} /> <span className="text-ink-2">Peak CTC, LPA</span></span>
      </div>
    </div>
  );
}
