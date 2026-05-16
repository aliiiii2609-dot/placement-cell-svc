import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Search } from 'lucide-react';
import { cn } from '@/lib/utils/cn';
import { Button } from '@/components/ui/Button';

const navItems = [
  { to: '/', label: 'Home', end: true },
  { to: '/recruiters', label: 'Recruiters' },
  { to: '/students/portal', label: 'Students' },
  { to: '/alumni', label: 'Alumni' },
  { to: '/events', label: 'Events' },
  { to: '/news', label: 'News' },
  { to: '/faq', label: 'FAQ' },
];

type Props = { onSearchOpen: () => void };

export function Header({ onSearchOpen }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-bg/85 backdrop-blur-md border-b border-line'
          : 'bg-transparent',
      )}
    >
      <div className="container-svc flex items-center justify-between h-[68px]">
        <Link to="/" className="flex items-center gap-3 group" aria-label="The Placement Cell, SVC home">
          <img
            src="/logos/svc-crest.png"
            alt="Sri Venkateswara College crest"
            className="w-9 h-9 transition-transform duration-500 group-hover:rotate-[6deg]"
          />
          <div className="leading-tight">
            <div className="font-display italic text-base text-ink">Sri Venkateswara</div>
            <div className="font-mono text-[0.6rem] tracking-[0.15em] uppercase text-gold">Placement Cell, DU</div>
          </div>
        </Link>

        <nav className={cn('hidden lg:flex items-center gap-6', open && 'flex')}>
          {navItems.map((it) => (
            <NavLink
              key={it.to}
              to={it.to}
              end={it.end}
              className={({ isActive }) =>
                cn(
                  'text-sm transition-colors hover:text-gold relative py-1',
                  isActive ? 'text-gold' : 'text-ink-2',
                )
              }
            >
              {it.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={onSearchOpen}
            className="hidden sm:inline-flex items-center justify-center w-9 h-9 rounded-full border border-line hover:border-gold hover:text-gold transition-colors"
            aria-label="Open search"
          >
            <Search size={16} />
          </button>
          <Button
            as="a"
            href="/SVC_Brochure_2025-26.pdf"
            target="_blank"
            rel="noopener"
            size="sm"
            variant="primary"
            className="hidden sm:inline-flex"
          >
            Brochure
          </Button>
          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden w-10 h-10 inline-flex items-center justify-center rounded-full border border-line"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-line bg-bg/95 backdrop-blur-md">
          <nav className="container-svc py-6 flex flex-col gap-3">
            {navItems.map((it) => (
              <NavLink
                key={it.to}
                to={it.to}
                end={it.end}
                className={({ isActive }) =>
                  cn(
                    'text-base py-2 border-b border-line/50',
                    isActive ? 'text-gold' : 'text-ink-2',
                  )
                }
              >
                {it.label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
