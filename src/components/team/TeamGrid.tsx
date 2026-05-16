import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';
import { coreTeam } from '@/lib/data/team';
import { cn } from '@/lib/utils/cn';

export function TeamGrid() {
  const [flipped, setFlipped] = useState<string | null>(null);

  return (
    <section className="section-spacing" id="team">
      <div className="container-svc">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-12"
        >
          <span className="eyebrow">The Core Team / Cycle 2026-27</span>
          <h2 className="font-display text-4xl md:text-5xl mt-2 mb-3 display-italic">
            Six elected, <em>one cell.</em>
          </h2>
          <p className="text-ink-2">
            Six elected leaders, one cell. Click a card to flip for direct contact.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreTeam.map((m, i) => (
            <motion.div
              key={m.id}
              initial={{ opacity: 0, y: 30, rotateX: -10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="group relative h-[420px]"
              style={{ perspective: 1200 }}
            >
              <button
                onClick={() => setFlipped(flipped === m.id ? null : m.id)}
                aria-label={`Show contact for ${m.name}`}
                className="w-full h-full text-left transition-transform duration-700"
                style={{
                  transformStyle: 'preserve-3d',
                  transform: flipped === m.id ? 'rotateY(180deg)' : 'rotateY(0)',
                }}
              >
                {/* Front face */}
                <div
                  className="absolute inset-0 bg-surface border border-line rounded-2xl overflow-hidden group-hover:border-gold transition-colors"
                  style={{ backfaceVisibility: 'hidden' }}
                >
                  <div className="real-asset-badge">Real photo pending</div>
                  <div
                    className="h-2/3 bg-gradient-to-br from-[#2a2a35] to-[#1a1a25] flex items-center justify-center relative"
                  >
                    <span className="font-display italic text-6xl text-gold/40">
                      {m.initials}
                    </span>
                    <div className="absolute top-4 left-4 px-2.5 py-1 bg-gold text-bg text-[0.65rem] font-mono uppercase tracking-widest rounded-full">
                      {m.year}
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="font-mono text-[0.65rem] uppercase tracking-widest text-gold mb-1">
                      {m.role}
                    </div>
                    <div className="font-display italic text-xl text-ink mb-1">{m.name}</div>
                    <div className="text-xs text-ink-3">{m.course}</div>
                  </div>
                </div>

                {/* Back face */}
                <div
                  className="absolute inset-0 bg-bg-2 border border-gold rounded-2xl p-6 flex flex-col"
                  style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                >
                  <div className="font-mono text-[0.65rem] uppercase tracking-widest text-gold mb-1">
                    {m.role}
                  </div>
                  <div className="font-display italic text-xl mb-3">{m.name}</div>
                  <p className="text-xs text-ink-2 leading-relaxed mb-5 flex-1">
                    {m.bio}
                  </p>
                  <div className="space-y-2 pt-3 border-t border-line">
                    <a
                      href={`mailto:${m.email}`}
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-2 text-xs text-ink-2 hover:text-gold"
                    >
                      <Mail size={12} /> {m.email}
                    </a>
                    <a
                      href={`tel:${m.phone.replace(/\s/g, '')}`}
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-2 text-xs text-ink-2 hover:text-gold"
                    >
                      <Phone size={12} /> {m.phone}
                    </a>
                  </div>
                </div>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
