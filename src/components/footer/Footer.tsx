import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Facebook, Volume2, VolumeX } from 'lucide-react';
import { sound } from '@/lib/audio/sound-controller';
import { cn } from '@/lib/utils/cn';

export function Footer() {
  const [soundOn, setSoundOn] = useState(false);
  const [reducedOn, setReducedOn] = useState(false);

  useEffect(() => {
    sound.loadFromStorage();
    setSoundOn(sound.isEnabled());
    setReducedOn(document.body.classList.contains('reduced-motion'));
  }, []);

  const toggleSound = () => {
    const next = !soundOn;
    sound.setEnabled(next);
    setSoundOn(next);
  };

  const toggleReduced = () => {
    const next = !reducedOn;
    document.body.classList.toggle('reduced-motion', next);
    setReducedOn(next);
    try { localStorage.setItem('svc-reduced-motion', next ? '1' : '0'); } catch {}
  };

  return (
    <footer className="bg-bg-2 border-t border-line mt-24">
      <div className="container-svc py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img src="/logos/svc-crest.png" alt="" className="w-10 h-10" />
              <div className="leading-tight">
                <div className="font-display italic text-lg text-ink">The Placement Cell</div>
                <div className="font-mono text-xs text-gold tracking-widest uppercase">Sri Venkateswara College</div>
              </div>
            </div>
            <p className="text-sm text-ink-2 max-w-md leading-relaxed mb-4">
              The operational hub for placements, internships, and the IFair. Run by elected
              student leaders with faculty oversight from the Department of Economics.
            </p>
            <address className="not-italic text-sm text-ink-2 leading-relaxed">
              The Placement Cell Room, First Floor<br />
              Durgabai Deshmukh Block<br />
              Sri Venkateswara College, Dhaula Kuan<br />
              Delhi, 110021
            </address>
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-gold mb-4">Reach</h4>
            <ul className="space-y-2 text-sm text-ink-2">
              <li><a className="hover:text-gold" href="mailto:placement@svc.du.ac.in">placement@svc.du.ac.in</a></li>
              <li className="text-ink-3">Monday to Friday</li>
              <li className="text-ink-3">10:00 to 17:00 IST</li>
            </ul>
            <div className="flex gap-3 mt-4">
              <a href="https://www.instagram.com/placementcell_svc" target="_blank" rel="noopener" aria-label="Instagram" className="w-9 h-9 inline-flex items-center justify-center rounded-full border border-line hover:border-gold hover:text-gold">
                <Instagram size={15} />
              </a>
              <a href="https://www.linkedin.com/company/the-placement-cell-sri-venkateswara-college-delhi-university/" target="_blank" rel="noopener" aria-label="LinkedIn" className="w-9 h-9 inline-flex items-center justify-center rounded-full border border-line hover:border-gold hover:text-gold">
                <Linkedin size={15} />
              </a>
              <a href="https://m.facebook.com/TTDSVCPLACEMENTCELL/" target="_blank" rel="noopener" aria-label="Facebook" className="w-9 h-9 inline-flex items-center justify-center rounded-full border border-line hover:border-gold hover:text-gold">
                <Facebook size={15} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-gold mb-4">Links</h4>
            <ul className="space-y-2 text-sm text-ink-2">
              <li><Link className="hover:text-gold" to="/partnerships">Partnerships</Link></li>
              <li><Link className="hover:text-gold" to="/rankings-press">Rankings & Press</Link></li>
              <li><Link className="hover:text-gold" to="/parents">For Parents</Link></li>
              <li><Link className="hover:text-gold" to="/privacy">Privacy</Link></li>
              <li><Link className="hover:text-gold" to="/terms">Terms</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-line flex flex-wrap items-center justify-between gap-4">
          <div className="text-xs text-ink-3">
            © {new Date().getFullYear()} The Placement Cell, Sri Venkateswara College, University of Delhi.
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={toggleSound}
              className={cn(
                'inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest px-3 py-1.5 rounded-full border transition-colors',
                soundOn ? 'border-gold text-gold' : 'border-line text-ink-3 hover:text-gold hover:border-gold',
              )}
              aria-pressed={soundOn}
            >
              {soundOn ? <Volume2 size={13} /> : <VolumeX size={13} />}
              Sound {soundOn ? 'on' : 'off'}
            </button>
            <button
              onClick={toggleReduced}
              className={cn(
                'text-xs font-mono uppercase tracking-widest px-3 py-1.5 rounded-full border transition-colors',
                reducedOn ? 'border-gold text-gold' : 'border-line text-ink-3 hover:text-gold hover:border-gold',
              )}
              aria-pressed={reducedOn}
            >
              Reduced motion {reducedOn ? 'on' : 'off'}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
