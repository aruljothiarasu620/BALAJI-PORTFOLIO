import React from 'react';
import { 
  User, 
  MapPin, 
  Clock, 
  Briefcase, 
  CheckCircle2, 
  Film, 
  Sparkles, 
  Layers, 
  Flame, 
  Volume2, 
  Palette, 
  ArrowRight,
  Award
} from 'lucide-react';
import { playClick } from '../utils/audioFx';

interface AboutProps {
  onHireMe: () => void;
}

export const About: React.FC<AboutProps> = ({ onHireMe }) => {
  const specialties = [
    { name: "Cinematic Video Assembly", desc: "Multi-track story pacing & narrative flow", icon: Film, tag: "01" },
    { name: "Beat-Synced Pacing", desc: "Frame-accurate cuts aligned to audio transients", icon: Volume2, tag: "02" },
    { name: "High-Retention Reels", desc: "Hook-focused 9:16 vertical social formats", icon: Flame, tag: "03" },
    { name: "Cinematic Color Science", desc: "DaVinci Rec.709, film halation & skin tone balance", icon: Palette, tag: "04" },
    { name: "Motion & Typography", desc: "Kinetic titles, subtitles & smooth 2D overlays", icon: Sparkles, tag: "05" },
    { name: "Atmospheric Sound Design", desc: "Sub-bass hits, whooshes, risers & dialogue polish", icon: Layers, tag: "06" },
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-[#0A0C11]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-white/10">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs tracking-widest uppercase">
              <User className="w-4 h-4" />
              <span>CREATIVE PROFILE & STORY</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-white">
              ABOUT <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">BALAJI .B</span>
            </h2>
          </div>
          <p className="text-sm text-slate-400 mt-2 md:mt-0 font-medium flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block animate-pulse" />
            Based in Puducherry • Working with Creators & Brands Worldwide
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* LEFT: Portrait Card */}
          <div className="lg:col-span-5">
            <div className="glass-panel-glow rounded-3xl p-6 sm:p-8 border border-white/10 relative group overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-44 h-44 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
              
              {/* Profile Image with subtle ring */}
              <div className="relative mx-auto w-52 h-52 sm:w-60 sm:h-60 mb-7 flex items-center justify-center">
                <div className="absolute inset-0 rounded-full border border-cyan-500/30 animate-pulse" />
                <div className="absolute -inset-2 rounded-full border border-purple-500/20" />
                
                {/* Photo Frame */}
                <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden border-4 border-[#161924] shadow-2xl relative z-10 group-hover:border-cyan-400/50 transition-colors">
                  <img
                    src="/assets/balaji-avatar.jpg"
                    alt="Balaji .B - Video Editor"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>

                {/* Award Badge Pill */}
                <div className="absolute -bottom-2 right-2 z-20 px-3 py-1 rounded-full bg-[#11131C] border border-amber-500/40 text-amber-300 font-medium text-xs shadow-xl flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-amber-400" />
                  <span>Award Winner</span>
                </div>
              </div>

              {/* Creator Snapshot Details */}
              <div className="text-center space-y-1 mb-6">
                <h3 className="text-2xl font-black font-display text-white">BALAJI .B</h3>
                <p className="text-xs font-mono text-cyan-400 tracking-wider uppercase">Senior Video Editor & Motion Artist</p>
              </div>

              {/* Key Details List */}
              <div className="space-y-2.5 text-xs">
                <div className="flex items-center justify-between p-3 rounded-xl bg-white/[0.03] border border-white/5">
                  <span className="text-slate-400 flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-rose-400" />
                    Location
                  </span>
                  <span className="text-white font-medium">Puducherry, Thiruvandarkoil</span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl bg-white/[0.03] border border-white/5">
                  <span className="text-slate-400 flex items-center gap-2">
                    <Clock className="w-4 h-4 text-cyan-400" />
                    Experience
                  </span>
                  <span className="text-cyan-400 font-semibold">5+ Years Professional Cutting</span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl bg-white/[0.03] border border-white/5">
                  <span className="text-slate-400 flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-emerald-400" />
                    Availability
                  </span>
                  <span className="text-emerald-400 font-semibold">Freelance & Retainers</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10">
                <button
                  onClick={() => {
                    playClick();
                    onHireMe();
                  }}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-600 text-white font-semibold text-xs flex items-center justify-center gap-2 hover:opacity-95 shadow-lg shadow-cyan-500/20 transition-all cursor-pointer"
                >
                  <span>Book a Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT: Story, Creative Philosophy & Specialties */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Story Card */}
            <div className="glass-panel rounded-3xl p-7 sm:p-8 border border-white/10 shadow-xl space-y-5">
              <div className="p-5 rounded-2xl bg-cyan-500/[0.05] border border-cyan-500/20">
                <p className="text-slate-200 text-base sm:text-lg leading-relaxed font-medium">
                  "I transform raw footage into captivating visual stories with frame-accurate beat sync, cinematic color grading, and dynamic pacing that holds audience attention from the very first frame."
                </p>
              </div>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                With over 5 years of practical cutting, pacing, and color science expertise, I partner with content creators, event organizers, brands, and colleges across Puducherry and beyond. Every project I deliver is crafted with meticulous attention to rhythm, emotional hook, and sound immersion.
              </p>

              {/* 3 Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-2">
                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 space-y-1">
                  <p className="text-xs font-mono text-cyan-400 font-semibold">01. HOOK RETENTION</p>
                  <p className="text-sm font-bold text-white">First 3 Seconds</p>
                  <p className="text-[11px] text-slate-400 leading-tight">Zero-dropoff pacing designed for high social media watch time.</p>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 space-y-1">
                  <p className="text-xs font-mono text-purple-400 font-semibold">02. BEAT SYNCHRONIZATION</p>
                  <p className="text-sm font-bold text-white">Rhythmic Impact</p>
                  <p className="text-[11px] text-slate-400 leading-tight">Cuts and transitions locked to the heartbeat of the soundtrack.</p>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 space-y-1">
                  <p className="text-xs font-mono text-amber-400 font-semibold">03. COLOR HARMONY</p>
                  <p className="text-sm font-bold text-white">Cinematic Grades</p>
                  <p className="text-[11px] text-slate-400 leading-tight">DaVinci Rec.709 color science, natural skin tones & moody halation.</p>
                </div>
              </div>
            </div>

            {/* Specialties Grid */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <h3 className="text-xs font-mono uppercase tracking-widest text-slate-300 font-semibold">
                  CORE EDITING SPECIALTIES
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {specialties.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={idx}
                      className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-cyan-400/30 hover:bg-white/[0.04] transition-all flex items-start gap-3.5 group"
                    >
                      <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center shrink-0 group-hover:bg-cyan-500/20 transition-colors">
                        <Icon className="w-4 h-4 text-cyan-400" />
                      </div>
                      <div className="space-y-0.5">
                        <div className="flex items-center justify-between">
                          <p className="font-semibold text-sm text-white group-hover:text-cyan-300 transition-colors">
                            {item.name}
                          </p>
                        </div>
                        <p className="text-xs text-slate-400 leading-snug">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
