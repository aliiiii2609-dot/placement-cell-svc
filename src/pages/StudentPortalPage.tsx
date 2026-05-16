import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FileText, MessageSquare, BookOpen, Calendar, ArrowRight } from 'lucide-react';
import { resources } from '@/lib/data/resources';
import { events } from '@/lib/data/events';
import { news } from '@/lib/data/news';

export function StudentPortalPage() {
  const upcoming = events.filter((e) => new Date(e.date) >= new Date()).slice(0, 3);
  const latest = news.slice(0, 4);

  return (
    <>
      <section className="section-spacing border-b border-line">
        <div className="container-svc">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="eyebrow">Student Portal</span>
            <h1 className="font-display text-5xl md:text-6xl mt-3 mb-5 display-italic">
              Prepare. Apply. <em>Track.</em>
            </h1>
            <p className="text-lg text-ink-2 max-w-2xl leading-relaxed">
              Open drives are circulated by email (placements) and on the official WhatsApp community
              (internships). Use the cell&apos;s CV template, follow the eligibility filters, and
              attend every shortlist round.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-spacing border-b border-line">
        <div className="container-svc grid md:grid-cols-3 gap-4">
          {[
            { to: '/students/cv-review', icon: FileText, title: 'CV Review Queue', body: 'Upload your draft. Get coordinator feedback within 48 hours.' },
            { to: '/students/mock-interviews', icon: MessageSquare, title: 'Mock Interviews', body: 'Book a slot with an alumni mentor in your target sector.' },
            { to: '/resources', icon: BookOpen, title: 'Resources', body: 'Templates, prep guides, and the recruitment brochure.' },
          ].map((c, i) => (
            <motion.div key={c.to} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.5, delay: i * 0.08 }}>
              <Link to={c.to} className="block bg-surface border border-line rounded-2xl p-6 h-full hover:border-gold transition-colors group">
                <c.icon className="text-gold mb-3" size={22} />
                <h3 className="font-display italic text-xl mb-2">{c.title}</h3>
                <p className="text-sm text-ink-2 mb-3">{c.body}</p>
                <span className="inline-flex items-center gap-1 text-xs text-gold font-mono uppercase tracking-widest">
                  Open <ArrowRight size={11} className="transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="section-spacing">
        <div className="container-svc grid lg:grid-cols-2 gap-10">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Calendar className="text-gold" size={18} />
              <h2 className="font-display italic text-3xl">Upcoming</h2>
            </div>
            <div className="space-y-3">
              {upcoming.map((e) => (
                <div key={e.id} className="bg-surface border border-line rounded-xl p-5 hover:border-gold transition-colors">
                  <div className="font-mono text-[0.65rem] uppercase tracking-widest text-gold mb-1">{e.category} · {e.date}</div>
                  <div className="font-display italic text-lg mb-1">{e.title}</div>
                  <p className="text-sm text-ink-2 leading-relaxed mb-2">{e.description}</p>
                  <div className="text-xs text-ink-3">{e.venue} · {e.startTime}{e.endTime ? `–${e.endTime}` : ''}</div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="font-display italic text-3xl mb-6">Latest</h2>
            <ul className="space-y-3">
              {latest.map((n) => (
                <li key={n.id} className="bg-surface border border-line rounded-xl p-5">
                  <div className="font-mono text-[0.65rem] uppercase tracking-widest text-gold mb-1">{n.category} · {n.publishedAt}</div>
                  <div className="font-display italic text-lg mb-1">{n.title}</div>
                  <p className="text-sm text-ink-2">{n.summary}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section-spacing bg-bg-2 border-t border-line">
        <div className="container-svc">
          <h2 className="font-display italic text-3xl mb-6">Top resources</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {resources.slice(0, 6).map((r) => (
              <a key={r.id} href={r.filePath ?? '#'} target="_blank" rel="noopener" className="bg-surface border border-line rounded-xl p-5 hover:border-gold transition-colors block">
                <div className="font-mono text-[0.65rem] uppercase tracking-widest text-gold mb-2">{r.category}</div>
                <div className="font-display italic text-lg mb-1">{r.title}</div>
                <p className="text-xs text-ink-2 mb-2">{r.description}</p>
                <div className="text-xs text-ink-3 font-mono">{r.downloadCount.toLocaleString()} downloads</div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
