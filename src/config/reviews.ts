export type TrustpilotReview = {
  id: string;
  title: string;
  text: string;
  author: string;
  date: string;
  rating: number;
  verified: boolean;
};

export const trustpilotStats = {
  score: 4.7,
  totalReviews: "100+",
  recommendPercent: 95,
  label: "Excellent",
  distribution: [
    { stars: 5, percent: 81 },
    { stars: 4, percent: 12 },
    { stars: 3, percent: 4 },
    { stars: 2, percent: 2 },
    { stars: 1, percent: 1 },
  ],
};

export const trustpilotReviews: TrustpilotReview[] = [
  {
    id: "2",
    title: "New Horizons",
    text: "With the lack of computer experience, this was very easy to navigate. It was very time effective especially in regard to updating my resume.",
    author: "Michaela M Dooley",
    date: "about 20 hours ago",
    rating: 5,
    verified: true,
  },
  {
    id: "3",
    title: "That my profile still exists",
    text: "That my profile still exists and can be edited and not start from scratch. Saved me a lot of time when applying to new roles.",
    author: "Ncumisa Madinda",
    date: "about 23 hours ago",
    rating: 5,
    verified: true,
  },
  {
    id: "4",
    title: "Landed interviews fast",
    text: "I updated my resume in under an hour and started getting interview calls within a week. The templates look very professional.",
    author: "James Carter",
    date: "about 2 days ago",
    rating: 5,
    verified: true,
  },
  {
    id: "5",
    title: "Worth every penny",
    text: "The cover letter builder and resume suggestions helped me present my experience much more clearly. Highly recommend to job seekers.",
    author: "Sarah Mitchell",
    date: "about 3 days ago",
    rating: 5,
    verified: true,
  },
  {
    id: "6",
    title: "Transformed my job search",
    text: "ResumeWritersHub completely transformed my job search. My new resume got me three interviews within the first two weeks, including one at Google.",
    author: "Jessica M.",
    date: "about 4 days ago",
    rating: 5,
    verified: true,
  },
  {
    id: "1",
    title: "Super smooth process",
    text: "Many templates to choose from, with an AI assistance to offer improvements. The whole experience was fast and professional.",
    author: "Mohammed Issa",
    date: "about 17 hours ago",
    rating: 5,
    verified: true,
  },
  {
    id: "7",
    title: "Perfect for recent graduates",
    text: "As a recent graduate, I had no idea how to create a resume that would stand out. They crafted an ATS-optimized resume that helped me land a position at Amazon within a month.",
    author: "Daniel P.",
    date: "about 5 days ago",
    rating: 5,
    verified: true,
  },
  {
    id: "8",
    title: "Career switch made easy",
    text: "I was aiming for a career switch after 10 years in finance. My new resume highlighted my transferable skills perfectly. I'm now working at Microsoft.",
    author: "Michael R.",
    date: "about 6 days ago",
    rating: 5,
    verified: true,
  },
  {
    id: "9",
    title: "Outstanding support team",
    text: "The writers were incredibly responsive and took the time to understand my career goals. The final resume exceeded my expectations.",
    author: "Emily Chen",
    date: "about 1 week ago",
    rating: 5,
    verified: true,
  },
  {
    id: "10",
    title: "ATS-friendly and professional",
    text: "Finally a resume that passes ATS systems! I started getting callbacks from companies that previously ignored my applications.",
    author: "Robert Williams",
    date: "about 1 week ago",
    rating: 4,
    verified: true,
  },
  {
    id: "11",
    title: "Executive resume excellence",
    text: "Needed a senior-level resume and they delivered. The document clearly communicated my leadership impact and strategic achievements.",
    author: "Patricia Adams",
    date: "about 1 week ago",
    rating: 5,
    verified: true,
  },
  {
    id: "12",
    title: "Quick turnaround",
    text: "Received my first draft within 3 days. The revision process was smooth and the writer incorporated all my feedback perfectly.",
    author: "David Thompson",
    date: "about 2 weeks ago",
    rating: 5,
    verified: true,
  },
];
