import React from 'react';
import { 
  Play, 
  Mail, 
  Phone, 
  Instagram, 
  MapPin, 
  ArrowUp,
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { playClick } from '../utils/audioFx';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050608] border-t border-white/5 text-slate-400 relative overflow-hidden">
      {/* Subtle top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-24 bg-cyan-500/5 blur-3xl pointer-events-none" />

      {/* Main Footer Body */}
      <div className="max-w-7xl mx-auto px-4 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 mb-12">
          
          {/* Brand & CTA Column */}
          <div className="md:col-span-5 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-400 to-indigo-600 p-[1px] shadow-lg shadow-cyan-500/20">
                <div className="w-full h-full bg-[#08090e] rounded-[11px] flex items-center justify-center">
                  <Play className="w-4 h-4 text-cyan-400 fill-cyan-400 ml-0.5" />
                </div>
              </div>
              <span className="font-display font-black text-2xl text-white tracking-tight">
                BALAJI <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">.B</span>
              </span>
            </div>

            <p className="text-sm text-slate-300 max-w-md leading-relaxed">
              Professional freelance video editor crafting high-retention Instagram Reels, cinematic event films, beat-synced cuts, and dynamic motion visuals that turn viewers into clients.
            </p>

            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available for Freelance & Contract Projects</span>
            </div>

            {/* Social Buttons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://wa.me/919840602461"
                target="_blank"
                rel="noopener noreferrer"
                onClick={playClick}
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/[0.04] hover:bg-emerald-500/15 hover:text-emerald-400 border border-white/10 hover:border-emerald-500/30 text-slate-300 text-xs font-medium transition-all"
                title="WhatsApp +91 98406 02461"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>

              <a
                href="https://www.instagram.com/bala_xji/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={playClick}
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/[0.04] hover:bg-pink-500/15 hover:text-pink-400 border border-white/10 hover:border-pink-500/30 text-slate-300 text-xs font-medium transition-all"
                title="Instagram @bala_xji"
              >
                <Instagram className="w-3.5 h-3.5" />
                <span>@bala_xji</span>
              </a>

              <a
                href="mailto:balajilatha406@gmail.com"
                onClick={playClick}
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/[0.04] hover:bg-cyan-500/15 hover:text-cyan-400 border border-white/10 hover:border-cyan-500/30 text-slate-300 text-xs font-medium transition-all"
                title="Email balajilatha406@gmail.com"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Email</span>
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider font-mono flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#hero" onClick={playClick} className="hover:text-cyan-400 transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" onClick={playClick} className="hover:text-cyan-400 transition-colors">About & Experience</a>
              </li>
              <li>
                <a href="#projects" onClick={playClick} className="hover:text-cyan-400 transition-colors">Featured Reels (20 Projects)</a>
              </li>
              <li>
                <a href="#skills" onClick={playClick} className="hover:text-cyan-400 transition-colors">Tools & Skills</a>
              </li>
              <li>
                <a href="#timeline" onClick={playClick} className="hover:text-cyan-400 transition-colors">Production Process</a>
              </li>
              <li>
                <a href="#services" onClick={playClick} className="hover:text-cyan-400 transition-colors">Editorial Services</a>
              </li>
              <li>
                <a href="#achievements" onClick={playClick} className="hover:text-cyan-400 transition-colors">Achievements</a>
              </li>
            </ul>
          </div>

          {/* Services & Location */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider font-mono">
              Base & Delivery
            </h4>
            <div className="space-y-3 text-sm text-slate-300">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>Puducherry & Thiruvandarkoil, India (Open for worldwide remote edits)</span>
              </p>
              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 space-y-1.5 text-xs">
                <p className="text-white font-medium">Production Standards</p>
                <p className="text-slate-400">4K 60fps Masters &bull; Rec.709 Color Science &bull; 48kHz Mastered Audio &bull; 24-48h Rapid Turnaround</p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-300">
          <p>
            &copy; {new Date().getFullYear()} Balaji .B. All rights reserved. Crafted with frame-accurate precision.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] hover:text-white border border-white/10 text-slate-300 transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

