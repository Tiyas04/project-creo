// FAQ Configuration Data
// This file contains the FAQ data array used in the FAQ section

export interface FAQItem {
  id: string
  question: string
  answer: string
}

export const faqs: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'Is this an online or in-house Event?',
    answer: 'This is a completely online event, attend from your comfy couch.',
  },
  {
    id: 'faq-2',
    question: 'What is the registration fee?',
    answer: 'Registration Fees is just Rs 299, to ensure serious participation.',
  },
  {
    id: 'faq-3',
    question: 'Can I participate as an individual?',
    answer:
      'Yes, you can participate individually or as part of a team. We encourage team participation for collaborative projects.',
  },
  {
    id: 'faq-4',
    question: 'What are the eligibility criteria?',
    answer:
      'The event is open to all college students currently pursuing undergraduate or postgraduate degrees in any field and working professionals.',
  },
  {
    id: 'faq-5',
    question: 'Will certificates be provided?',
    answer:
      'Yes, all participants will receive participation certificates. Winners will receive Exclusive creo 26 goodies and Electronic gadgets as prizes',
  },

  {
    id: 'faq-7',
    question: 'Is prior experience required?',
    answer:
      'No Prior, Experience required. we welcome beginners to use this opportunity to build their first case study on real life problem.',
  },
  {
    id: 'faq-8',
    question: 'How can I contact the organizers?',
    answer:
      'You can reach us through our official email or social media channels. Our team is available to answer any queries.',
  },
]
