import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { useToast } from '@/components/ui/ToastProvider';
import { cn } from '@/lib/utils/cn';

const schema = z.object({
  name: z.string().optional(),
  course: z.string().min(2, 'Course is required'),
  topic: z.enum(['process', 'drive', 'mentor', 'suggestion']),
  message: z.string().min(20, 'Please share a little more detail (20+ characters)'),
});

type FormValues = z.input<typeof schema>;

const DRAFT_KEY = 'svc-form-student-feedback';

export function StudentFeedbackForm() {
  const toast = useToast();
  const { register, handleSubmit, watch, reset, formState: { errors, isSubmitting } } = useForm<FormValues>({
    defaultValues: (() => {
      try {
        const raw = localStorage.getItem(DRAFT_KEY);
        return raw ? JSON.parse(raw) : { topic: 'process' };
      } catch { return { topic: 'process' }; }
    })(),
  });

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

    const subject = encodeURIComponent(`Student feedback: ${data.topic}`);
    const body = encodeURIComponent(
      `From: ${data.name?.trim() ? data.name : '(anonymous)'}\nCourse: ${data.course}\nTopic: ${data.topic}\n\n${data.message}`,
    );
    window.location.href = `mailto:placement@svc.du.ac.in?subject=${subject}&body=${body}`;

    toast('Thank you. The cell reviews every piece of feedback in its weekly review.', 'success');
    try { localStorage.removeItem(DRAFT_KEY); } catch { /* non-fatal */ }
    reset({ topic: 'process' });
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
          <label className={label} htmlFor="s-name">Name (optional, anonymous if blank)</label>
          <input id="s-name" className={field} placeholder="Your name or leave blank" {...register('name')} />
        </div>
        <div>
          <label className={label} htmlFor="s-course">Course</label>
          <input id="s-course" className={field} placeholder="B.Com (H), B.A. (H) English..." {...register('course')} />
          {errors.course && <p className={error}>{errors.course.message}</p>}
        </div>
      </div>

      <div>
        <label className={label} htmlFor="s-topic">Topic</label>
        <select id="s-topic" className={cn(field, 'appearance-none')} {...register('topic')}>
          <option value="process">Cell process feedback</option>
          <option value="drive">Drive-specific feedback</option>
          <option value="mentor">Mentor or alumnus feedback</option>
          <option value="suggestion">A general suggestion</option>
        </select>
      </div>

      <div>
        <label className={label} htmlFor="s-msg">Your feedback</label>
        <textarea
          id="s-msg"
          className={cn(field, 'min-h-[160px] resize-y')}
          placeholder="What worked, what didn't, what we should change..."
          {...register('message')}
        />
        {errors.message && <p className={error}>{errors.message.message}</p>}
      </div>

      <div className="flex flex-wrap items-center gap-3 pt-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex items-center justify-center px-7 py-3 rounded-full bg-gold text-bg font-medium hover:bg-[#e8b85d] transition-colors disabled:opacity-60"
        >
          Send to the cell
        </button>
        <span className="text-xs text-ink-3 font-mono">
          The cell reviews every piece of feedback in its weekly meeting.
        </span>
      </div>
    </motion.form>
  );
}
