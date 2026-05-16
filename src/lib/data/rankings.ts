import type { RankingEntry, Testimonial } from '@/types';

export const rankings: RankingEntry[] = [
  {
    authority: 'NIRF',
    rank: '11',
    category: 'Colleges, India',
    year: '2024',
    badgeSlug: 'nirf',
    methodologyUrl: 'https://www.nirfindia.org/Home',
  },
  {
    authority: 'NAAC',
    rank: 'A+',
    category: 'Accreditation',
    year: '2023',
    badgeSlug: 'naac',
  },
  {
    authority: 'Outlook',
    rank: '6',
    category: 'Humanities Colleges',
    year: '2024',
    badgeSlug: 'outlook',
  },
  {
    authority: 'India Today',
    rank: '7',
    category: 'Best Colleges, Arts',
    year: '2024',
    badgeSlug: 'india-today',
  },
];

/** Anonymised testimonials. Role tag plus class year, never named. */
export const testimonials: Testimonial[] = [
  {
    quote: 'The cell\'s coordinators ran our drive end to end. Our HR team did not have to chase a single update. Strong execution.',
    roleTag: 'Recruiting Manager, Big 4 Audit',
    context: 'Cycle 2024-25',
  },
  {
    quote: 'Two of the three analysts we hired from SVC ended up among our top performers in the first six months. We\'re back for more.',
    roleTag: 'Talent Lead, Consulting Firm',
    context: 'Cycle 2024-25',
  },
  {
    quote: 'The CV format was tight, the eligibility filtering was honest, and the candidates were prepared. That combination is rare.',
    roleTag: 'Campus Lead, Insurance',
    context: 'Cycle 2024-25',
  },
  {
    quote: 'The cell helped me pivot from a generalist economics profile into a quant-adjacent role. The mock interview pool with alumni was the unlock.',
    roleTag: 'Alumna, B.A. (H) Economics',
    context: 'Class of 2024',
  },
  {
    quote: 'I came in expecting to do audit. I left with an offer from a sector I didn\'t know was hiring from us. The sector orientations changed my path.',
    roleTag: 'Alumnus, B.Com (H)',
    context: 'Class of 2024',
  },
  {
    quote: 'My daughter went through the placement cycle. Communication from the cell was prompt and honest, even when the news was a rejection.',
    roleTag: 'Parent of a Class of 2024 student',
    context: 'Cycle 2023-24',
  },
];

/** Student achievements published in the brochure. */
export const achievements = [
  {
    title: 'National Runners Up',
    detail: 'BrAINWARS 2024 hosted by Bain & Company',
    year: 2024,
  },
  {
    title: 'National 2nd Runners Up',
    detail: 'EY Cafta Case Championship 2024 hosted by EY',
    year: 2024,
  },
  {
    title: 'CA Intermediate AIR 47',
    detail: 'September 2025',
    year: 2025,
  },
  {
    title: 'CA Intermediate AIR 1',
    detail: 'September 2021',
    year: 2021,
  },
];
