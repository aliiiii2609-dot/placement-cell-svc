/**
 * SVC Placement Cell — Core type system.
 *
 * Confidentiality rules are enforced here, at the type level.
 * If a future content editor tries to add a field that would
 * violate one of the rules (a CTC on a recruiter, a company on
 * an alumnus's SVC record, a per-firm offer count), the build
 * will fail. The rules are:
 *
 *   1. A Recruiter has NO CTC field, NO offer-count field.
 *   2. A PlacementStat is aggregate-only across the cycle.
 *   3. An AlumniProfile has NO field linking SVC-era placement
 *      to a named company or a specific CTC value.
 *   4. A Testimonial is anonymized (role tag + class year only).
 */

// ============================================================
// CORE TEAM, COUNCIL, COORDINATORS
// ============================================================

export type TeamRole =
  | 'President'
  | 'Vice President, Placements'
  | 'Vice President, Internships'
  | 'Chief Coordinator'
  | 'Secretary'
  | 'Joint Secretary';

export interface CoreTeamMember {
  id: string;
  name: string;
  role: TeamRole;
  course: string;
  year: 'I' | 'II' | 'III' | 'IV';
  bio: string;
  email: string;
  phone: string;
  /** Path to the real portrait once provided. Placeholder until then. */
  photoPath: string;
  initials: string;
}

export interface ConvenerProfile {
  name: string;
  title: string;
  department: string;
  email: string;
  phone: string;
  photoPath: string;
  message: string;
}

export type CouncilDepartment =
  | 'Events & Logistics'
  | 'Editorial'
  | 'Documentation'
  | 'Social Media & Marketing'
  | 'PR & Outreach';

export interface CouncilMember {
  id: string;
  name: string;
  department: CouncilDepartment;
  course: string;
  year: 'I' | 'II' | 'III' | 'IV';
  email: string;
}

export interface Coordinator {
  id: string;
  name: string;
  course: string;
  year: 'I' | 'II';
}

// ============================================================
// RECRUITER PARTNERS  (NO CTC, NO OFFER COUNT BY DESIGN)
// ============================================================

export type RecruiterSector =
  | 'Audit & Assurance'
  | 'Consulting & Strategy'
  | 'Finance & Markets'
  | 'Banking & Insurance'
  | 'Analytics & Research'
  | 'Product & Tech'
  | 'Consumer & BD'
  | 'EdTech & Operations'
  | 'Hospitality & Aviation'
  | 'Policy & Public';

/**
 * Recruiter type.
 *
 * Intentionally has NO ctc, NO offerCount, NO ctcRange field.
 * Aggregate cycle stats live in PlacementStats. Individual
 * recruiter outcomes are never paired with the company name.
 */
export interface Recruiter {
  /** URL-safe slug. Maps to /public/logos/recruiters/{slug}.svg */
  slug: string;
  /** Display name as the brand uses it. */
  name: string;
  sector: RecruiterSector;
  /** Years they have engaged with the cell. No outcome data. */
  firstEngagedCycle?: string;
  /** Whether this recruiter is among the cell's signature partners. */
  featured?: boolean;
  /** Approximate brand color used for the placeholder tile. Replaced by the real logo when sourced. */
  brandColor?: string;
}

// ============================================================
// AGGREGATE CYCLE STATS  (NO PER-RECRUITER ATTRIBUTION)
// ============================================================

/**
 * Aggregate cycle stats. The single source of truth for every
 * number displayed on the site. Hardcoded numbers in components
 * are not allowed.
 *
 * Type forbids per-company breakdowns. A "topRecruiterCtcs" field
 * cannot exist on this type.
 */
export interface PlacementStats {
  cycle: string;
  status: 'in-progress' | 'closed';
  totalPlacementOffers: number;
  totalInternshipOffers: number;
  peakCtcLPA: number;
  averageCtcLPA: number;
  medianCtcLPA?: number;
  topDecileAverageLPA?: number;
  grossOfferValueCr: number;
  recruitersEngaged: number;
  convertingRecruiters: number;
  highestStipendLPM?: number;
  streamSplit: {
    commerce: number;
    arts: number;
    science: number;
  };
  sectorSplit: Array<{ sector: RecruiterSector | 'Other'; percentage: number }>;
}

