import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { recruiters, PARTNER_COUNT } from '@/lib/data/partners';
import { cn } from '@/lib/utils/cn';

function PartnerTile({ slug, name, brandColor }: { slug: string; name: string; brandColor?: string }) {
  return (
    <Link
      to={`/companies/${slug}`}
      className="inline-flex items-center gap-3 px-5 py-3 rounded-lg bg-surface border border-line hover:border-gold transition-all duration-300 hover:-translate-y-0.5 mx-2 shrink-0 group"
    >
      <span
        className="w-2.5 h-2.5 rounded-full transition-transform duration-300 group-hover:scale-125"
        style={{ background: brandColor ?? '#d4a751' }}
        aria-hidden="true"
      />
      <span className="font-display italic text-base whitespace-nowrap">{name}</span>
    </Link>
  );
}

export function PartnersMarquee() {
  const rows = [
    { items: recruiters.slice(0, 24), duration: 60, reverse: false },
    { items: recruiters.slice(24, 48), duration: 80, reverse: true },
    { items: recruiters.slice(0).reverse().slice(0, 24), duration: 50, reverse: false },
  ];

  return (
    <section className="section-spacing border-t border-line" id="partners">
      <div className="container-svc mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span className="eyebrow">Recruiter Partners</span>
          <h2 className="font-display text-4xl md:text-5xl mt-2 mb-3 display-italic">
            The firms that <em>came to campus.</em>
          </h2>
          <p className="text-ink-2 max-w-2xl">
            {PARTNER_COUNT} firms have engaged with the cell across the 2024-25 and 2025-26 cycles. Names listed
            without per-firm offer details. No CTC values are paired with named companies. Real
            brand logos replace these placeholders as the PR department sources them.
          </p>
        </motion.div>
      </div>

      <div className="space-y-3 overflow-hidden">
        {rows.map((row, idx) => (
          <div key={idx} className="overflow-hidden mask-image">
            <div
              className={cn(
                'flex w-max',
                row.reverse ? 'animate-marquee-reverse' : 'animate-marquee',
              )}
              style={{ animationDuration: `${row.duration}s` }}
            >
              {[...row.items, ...row.items].map((r, i) => (
                <PartnerTile key={`${r.slug}-${i}`} {...r} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
