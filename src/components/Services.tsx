import React from 'react';
import { 
  Smartphone, 
  PlaySquare, 
  Film, 
  Share2, 
  Sparkles, 
  Wand2, 
  Palette, 
  Volume2, 
  ArrowRight,
  Check,
  CheckCircle2
} from 'lucide-react';
import { services } from '../data/services';
import { playClick } from '../utils/audioFx';

interface ServicesProps {
  onSelectService: (serviceTitle: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Smartphone': return Smartphone;
      case 'PlaySquare': return PlaySquare;
      case 'Film': return Film;
      case 'Share2': return Share2;
      case 'Sparkles': return Sparkles;
      case 'Wand2': return Wand2;
      case 'Palette': return Palette;
      case 'Volume2': return Volume2;
      default: return Film;
    }
  };

  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-[#07080B] border-t border-white/5">
      <div className="max-w-7xl mx-auto space-y-14">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-6 border-b border-white/10">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs tracking-widest uppercase">
              <Sparkles className="w-4 h-4" />
              <span>SERVICES</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-white">
              WHAT I <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-300 to-purple-400">OFFER</span>
            </h2>
            <p className="text-sm text-slate-400 max-w-xl">
              Flexible editing support for creators, brands, events, and social teams — from one-off projects to ongoing content.
            </p>
          </div>
          <p className="text-xs font-mono text-slate-400 mt-2 md:mt-0 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
            FRAME-ACCURATE CRAFT &bull; FAST TURNAROUND OPTIONS
          </p>
        </div>

        {/* Services 8-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => {
            const Icon = getIcon(service.icon);
            return (
              <div
                key={service.id}
                className="glass-panel rounded-3xl p-6 sm:p-7 border border-white/10 hover:border-cyan-400/40 hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-500 group hover:-translate-y-2 flex flex-col justify-between relative overflow-hidden"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-400 group-hover:text-black group-hover:scale-105 transition-all shadow-md">
                      <Icon className="w-6 h-6" />
                    </div>
                    {service.badge && (
                      <span className="text-[10px] font-semibold px-2.5 py-0.5 rounded-full bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 uppercase tracking-wide">
                        {service.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="font-display font-bold text-white text-lg group-hover:text-cyan-400 transition-colors mb-1">
                    {service.title}
                  </h3>

                  <p className="text-xs font-medium text-indigo-400 mb-3">
                    {service.tagline}
                  </p>

                  <p className="text-xs text-slate-400 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Feature Checklist */}
                  <ul className="space-y-2.5 mb-6 border-t border-white/5 pt-4">
                    {service.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                        <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span className="leading-snug">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => {
                    playClick();
                    onSelectService(service.title);
                  }}
                  className="w-full py-3 px-4 rounded-xl bg-white/5 group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-indigo-500 group-hover:text-black text-white text-xs font-semibold flex items-center justify-center gap-2 border border-white/10 group-hover:border-transparent transition-all cursor-pointer shadow-md"
                >
                  <span>Select Package</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
