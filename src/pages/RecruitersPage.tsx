import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { RecruiterInterestForm } from '@/components/forms/RecruiterInterestForm';
import { ProcessRoadmap } from '@/components/roadmap/ProcessRoadmap';
import { SplitFlapCounter } from '@/components/ui/SplitFlapCounter';
import { currentCycleStats, previousCycleStats } from '@/lib/data/stats';
import { testimonials } from '@/lib/data/rankings';

export function RecruitersPage() {
  return (
    <>
      <section className="section-spacing border-b border-line">
        <div className="container-svc">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="eyebrow">For Recruiters</span>
            <h1 className="font-display text-5xl md:text-6xl mt-3 mb-5 display-italic">
              Hire from <em>Venky.</em>
            </h1>
            <p className="text-lg text-ink-2 leading-relaxed mb-8">
              Published cycle calendar. Stream and CGPA filters. A dedicated coordinator from JD to offer.
              No form gates on the brochure. The cell aims for JD to verified shortlist in 96 hours.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-line rounded-xl overflow-hidden">
              {[
                { label: 'Offers this cycle', value: currentCycleStats.totalPlacementOffers, suffix: '' },
                { label: 'Recruiters engaged', value: currentCycleStats.recruitersEngaged, suffix: '+' },
                { label: 'Peak CTC', value: currentCycleStats.peakCtcLPA, decimals: 2, suffix: ' LPA' },
                { label: 'Average CTC', value: currentCycleStats.averageCtcLPA, decimals: 2, suffix: ' LPA' },
              ].map((c) => (
                <div key={c.label} className="bg-bg p-5">
                  <div className="font-mono text-[0.65rem] uppercase tracking-widest text-ink-3 mb-2">{c.label}</div>
                  <div className="font-display italic text-2xl text-ink">
                    <SplitFlapCounter value={c.value} decimals={c.decimals ?? 0} suffix={c.suffix} />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-spacing border-b border-line">
        <div className="container-svc grid lg:grid-cols-[1.1fr_1fr] gap-12">
          <div>
            <span className="eyebrow">Express interest</span>
            <h2 className="font-display text-3xl md:text-4xl mt-2 mb-4 display-italic">
              One brief. <em>One reply.</em>
            </h2>
            <p className="text-ink-2 mb-6">
              Share your hiring brief. A coordinator gets back within one working day with a calendar slot
              and the eligible-student pool size. No spam, no list rental.
            </p>
            <div className="text-sm text-ink-2 space-y-2">
              <div className="font-mono text-[0.65rem] uppercase tracking-widest text-gold mb-2">What you get</div>
              <p>· Dedicated coordinator from JD to offer</p>
              <p>· On-campus seminar hall, AV, and interview rooms</p>
              <p>· Verified CV pack, no off-format submissions</p>
              <p>· Honest eligibility filtering, no padding</p>
              <p>· One brand-aligned drive page on this site</p>
            </div>
          </div>
          <RecruiterInterestForm />
        </div>
      </section>

      <section className="section-spacing border-b border-line">
        <div className="container-svc">
          <span className="eyebrow">Cycle compare</span>
          <h2 className="font-display text-3xl md:text-4xl mt-2 mb-8 display-italic">
            What moved, <em>plain.</em>
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-line text-left">
                  <th className="py-3 pr-4 font-mono text-[0.65rem] uppercase tracking-widest text-ink-3">Metric</th>
                  <th className="py-3 pr-4 font-mono text-[0.65rem] uppercase tracking-widest text-ink-3">{previousCycleStats.cycle}</th>
                  <th className="py-3 pr-4 font-mono text-[0.65rem] uppercase tracking-widest text-gold">{currentCycleStats.cycle}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line">
                <tr><td className="py-3 pr-4 text-ink-2">Placement offers</td><td className="py-3 pr-4">{previousCycleStats.totalPlacementOffers}</td><td className="py-3 pr-4 text-gold">{currentCycleStats.totalPlacementOffers}</td></tr>
                <tr><td className="py-3 pr-4 text-ink-2">Peak CTC, LPA</td><td className="py-3 pr-4">{previousCycleStats.peakCtcLPA}</td><td className="py-3 pr-4 text-gold">{currentCycleStats.peakCtcLPA}</td></tr>
                <tr><td className="py-3 pr-4 text-ink-2">Average CTC, LPA</td><td className="py-3 pr-4">{previousCycleStats.averageCtcLPA}</td><td className="py-3 pr-4 text-gold">{currentCycleStats.averageCtcLPA}</td></tr>
                <tr><td className="py-3 pr-4 text-ink-2">Gross offer value, Cr</td><td className="py-3 pr-4">{previousCycleStats.grossOfferValueCr}</td><td className="py-3 pr-4 text-gold">{currentCycleStats.grossOfferValueCr}</td></tr>
                <tr><td className="py-3 pr-4 text-ink-2">Internship offers</td><td className="py-3 pr-4">{previousCycleStats.totalInternshipOffers}</td><td className="py-3 pr-4 text-gold">{currentCycleStats.totalInternshipOffers}</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <ProcessRoadmap />

      <section className="section-spacing border-t border-line">
        <div className="container-svc">
          <span className="eyebrow">Recruiter voices</span>
          <h2 className="font-display text-3xl md:text-4xl mt-2 mb-8 display-italic">What partners <em>have said.</em></h2>
          <div className="grid md:grid-cols-3 gap-4">
            {testimonials.filter((t) => t.roleTag.toLowerCase().includes('recruit') || t.roleTag.toLowerCase().includes('hir') || t.roleTag.toLowerCase().includes('talent') || t.roleTag.toLowerCase().includes('campus')).map((t, i) => (
              <div key={i} className="bg-surface border border-line rounded-2xl p-6">
                <blockquote className="text-base text-ink-2 italic mb-4">"{t.quote}"</blockquote>
                <div className="text-xs font-mono uppercase tracking-widest text-gold">{t.roleTag}</div>
                <div className="text-xs text-ink-3">{t.context}</div>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Link to="/recruiters/dashboard" className="text-sm text-gold hover:text-ink transition-colors">
              Already a partner? Open the recruiter dashboard →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
