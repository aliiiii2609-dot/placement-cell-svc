import type { Recruiter } from '@/types';

/**
 * Recruiter partners.
 *
 * Sourced from the cell's brochure 2025-26 (page 12 "Past Recruiters")
 * and the placement records for cycles 2024-25 and 2025-26.
 *
 * Confidentiality:
 *   The Recruiter type intentionally has NO ctc field and NO offerCount
 *   field. Aggregate cycle stats live in stats.ts. Per-company outcomes
 *   are NEVER published on this site.
 *
 * Logo files live at /public/logos/recruiters/{slug}.svg
 * Each placeholder will be replaced by the official press-kit asset
 * sourced by the PR & Outreach department.
 */

export const recruiters: Recruiter[] = [
  // Big 4 + adjacent audit and assurance
  { slug: 'deloitte', name: 'Deloitte', sector: 'Audit & Assurance', brandColor: '#86bc25', featured: true },
  { slug: 'ey', name: 'EY', sector: 'Audit & Assurance', brandColor: '#ffe600', featured: true },
  { slug: 'kpmg', name: 'KPMG', sector: 'Audit & Assurance', brandColor: '#00338d', featured: true },
  { slug: 'pwc', name: 'PwC', sector: 'Audit & Assurance', brandColor: '#dc6900', featured: true },
  { slug: 'grant-thornton', name: 'Grant Thornton Bharat', sector: 'Audit & Assurance', brandColor: '#5e2750' },
  { slug: 'rsm', name: 'RSM USI', sector: 'Audit & Assurance', brandColor: '#3f9c35' },
  { slug: 'sw-india', name: 'SW India', sector: 'Audit & Assurance', brandColor: '#1a4d8c' },
  { slug: 'bobby-parikh-associates', name: 'Bobby Parikh Associates', sector: 'Audit & Assurance', brandColor: '#b85c38' },

  // Consulting & Strategy
  { slug: 'bcg', name: 'BCG', sector: 'Consulting & Strategy', brandColor: '#1a4630', featured: true },
  { slug: 'bain', name: 'Bain & Company', sector: 'Consulting & Strategy', brandColor: '#cc0000', featured: true },
  { slug: 'accenture', name: 'Accenture', sector: 'Consulting & Strategy', brandColor: '#a100ff', featured: true },
  { slug: 'alea-consulting', name: 'Alea Consulting', sector: 'Consulting & Strategy', brandColor: '#1f4d8b' },
  { slug: 'glg', name: 'Gerson Lehrman Group', sector: 'Consulting & Strategy', brandColor: '#005b9a' },
  { slug: 'inflection-point', name: 'Inflection Point', sector: 'Consulting & Strategy', brandColor: '#7a3e8e' },
  { slug: 'lagrange-point', name: 'Lagrange Point International', sector: 'Consulting & Strategy', brandColor: '#2c5e8e' },

  // Finance & Markets
  { slug: 'de-shaw', name: 'D. E. Shaw India', sector: 'Finance & Markets', brandColor: '#003366', featured: true },
  { slug: 'goldman-sachs', name: 'Goldman Sachs', sector: 'Finance & Markets', brandColor: '#7399c6', featured: true },
  { slug: 'futures-first', name: 'Futures First', sector: 'Finance & Markets', brandColor: '#1a3a52' },
  { slug: 'oxane-partners', name: 'Oxane Partners', sector: 'Finance & Markets', brandColor: '#0066b2', featured: true },
  { slug: 'daloopa', name: 'Daloopa', sector: 'Finance & Markets', brandColor: '#4361ee' },
  { slug: 'delta-x', name: 'Delta X', sector: 'Finance & Markets', brandColor: '#2e8b57' },
  { slug: 'verity', name: 'Verity Knowledge Solutions', sector: 'Finance & Markets', brandColor: '#5d3a8e' },
  { slug: 'wtw', name: 'Willis Towers Watson', sector: 'Finance & Markets', brandColor: '#7c2855' },
  { slug: 'aon', name: 'AON', sector: 'Finance & Markets', brandColor: '#e21d38' },
  { slug: 'rsa', name: 'RSA Actuarial Services', sector: 'Finance & Markets', brandColor: '#0033a0' },
  { slug: 'nomura-research', name: 'Nomura Research Institute', sector: 'Finance & Markets', brandColor: '#283891' },
  { slug: 'preferred-square', name: 'Preferred Square', sector: 'Finance & Markets', brandColor: '#3a7bd5' },

  // Banking & Insurance
  { slug: 'icici-bank', name: 'ICICI Bank', sector: 'Banking & Insurance', brandColor: '#b6202e', featured: true },
  { slug: 'hdfc-bank', name: 'HDFC Bank', sector: 'Banking & Insurance', brandColor: '#004c8f' },
  { slug: 'icici-prudential', name: 'ICICI Prudential Life', sector: 'Banking & Insurance', brandColor: '#c8102e' },
  { slug: 'digit-insurance', name: 'Digit Insurance', sector: 'Banking & Insurance', brandColor: '#7c3aed' },
  { slug: 'care-health', name: 'Care Health Insurance', sector: 'Banking & Insurance', brandColor: '#0e76a8' },
  { slug: 'bajaj-capital', name: 'Bajaj Capital', sector: 'Banking & Insurance', brandColor: '#0a4d9b' },

  // Analytics, Research, GCC
  { slug: 'genpact', name: 'Genpact', sector: 'Analytics & Research', brandColor: '#ee3124', featured: true },
  { slug: 'exl', name: 'EXL Service', sector: 'Analytics & Research', brandColor: '#003366', featured: true },
  { slug: 'acxiom', name: 'Acxiom', sector: 'Analytics & Research', brandColor: '#005baa' },
  { slug: 'procdna', name: 'ProcDNA', sector: 'Analytics & Research', brandColor: '#1e88e5' },
  { slug: 'flink-analytics', name: 'Flink Analytics & Insights', sector: 'Analytics & Research', brandColor: '#00838f' },
  { slug: 'infollion', name: 'Infollion', sector: 'Analytics & Research', brandColor: '#8b5cf6' },

  // Product & Tech
  { slug: 'zomato', name: 'Zomato', sector: 'Product & Tech', brandColor: '#e23744', featured: true },
  { slug: 'hcl-technologies', name: 'HCL Technologies', sector: 'Product & Tech', brandColor: '#0075c9' },
  { slug: 'hubspot', name: 'HubSpot', sector: 'Product & Tech', brandColor: '#ff7a59' },
  { slug: 'salescode', name: 'Salescode.ai', sector: 'Product & Tech', brandColor: '#0066ff' },
  { slug: 'recruit-crm', name: 'Recruit CRM', sector: 'Product & Tech', brandColor: '#ff6900' },
  { slug: 'code-vyasa', name: 'Code Vyasa', sector: 'Product & Tech', brandColor: '#4caf50' },
  { slug: 'visiontek', name: 'Visiontek Engineers', sector: 'Product & Tech', brandColor: '#1e3a8a' },
  { slug: 'clairvolex', name: 'Clairvolex', sector: 'Product & Tech', brandColor: '#37474f' },
  { slug: 'bribooks', name: 'BriBooks', sector: 'Product & Tech', brandColor: '#ff5722' },
  { slug: 'tophire', name: 'Tophire', sector: 'Product & Tech', brandColor: '#3f51b5' },
  { slug: 'studio-mosaic', name: 'Studio Mosaic', sector: 'Product & Tech', brandColor: '#34495e' },
  { slug: 'ecom-express', name: 'Ecom Express', sector: 'Product & Tech', brandColor: '#f3565d' },

  // Hospitality & Aviation
  { slug: 'oberoi-group', name: 'The Oberoi Group', sector: 'Hospitality & Aviation', brandColor: '#9d2a3a', featured: true },
  { slug: 'air-india', name: 'Air India', sector: 'Hospitality & Aviation', brandColor: '#e31837' },
  { slug: 'ds-group', name: 'DS Group', sector: 'Consumer & BD', brandColor: '#1b5e20' },
  { slug: 'signature-global', name: 'Signature Global', sector: 'Consumer & BD', brandColor: '#c9a227' },

  // EdTech & Operations
  { slug: 'niit', name: 'NIIT', sector: 'EdTech & Operations', brandColor: '#e60026', featured: true },
  { slug: 'intellipaat', name: 'Intellipaat', sector: 'EdTech & Operations', brandColor: '#fec107' },
  { slug: 'vmock', name: 'vMock', sector: 'EdTech & Operations', brandColor: '#1976d2' },
  { slug: 'acmegrade', name: 'Acmegrade', sector: 'EdTech & Operations', brandColor: '#673ab7' },
  { slug: 'my-captain', name: 'My Captain', sector: 'EdTech & Operations', brandColor: '#f44336' },
  { slug: 'planet-spark', name: 'PlanetSpark', sector: 'EdTech & Operations', brandColor: '#5e35b1' },
  { slug: 'masters-union', name: 'Masters Union', sector: 'EdTech & Operations', brandColor: '#1a1a2e' },
  { slug: 'jaro-education', name: 'Jaro Education', sector: 'EdTech & Operations', brandColor: '#0277bd' },
  { slug: 'ditto-finshots', name: 'Ditto by Finshots', sector: 'EdTech & Operations', brandColor: '#262626' },

  // Policy & Public Sector
  { slug: 'nation-with-namo', name: 'Nation With NaMo', sector: 'Policy & Public', brandColor: '#f57f17' },
  { slug: 'samagra-governance', name: 'Samagra Governance', sector: 'Policy & Public', brandColor: '#0a6e3b' },
];

/** Grouped by sector for rendering the partners section. */
export function recruitersBySector(): Record<Recruiter['sector'], Recruiter[]> {
  const acc: Record<string, Recruiter[]> = {};
  for (const r of recruiters) {
    if (!acc[r.sector]) acc[r.sector] = [];
    acc[r.sector].push(r);
  }
  return acc as Record<Recruiter['sector'], Recruiter[]>;
}

/** Total verifiable count of partner companies engaged across cycles. */
export const PARTNER_COUNT = recruiters.length;

/** Featured partners (shown in the marquee hero). */
export const featuredPartners = recruiters.filter((r) => r.featured);
