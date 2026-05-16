import { motion } from 'framer-motion';
import { format, parseISO } from 'date-fns';
import { news } from '@/lib/data/news';

export function NewsPage() {
  return (
    <>
      <section className="section-spacing border-b border-line">
        <div className="container-svc">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="eyebrow">News</span>
            <h1 className="font-display text-5xl mt-3 mb-5 display-italic">
              The cell, <em>in motion.</em>
            </h1>
            <p className="text-lg text-ink-2 max-w-2xl">
              Drive launches, deadlines, press mentions, and structural updates. The cell publishes here
              before sending the weekly digest.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-spacing">
        <div className="container-svc grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {news.map((n, i) => (
            <motion.article key={n.id} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.4, delay: i * 0.05 }} className="bg-surface border border-line rounded-2xl p-6 hover:border-gold transition-colors">
              <div className="font-mono text-[0.65rem] uppercase tracking-widest text-gold mb-2">
                {n.category} · {format(parseISO(n.publishedAt), 'd MMM yyyy')}
              </div>
              <h3 className="font-display italic text-xl mb-3">{n.title}</h3>
              <p className="text-sm text-ink-2 leading-relaxed">{n.summary}</p>
            </motion.article>
          ))}
        </div>
      </section>
    </>
  );
}
