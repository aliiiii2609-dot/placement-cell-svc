import { motion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';
import { convener } from '@/lib/data/team';

export function ConvenerBlock() {
  return (
    <section className="section-spacing border-t border-line bg-bg-2" id="convener">
      <div className="container-svc">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="max-w-5xl mx-auto bg-surface border border-line rounded-2xl p-8 md:p-12 grid md:grid-cols-[200px_1fr] gap-8 md:gap-12 items-start"
        >
          <div className="flex md:block items-center gap-5">
            <div className="relative w-[160px] h-[200px] rounded-xl bg-gradient-to-br from-[#2a2a35] to-[#1a1a25] flex items-center justify-center overflow-hidden border border-line">
              <div className="real-asset-badge">Real photo pending</div>
              <span className="font-display italic text-5xl text-gold/40">AM</span>
            </div>
            <div className="md:hidden">
              <div className="font-mono text-[0.65rem] uppercase tracking-widest text-gold mb-1">
                {convener.title}
              </div>
              <div className="font-display italic text-2xl">{convener.name}</div>
              <div className="text-xs text-ink-3 mt-1">{convener.department}</div>
            </div>
          </div>

          <div>
            <div className="hidden md:block mb-5">
              <div className="font-mono text-[0.65rem] uppercase tracking-widest text-gold mb-1">
                {convener.title}
              </div>
              <div className="font-display italic text-3xl text-ink mb-1">{convener.name}</div>
              <div className="text-sm text-ink-3">{convener.department}</div>
            </div>

            <blockquote className="text-base md:text-lg text-ink-2 leading-relaxed font-display italic mb-6 border-l-2 border-gold pl-5">
              {convener.message}
            </blockquote>

            <div className="flex flex-wrap gap-4 text-sm pt-5 border-t border-line">
              <a href={`mailto:${convener.email}`} className="flex items-center gap-2 text-ink-2 hover:text-gold">
                <Mail size={14} /> {convener.email}
              </a>
              <a href={`tel:${convener.phone.replace(/\s/g, '')}`} className="flex items-center gap-2 text-ink-2 hover:text-gold">
                <Phone size={14} /> {convener.phone}
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
