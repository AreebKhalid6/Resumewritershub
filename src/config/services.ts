export type ServiceBenefit = {
  title: string;
  description: string;
};

export type ServiceContent = {
  slug: string;
  title: string;
  shortDescription: string;
  heroTitle: string;
  heroDescription: string;
  heroPrimaryLabel?: string;
  heroSecondaryLabel?: string;
  upgradeTitle: string;
  upgradeDescription: string;
  benefits: ServiceBenefit[];
  midCtaTitle: string;
  readyCtaTitle: string;
  readyCtaDescription: string;
  finalCtaTitle: string;
  metaTitle: string;
  metaDescription: string;
};

export const services: ServiceContent[] = [
  {
    slug: "resume-writing-services",
    title: "Resume Writing Services",
    shortDescription:
      "A tailored resume that highlights your skills, experience, and achievements.",
    heroTitle: "Professional Resume Writing Services in the USA",
    heroDescription:
      "Stand out in a competitive job market with a professionally written resume that highlights your skills, experience, and achievements. Our expert writers create targeted, ATS-friendly resumes designed to capture recruiters' attention and help you move closer to your next career opportunity.",
    heroPrimaryLabel: "Get Started Today",
    heroSecondaryLabel: "Chat with an Expert",
    upgradeTitle: "Upgrade Your Resume and Take Your Career to the Next Level",
    upgradeDescription:
      "Your resume is often the first thing a hiring manager reviews. Our experienced writers, including former HR professionals, know how to present your skills, experience and achievements in a way that captures attention and supports your career goals.",
    benefits: [
      {
        title: "Professional Writers",
        description:
          "Work with our experts who understand what employers expect and know how to showcase your strengths, value, and qualifications effectively.",
      },
      {
        title: "Keyword Optimization",
        description:
          "We include relevant industry keywords to improve your resume's visibility in automated systems and recruiter searches.",
      },
      {
        title: "ATS-Optimized Resume",
        description:
          "Receive a clean, well-structured resume designed to pass Applicant Tracking Systems and improve your chances of reaching the interview stage.",
      },
    ],
    midCtaTitle: "Need a winning resume? We've got you covered!",
    readyCtaTitle: "Ready to Build a Resume\nThat Stands Out?",
    readyCtaDescription:
      "Showcase your strengths with a professionally written resume designed to capture attention. Connect with our experts today.",
    finalCtaTitle: "Ready to Advance Your Career?",
    metaTitle: "Professional Resume Writing Services",
    metaDescription:
      "Hire expert resume writers for a tailored, ATS-optimized resume that showcases your strengths and helps you land more interviews. Fast USA turnaround.",
  },
  {
    slug: "cover-letter-writing-service",
    title: "Cover Letter Writing Services",
    shortDescription:
      "A personalized cover letter that communicates your unique value and suitability for target roles.",
    heroTitle: "Cover Letters That Make a Strong Impression",
    heroDescription:
      "Stand out from the competition with a professionally written cover letter that highlights your skills, experience, and career goals while showing employers why you're the right fit for the role.",
    heroPrimaryLabel: "Get Started Now",
    heroSecondaryLabel: "Chat with an Expert",
    upgradeTitle: "Upgrade Your Resume and Take Your Career to the Next Level",
    upgradeDescription:
      "Your resume is often the first thing a hiring manager reviews. Our experienced writers, including former HR professionals, know how to present your skills, experience and achievements in a way that captures attention and supports your career goals.",
    benefits: [
      {
        title: "Professional Writers",
        description:
          "Work with our experts who understand what employers expect and know how to showcase your strengths, value, and qualifications effectively.",
      },
      {
        title: "Keyword Optimization",
        description:
          "We include relevant industry keywords to improve your resume's visibility in automated systems and recruiter searches.",
      },
      {
        title: "ATS-Optimized Resume",
        description:
          "Receive a clean, well-structured resume designed to pass Applicant Tracking Systems and improve your chances of reaching the interview stage.",
      },
    ],
    midCtaTitle: "Need a winning cover letter? We've got you covered!",
    readyCtaTitle: "Ready to Create a Cover Letter\nThat Stands Out?",
    readyCtaDescription:
      "Show employers why you're the right fit with a professionally written cover letter tailored to your experience and target role.",
    finalCtaTitle: "Ready to Advance Your Career?",
    metaTitle: "Professional Cover Letter Writing",
    metaDescription:
      "Get a personalized cover letter written by experts. Highlight your skills, show why you're the right fit, and boost your chances of landing interviews.",
  },
  {
    slug: "linkedin-profile-writing",
    title: "LinkedIn Profile Writing",
    shortDescription:
      "An optimized LinkedIn profile designed to enhance online presence and attract recruiters.",
    heroTitle: "Let Your LinkedIn Profile Showcase Your Success",
    heroDescription:
      "Our LinkedIn profile creation services help you build a professional online presence that highlights your achievements, skills, and career goals. Stand out to recruiters and make your profile a powerful tool for new opportunities.",
    heroPrimaryLabel: "Get Started Now",
    heroSecondaryLabel: "Chat with an Expert",
    upgradeTitle: "Boost Your Online Visibility",
    upgradeDescription:
      "Our LinkedIn profile writing services help strengthen your professional presence. We optimize your profile for LinkedIn search, making it easier for recruiters to discover your skills and experience.",
    benefits: [
      {
        title: "Industry-Specific Keywords",
        description:
          "We incorporate relevant industry and role-specific keywords to improve your profile's search visibility and connect you with suitable opportunities.",
      },
      {
        title: "Award-Winning Writers",
        description:
          "Work with experienced writers who understand recruiter expectations and know how to present your professional value clearly and effectively.",
      },
      {
        title: "LinkedIn Profile Optimization",
        description:
          "We refine your headline, summary, experience, and skills to create a compelling profile that attracts recruiters and supports your career growth.",
      },
    ],
    midCtaTitle: "Get noticed by top employers on LinkedIn",
    readyCtaTitle: "Ready to Upgrade Your\nLinkedIn Profile?",
    readyCtaDescription:
      "Stand out with a professionally optimized profile that showcases your strengths, attracts recruiters, and supports your career goals. Contact our team today.",
    finalCtaTitle: "Ready to Advance Your Career?",
    metaTitle: "LinkedIn Profile Writing Services",
    metaDescription:
      "Optimize your LinkedIn profile with expert writers. Keyword-rich headlines, summaries & experience that attract recruiters and grow your opportunities.",
  },
  {
    slug: "career-switch-resume-writing",
    title: "Career Switch Resume Writing",
    shortDescription:
      "A strategic resume that reframes your experience and transferable skills for a successful career transition.",
    heroTitle: "Make Your Career Change Simple and Successful",
    heroDescription:
      "Ready to move into a new industry? Our career change resumes highlight your transferable skills, achievements, and strengths to position you as a strong candidate, even when transitioning into a different field.",
    heroPrimaryLabel: "Get Started Now",
    heroSecondaryLabel: "Chat with an Expert",
    upgradeTitle: "Upgrade Your Resume and Take Your Career to the Next Level",
    upgradeDescription:
      "Your resume is often the first thing a hiring manager reviews. Our experienced writers, including former HR professionals, know how to present your skills, experience and achievements in a way that captures attention and supports your career goals.",
    benefits: [
      {
        title: "Professional Writers",
        description:
          "Work with our experts who understand what employers expect and know how to showcase your strengths, value, and qualifications effectively.",
      },
      {
        title: "Keyword Optimization",
        description:
          "We include relevant industry keywords to improve your resume's visibility in automated systems and recruiter searches.",
      },
      {
        title: "ATS-Optimized Resume",
        description:
          "Receive a clean, well-structured resume designed to pass Applicant Tracking Systems and improve your chances of reaching the interview stage.",
      },
    ],
    midCtaTitle: "Ready to switch careers? We've got you covered!",
    readyCtaTitle: "Ready to Make Your\nCareer Change?",
    readyCtaDescription:
      "Enter your new field with a professionally written resume that highlights your transferable skills and positions you for the right opportunities.",
    finalCtaTitle: "Ready to Advance Your Career?",
    metaTitle: "Career Change Resume Writing",
    metaDescription:
      "Switch careers with a resume that highlights transferable skills and positions you for a new industry. Expert career-change resume writers ready to help.",
  },
  {
    slug: "student-resume-writing",
    title: "Student Resume Writing",
    shortDescription:
      "A polished student resume that showcases education, projects, and potential to help you land internships and entry-level roles.",
    heroTitle: "Unsure of how to Present Your Skills to Get Noticed?",
    heroDescription:
      "Launch your career with a polished resume that highlights your education, skills, projects, and potential, helping you stand out for internships and entry-level roles.",
    heroPrimaryLabel: "Get Started Now",
    heroSecondaryLabel: "Chat with an Expert",
    upgradeTitle: "Start Your Career with a Resume That Shows Your Potential",
    upgradeDescription:
      "Limited work experience should not limit your opportunities. Our writers transform your education, internships, projects, and skills into a compelling resume that shows employers what you can contribute.",
    benefits: [
      {
        title: "Student Resume Specialists",
        description:
          "Work with experienced writers who know how to present academic achievements, internships, volunteer experience, and projects for entry-level roles.",
      },
      {
        title: "Targeted Keyword Optimization",
        description:
          "We include relevant keywords for your target positions, improving your visibility in recruiter searches and automated screening systems.",
      },
      {
        title: "ATS-Friendly Resume",
        description:
          "Receive a clear, professionally structured resume designed for Applicant Tracking Systems while showcasing your abilities, achievements, and career potential.",
      },
    ],
    midCtaTitle: "Kickstart your career with a custom student resume",
    readyCtaTitle: "Ready to Launch\nYour Career?",
    readyCtaDescription:
      "Work with our expert writers to create a personalized student resume that highlights your potential.",
    finalCtaTitle: "Ready to Advance Your Career?",
    metaTitle: "Student Resume Writing Services",
    metaDescription:
      "Student & entry-level resume writing that showcases education, projects, and potential. Land internships and first jobs with an ATS-friendly resume.",
  },
  {
    slug: "executive-resume-writing",
    title: "Executive Resume Writing Services",
    shortDescription:
      "A leadership-focused resume that highlights impact, strategy, and senior-level achievements for executive and C-suite opportunities.",
    heroTitle: "Your Leadership Story Deserves a Resume Built for Success",
    heroDescription:
      "Position yourself for leadership opportunities with a powerful executive resume that highlights your achievements, strategic impact, and leadership experience. Our experts craft executive resumes that showcase your value and help you stand out to recruiters, hiring managers, and decision-makers.",
    heroPrimaryLabel: "Get Started Now",
    heroSecondaryLabel: "Chat with an Expert",
    upgradeTitle: "Elevate Your Executive Career",
    upgradeDescription:
      "A powerful executive resume goes beyond listing experience—it showcases your leadership, achievements, and strategic impact. Our executive resume writing service in the USA creates tailored, results-driven resumes that highlight your professional value and help you stand out to recruiters and senior-level hiring teams.",
    benefits: [
      {
        title: "Executive Resume Specialists",
        description:
          "Work with experienced resume writers who understand executive hiring standards and know how to position your leadership experience, accomplishments, and expertise effectively.",
      },
      {
        title: "Industry-Focused Content",
        description:
          "Receive a resume tailored to your industry and career goals, emphasizing your unique skills, business impact, and achievements to make a strong impression on decision-makers.",
      },
      {
        title: "ATS-Friendly Resume",
        description:
          "Our executive resumes are optimized for Applicant Tracking Systems, helping your qualifications get recognized by recruiters while maintaining a polished executive-level format.",
      },
    ],
    midCtaTitle: "Get an executive resume now.",
    readyCtaTitle: "Ready to Take Your Executive\nCareer Forward?",
    readyCtaDescription:
      "Showcase your leadership experience and professional achievements with an executive resume designed to highlight your impact and position you for senior-level opportunities.",
    finalCtaTitle: "Ready to Advance Your Career?",
    metaTitle: "Executive Resume Writing Services",
    metaDescription:
      "Leadership-focused executive resume writing for C-suite and senior roles. Highlight strategy, impact, and achievements that impress decision-makers.",
  },
];

