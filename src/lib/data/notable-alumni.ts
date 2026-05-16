import type { NotableAlumnus } from '@/types';

/**
 * Notable alumni.
 *
 * Sourced from the cell's published 2025-26 Recruitment Brochure,
 * page 17. The brochure displays each alumnus's name, current role,
 * and current company, which is public professional information.
 *
 * IMPORTANT confidentiality rules enforced by the NotableAlumnus type:
 *   - No svcPlacementCompany field exists.
 *   - No svcPlacementCtc field exists.
 *   - No svcOfferYear field exists.
 * The alumnus's SVC-era placement record is NEVER paired with a
 * named profile on this site, even if the data is internally known.
 *
 * Real portraits are reserved for production replacement by the
 * Documentation department. Photo paths point to placeholder slots
 * until then.
 */

export const notableAlumni: NotableAlumnus[] = [
  {
    id: 'arjun-mehra',
    name: 'Arjun Mehra',
    course: 'B.Com (H)',
    graduatingYear: 2015,
    currentRole: 'Head, BB Virtuals',
    currentCompany: 'BB Virtuals',
    location: 'India',
    photoPath: '/images/alumni/arjun-mehra.svg',
    achievement: 'CA (Inter Rank 1), CFA, Ex-BCG',
    qualifications: [
      { degree: 'B.Com (H)', institution: 'Sri Venkateswara College, University of Delhi', institutionSlug: 'svc', location: 'New Delhi, India', year: 2015 },
      { degree: 'Chartered Accountant', institution: 'The Institute of Chartered Accountants of India', institutionSlug: 'icai', location: 'India', year: 2018 },
      { degree: 'CFA Charter', institution: 'CFA Institute', institutionSlug: 'cfa', location: 'USA', year: 2020 },
    ],
    mentoringSectors: ['Finance & Markets', 'Consulting & Strategy', 'Audit & Assurance'],
    consented: true,
  },
  {
    id: 'supriya-paul',
    name: 'Supriya Paul',
    course: 'B.Com (H)',
    graduatingYear: 2013,
    currentRole: 'Co-Founder & CEO',
    currentCompany: 'Josh Talks',
    location: 'New Delhi, India',
    photoPath: '/images/alumni/supriya-paul.svg',
    qualifications: [
      { degree: 'B.Com (H)', institution: 'Sri Venkateswara College, University of Delhi', institutionSlug: 'svc', location: 'New Delhi, India', year: 2013 },
    ],
    mentoringSectors: ['Product & Tech', 'EdTech & Operations'],
    consented: true,
  },
  {
    id: 'sangeeta-mamgain',
    name: 'Sangeeta Mamgain',
    course: 'B.A. (H) Economics',
    graduatingYear: 2008,
    currentRole: 'Lead, School of Climate and Sustainability',
    currentCompany: 'School of Climate and Sustainability',
    location: 'India',
    photoPath: '/images/alumni/sangeeta-mamgain.svg',
    qualifications: [
      { degree: 'B.A. (H) Economics', institution: 'Sri Venkateswara College, University of Delhi', institutionSlug: 'svc', location: 'New Delhi, India', year: 2008 },
    ],
    mentoringSectors: ['Policy & Public'],
    consented: true,
  },
  {
    id: 'kritika-singh',
    name: 'Kritika Singh',
    course: 'B.A. (H) Economics',
    graduatingYear: 2014,
    currentRole: 'Senior Consultant',
    currentCompany: 'The World Bank',
    location: 'Washington D.C., USA',
    photoPath: '/images/alumni/kritika-singh.svg',
    qualifications: [
      { degree: 'B.A. (H) Economics', institution: 'Sri Venkateswara College, University of Delhi', institutionSlug: 'svc', location: 'New Delhi, India', year: 2014 },
    ],
    mentoringSectors: ['Policy & Public', 'Consulting & Strategy'],
    consented: true,
  },
  {
    id: 'nishant-s',
    name: 'Nishant S.',
    course: 'B.A. (H) Economics',
    graduatingYear: 2012,
    currentRole: 'Manager',
    currentCompany: 'Reserve Bank of India',
    location: 'Mumbai, India',
    photoPath: '/images/alumni/nishant-s.svg',
    qualifications: [
      { degree: 'B.A. (H) Economics', institution: 'Sri Venkateswara College, University of Delhi', institutionSlug: 'svc', location: 'New Delhi, India', year: 2012 },
    ],
    mentoringSectors: ['Finance & Markets', 'Banking & Insurance', 'Policy & Public'],
    consented: true,
  },
  {
    id: 'gurpreet-singh-bakshi',
    name: 'Gurpreet Singh Bakshi',
    course: 'B.Com (H)',
    graduatingYear: 2010,
    currentRole: 'Director',
    currentCompany: 'BlackRock',
    location: 'India',
    photoPath: '/images/alumni/gurpreet-singh-bakshi.svg',
    qualifications: [
      { degree: 'B.Com (H)', institution: 'Sri Venkateswara College, University of Delhi', institutionSlug: 'svc', location: 'New Delhi, India', year: 2010 },
    ],
    mentoringSectors: ['Finance & Markets'],
    consented: true,
  },
  {
    id: 'gaurav-kohli',
    name: 'Gaurav Kohli',
    course: 'B.Com (H)',
    graduatingYear: 2005,
    currentRole: 'Managing Director',
    currentCompany: 'Ernst & Young (EY), USA',
    location: 'New York, USA',
    photoPath: '/images/alumni/gaurav-kohli.svg',
    qualifications: [
      { degree: 'B.Com (H)', institution: 'Sri Venkateswara College, University of Delhi', institutionSlug: 'svc', location: 'New Delhi, India', year: 2005 },
    ],
    mentoringSectors: ['Audit & Assurance', 'Consulting & Strategy'],
    consented: true,
  },
  {
    id: 'mallika-pung',
    name: 'Mallika Pung',
    course: 'B.A. (H) Economics',
    graduatingYear: 2009,
    currentRole: 'Labor Economist',
    currentCompany: 'U.S. Equal Employment Opportunity Commission',
    location: 'Washington D.C., USA',
    photoPath: '/images/alumni/mallika-pung.svg',
    qualifications: [
      { degree: 'B.A. (H) Economics', institution: 'Sri Venkateswara College, University of Delhi', institutionSlug: 'svc', location: 'New Delhi, India', year: 2009 },
    ],
    mentoringSectors: ['Policy & Public'],
    consented: true,
  },
  {
    id: 'prachi-khanna',
    name: 'Prachi Khanna',
    course: 'B.Com (H)',
    graduatingYear: 2008,
    currentRole: 'Principal Consultant',
    currentCompany: 'Korn Ferry, USA',
    location: 'USA',
    photoPath: '/images/alumni/prachi-khanna.svg',
    qualifications: [
      { degree: 'B.Com (H)', institution: 'Sri Venkateswara College, University of Delhi', institutionSlug: 'svc', location: 'New Delhi, India', year: 2008 },
    ],
    mentoringSectors: ['Consulting & Strategy'],
    consented: true,
  },
  {
    id: 'rishabh-pant',
    name: 'Rishabh Pant',
    course: 'B.Com (P)',
    graduatingYear: 2019,
    currentRole: 'International Cricketer',
    currentCompany: 'Indian National Cricket Team',
    location: 'India',
    photoPath: '/images/alumni/rishabh-pant.svg',
    qualifications: [
      { degree: 'B.Com (P)', institution: 'Sri Venkateswara College, University of Delhi', institutionSlug: 'svc', location: 'New Delhi, India', year: 2019 },
    ],
    consented: true,
  },
  {
    id: 'jayant-chaudhary',
    name: 'Jayant Chaudhary',
    course: 'B.A. (H) Economics',
    graduatingYear: 2000,
    currentRole: 'Minister of State, Rajya Sabha MP',
    currentCompany: 'Government of India',
    location: 'New Delhi, India',
    photoPath: '/images/alumni/jayant-chaudhary.svg',
    qualifications: [
      { degree: 'B.A. (H) Economics', institution: 'Sri Venkateswara College, University of Delhi', institutionSlug: 'svc', location: 'New Delhi, India', year: 2000 },
    ],
    mentoringSectors: ['Policy & Public'],
    consented: true,
  },
  {
    id: 'sriti-jha',
    name: 'Sriti Jha',
    course: 'B.A. (P)',
    graduatingYear: 2006,
    currentRole: 'Television Actress',
    currentCompany: 'Indian Television',
    location: 'Mumbai, India',
    photoPath: '/images/alumni/sriti-jha.svg',
    qualifications: [
      { degree: 'B.A. (P)', institution: 'Sri Venkateswara College, University of Delhi', institutionSlug: 'svc', location: 'New Delhi, India', year: 2006 },
    ],
    consented: true,
  },
];

