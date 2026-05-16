import { lazy, Suspense, useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header } from '@/components/nav/Header';
import { Footer } from '@/components/footer/Footer';
import { CustomCursor } from '@/components/ui/CustomCursor';
import { CinematicLoader } from '@/components/ui/CinematicLoader';
import { ToastProvider } from '@/components/ui/ToastProvider';
import { PageTransition } from '@/components/animations/PageTransition';
import { useLenis } from '@/lib/animations/lenis';
import { sound } from '@/lib/audio/sound-controller';

// Lazy-load route components to keep the initial bundle lean
const HomePage = lazy(() => import('@/pages/HomePage').then((m) => ({ default: m.HomePage })));
const AlumniListPage = lazy(() => import('@/pages/AlumniListPage').then((m) => ({ default: m.AlumniListPage })));
const AlumniDetailPage = lazy(() => import('@/pages/AlumniDetailPage').then((m) => ({ default: m.AlumniDetailPage })));
const RecruitersPage = lazy(() => import('@/pages/RecruitersPage').then((m) => ({ default: m.RecruitersPage })));
const RecruiterDashboardPage = lazy(() => import('@/pages/RecruiterDashboardPage').then((m) => ({ default: m.RecruiterDashboardPage })));
const StudentPortalPage = lazy(() => import('@/pages/StudentPortalPage').then((m) => ({ default: m.StudentPortalPage })));
const CvReviewPage = lazy(() => import('@/pages/CvReviewPage').then((m) => ({ default: m.CvReviewPage })));
const MockInterviewsPage = lazy(() => import('@/pages/MockInterviewsPage').then((m) => ({ default: m.MockInterviewsPage })));
const EventsPage = lazy(() => import('@/pages/EventsPage').then((m) => ({ default: m.EventsPage })));
const NewsPage = lazy(() => import('@/pages/NewsPage').then((m) => ({ default: m.NewsPage })));
const ResourcesPage = lazy(() => import('@/pages/ResourcesPage').then((m) => ({ default: m.ResourcesPage })));
const CompanyProfilePage = lazy(() => import('@/pages/CompanyProfilePage').then((m) => ({ default: m.CompanyProfilePage })));
const ParentsPage = lazy(() => import('@/pages/ParentsPage').then((m) => ({ default: m.ParentsPage })));
const FaqPage = lazy(() => import('@/pages/FaqPage').then((m) => ({ default: m.FaqPage })));
const RankingsPressPage = lazy(() => import('@/pages/RankingsPressPage').then((m) => ({ default: m.RankingsPressPage })));
const PartnershipsPage = lazy(() => import('@/pages/PartnershipsPage').then((m) => ({ default: m.PartnershipsPage })));
const PrivacyPage = lazy(() => import('@/pages/PrivacyPage').then((m) => ({ default: m.PrivacyPage })));
const TermsPage = lazy(() => import('@/pages/TermsPage').then((m) => ({ default: m.TermsPage })));
const AdminPage = lazy(() => import('@/pages/AdminPage').then((m) => ({ default: m.AdminPage })));
const NotFoundPage = lazy(() => import('@/pages/NotFoundPage').then((m) => ({ default: m.NotFoundPage })));

function PageFallback() {
  return (
    <div className="min-h-[60vh] grid place-items-center">
      <div className="font-mono text-xs uppercase tracking-widest text-ink-3 flex items-center gap-3">
        <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
        Loading
      </div>
    </div>
  );
}

export default function App() {
  const [searchOpen, setSearchOpen] = useState(false);

  // Initialize Lenis smooth scroll (no-op under prefers-reduced-motion)
  useLenis();

  // Restore sound + reduced-motion preferences
  useEffect(() => {
    sound.loadFromStorage();
    try {
      if (localStorage.getItem('svc-reduced-motion') === '1') {
        document.body.classList.add('reduced-motion');
      }
    } catch {
      /* non-fatal */
    }
  }, []);

  return (
    <ToastProvider>
      <a href="#main" className="skip-link">Skip to main content</a>
      <CinematicLoader />
      <CustomCursor />

      <Header onSearchOpen={() => setSearchOpen(true)} />

      <main id="main" className="pt-[68px]">
        <PageTransition>
          <Suspense fallback={<PageFallback />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/alumni" element={<AlumniListPage />} />
              <Route path="/alumni/:id" element={<AlumniDetailPage />} />
              <Route path="/recruiters" element={<RecruitersPage />} />
              <Route path="/recruiters/dashboard" element={<RecruiterDashboardPage />} />
              <Route path="/students/portal" element={<StudentPortalPage />} />
              <Route path="/students/cv-review" element={<CvReviewPage />} />
              <Route path="/students/mock-interviews" element={<MockInterviewsPage />} />
              <Route path="/events" element={<EventsPage />} />
              <Route path="/news" element={<NewsPage />} />
              <Route path="/resources" element={<ResourcesPage />} />
              <Route path="/companies/:slug" element={<CompanyProfilePage />} />
              <Route path="/parents" element={<ParentsPage />} />
              <Route path="/faq" element={<FaqPage />} />
              <Route path="/rankings-press" element={<RankingsPressPage />} />
              <Route path="/partnerships" element={<PartnershipsPage />} />
              <Route path="/privacy" element={<PrivacyPage />} />
              <Route path="/terms" element={<TermsPage />} />
              <Route path="/admin" element={<AdminPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
        </PageTransition>
      </main>

      <Footer />

      {/* Search dialog placeholder — backend integration point for cmdk */}
      {searchOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Search"
          className="fixed inset-0 z-[7000] bg-bg/80 backdrop-blur-md flex items-start justify-center pt-24 px-4"
          onClick={() => setSearchOpen(false)}
        >
          <div
            className="w-full max-w-xl bg-surface border border-line rounded-2xl p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="font-mono text-[0.65rem] uppercase tracking-widest text-gold mb-2">
              Search
            </div>
            <input
              autoFocus
              placeholder="Type a recruiter, alumnus, or page..."
              className="w-full bg-bg border border-line rounded-lg px-4 py-3 text-ink placeholder-ink-3 focus:border-gold focus:outline-none"
            />
            <p className="text-xs text-ink-3 mt-4">
              Press Escape to close. Search index wiring is an admin-console backend
              integration point; the cmdk dependency is installed for the production build.
            </p>
          </div>
        </div>
      )}
    </ToastProvider>
  );
}
