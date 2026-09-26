import React from 'react';
import { 
  Trophy, 
  Award, 
  Sparkles, 
  Star, 
  CheckCircle, 
  Calendar, 
  MapPin, 
  Tag,
  ArrowRight
} from 'lucide-react';
import { awardAchievement, statsOverview, videoExpertiseTags } from '../data/achievements';
import { playClick } from '../utils/audioFx';

interface AchievementsProps {
  onContactClick: () => void;
}

export const Achievements: React.FC<AchievementsProps> = ({ onContactClick }) => {
  return (
    <section id="achievements" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-[#07080B] border-t border-white/5 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-6 border-b border-white/10">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-amber-400 font-mono text-xs tracking-widest uppercase">
              <Trophy className="w-4 h-4" />
              <span>HONORS & TRACK RECORD</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-white">
              AWARDS & <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">RECOGNITION</span>
            </h2>
          </div>
          <span className="text-xs font-mono text-slate-400 mt-2 md:mt-0 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
            PROVEN TRACK RECORD &bull; COMPETITION WINNER
          </span>
        </div>

        {/* 🏆 PRIMARY FEATURED AWARD BANNER (SMVEC College Culturals Winner) */}
        <div className="glass-panel-glow p-6 sm:p-10 rounded-3xl border border-amber-500/30 relative overflow-hidden shadow-2xl group">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-gradient-to-br from-amber-400/10 via-orange-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Left Trophy Emblem */}
            <div className="lg:col-span-4 flex flex-col items-center justify-center text-center p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-amber-500/20 shadow-inner">
              <div className="relative w-24 h-24 rounded-2xl bg-gradient-to-br from-amber-400 via-orange-500 to-amber-600 p-[2px] shadow-xl shadow-amber-500/20 mb-4">
                <div className="w-full h-full bg-[#0E1017] rounded-[14px] flex items-center justify-center">
                  <Trophy className="w-12 h-12 text-amber-400" />
                </div>
              </div>

              <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-amber-500/15 text-amber-300 border border-amber-500/30 uppercase font-semibold mb-2">
                {awardAchievement.badge}
              </span>
              <h4 className="font-display font-black text-white text-xl">PRIZE WINNER</h4>
              <p className="text-xs text-slate-400 mt-0.5">{awardAchievement.event}</p>
            </div>

            {/* Right Award Narrative */}
            <div className="lg:col-span-8 space-y-4">
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-xs px-3 py-1 rounded-full bg-amber-400/10 text-amber-300 border border-amber-400/20 flex items-center gap-1.5 font-medium">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  College Cultural Festival
                </span>
                <span className="text-xs text-slate-400 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  Sri Manakula Vinayagar Engineering College (SMVEC)
                </span>
              </div>

              <h3 className="font-display font-black text-2xl sm:text-3xl text-white">
                {awardAchievement.title}
              </h3>

              <div className="p-5 rounded-2xl bg-white/[0.03] border-l-4 border-amber-400">
                <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                  "{awardAchievement.description}"
                </p>
              </div>

              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Awarded for outstanding pacing, rhythm-driven sequence assembly, high-energy crowd transitions, and emotive cinematic color science competing against collegiate video editors.
              </p>

              <div className="pt-2">
                <button
                  onClick={() => {
                    playClick();
                    onContactClick();
                  }}
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-amber-400 to-orange-500 hover:opacity-95 text-black font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-amber-500/20 flex items-center gap-2 cursor-pointer"
                >
                  <span>Work With An Award-Winning Editor</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* STATS OVERVIEW CARDS */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {statsOverview.map((stat, idx) => (
            <div
              key={idx}
              className="glass-panel p-6 sm:p-7 rounded-3xl border border-white/5 hover:border-white/15 transition-all group"
            >
              <span 
                className="font-display font-black text-3xl sm:text-5xl block mb-2"
                style={{ color: stat.color }}
              >
                {stat.value}
              </span>
              <h4 className="font-bold text-white text-base mb-1 font-display">
                {stat.label}
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                {stat.subtext}
              </p>
            </div>
          ))}
        </div>

        {/* VIDEO TYPES EXPERTISE PILLS */}
        <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/5 space-y-5">
          <div className="flex items-center gap-2">
            <Tag className="w-4 h-4 text-cyan-400" />
            <h3 className="text-xs font-mono uppercase tracking-widest text-slate-300 font-semibold">
              SPECIALIZED VIDEO FORMATS & EDITORIAL STYLES
            </h3>
          </div>

          <div className="flex flex-wrap gap-2.5">
            {videoExpertiseTags.map((tag, idx) => (
              <span
                key={idx}
                className="px-3.5 py-1.5 rounded-xl text-xs font-medium bg-white/[0.03] text-slate-300 border border-white/10 hover:border-cyan-400/40 hover:text-white transition-colors cursor-default"
              >
                {tag.name}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