// ============================================================
// ALUMNI  (NO SVC-ERA COMPANY OR CTC LINKAGE)
// ============================================================

export interface QualificationEntry {
  degree: string;
  institution: string;
  /** URL-safe slug for institution logo. Maps to /public/logos/schools/{slug}.svg */
  institutionSlug?: string;
  location: string;
  year: number;
}

/**
 * Notable alumnus profile.
 *
 * Has the alumnus's CURRENT public role and company.
 * Has NO svcPlacementCompany, NO svcPlacementCtc, NO svcOfferYear.
 * The type makes it impossible to attach SVC-era placement data
 * to a named profile.
 */
export interface NotableAlumnus {
  id: string;
  name: string;
  course: string;
  graduatingYear: number;
  currentRole: string;
  currentCompany: string;
  location?: string;
  /** Path to portrait. Real photo once consent received. */
  photoPath: string;
  /** Public credentials and qualifications timeline. */
  qualifications: QualificationEntry[];
  /** Optional public-facing achievement string. */
  achievement?: string;
  /** Sectors the alumnus is open to mentoring in. */
  mentoringSectors?: RecruiterSector[];
  /** Whether the alumnus has consented to be listed publicly. */
  consented: boolean;
}

// ============================================================
// EVENTS, NEWS, RESOURCES, FAQ
// ============================================================

export type EventCategory =
  | 'Workshop'
  | 'Drive'
  | 'Mock Interview'
  | 'Industry Talk'
  | 'Orientation'
  | 'IFair';

export interface CellEvent {
  id: string;
  title: string;
  description: string;
  date: string;
  startTime: string;
  endTime?: string;
  category: EventCategory;
  venue?: string;
  rsvpOpen: boolean;
}

export type NewsCategory =
  | 'Drive Live'
  | 'Deadline'
  | 'Visit'
  | 'Announcement'
  | 'IFair'
  | 'Press';

export interface NewsItem {
  id: string;
  title: string;
  summary: string;
  category: NewsCategory;
  publishedAt: string;
}

export type ResourceCategory =
  | 'CV Template'
  | 'Cover Letter'
  | 'Interview Guide'
  | 'Aptitude'
  | 'Case Primer'
  | 'Salary Negotiation';

export interface Resource {
  id: string;
  title: string;
  description: string;
  category: ResourceCategory;
  downloadCount: number;
  filePath?: string;
}

export type FaqAudience = 'recruiters' | 'students' | 'alumni' | 'parents';

export interface FaqEntry {
  question: string;
  answer: string;
}

export type FaqMap = Record<FaqAudience, FaqEntry[]>;

// ============================================================
// PROCESS, RANKINGS, TESTIMONIALS
// ============================================================

export interface ProcessStep {
  index: number;
  title: string;
  owner: string;
  duration: string;
  output: string;
  description: string;
}

export interface RankingEntry {
  authority: string;
  rank: string;
  category?: string;
  year: string;
  badgeSlug?: string;
  methodologyUrl?: string;
}

/** Testimonials are anonymized: role tag + class year, no name. */
export interface Testimonial {
  quote: string;
  roleTag: string;
  context: string;
}

// ============================================================
// FORMS
// ============================================================

export interface RecruiterInterestPayload {
  name: string;
  organization: string;
  email: string;
  phone?: string;
  hiringBrief: string;
  preferredSectors?: RecruiterSector[];
  consent: boolean;
}

export interface AlumniRegistrationPayload {
  fullName: string;
  course: string;
  graduatingYear: number;
  currentRole: string;
  currentCompany: string;
  email: string;
  city?: string;
  openToMentoring: 'open' | 'limited' | 'paused';
  consent: boolean;
}

export interface StudentFeedbackPayload {
  name?: string;
  course: string;
  topic: 'process' | 'drive' | 'mentor' | 'suggestion';
  message: string;
}

export interface NewsletterPayload {
  email: string;
  audience: 'recruiter' | 'student' | 'alumnus' | 'parent';
  consent: boolean;
}
