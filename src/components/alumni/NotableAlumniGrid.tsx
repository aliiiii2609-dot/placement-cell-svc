import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import { notableAlumni } from '@/lib/data/notable-alumni';
import type { NotableAlumnus } from '@/types';

function QualificationsTimeline({ qualifications }: { qualifications: NotableAlumnus['qualifications'] }) {
  return (
    <ol className="relative flex flex-col-reverse gap-3 pl-5 border-l border-gold/30">
      {qualifications.map((q, i) => (
        <li key={i} className="relative">
          <span className="absolute -left-[26px] top-1.5 w-2.5 h-2.5 rounded-full bg-gold ring-4 ring-bg" />
          <div className="grid grid-cols-[36px_1fr_auto] gap-3 items-center">
            <div className="w-9 h-9 rounded-md bg-bg-2 border border-line flex items-center justify-center" title={`Logo placeholder for ${q.institution}`}>
              <GraduationCap size={14} className="text-gold" />
            </div>
            <div className="leading-tight">
              <div className="text-sm text-ink font-medium">{q.degree}</div>
              <div className="text-xs text-ink-3">{q.institution}</div>
            </div>
            <div className="font-mono text-xs text-gold">{q.year}</div>
          </div>
        </li>
      ))}
    </ol>
  );
}

export function NotableAlumniGrid() {
  return (
    <section className="section-spacing bg-bg-2 border-t border-line" id="notable-alumni">
      <div className="container-svc">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-12"
        >
          <span className="eyebrow">Proud Alumni</span>
          <h2 className="font-display text-4xl md:text-5xl mt-2 mb-3 display-italic">
            From this campus, <em>to the world.</em>
          </h2>
          <p className="text-ink-2">
            Alumni who came through SVC and went on to top firms, premier business schools, and public-impact roles.
            Profiles published with consent. SVC-era placement records are never displayed.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {notableAlumni.map((a, i) => (
            <motion.article
              key={a.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.55, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="bg-surface border border-line rounded-2xl overflow-hidden hover:border-gold transition-colors group"
            >
              <div className="relative h-56 bg-gradient-to-br from-[#2a2a35] to-[#1a1a25] flex items-center justify-center">
                <div className="real-asset-badge">Real photo pending</div>
                <span className="font-display italic text-6xl text-gold/30">
                  {a.name.split(' ').map((p) => p[0]).join('').slice(0, 2)}
                </span>
                <div className="absolute bottom-3 left-3 px-2 py-1 rounded bg-bg/80 backdrop-blur text-[0.65rem] font-mono uppercase tracking-widest text-ink-2">
                  {a.course} · {a.graduatingYear}
                </div>
              </div>
              <div className="p-5 flex flex-col gap-4">
                <div>
                  <div className="font-display italic text-xl text-ink">{a.name}</div>
                  <div className="text-sm text-ink-2 mt-1">{a.currentRole}</div>
                  <div className="text-xs text-ink-3">{a.currentCompany}</div>
                  {a.location && <div className="text-xs text-ink-3 mt-1">{a.location}</div>}
                </div>
                {a.achievement && (
                  <div className="text-xs font-mono uppercase tracking-widest text-gold border-l-2 border-gold pl-3">
                    {a.achievement}
                  </div>
                )}
                <div>
                  <div className="font-mono text-[0.65rem] uppercase tracking-widest text-ink-3 mb-3">
                    Qualifications
                  </div>
                  <QualificationsTimeline qualifications={a.qualifications} />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
