import React, { useState } from 'react';
import { 
  Play, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Film, 
  Award, 
  Layers, 
  Clock, 
  MessageSquare, 
  ExternalLink,
  Flame,
  Volume2,
  MessageCircle
} from 'lucide-react';
import { playClick } from '../utils/audioFx';

interface HeroProps {
  onExploreWork: () => void;
  onOpenExportModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreWork, onOpenExportModal }) => {
  const [isPlayingPreview, setIsPlayingPreview] = useState(false);

  const trustMetrics = [
    { label: "Experience", val: "5+ Years", desc: "Hands-on editing" },
    { label: "Mastered Reels", val: "35+ Cuts", desc: "High retention" },
    { label: "Top Honor", val: "1st Prize", desc: "SMVEC Culturals" },
    { label: "Master Quality", val: "4K 60FPS", desc: "Cinema grade" },
  ];

  return (
    <section id="hero" className="relative min-h-[88vh] sm:min-h-[92vh] pt-28 sm:pt-32 pb-14 sm:pb-20 px-4 sm:px-6 lg:px-8 flex items-center justify-center overflow-hidden studio-grid">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[42rem] h-[26rem] bg-gradient-to-tr from-cyan-500/15 via-indigo-600/15 to-purple-600/15 rounded-full blur-[120px] pointer-events-none -z-10 animate-pulse-glow" />
      <div className="absolute top-1/3 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-14 items-center">
        
        {/* LEFT COLUMN: Hero Copy & Value Proposition */}
        <div className="lg:col-span-7 space-y-6 sm:space-y-7 text-left">
          
          {/* Availability Status Badge */}
          <div className="hero-in inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md shadow-sm max-w-full">
            <span className="relative flex h-2 w-2 sm:h-2.5 sm:w-2.5 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 sm:h-2.5 sm:w-2.5 bg-emerald-500" />
            </span>
            <span className="text-[11px] sm:text-xs font-semibold text-slate-200 tracking-wide truncate">
              Available for Freelance & Long-term Edits
            </span>
            <span className="text-slate-500 hidden xs:inline">•</span>
            <span className="text-[11px] sm:text-xs text-cyan-400 font-medium hidden xs:inline shrink-0">Puducherry / Remote</span>
          </div>

          {/* Main Headline */}
          <div className="hero-in space-y-3" style={{ animationDelay: '.1s' }}>
            <h1 className="font-display font-black text-3xl sm:text-5xl lg:text-7xl tracking-tight text-white leading-[1.12] sm:leading-[1.08]">
              Video Editor <span className="text-slate-500">&</span><br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-300 to-purple-400">
                Motion Designer
              </span>
            </h1>
            
            <p className="text-sm sm:text-lg text-slate-300 max-w-2xl font-normal leading-relaxed pt-1 sm:pt-2">
              Hi, I'm <strong className="text-white font-semibold">Balaji .B</strong> — I turn raw footage into polished stories for brands, creators, events, and social media. From short-form edits to motion graphics, every cut is built to look sharp and feel intentional.
            </p>
          </div>

          {/* Action CTAs */}
          <div className="hero-in flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-1" style={{ animationDelay: '.2s' }}>
            {/* Primary Action Button */}
            <button
              onClick={() => {
                playClick();
                onExploreWork();
              }}
              className="btn-studio px-6 sm:px-7 py-3.5 rounded-xl bg-gradient-to-r from-cyan-400 via-cyan-500 to-indigo-600 text-black hover:text-white font-bold text-sm shadow-xl shadow-cyan-500/20 hover:shadow-cyan-500/40 flex items-center justify-center gap-2.5 cursor-pointer group"
            >
              <span>Explore Featured Work</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Direct WhatsApp CTA Button */}
            <a
              href="https://wa.me/919840602461?text=Hi%20Balaji,%20I%20saw%20your%20video%20editor%20portfolio%20and%20would%20like%20to%20discuss%20a%20project!"
              target="_blank"
              rel="noopener noreferrer"
              onClick={playClick}
              className="btn-studio px-5 sm:px-6 py-3.5 rounded-xl bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-400 font-semibold text-sm border border-emerald-500/30 flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-emerald-500/10"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp Direct</span>
            </a>

            {/* Secondary Action Button */}
            <button
              onClick={() => {
                playClick();
                onOpenExportModal();
              }}
              className="btn-studio px-5 sm:px-6 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 text-white font-semibold text-sm border border-white/10 hover:border-white/20 flex items-center justify-center gap-2 cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 text-cyan-400" />
              <span>Book an Edit</span>
            </button>
          </div>

          {/* Trust Metrics Bar */}
          <div className="hero-in pt-3 sm:pt-4 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-4" style={{ animationDelay: '.3s' }}>
            {trustMetrics.map((item, idx) => (
              <div key={idx} className="p-2.5 sm:p-3 rounded-2xl bg-white/[0.03] border border-white/5 space-y-0.5">
                <p className="text-xl sm:text-2xl lg:text-3xl font-black font-display text-white tracking-tight">
                  {item.val}
                </p>
                <p className="text-[11px] sm:text-xs font-semibold text-slate-300">{item.label}</p>
                <p className="text-[10px] sm:text-[11px] text-slate-400">{item.desc}</p>
              </div>
            ))}
          </div>

        </div>

        {/* RIGHT COLUMN: Modern High-End Reel Showpiece */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="hero-in relative w-full max-w-sm sm:max-w-md" style={{ animationDelay: '.15s' }}>
            
            {/* Ambient Background Halo */}
            <div className="absolute -inset-2 rounded-3xl bg-gradient-to-b from-cyan-500/20 to-purple-600/20 blur-xl -z-10" />

            {/* Main Showcase Reel Card */}
            <div className="glass-panel-glow rounded-3xl overflow-hidden border border-white/15 p-3.5 shadow-2xl relative">
              
              {/* Header Bar */}
              <div className="flex items-center justify-between px-3 py-2 border-b border-white/10 mb-3 text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                  <span className="font-semibold text-slate-200">Showcase Reel</span>
                </div>
                <span className="font-mono text-[11px] text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded-full border border-cyan-500/20">
                  4K Master • Rec.709
                </span>
              </div>

              {/* Video Preview Frame */}
              <div 
                onClick={() => {
                  playClick();
                  onExploreWork();
                }}
                className="relative aspect-[9/14] sm:aspect-[9/13] rounded-2xl overflow-hidden cursor-pointer group shadow-inner bg-black"
              >
                <img 
                  src="/thumbnails/reel-1.jpg" 
                  alt="Balaji Video Editing Master Showcase" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                />

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/20 group-hover:via-black/20 transition-colors" />

                {/* Center Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-cyan-500/90 group-hover:bg-cyan-400 text-black flex items-center justify-center shadow-2xl shadow-cyan-500/50 group-hover:scale-110 transition-all duration-300">
                    <Play className="w-7 h-7 fill-black ml-1" />
                  </div>
                </div>

                {/* Top Badge */}
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white text-[11px] font-semibold flex items-center gap-1.5">
                    <Flame className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                    Cinematic Event Cut
                  </span>
                </div>

                {/* Bottom Overlay Info */}
                <div className="absolute bottom-4 left-4 right-4 space-y-2">
                  <div className="flex items-center justify-between text-xs text-slate-300 font-mono">
                    <span className="flex items-center gap-1.5 text-cyan-300">
                      <Volume2 className="w-3.5 h-3.5" />
                      Beat-Synced Audio
                    </span>
                    <span className="bg-black/60 px-2 py-0.5 rounded text-white font-semibold">0:38</span>
                  </div>

                  {/* Simulated Waveform Visualizer */}
                  <div className="flex items-end gap-1 h-6 pt-1">
                    {[40, 75, 55, 90, 65, 80, 45, 95, 70, 85, 60, 90, 50, 75, 60, 85, 100, 70, 80, 50].map((height, i) => (
                      <span 
                        key={i} 
                        style={{ height: `${height}%` }}
                        className="flex-1 bg-cyan-400/80 rounded-full group-hover:bg-cyan-300 transition-colors"
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Quick Tags underneath */}
              <div className="mt-3.5 pt-2 flex items-center justify-between text-[11px] text-slate-400 px-1">
                <span className="flex items-center gap-1.5">
                  <Film className="w-3.5 h-3.5 text-indigo-400" />
                  Premiere Pro & After Effects
                </span>
                <span className="text-cyan-400 font-medium group-hover:underline cursor-pointer" onClick={onExploreWork}>
                  Click to View All 35 Reels →
                </span>
              </div>

            </div>

            {/* Floating Credibility Pill */}
            <div className="absolute -bottom-4 -left-4 sm:-left-6 glass-panel rounded-2xl p-3 border border-white/15 shadow-2xl flex items-center gap-3 backdrop-blur-xl">
              <div className="w-10 h-10 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center shrink-0">
                <Award className="w-5 h-5 text-amber-400" />
              </div>
              <div>
                <p className="text-xs font-bold text-white leading-tight">1st Prize Winner</p>
                <p className="text-[11px] text-slate-400">SMVEC Culturals Best Editor</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