export const serviceSlugs = services.map((s) => s.slug);

export function getServiceBySlug(slug: string): ServiceContent | undefined {
  return services.find((s) => s.slug === slug);
}

export const whyHirePoints = [
  "Experienced & skilled writers",
  "Job portal profile assistance",
  "Detailed career consultations",
  "Keyword optimization for better visibility",
  "Exclusive industry tools and resources",
  "Six months of post-order support",
  "Award-winning resume writing agency in the USA",
];

export const serviceReviews = [
  {
    text: "My previous resume wasn't getting much attention, even though I had the right experience. The new version highlighted my achievements clearly and positioned me as a stronger candidate. Soon after updating my applications, I began receiving more interview invitations.",
    name: "Sarah M.",
    role: "Healthcare Administration",
  },
  {
    text: "The consultation was detailed and personalized. My writer understood the roles I was targeting and transformed my experience into a professional resume that accurately reflected my skills and career goals.",
    name: "Daniel C.",
    role: "Information Technology & Cybersecurity",
  },
  {
    text: "My resume was outdated and difficult to read. The team reorganized everything, strengthened the language and created a modern document that represents my experience professionally.",
    name: "Robert A.",
    role: "Engineering & Manufacturing",
  },
];

export const serviceFaqs = [
  {
    question: "How long does it take to receive my resume?",
    answer:
      "Typically, you'll receive your first draft within 24-48 hours after providing the necessary information. We also offer expedited services for urgent needs.",
  },
  {
    question: "What is the difference between a CV and a resume?",
    answer:
      "A resume is a concise, one- to two-page summary of your skills, experience, and achievements tailored to a specific job. A CV is typically longer and provides a more detailed overview of your academic and professional background. CVs are commonly used for academic, research, medical, and some international applications, while most employers in the US and Canada expect a resume.",
  },
  {
    question: "How do I choose the right resume template?",
    answer:
      "Choose a clean, professional, and ATS-friendly template that suits your industry. Creative roles may allow for more visual design, while corporate, healthcare, technology, and finance positions usually benefit from simple, well-organized layouts. Our templates are designed to be easy to read, compatible with applicant tracking systems, and appealing to recruiters.",
  },
  {
    question: "What does an ATS-friendly resume mean?",
    answer:
      "An ATS-friendly resume is formatted so that applicant tracking systems can read and process it accurately. It uses standard section headings, clear formatting, readable fonts, relevant keywords, and a logical structure. It also avoids elements such as complex tables, graphics, images, and unusual layouts that may interfere with resume scanning.",
  },
  {
    question: "How far back should my resume go?",
    answer:
      "In most cases, your resume should cover the last 10 to 15 years of relevant work experience. Older positions can be shortened or removed unless they directly support the role you are pursuing. Focus on your most recent accomplishments and the experience that best demonstrates your current qualifications.",
  },
  {
    question: "Should I create a different resume for every job application?",
    answer:
      "Yes. Tailoring your resume to each position can significantly improve your chances of getting noticed. Update your professional summary, skills, and experience bullet points to reflect the requirements and language used in the job description, while keeping all information accurate. Our tools make it easy to customize your resume without starting from scratch.",
  },
  {
    question: "Do I need a cover letter with my resume?",
    answer:
      "Always include a cover letter when the job posting requires one. Even when it is optional, a well-written cover letter can help you stand out by explaining your interest in the role, highlighting relevant qualifications, and showing why you are a strong fit. We also offer cover letter writing services that complement your resume.",
  },
  {
    question: "Is professional resume writing worth the cost?",
    answer:
      "Professional resume writing can be a valuable investment if you are struggling to secure interviews, changing careers, returning to the workforce, or applying for senior-level positions. An experienced writer can help identify your strongest achievements, incorporate relevant keywords, and present your experience in a clear and compelling way.",
  },
];

export const templateImages = ["/cv/two.svg", "/cv/three.svg", "/cv/four.svg"];
