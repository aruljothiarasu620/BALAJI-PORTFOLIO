import React, { useState, useEffect } from 'react';
import { 
  Play, 
  Sparkles, 
  Menu, 
  X,
  ArrowRight,
  Volume2,
  VolumeX,
  Film,
  User,
  Layers,
  Award,
  Send,
  Briefcase
} from 'lucide-react';
import { isSoundEnabled, toggleSound, playClick } from '../utils/audioFx';

interface NavbarProps {
  onOpenExportModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenExportModal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [soundActive, setSoundActive] = useState(isSoundEnabled());
  const [activeSection, setActiveSection] = useState('hero');
  const [scrollProgress, setScrollProgress] = useState(0);

  // Scroll listener for sticky glass styling, active section tracking, and read progress
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? Math.min(100, (window.scrollY / docHeight) * 100) : 0);

      const sections = ['hero', 'projects', 'about', 'skills', 'timeline', 'services', 'achievements', 'contact'];
      const scrollPos = window.scrollY + 220;
      
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    playClick();
    setActiveSection(sectionId);
    setMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSoundToggle = () => {
    const newState = toggleSound();
    setSoundActive(newState);
  };

  const navLinks = [
    { id: 'projects', label: 'Featured Work', badge: '20' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills & Tools' },
    { id: 'timeline', label: 'Workflow' },
    { id: 'services', label: 'Services' },
    { id: 'achievements', label: 'Awards' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-3 sm:px-6 lg:px-8 pt-2 sm:pt-4">
      <div id="scroll-progress" style={{ width: `${scrollProgress}%` }} />
      <nav 
        className={`max-w-7xl mx-auto rounded-2xl transition-all duration-300 px-3.5 sm:px-6 py-2.5 sm:py-3 ${
          scrolled 
            ? 'glass-nav shadow-2xl shadow-black/80 border border-white/10 backdrop-blur-xl' 
            : 'bg-[#0A0C11]/85 backdrop-blur-md border border-white/5'
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Brand & Availability Status */}
          <div 
            onClick={() => handleNavClick('hero')} 
            className="flex items-center gap-2.5 sm:gap-3.5 cursor-pointer group select-none"
          >
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-tr from-cyan-500 via-indigo-500 to-purple-500 p-[1.5px] shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-500/40 transition-all shrink-0">
              <div className="w-full h-full bg-[#0B0D14] rounded-[10px] flex items-center justify-center">
                <Play className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-cyan-400 fill-cyan-400 ml-0.5 group-hover:scale-110 transition-transform" />
              </div>
            </div>

            <div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <span className="font-display font-black text-base sm:text-lg tracking-tight text-white group-hover:text-cyan-400 transition-colors">
                  BALAJI <span className="text-cyan-400">.B</span>
                </span>
                <span className="hidden sm:inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Available
                </span>
              </div>
              <p className="text-[10px] sm:text-[11px] text-slate-400 tracking-wide font-medium hidden xs:block">
                Video Editor & Motion Designer
              </p>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1 bg-[#121520]/80 p-1.5 rounded-xl border border-white/5 shadow-inner">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                    isActive 
                      ? 'bg-white/10 text-white shadow-sm border border-white/10' 
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span>{link.label}</span>
                  {link.badge && (
                    <span className="text-[10px] font-mono px-1.5 py-0.2 rounded-full bg-cyan-500/20 text-cyan-300 font-semibold">
                      {link.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Right Action Bar */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            {/* Audio Feedback Toggle */}
            <button
              onClick={handleSoundToggle}
              title={soundActive ? "Mute Sound Feedback" : "Enable Sound Feedback"}
              className="p-2 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-400/40 text-slate-400 hover:text-cyan-400 transition-all hidden sm:flex items-center justify-center cursor-pointer"
            >
              {soundActive ? (
                <Volume2 className="w-4 h-4 text-cyan-400" />
              ) : (
                <VolumeX className="w-4 h-4 text-slate-500" />
              )}
            </button>

            {/* Direct Hire Me CTA Button */}
            <button
              onClick={() => {
                playClick();
                onOpenExportModal();
              }}
              className="relative group overflow-hidden rounded-xl p-[1px] cursor-pointer shadow-lg shadow-cyan-500/15"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-500 transition-opacity duration-300 group-hover:opacity-100 opacity-80" />
              <div className="relative px-3.5 sm:px-4 py-2 rounded-[11px] bg-[#0C0E16] flex items-center gap-1.5 sm:gap-2 text-xs font-semibold text-white group-hover:bg-[#111422] transition-colors">
                <span>Book Edit</span>
                <ArrowRight className="w-3.5 h-3.5 text-cyan-400 group-hover:translate-x-1 transition-transform" />
              </div>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => {
                playClick();
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              className="p-2 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white lg:hidden cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 border-t border-white/10 animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="flex items-center justify-between pb-3 mb-2 border-b border-white/5">
              <span className="text-xs text-slate-400 font-medium">Quick Navigation</span>
              <span className="flex items-center gap-1.5 text-[11px] font-medium text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Available for Projects
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2 py-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => handleNavClick(link.id)}
                    className={`flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-medium transition-all ${
                      isActive
                        ? 'bg-cyan-500/15 text-cyan-400 border border-cyan-500/30'
                        : 'bg-white/5 text-slate-300 hover:bg-white/10'
                    }`}
                  >
                    <span>{link.label}</span>
                    {link.badge && (
                      <span className="text-[10px] font-mono px-1.5 py-0.5 rounded-full bg-white/10 text-slate-300">
                        {link.badge}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Direct WhatsApp Quick Row in Mobile Drawer */}
            <div className="mt-2.5 p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs text-emerald-300 font-medium">Instant WhatsApp Chat</span>
              </div>
              <a
                href="https://wa.me/919840602461?text=Hi%20Balaji,%20I%20saw%20your%20video%20editor%20portfolio!"
                target="_blank"
                rel="noopener noreferrer"
                onClick={playClick}
                className="px-3 py-1 rounded-lg bg-emerald-500 text-black text-xs font-bold hover:bg-emerald-400 transition-colors"
              >
                Chat Now
              </a>
            </div>

            <div className="mt-3 pt-3 border-t border-white/10 flex items-center justify-between">
              <button
                onClick={handleSoundToggle}
                className="flex items-center gap-2 text-xs text-slate-400 hover:text-white"
              >
                {soundActive ? <Volume2 className="w-4 h-4 text-cyan-400" /> : <VolumeX className="w-4 h-4 text-slate-500" />}
                <span>{soundActive ? "Sound: On" : "Sound: Off"}</span>
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenExportModal();
                }}
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-400 to-indigo-500 text-black font-semibold text-xs shadow-md"
              >
                Let's Talk
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
