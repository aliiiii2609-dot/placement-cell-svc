import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Upload, FileText, CheckCircle2, Clock } from 'lucide-react';
import { useToast } from '@/components/ui/ToastProvider';

type Submission = { id: string; name: string; size: number; uploadedAt: string; status: 'queued' | 'reviewing' | 'done' };

const STORAGE_KEY = 'svc-cv-submissions';

export function CvReviewPage() {
  const toast = useToast();
  const [submissions, setSubmissions] = useState<Submission[]>([]);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setSubmissions(JSON.parse(raw));
    } catch { /* non-fatal */ }
  }, []);

  const persist = (next: Submission[]) => {
    setSubmissions(next);
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(next)); } catch { /* non-fatal */ }
  };

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    if (!f) return;
    if (f.size > 5 * 1024 * 1024) {
      toast('CV must be under 5MB', 'error');
      return;
    }
    // Backend integration point: in production POSTs the file to /api/cv-review.
    // For MVP, we record the metadata in localStorage so the queue UI works end to end.
    const next: Submission = {
      id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      name: f.name,
      size: f.size,
      uploadedAt: new Date().toISOString(),
      status: 'queued',
    };
    persist([next, ...submissions]);
    toast('CV uploaded to the queue. A coordinator will review within 48 hours.', 'success');
  };

  return (
    <>
      <section className="section-spacing border-b border-line">
        <div className="container-svc">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="eyebrow">CV Review Queue</span>
            <h1 className="font-display text-5xl mt-3 mb-5 display-italic">
              Upload, get <em>vetted.</em>
            </h1>
            <p className="text-lg text-ink-2 max-w-2xl leading-relaxed">
              Upload a draft. A coordinator reviews and returns feedback within 48 hours, including structural changes,
              tone fixes, and which lines to rewrite. The cell&apos;s CV template is mandatory for cycle 2025-26.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-spacing">
        <div className="container-svc max-w-3xl">
          <label className="block bg-surface border-2 border-dashed border-line rounded-2xl p-12 text-center hover:border-gold transition-colors cursor-pointer mb-8">
            <Upload size={32} className="text-gold mx-auto mb-3" />
            <div className="font-display italic text-xl mb-1">Upload your CV draft</div>
            <p className="text-sm text-ink-3 mb-4">PDF or DOCX, up to 5MB.</p>
            <input type="file" accept=".pdf,.docx" onChange={handleUpload} className="sr-only" />
            <span className="inline-block px-5 py-2 rounded-full bg-gold text-bg text-sm font-medium">Choose file</span>
          </label>

          <h2 className="font-display italic text-2xl mb-4">Your queue</h2>
          {submissions.length === 0 ? (
            <div className="bg-surface border border-line rounded-xl p-6 text-center text-ink-3 font-mono text-sm">
              No submissions yet. Upload a CV to begin.
            </div>
          ) : (
            <div className="space-y-3">
              {submissions.map((s) => (
                <div key={s.id} className="bg-surface border border-line rounded-xl p-5 flex items-center gap-4">
                  <FileText className="text-gold shrink-0" size={20} />
                  <div className="flex-1 min-w-0">
                    <div className="font-display italic text-lg truncate">{s.name}</div>
                    <div className="text-xs text-ink-3 font-mono">
                      Uploaded {new Date(s.uploadedAt).toLocaleString()} · {(s.size / 1024).toFixed(0)} KB
                    </div>
                  </div>
                  <div className={`flex items-center gap-2 text-xs font-mono uppercase tracking-widest ${s.status === 'done' ? 'text-teal' : 'text-gold'}`}>
                    {s.status === 'done' ? <CheckCircle2 size={14} /> : <Clock size={14} />}
                    {s.status}
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="mt-10 p-5 rounded-xl border-l-2 border-gold bg-bg-2 text-sm text-ink-2 font-mono">
            <span className="text-gold uppercase tracking-widest text-[0.7rem]">Backend integration point.</span> For the MVP, submissions are stored in localStorage. The production build wires this upload to the cell&apos;s coordinator-facing review queue via a POST endpoint.
          </div>
        </div>
      </section>
    </>
  );
}
