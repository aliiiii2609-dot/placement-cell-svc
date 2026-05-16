import { motion } from 'framer-motion';
import { councilHeads, departmentCharters } from '@/lib/data/council';
import { coordinators, TOTAL_VOLUNTEER_COUNT } from '@/lib/data/coordinators';
import { cn } from '@/lib/utils/cn';

export function CouncilMarquee() {
  const departments = Object.keys(departmentCharters) as Array<keyof typeof departmentCharters>;

  return (
    <section className="section-spacing bg-bg-2 border-t border-line" id="council">
      <div className="container-svc">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-12"
        >
          <span className="eyebrow">The Council & Coordinators</span>
          <h2 className="font-display text-4xl md:text-5xl mt-2 mb-3 display-italic">
            <em>{TOTAL_VOLUNTEER_COUNT}</em> volunteers, five departments.
          </h2>
          <p className="text-ink-2">
            The core team of six is supported by 13 council heads across five departments,
            and 39 placement coordinators who own recruiter outreach. The cell runs on
            student labor, faculty oversight, and a clear separation of responsibilities.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-3 mb-10">
          {departments.map((d, i) => {
            const heads = councilHeads.filter((h) => h.department === d);
            return (
              <motion.div
                key={d}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="bg-surface border border-line rounded-xl p-5 hover:border-gold transition-colors"
              >
                <div className="font-mono text-[0.65rem] uppercase tracking-widest text-gold mb-2">
                  {d}
                </div>
                <div className="font-display italic text-xl mb-3">{heads.length} heads</div>
                <p className="text-xs text-ink-3 leading-relaxed mb-4 line-clamp-4">
                  {departmentCharters[d].charter}
                </p>
                <ul className="text-xs text-ink-2 space-y-1">
                  {heads.map((h) => (
                    <li key={h.id}>
                      <span className="text-ink">{h.name}</span>
                      <span className="text-ink-3"> · {h.course}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        <div className="bg-surface border border-line rounded-xl p-6 overflow-hidden">
          <div className="font-mono text-[0.65rem] uppercase tracking-widest text-gold mb-4">
            Placement Coordinators · {coordinators.length} students
          </div>
          <div className="overflow-hidden">
            <div
              className={cn('flex w-max gap-2 animate-marquee')}
              style={{ animationDuration: '90s' }}
            >
              {[...coordinators, ...coordinators].map((c, i) => (
                <span
                  key={`${c.id}-${i}`}
                  className="shrink-0 px-3 py-1.5 rounded-full bg-bg-2 border border-line text-xs text-ink-2"
                >
                  {c.name}
                  <span className="text-ink-3 ml-2">{c.course}</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
