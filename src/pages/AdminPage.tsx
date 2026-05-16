import { useState } from 'react';
import { motion } from 'framer-motion';
import { Lock, Users, FileCheck2, Briefcase } from 'lucide-react';
import { consentedAlumniRegistry } from '@/lib/data/alumni-registry';
import { useToast } from '@/components/ui/ToastProvider';

export function AdminPage() {
  const toast = useToast();
  const [signedIn, setSignedIn] = useState(false);
  const [code, setCode] = useState('');

  const trySignIn = () => {
    if (code.trim().length < 4) {
      toast('Enter a valid coordinator access code', 'error');
      return;
    }
    // Backend integration point: production validates the magic-link token against
    // the cell's coordinator directory. For the MVP, any 4+ character code unlocks.
    setSignedIn(true);
    toast('Signed in. This UI is a scaffold; wire real auth before production.', 'info');
  };

  if (!signedIn) {
    return (
      <section className="min-h-[70vh] grid place-items-center">
        <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} className="bg-surface border border-line rounded-2xl p-8 max-w-md w-full mx-6 text-center">
          <Lock size={28} className="text-gold mx-auto mb-3" />
          <h1 className="font-display italic text-2xl mb-2">Coordinator sign-in</h1>
          <p className="text-sm text-ink-3 mb-5 font-mono">Backend integration point: replace this with the cell&apos;s magic-link or SSO flow.</p>
          <input value={code} onChange={(e) => setCode(e.target.value)} type="password" placeholder="Access code" className="w-full bg-bg-2 border border-line rounded-lg px-4 py-2.5 text-ink placeholder-ink-3 focus:border-gold focus:outline-none mb-3" />
          <button onClick={trySignIn} className="w-full px-5 py-2.5 rounded-full bg-gold text-bg font-medium hover:bg-[#e8b85d] transition-colors">Sign in</button>
        </motion.div>
      </section>
    );
  }

  return (
    <article className="section-spacing">
      <div className="container-svc">
        <span className="eyebrow">Admin Console</span>
        <h1 className="font-display text-5xl mt-3 mb-8 display-italic">Cell <em>operations.</em></h1>

        <div className="grid md:grid-cols-3 gap-4 mb-10">
          {[
            { icon: FileCheck2, label: 'Alumni verification queue', value: consentedAlumniRegistry.length === 0 ? '0 pending' : `${consentedAlumniRegistry.length} pending` },
            { icon: Briefcase, label: 'Active drives', value: '2 running' },
            { icon: Users, label: 'CV review queue', value: 'See student portal' },
          ].map((c) => (
            <div key={c.label} className="bg-surface border border-line rounded-2xl p-6">
              <c.icon size={20} className="text-gold mb-3" />
              <div className="font-mono text-[0.65rem] uppercase tracking-widest text-ink-3 mb-1">{c.label}</div>
              <div className="font-display italic text-2xl">{c.value}</div>
            </div>
          ))}
        </div>

        <div className="bg-bg-2 border-l-2 border-gold rounded-xl p-5 text-sm text-ink-2 font-mono leading-relaxed">
          <span className="text-gold uppercase tracking-widest text-[0.7rem]">Backend integration scope.</span>
          <ul className="mt-3 space-y-1 list-disc list-inside">
            <li>Role-based access (coordinator / convener / president scopes).</li>
            <li>Alumni-registration verification queue with approve / reject / request changes.</li>
            <li>CV review queue with feedback threading.</li>
            <li>Recruiter brief inbox with assignable coordinator routing.</li>
            <li>Event RSVP exports, drive shortlist downloads, news scheduler.</li>
          </ul>
          <p className="mt-3">Each UI here is wired; only the persistence and auth layers need a backend.</p>
        </div>
      </div>
    </article>
  );
}
