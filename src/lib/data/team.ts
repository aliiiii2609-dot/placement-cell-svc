import type { CoreTeamMember, ConvenerProfile } from '@/types';

/**
 * Core team for cycle 2026-27.
 * Sourced from Placement_Cell_2026-67_Team_Members.xlsx
 * supplied by the cell's Documentation department.
 *
 * Mohammed Ali (correct spelling, not Muhammad).
 */
export const coreTeam: CoreTeamMember[] = [
  {
    id: 'nishtha-khatri',
    name: 'Nishtha Khatri',
    role: 'President',
    course: 'B.A. (H) Economics',
    year: 'II',
    bio:
      'Builds the outcome-oriented ecosystem that equips students with the skills, exposure, and confidence required in today\'s competitive professional landscape. Strengthens industry engagement and ensures structured functioning across every vertical of the Cell.',
    email: 'nishtha.svcpcell@gmail.com',
    phone: '+91 98180 43273',
    photoPath: '/images/team/nishtha-khatri.svg',
    initials: 'NK',
  },
  {
    id: 'mohammed-ali',
    name: 'Mohammed Ali',
    role: 'Vice President, Placements',
    course: 'B.A. (H) English',
    year: 'II',
    bio:
      'Builds a Placement Cell that is transparent, student-centric, and continuously evolving with industry needs. Fosters strong industry relationships and creates equal opportunities for every student.',
    email: 'ali.svcpcell@gmail.com',
    phone: '+91 90273 89597',
    photoPath: '/images/team/mohammed-ali.svg',
    initials: 'MA',
  },
  {
    id: 'gurbani-chandok',
    name: 'Gurbani Chandok',
    role: 'Vice President, Internships',
    course: 'B.Sc. (H) Mathematics',
    year: 'II',
    bio:
      'Internships are a collective journey built through teamwork, effort, and shared responsibility. Creates opportunities that help students gain real-world exposure, learn beyond classrooms, and grow with confidence.',
    email: 'gurbani.svcpcell@gmail.com',
    phone: '+91 95822 25700',
    photoPath: '/images/team/gurbani-chandok.svg',
    initials: 'GC',
  },
  {
    id: 'anisha-tanwar',
    name: 'Anisha Tanwar',
    role: 'Chief Coordinator',
    course: 'B.Sc. (H) Botany',
    year: 'II',
    bio:
      'Excellence in execution transforms vision into reality. Oversees overall operations of the Cell, ensuring every process, every drive, and every initiative runs with precision, purpose, and efficiency.',
    email: 'anishatanwar.svcpcell@gmail.com',
    phone: '+91 98705 12006',
    photoPath: '/images/team/anisha-tanwar.svg',
    initials: 'AT',
  },
  {
    id: 'sukhmanpreet-kaur-sandhu',
    name: 'Sukhmanpreet Kaur Sandhu',
    role: 'Secretary',
    course: 'B.Com (H)',
    year: 'II',
    bio:
      'The backbone of any well-functioning team is seamless coordination, clear communication, and disciplined execution. Bridges every vertical of the Cell from documentation and internal coordination to industry outreach and event operations.',
    email: 'sukhmansvc.pcell@gmail.com',
    phone: '+91 90564 82808',
    photoPath: '/images/team/sukhmanpreet-kaur-sandhu.svg',
    initials: 'SS',
  },
  {
    id: 'shiv-chopra',
    name: 'Shiv Chopra',
    role: 'Joint Secretary',
    course: 'B.Com (H)',
    year: 'II',
    bio:
      'Great teams are made by those who hold things together behind the scenes. Strengthens the Cell from within by being reliable, responsive, and resourceful for the team, the volunteers, and the students.',
    email: 'shiv.svcpcell@gmail.com',
    phone: '+91 98118 17950',
    photoPath: '/images/team/shiv-chopra.svg',
    initials: 'SC',
  },
];

/**
 * Faculty Convener, Dr. Abhishek Malhotra.
 * Message reproduced verbatim from the 2025-26 recruitment brochure
 * with the Convener's published approval.
 */
export const convener: ConvenerProfile = {
  name: 'Dr. Abhishek Malhotra',
  title: 'Convener, The Placement Cell',
  department: 'Assistant Professor, Department of Economics',
  email: 'abhishek_m@svc.ac.in',
  phone: '+91 96542 30020',
  photoPath: '/images/convener/abhishek-malhotra.svg',
  message:
    'It is with tremendous enthusiasm that I welcome you to the Internship Fair. This event is more than just a date on the calendar; it is a vital nexus where raw potential meets real-world opportunity, and where the futures of our brightest students begin to take definitive shape. To our esteemed recruiters and organizational partners, we extend our sincerest gratitude. Your presence is the highest testament to your belief in our academic rigor and the exceptional talent we cultivate.',
};
