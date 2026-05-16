import type { FaqMap } from '@/types';

/**
 * FAQ content for four audiences. Sourced from PLACEMENT_CELL_WEBSITE_CONTENT.docx
 * supplied by the cell, supplemented by the cell's published recruitment policy.
 */
export const faq: FaqMap = {
  recruiters: [
    {
      question: 'When can selected students join the company?',
      answer:
        'Selected students are available to join organisations in the months of June and July, depending upon the schedule of their college and competitive examinations. The same can be clarified with the Placement Coordinator assigned to your drive.',
    },
    {
      question: 'When can companies come for recruitment?',
      answer:
        'At Sri Venkateswara College, recruitment drives are conducted all-round the year except under special circumstances.',
    },
    {
      question: 'Till when can we expect a response from the Placement Cell?',
      answer:
        'Once we receive a company\'s confirmation, a Placement Coordinator will get in touch within a week to assist throughout the recruitment process.',
    },
    {
      question: 'Can we run a partly on-campus and partly off-campus drive?',
      answer:
        'Yes. An organisation can conduct the Pre-Placement Talk and preliminary rounds at the college campus and choose to hold the remaining process at their office.',
    },
    {
      question: 'How are CVs shared and shortlisted?',
      answer:
        'Students apply through a prescribed Google Form. The Placement Cell verifies eligibility, compiles and forwards CVs to the recruiter. Shortlisting is conducted solely by the recruiter based on their internal criteria.',
    },
    {
      question: 'What infrastructure is available for on-campus drives?',
      answer:
        'Fully air-conditioned seminar halls with projectors and audio-visual facilities for Pre-Placement Talks. Classrooms with projectors and Wi-Fi for interviews and assessments. Air-conditioned Placement Cell rooms with comfortable seating for HR waiting and discussions. Lunch and basic hospitality are arranged for visiting recruiters.',
    },
  ],

  students: [
    {
      question: 'Do academic or course-specific criteria apply to all opportunities?',
      answer:
        'Academic, course-specific, or year-wise eligibility criteria are entirely determined by the recruiting organisation and the profile offered. The Placement Cell does not set these criteria. Review the eligibility requirements mentioned for each opportunity before applying.',
    },
    {
      question: 'How and where are application forms shared?',
      answer:
        'Internship opportunities are shared through the official Placement Cell WhatsApp community groups. Placement opportunities are communicated directly via email to students registered with the Placement Cell. Check these channels regularly to stay updated.',
    },
    {
      question: 'Is it mandatory to use the Placement Cell CV format?',
      answer:
        'Yes. Use the Placement Cell CV format. Minor modifications are permitted but the overall structure must remain largely unchanged. CVs that differ significantly from the prescribed format may not be accepted.',
    },
    {
      question: 'Is it compulsory to attend all selection rounds once shortlisted?',
      answer:
        'Yes. Once shortlisted, attending all selection rounds is mandatory. Missing a round without prior intimation may lead to disqualification or blacklisting from future opportunities.',
    },
    {
      question: 'Whom should students contact for queries or clarifications?',
      answer:
        'Reach out to the Placement Cell coordinators, council members, or core team members through the official communication channels. Contact details are on the team page.',
    },
    {
      question: 'What is the tier policy after accepting an offer?',
      answer:
        'Once a student accepts an offer, they may be restricted from applying to further opportunities in accordance with the Cell\'s tier policy. Inform the Cell of acceptance or rejection decisions within the stipulated deadlines.',
    },
  ],

  alumni: [
    {
      question: 'How do I register on the alumni directory?',
      answer:
        'Use the Alumni Registration form on this site. Submissions go to a verification queue managed by the Documentation department. Once verified, your profile becomes part of the directory, with whatever visibility you choose.',
    },
    {
      question: 'Can I edit or remove my profile later?',
      answer:
        'Yes. Email placement@svc.du.ac.in with your request. Edits and removals are processed within five working days. You can pause visibility without deleting the profile.',
    },
    {
      question: 'What does mentoring a current student involve?',
      answer:
        'A 30 to 45 minute video or in-person conversation about a domain, role, or career path. You can choose which sectors you are open to mentoring in and how many students per cycle. The Cell\'s Documentation team handles all scheduling.',
    },
    {
      question: 'Will my placement details from my SVC year be displayed?',
      answer:
        'No. The site never displays SVC-era placement records paired with named profiles. Your public professional information, your qualifications, and any voluntary biography you provide are all that appear.',
    },
    {
      question: 'Can I attend cell events as an alumnus?',
      answer:
        'Yes. Alumni are welcome at IFair, industry talks, and panel discussions. Look out for the alumni invitation email or check the events page.',
    },
  ],

  parents: [
    {
      question: 'How can I support my child through the placement cycle?',
      answer:
        'Encourage steady, multi-month preparation rather than last-minute cramming. Help them protect study time during the cycle. Be a sounding board for offer evaluations. Do not contact recruiters or the cell on their behalf, since recruiters interpret that as a maturity signal against the candidate.',
    },
    {
      question: 'Is a high CGPA mandatory for placements?',
      answer:
        'Academics matter, but recruiters also value skills, projects, and practical exposure. Consistency, preparation, and confidence often weigh more than grades alone.',
    },
    {
      question: 'What if my child does not get placed initially?',
      answer:
        'Placements are not the end. Many students succeed through off-campus opportunities, higher studies, or competitive examinations. The cell continues to assist alumni for a year after graduation.',
    },
    {
      question: 'How do I verify a company is genuine?',
      answer:
        'Every recruiter on this site has been vetted by the cell. The brochure and recruiter list are the verified sources. If your child receives an offer that looks suspicious, write to placement@svc.du.ac.in and the cell will confirm.',
    },
    {
      question: 'Are internships paid?',
      answer:
        'Most recruiter internships listed by the cell come with a stipend. The highest stipend in the previous cycle was 1.75 lakh per month. Stipend ranges are disclosed alongside each drive.',
    },
  ],
};
