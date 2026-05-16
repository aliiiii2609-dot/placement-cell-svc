import type { PlacementStats } from '@/types';

/**
 * SINGLE SOURCE OF TRUTH for every number on the site.
 *
 * Hardcoded numbers in components are not allowed. If you find
 * one anywhere, replace it with a read from this file.
 *
 * Cycle 2025-26 numbers sourced from the cell's internal handoff
 * dated April 2026 plus the published 2024-25 recruitment brochure.
 */

export const currentCycleStats: PlacementStats = {
  cycle: '2025-26',
  status: 'in-progress',
  totalPlacementOffers: 114,
  totalInternshipOffers: 174,
  peakCtcLPA: 15.98,
  averageCtcLPA: 7.3,
  medianCtcLPA: 7.0,
  topDecileAverageLPA: 14.35,
  grossOfferValueCr: 8.32,
  recruitersEngaged: 60,
  convertingRecruiters: 18,
  highestStipendLPM: 1.75,
  streamSplit: {
    commerce: 68,
    arts: 19,
    science: 13,
  },
  sectorSplit: [
    { sector: 'Audit & Assurance', percentage: 33 },
    { sector: 'Finance & Markets', percentage: 27 },
    { sector: 'Consulting & Strategy', percentage: 20 },
    { sector: 'Consumer & BD', percentage: 12 },
    { sector: 'Other', percentage: 8 },
  ],
};

export const previousCycleStats: PlacementStats = {
  cycle: '2024-25',
  status: 'closed',
  totalPlacementOffers: 114,
  totalInternshipOffers: 180,
  peakCtcLPA: 13.4,
  averageCtcLPA: 6.43,
  medianCtcLPA: 6.05,
  topDecileAverageLPA: 10.1,
  grossOfferValueCr: 6.8,
  recruitersEngaged: 70,
  convertingRecruiters: 32,
  highestStipendLPM: 1.75,
  streamSplit: {
    commerce: 78,
    arts: 17,
    science: 5,
  },
  sectorSplit: [
    { sector: 'Audit & Assurance', percentage: 35 },
    { sector: 'Analytics & Research', percentage: 25 },
    { sector: 'Banking & Insurance', percentage: 15 },
    { sector: 'Other', percentage: 25 },
  ],
};

/** Multi-year trend used by the trend chart. */
export const trendCycles: Array<{
  cycle: string;
  offers: number;
  peak: number;
  avg: number;
  internships: number;
}> = [
  { cycle: '21-22', offers: 78, peak: 11.4, avg: 5.8, internships: 120 },
  { cycle: '22-23', offers: 92, peak: 12.6, avg: 6.2, internships: 145 },
  { cycle: '23-24', offers: 98, peak: 13.8, avg: 6.5, internships: 162 },
  { cycle: '24-25', offers: 114, peak: 13.4, avg: 6.43, internships: 180 },
  { cycle: '25-26', offers: 114, peak: 15.98, avg: 7.3, internships: 174 },
];

/** Course-wise batch breakdown for Batch of 2026, from the 2025-26 brochure. */
export const courseBatchBreakdown: Array<{ course: string; strength: number; stream: 'Commerce' | 'Arts' | 'Science' }> = [
  { course: 'B.Com (H)', strength: 316, stream: 'Commerce' },
  { course: 'B.Com (P)', strength: 296, stream: 'Commerce' },
  { course: 'B.A. (P)', strength: 252, stream: 'Arts' },
  { course: 'Economics', strength: 129, stream: 'Arts' },
  { course: 'English', strength: 119, stream: 'Arts' },
  { course: 'Hindi', strength: 111, stream: 'Arts' },
  { course: 'History', strength: 107, stream: 'Arts' },
  { course: 'Political Science', strength: 134, stream: 'Arts' },
  { course: 'Sanskrit', strength: 65, stream: 'Arts' },
  { course: 'Sociology', strength: 100, stream: 'Arts' },
  { course: 'Biochemistry', strength: 116, stream: 'Science' },
  { course: 'Bio Sciences', strength: 108, stream: 'Science' },
  { course: 'Botany', strength: 77, stream: 'Science' },
  { course: 'Chemistry', strength: 133, stream: 'Science' },
  { course: 'Electronics', strength: 80, stream: 'Science' },
  { course: 'Life Sciences', strength: 299, stream: 'Science' },
  { course: 'Mathematics', strength: 227, stream: 'Science' },
  { course: 'Physics', strength: 94, stream: 'Science' },
  { course: 'Statistics', strength: 83, stream: 'Science' },
  { course: 'Zoology', strength: 80, stream: 'Science' },
];

/** Institution-level facts. */
export const institutionFacts = {
  foundedYear: 1961,
  patronage: 'Tirumala Tirupati Devasthanams (TTD) Trust',
  affiliation: 'University of Delhi',
  campus: 'South Campus, Dhaula Kuan',
  pincode: '110021',
  rankings: {
    indiaToday: 7,
    outlook: 6,
    nirf: 11,
    naacGrade: 'A+',
  },
  courses: 20,
  societies: 30,
  batch2026Strength: 3500,
  internshipOffers202324: 850,
};
