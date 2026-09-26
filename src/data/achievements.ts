export interface Achievement {
  id: string;
  title: string;
  category: string;
  event: string;
  description: string;
  badge: string;
  year: string;
}

export const awardAchievement: Achievement = {
  id: "smvec-award",
  title: "2nd Prize - Video Editing Competition",
  category: "Inter-Collegiate Cultural Festival",
  event: "SMVEC College Culturals",
  description: "Recognized among top regional editors for exceptional editing skills in cinematic storytelling, creative rhythm pacing, and innovative transitions.",
  badge: "Official College Award Winner",
  year: "Honored Competitor"
};

export const statsOverview = [
  {
    value: "5+",
    label: "Years Experience",
    subtext: "Mastering NLE suites since 2019",
    color: "#00D4FF"
  },
  {
    value: "50+",
    label: "Projects Completed",
    subtext: "From viral reels to event films",
    color: "#7B2FFF"
  },
  {
    value: "20+",
    label: "Happy Clients",
    subtext: "Creators, brands & event hosts",
    color: "#FF6B35"
  },
  {
    value: "100%",
    label: "On-Time Delivery",
    subtext: "Zero missed project deadlines",
    color: "#10B981"
  }
];

export const videoExpertiseTags = [
  { name: "College Events", color: "from-blue-500/20 to-cyan-500/20 border-cyan-500/30 text-cyan-300" },
  { name: "Birthday Videos", color: "from-amber-500/20 to-orange-500/20 border-orange-500/30 text-orange-300" },
  { name: "Instagram Reels", color: "from-purple-500/20 to-pink-500/20 border-purple-500/30 text-purple-300" },
  { name: "Fitness Videos", color: "from-red-500/20 to-rose-500/20 border-red-500/30 text-rose-300" },
  { name: "Photo Slideshows", color: "from-emerald-500/20 to-teal-500/20 border-emerald-500/30 text-emerald-300" },
  { name: "Engagement Videos", color: "from-violet-500/20 to-indigo-500/20 border-violet-500/30 text-violet-300" },
  { name: "Mass / Trending Edits", color: "from-yellow-500/20 to-amber-500/20 border-yellow-500/30 text-yellow-300" },
  { name: "Promotional Content", color: "from-sky-500/20 to-blue-500/20 border-sky-500/30 text-sky-300" }
];
