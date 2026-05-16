import { motion } from 'framer-motion';
import { useReducedMotion } from '@/lib/hooks/useReducedMotion';
import { cn } from '@/lib/utils/cn';

type Props = { chapter: string; title: string; className?: string };

/**
 * Cinematic chapter title card. Slams in at 1.4x scale with blur, decompresses
 * to 0.96, then settles. An underline draws in from center. Fires once via
 * whileInView. Honors reduced motion.
 */
export function SectionStamp({ chapter, title, className }: Props) {
  const reduced = useReducedMotion();

  if (reduced) {
    return (
      <div className={cn('text-center mb-12', className)}>
        <div className="eyebrow mb-2">{chapter}</div>
        <h2 className="font-display italic text-3xl md:text-4xl">{title}</h2>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      className={cn('text-center mb-12', className)}
    >
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="eyebrow mb-3"
      >
        {chapter}
      </motion.div>
      <motion.h2
        initial={{ scale: 1.4, opacity: 0, filter: 'blur(12px)' }}
        whileInView={{ scale: 1, opacity: 1, filter: 'blur(0px)' }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="font-display italic text-4xl md:text-5xl"
      >
        {title}
      </motion.h2>
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="h-px bg-gold w-24 mx-auto mt-4 origin-center"
      />
    </motion.div>
  );
}
