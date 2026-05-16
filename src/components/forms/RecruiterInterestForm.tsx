import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { useToast } from '@/components/ui/ToastProvider';
import { cn } from '@/lib/utils/cn';
import type { RecruiterSector } from '@/types';

const SECTORS: RecruiterSector[] = [
  'Audit & Assurance',
  'Consulting & Strategy',
  'Finance & Markets',
  'Banking & Insurance',
  'Analytics & Research',
  'Product & Tech',
  'Consumer & BD',
  'EdTech & Operations',
  'Hospitality & Aviation',
  'Policy & Public',
];

const schema = z.object({
  name: z.string().min(2, 'Please share your full name'),
  organization: z.string().min(2, 'Organization name is required'),
  email: z.string().email('A valid work email is required'),
  phone: z.string().optional(),
  hiringBrief: z.string().min(20, 'Tell us a little about the role (at least 20 characters)'),
  preferredSectors: z.array(z.string()).optional(),
  consent: z.literal(true, {
    errorMap: () => ({ message: 'Consent is required to submit' }),
  }),
});

type FormValues = z.input<typeof schema>;

const DRAFT_KEY = 'svc-form-recruiter-interest';

export function RecruiterInterestForm() {
  const toast = useToast();
  const { register, handleSubmit, watch, reset, formState: { errors, isSubmitting } } = useForm<FormValues>({
    defaultValues: (() => {
      try {
        const raw = localStorage.getItem(DRAFT_KEY);
        return raw ? JSON.parse(raw) : { consent: false };
      } catch {
        return { consent: false };
      }
    })(),
  });

  // Persist draft to localStorage on every change
  const values = watch();
  useEffect(() => {
    try { localStorage.setItem(DRAFT_KEY, JSON.stringify(values)); } catch { /* non-fatal */ }
  }, [values]);

  const onSubmit = (raw: FormValues) => {
    const result = schema.safeParse(raw);
    if (!result.success) {
      toast('Please check the highlighted fields', 'error');
      return;
    }
    const data = result.data;

    // Backend integration point: in production this POSTs to /api/recruiter-interest.
    // For the MVP we build a mailto payload so submissions reach the cell directly.
    const subject = encodeURIComponent(`Recruiter interest from ${data.organization}`);
    const body = encodeURIComponent(
      `Name: ${data.name}\nOrganization: ${data.organization}\nEmail: ${data.email}\nPhone: ${data.phone ?? ''}\n` +
      `Preferred sectors: ${(data.preferredSectors ?? []).join(', ')}\n\nHiring brief:\n${data.hiringBrief}`,
    );
    window.location.href = `mailto:placement@svc.du.ac.in?subject=${subject}&body=${body}`;

    toast('Opening your mail client. The cell will respond within one working day.', 'success');
    try { localStorage.removeItem(DRAFT_KEY); } catch { /* non-fatal */ }
    reset({ consent: false });
  };

  const field = 'w-full bg-bg-2 border border-line rounded-lg px-4 py-2.5 text-ink placeholder-ink-3 focus:border-gold focus:outline-none transition-colors';
  const label = 'block text-xs font-mono uppercase tracking-widest text-ink-3 mb-1.5';
  const error = 'text-xs text-red mt-1';

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      onSubmit={handleSubmit(onSubmit)}
      className="bg-surface border border-line rounded-2xl p-6 md:p-8 space-y-5"
    >
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className={label} htmlFor="r-name">Your name</label>
          <input id="r-name" className={field} placeholder="Jane Doe" {...register('name')} />
          {errors.name && <p className={error}>{errors.name.message}</p>}
        </div>
        <div>
          <label className={label} htmlFor="r-org">Organization</label>
          <input id="r-org" className={field} placeholder="Acme Inc." {...register('organization')} />
          {errors.organization && <p className={error}>{errors.organization.message}</p>}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className={label} htmlFor="r-email">Work email</label>
          <input id="r-email" type="email" className={field} placeholder="jane@acme.com" {...register('email')} />
          {errors.email && <p className={error}>{errors.email.message}</p>}
        </div>
        <div>
          <label className={label} htmlFor="r-phone">Phone (optional)</label>
          <input id="r-phone" className={field} placeholder="+91 98XXX XXXXX" {...register('phone')} />
        </div>
      </div>

      <div>
        <label className={label}>Sectors you hire for</label>
        <div className="flex flex-wrap gap-2">
          {SECTORS.map((s) => (
            <label
              key={s}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-line text-xs cursor-pointer hover:border-gold hover:text-gold transition-colors has-[:checked]:bg-gold has-[:checked]:text-bg has-[:checked]:border-gold"
            >
              <input type="checkbox" value={s} className="sr-only" {...register('preferredSectors')} />
              {s}
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className={label} htmlFor="r-brief">Hiring brief</label>
        <textarea
          id="r-brief"
          className={cn(field, 'min-h-[140px] resize-y')}
          placeholder="Role, eligibility, location, headcount, target timeline..."
          {...register('hiringBrief')}
        />
        {errors.hiringBrief && <p className={error}>{errors.hiringBrief.message}</p>}
      </div>

      <label className="flex items-start gap-3 text-sm text-ink-2">
        <input type="checkbox" {...register('consent')} className="mt-1 accent-gold" />
        <span>
          I agree to the cell&apos;s recruiter privacy notice and consent to being contacted regarding this brief.
        </span>
      </label>
      {errors.consent && <p className={error}>{errors.consent.message}</p>}

      <div className="flex flex-wrap items-center gap-3 pt-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex items-center justify-center px-7 py-3 rounded-full bg-gold text-bg font-medium hover:bg-[#e8b85d] transition-colors disabled:opacity-60"
        >
          Send to the cell
        </button>
        <span className="text-xs text-ink-3 font-mono">
          Draft auto-saves. Cell typically responds within one working day.
        </span>
      </div>
    </motion.form>
  );
}
