import { useState } from 'react';
import { motion } from 'framer-motion';
import { format, addDays } from 'date-fns';
import { CalendarDays, Clock, User, CheckCircle2 } from 'lucide-react';
import { notableAlumni } from '@/lib/data/notable-alumni';
import { useToast } from '@/components/ui/ToastProvider';
import type { RecruiterSector } from '@/types';

const SECTORS: RecruiterSector[] = [
  'Finance & Markets', 'Consulting & Strategy', 'Audit & Assurance', 'Product & Tech',
  'Banking & Insurance', 'Policy & Public', 'Analytics & Research',
];

const SLOT_TIMES = ['10:00', '11:00', '14:00', '15:00', '16:00', '17:00'];

export function MockInterviewsPage() {
  const toast = useToast();
  const [sector, setSector] = useState<RecruiterSector>('Finance & Markets');
  const [day, setDay] = useState(0);
  const [booked, setBooked] = useState<string | null>(null);

  const mentors = notableAlumni.filter((a) => a.mentoringSectors?.includes(sector));
  const days = [0, 1, 2, 3, 4].map((d) => addDays(new Date(), d));

  const book = (mentorName: string, time: string) => {
    const id = `${mentorName}-${time}-${day}`;
    setBooked(id);
    toast(`Booked with ${mentorName} on ${format(days[day], 'EEE d MMM')} at ${time}. Confirmation sent.`, 'success');
  };

  return (
    <>
      <section className="section-spacing border-b border-line">
        <div className="container-svc">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="eyebrow">Mock Interviews</span>
            <h1 className="font-display text-5xl mt-3 mb-5 display-italic">
              Practice with an <em>alumnus.</em>
            </h1>
            <p className="text-lg text-ink-2 max-w-2xl leading-relaxed">
              Book a 30 to 45 minute mock with an alumnus working in your target sector. Sessions held over video
              or in person at the cell room. Feedback emailed within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-spacing">
        <div className="container-svc">
          <div className="flex flex-wrap gap-2 mb-6">
            {SECTORS.map((s) => (
              <button key={s} onClick={() => setSector(s)} className={`px-4 py-2 rounded-full text-sm font-mono uppercase tracking-widest border transition-colors ${sector === s ? 'bg-gold text-bg border-gold' : 'text-ink-2 border-line hover:border-gold hover:text-gold'}`}>
                {s}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
            {days.map((d, i) => (
              <button key={i} onClick={() => setDay(i)} className={`px-4 py-2 rounded-full text-sm border transition-colors ${day === i ? 'bg-surface border-gold text-gold' : 'border-line text-ink-2 hover:border-gold'}`}>
                <CalendarDays size={12} className="inline mr-2" />
                {format(d, 'EEE d MMM')}
              </button>
            ))}
          </div>

          {mentors.length === 0 ? (
            <div className="text-center py-12 text-ink-3 font-mono text-sm">No mentors in this sector currently. Try another.</div>
          ) : (
            <div className="grid md:grid-cols-2 gap-4">
              {mentors.map((m) => (
                <div key={m.id} className="bg-surface border border-line rounded-2xl p-6">
                  <div className="flex gap-4 mb-4">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#2a2a35] to-[#1a1a25] flex items-center justify-center shrink-0">
                      <span className="font-display italic text-xl text-gold/40">
                        {m.name.split(' ').map((p) => p[0]).join('').slice(0, 2)}
                      </span>
                    </div>
                    <div>
                      <div className="font-display italic text-lg">{m.name}</div>
                      <div className="text-xs text-ink-2">{m.currentRole}</div>
                      <div className="text-xs text-ink-3">{m.currentCompany}</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-1.5">
                    {SLOT_TIMES.map((t) => {
                      const id = `${m.name}-${t}-${day}`;
                      const isBooked = booked === id;
                      return (
                        <button
                          key={t}
                          onClick={() => book(m.name, t)}
                          disabled={isBooked}
                          className={`px-2 py-2 rounded text-xs font-mono transition-colors ${isBooked ? 'bg-gold text-bg cursor-default' : 'bg-bg-2 border border-line text-ink-2 hover:border-gold hover:text-gold'}`}
                        >
                          {isBooked ? <CheckCircle2 size={12} className="inline mr-1" /> : <Clock size={11} className="inline mr-1" />}
                          {t}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          )}
          <div className="mt-10 p-5 rounded-xl border-l-2 border-gold bg-bg-2 text-sm text-ink-2 font-mono">
            <span className="text-gold uppercase tracking-widest text-[0.7rem]">Backend integration point.</span> Booking confirmations are simulated for the MVP. Production wires this to the cell&apos;s scheduling backend (Google Calendar invite + email).
          </div>
        </div>
      </section>
    </>
  );
}
