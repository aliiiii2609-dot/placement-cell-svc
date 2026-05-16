import { Hero } from '@/components/hero/Hero';
import { StatsBar } from '@/components/stats/StatsBar';
import { ConvenerBlock } from '@/components/convener/ConvenerBlock';
import { TeamGrid } from '@/components/team/TeamGrid';
import { CouncilMarquee } from '@/components/council/CouncilMarquee';
import { ProcessRoadmap } from '@/components/roadmap/ProcessRoadmap';
import { PartnersMarquee } from '@/components/partners/PartnersMarquee';
import { IFairSection } from '@/components/ifair/IFairSection';
import { NotableAlumniGrid } from '@/components/alumni/NotableAlumniGrid';
import { Gallery } from '@/components/gallery/Gallery';
import { FaqAccordion } from '@/components/faq/FaqAccordion';
import { StreamSplitDonut } from '@/components/charts/StreamSplitDonut';
import { TrendLineChart } from '@/components/charts/TrendLineChart';
import { SectionStamp } from '@/components/animations/SectionStamp';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export function HomePage() {
  return (
    <>
      <Hero />
      <StatsBar />

      {/* Audience cards — direct routing to the four major user journeys */}
      <section className="section-spacing border-t border-line" id="audiences">
        <div className="container-svc">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { num: '01', title: 'Recruiters', body: 'Published cycle calendar. Stream and CGPA filters. JD to shortlist in 96 hours.', to: '/recruiters' },
              { num: '02', title: 'Students', body: 'Open drives, eligibility filters, stored CV, mock interviews, aptitude practice.', to: '/students/portal' },
              { num: '03', title: 'Alumni', body: 'Update your profile, mentor a student, attend the IFair, contribute to the directory.', to: '/alumni' },
              { num: '04', title: 'Parents', body: 'How the cycle works, what placements really mean, and where to ask for help.', to: '/parents' },
            ].map((c, i) => (
              <motion.div
                key={c.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <Link
                  to={c.to}
                  className="block bg-surface border border-line rounded-2xl p-6 h-full hover:border-gold transition-all duration-300 group hover:-translate-y-1"
                  data-magnetic
                >
                  <div className="font-mono text-[0.65rem] uppercase tracking-widest text-gold mb-3">
                    {c.num} / {c.title}
                  </div>
                  <h3 className="font-display italic text-2xl mb-3">{c.title}</h3>
                  <p className="text-sm text-ink-2 mb-4 leading-relaxed">{c.body}</p>
                  <span className="inline-flex items-center gap-1 text-xs text-gold font-mono uppercase tracking-widest">
                    Open
                    <ArrowRight size={12} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ConvenerBlock />

      <section className="section-spacing border-t border-line">
        <div className="container-svc">
          <SectionStamp chapter="Chapter II" title="The People" />
        </div>
      </section>
      <TeamGrid />
      <CouncilMarquee />

      <section className="section-spacing border-t border-line">
        <div className="container-svc">
          <SectionStamp chapter="Chapter III" title="The Process" />
        </div>
      </section>
      <ProcessRoadmap />

      <section className="section-spacing border-t border-line">
        <div className="container-svc">
          <SectionStamp chapter="Chapter IV" title="The Numbers" />
          <div className="grid lg:grid-cols-2 gap-6 mt-4">
            <StreamSplitDonut />
            <TrendLineChart />
          </div>
        </div>
      </section>

      <PartnersMarquee />
      <IFairSection />

      <section className="section-spacing border-t border-line">
        <div className="container-svc">
          <SectionStamp chapter="Chapter V" title="The Alumni" />
        </div>
      </section>
      <NotableAlumniGrid />

      <Gallery />
      <FaqAccordion />

      {/* Final CTA strip */}
      <section className="section-spacing bg-bg-2 border-t border-line">
        <div className="container-svc text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="font-display italic text-4xl md:text-5xl mb-6"
          >
            Talk to the <em className="text-gold">cell.</em>
          </motion.h2>
          <p className="text-ink-2 max-w-xl mx-auto mb-8">
            Recruiters, write to the Outreach desk. Alumni, register or refresh your profile.
            Students, head to the portal. Parents, the FAQ has the answers to common questions.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a
              href="mailto:placement@svc.du.ac.in"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gold text-bg font-medium hover:bg-[#e8b85d] transition-colors"
            >
              placement@svc.du.ac.in
            </a>
            <Link
              to="/partnerships"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-line text-ink hover:border-gold hover:text-gold transition-colors"
            >
              Partner with us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
