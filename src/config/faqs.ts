export type FaqItem = {
  question: string;
  answer: string;
};

export const generalFaqs: FaqItem[] = [
  {
    question: "What is the difference between a CV and a resume?",
    answer:
      "A resume is a concise 1–2 page summary of your skills and experience tailored to a specific job. A CV is longer and more detailed, often used in academia or international applications. For most job applications in the US and Canada, employers expect a resume.",
  },
  {
    question: "How do I choose the right resume template?",
    answer:
      "Pick a clean, ATS-friendly layout that matches your industry. Creative fields may allow more design, while corporate, healthcare, and tech roles work best with simple, well-structured templates. Our templates are built to pass applicant tracking systems and impress recruiters.",
  },
  {
    question: "What does an ATS-friendly resume mean?",
    answer:
      "ATS (Applicant Tracking System) software scans resumes before a human sees them. An ATS-friendly resume uses standard headings, readable fonts, clear section order, and relevant keywords from the job description — without tables, images, or complex formatting that can break parsing.",
  },
  {
    question: "How far back should a resume go?",
    answer:
      "Generally, include the last 10–15 years of relevant work experience. Older roles can be shortened or removed unless they directly support the position you're applying for. Focus on recent achievements that show you're qualified for the role today.",
  },
  {
    question: "Should I make a different resume for every job application?",
    answer:
      "Yes. Tailoring your resume for each role significantly improves your chances. Adjust your summary, skills, and bullet points to mirror the job description while staying honest. Our tools help you customize quickly without starting from scratch every time.",
  },
  {
    question: "What resume file format should I use?",
    answer:
      "PDF is the safest choice — it keeps formatting intact on any device. Some employers request Word (.docx); if so, submit that version. Avoid uncommon formats unless specifically asked. We let you download in both PDF and Word.",
  },
  {
    question: "Do I need a cover letter with my resume?",
    answer:
      "When a job posting asks for one, always include it. Even when optional, a strong cover letter helps you stand out by explaining why you're a fit for the role. We offer cover letter writing services that pair with your resume.",
  },
  {
    question: "Is it worth paying for professional resume writing?",
    answer:
      "If you're not getting interviews, switching careers, or applying for senior roles, professional help can make a real difference. Expert writers know how to highlight achievements, use the right keywords, and structure your story for maximum impact.",
  },
];

export const serviceFaqs: FaqItem[] = [
  {
    question: "How long does it take to receive my resume?",
    answer:
      "Typically, you'll receive your first draft within 24-48 hours after providing the necessary information. We also offer expedited services for urgent needs.",
  },
  {
    question: "Do you provide cover letter writing services as well?",
    answer:
      "Yes. We offer personalized cover letter writing that complements your resume and is tailored to the specific roles you're applying for.",
  },
  {
    question: "Is my personal information kept confidential?",
    answer:
      "Absolutely. We treat all your information as strictly confidential and never share your data with third parties without your consent.",
  },
  {
    question: "Can you help me update my existing resume?",
    answer:
      "Of course. Share your current resume and our writers will refine and optimize it to highlight your strengths and pass ATS systems.",
  },
  {
    question: "Can I speak directly with the writer working on my resume?",
    answer:
      "Yes. We offer detailed consultations so you can communicate directly with your writer and ensure your resume reflects your goals.",
  },
];

export const allFaqs: FaqItem[] = [...serviceFaqs, ...generalFaqs];
