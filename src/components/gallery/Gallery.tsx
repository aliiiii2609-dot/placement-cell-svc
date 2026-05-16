import { motion } from 'framer-motion';
import { cn } from '@/lib/utils/cn';

type Tile = { id: string; caption: string; gradient: string; size?: 'tall' | 'wide' | 'default' };

const tiles: Tile[] = [
  { id: 'ifair-floor', caption: 'IFair 2026, floor view', gradient: 'from-[#2a1f10] via-[#1a1a25] to-[#0a1620]', size: 'tall' },
  { id: 'industry-talk', caption: 'Industry talk, audit sector', gradient: 'from-[#1f2a3a] to-[#0a1620]', size: 'wide' },
  { id: 'cv-workshop', caption: 'CV vetting workshop', gradient: 'from-[#2a2018] to-[#15151a]' },
  { id: 'mock-interview', caption: 'Mock interview day', gradient: 'from-[#1a2a25] to-[#0a1f1a]' },
  { id: 'pre-placement-talk', caption: 'Recruiter pre-placement talk', gradient: 'from-[#2a1a25] to-[#1a0a20]', size: 'wide' },
  { id: 'panel-banking', caption: 'Panel, banking sector', gradient: 'from-[#1f1a2a] to-[#0a0a1f]' },
  { id: 'alumni-meet', caption: 'Alumni mentor meet', gradient: 'from-[#2a201a] to-[#1f1a0a]' },
  { id: 'campus', caption: 'Campus, Dhaula Kuan', gradient: 'from-[#2a2520] to-[#1a1a15]', size: 'tall' },
  { id: 'orientation', caption: 'Sector orientation', gradient: 'from-[#1a2a2a] to-[#0a1f1f]' },
  { id: 'drive-closeout', caption: 'Drive close-out', gradient: 'from-[#251a2a] to-[#0a0a1f]' },
];

export function Gallery() {
  return (
    <section className="section-spacing" id="gallery">
      <div className="container-svc">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-8"
        >
          <span className="eyebrow">Gallery</span>
          <h2 className="font-display text-4xl md:text-5xl mt-2 mb-3 display-italic">
            From <em>drives, talks, fairs.</em>
          </h2>
          <p className="text-ink-2">
            Photographs from this cycle&apos;s drives, workshops, industry talks, and the IFair floor.
            Documentation department replaces each placeholder with a real archive image before launch.
          </p>
        </motion.div>

        <div className="mb-6 px-4 py-3 bg-surface border-l-2 border-gold rounded text-xs font-mono uppercase tracking-widest text-ink-2">
          <span className="text-gold">Real event photography pending.</span> Tiles below are placeholders awaiting real archive replacement.
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[140px] md:auto-rows-[180px] gap-2">
          {tiles.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.04 }}
              className={cn(
                'relative rounded-lg overflow-hidden border border-line group cursor-pointer',
                t.size === 'tall' && 'row-span-2',
                t.size === 'wide' && 'col-span-2',
              )}
              data-cursor="view"
            >
              <div className="real-asset-badge">Real photo pending</div>
              <div className={cn('w-full h-full bg-gradient-to-br', t.gradient, 'transition-transform duration-700 group-hover:scale-105')} />
              <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-bg/95 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="font-mono text-[0.65rem] uppercase tracking-widest text-gold">
                  {t.caption}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
