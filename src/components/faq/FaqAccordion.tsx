import { useState } from 'react';
import { motion } from 'framer-motion';
import * as Accordion from '@radix-ui/react-accordion';
import * as Tabs from '@radix-ui/react-tabs';
import { ChevronDown } from 'lucide-react';
import { faq } from '@/lib/data/faq';
import type { FaqAudience } from '@/types';
import { cn } from '@/lib/utils/cn';

const audiences: Array<{ id: FaqAudience; label: string }> = [
  { id: 'recruiters', label: 'Recruiters' },
  { id: 'students', label: 'Students' },
  { id: 'alumni', label: 'Alumni' },
  { id: 'parents', label: 'Parents' },
];

export function FaqAccordion() {
  const [active, setActive] = useState<FaqAudience>('recruiters');

  return (
    <section className="section-spacing bg-bg-2 border-t border-line" id="faq">
      <div className="container-svc">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-10"
        >
          <span className="eyebrow">FAQ</span>
          <h2 className="font-display text-4xl md:text-5xl mt-2 mb-3 display-italic">
            Pick your <em>audience.</em>
          </h2>
          <p className="text-ink-2">
            The cell receives the same questions from each audience every cycle. Here are the answers.
          </p>
        </motion.div>

        <Tabs.Root value={active} onValueChange={(v) => setActive(v as FaqAudience)}>
          <Tabs.List className="flex flex-wrap gap-2 mb-6">
            {audiences.map((a) => (
              <Tabs.Trigger
                key={a.id}
                value={a.id}
                className={cn(
                  'px-4 py-2 rounded-full text-sm font-mono uppercase tracking-widest border transition-colors',
                  active === a.id
                    ? 'bg-gold text-bg border-gold'
                    : 'bg-transparent text-ink-2 border-line hover:border-gold hover:text-gold',
                )}
              >
                {a.label}
              </Tabs.Trigger>
            ))}
          </Tabs.List>

          {audiences.map((a) => (
            <Tabs.Content key={a.id} value={a.id} className="focus:outline-none">
              <Accordion.Root type="single" collapsible className="space-y-2">
                {faq[a.id].map((entry, i) => (
                  <Accordion.Item
                    key={i}
                    value={`item-${i}`}
                    className="bg-surface border border-line rounded-xl overflow-hidden data-[state=open]:border-gold transition-colors"
                  >
                    <Accordion.Header>
                      <Accordion.Trigger className="group w-full flex items-center justify-between text-left p-5 text-ink hover:bg-bg-2 transition-colors">
                        <span className="font-display italic text-lg pr-6">{entry.question}</span>
                        <ChevronDown
                          size={18}
                          className="text-gold transition-transform duration-300 group-data-[state=open]:rotate-180 shrink-0"
                        />
                      </Accordion.Trigger>
                    </Accordion.Header>
                    <Accordion.Content className="overflow-hidden data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
                      <div className="px-5 pb-5 text-ink-2 leading-relaxed">{entry.answer}</div>
                    </Accordion.Content>
                  </Accordion.Item>
                ))}
              </Accordion.Root>
            </Tabs.Content>
          ))}
        </Tabs.Root>
      </div>
    </section>
  );
}