/** Business schools and institutions referenced in qualifications, used for school logo slots. */
export const referencedInstitutions: Array<{ slug: string; name: string; type: 'mba' | 'ug' | 'cert' }> = [
  { slug: 'iim-ahmedabad', name: 'IIM Ahmedabad', type: 'mba' },
  { slug: 'iim-bangalore', name: 'IIM Bangalore', type: 'mba' },
  { slug: 'iim-calcutta', name: 'IIM Calcutta', type: 'mba' },
  { slug: 'iim-lucknow', name: 'IIM Lucknow', type: 'mba' },
  { slug: 'iim-kozhikode', name: 'IIM Kozhikode', type: 'mba' },
  { slug: 'isb', name: 'Indian School of Business', type: 'mba' },
  { slug: 'xlri', name: 'XLRI Jamshedpur', type: 'mba' },
  { slug: 'spjimr', name: 'SPJIMR', type: 'mba' },
  { slug: 'fms-delhi', name: 'FMS Delhi', type: 'mba' },
  { slug: 'mdi-gurgaon', name: 'MDI Gurgaon', type: 'mba' },
  { slug: 'jbims', name: 'JBIMS', type: 'mba' },
  { slug: 'iift', name: 'IIFT', type: 'mba' },
  { slug: 'nmims', name: 'NMIMS', type: 'mba' },
  { slug: 'harvard-business-school', name: 'Harvard Business School', type: 'mba' },
  { slug: 'stanford-gsb', name: 'Stanford Graduate School of Business', type: 'mba' },
  { slug: 'wharton', name: 'The Wharton School', type: 'mba' },
  { slug: 'columbia-business-school', name: 'Columbia Business School', type: 'mba' },
  { slug: 'mit-sloan', name: 'MIT Sloan School of Management', type: 'mba' },
  { slug: 'insead', name: 'INSEAD', type: 'mba' },
  { slug: 'london-business-school', name: 'London Business School', type: 'mba' },
  { slug: 'oxford-said', name: 'University of Oxford, Saïd Business School', type: 'mba' },
  { slug: 'cambridge-judge', name: 'University of Cambridge, Judge Business School', type: 'mba' },
  { slug: 'yale-som', name: 'Yale School of Management', type: 'mba' },
  { slug: 'chicago-booth', name: 'Chicago Booth', type: 'mba' },
  { slug: 'kellogg', name: 'Kellogg School of Management', type: 'mba' },
  { slug: 'tuck', name: 'Tuck School of Business', type: 'mba' },
  { slug: 'berkeley-haas', name: 'Berkeley Haas', type: 'mba' },
  { slug: 'nyu-stern', name: 'NYU Stern', type: 'mba' },
  { slug: 'hec-paris', name: 'HEC Paris', type: 'mba' },
  { slug: 'iese', name: 'IESE Business School', type: 'mba' },
  { slug: 'imd', name: 'IMD Business School', type: 'mba' },
  { slug: 'rotman', name: 'Rotman School of Management', type: 'mba' },
  { slug: 'nus-business', name: 'NUS Business School', type: 'mba' },
  { slug: 'hkust', name: 'HKUST Business School', type: 'mba' },
  { slug: 'lse', name: 'London School of Economics', type: 'ug' },
  { slug: 'icai', name: 'The Institute of Chartered Accountants of India', type: 'cert' },
  { slug: 'cfa', name: 'CFA Institute', type: 'cert' },
  { slug: 'svc', name: 'Sri Venkateswara College, University of Delhi', type: 'ug' },
];
