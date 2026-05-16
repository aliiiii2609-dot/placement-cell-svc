import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import { resources } from '@/lib/data/resources';

export function ResourcesPage() {
  return (
    <>
      <section className="section-spacing border-b border-line">
        <div className="container-svc">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="eyebrow">Resources</span>
            <h1 className="font-display text-5xl mt-3 mb-5 display-italic">
              Templates, guides, <em>prep.</em>
            </h1>
            <p className="text-lg text-ink-2 max-w-2xl">
              The cell&apos;s CV template, sector-specific interview guides, case primers, and the recruitment brochure.
              Files are reviewed each cycle and replaced when out of date.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-spacing">
        <div className="container-svc grid md:grid-cols-2 gap-4">
          {resources.map((r, i) => (
            <motion.a key={r.id} href={r.filePath ?? '#'} target="_blank" rel="noopener" initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.4, delay: i * 0.05 }} className="bg-surface border border-line rounded-2xl p-6 hover:border-gold transition-colors flex items-start gap-4 group">
              <Download className="text-gold shrink-0 mt-1 transition-transform group-hover:-translate-y-0.5" size={18} />
              <div className="flex-1 min-w-0">
                <div className="font-mono text-[0.65rem] uppercase tracking-widest text-gold mb-1">{r.category}</div>
                <div className="font-display italic text-xl mb-2">{r.title}</div>
                <p className="text-sm text-ink-2 mb-2">{r.description}</p>
                <div className="text-xs text-ink-3 font-mono">{r.downloadCount.toLocaleString()} downloads</div>
              </div>
            </motion.a>
          ))}
        </div>
      </section>
    </>
  );
}
