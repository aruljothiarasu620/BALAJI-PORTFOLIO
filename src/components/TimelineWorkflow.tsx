import React, { useState } from 'react';
import { 
  Film, 
  Scissors, 
  Palette, 
  Sparkles, 
  CheckCircle2, 
  Layers, 
  Volume2, 
  ArrowRight,
  Clock,
  Cpu
} from 'lucide-react';
import { playClick } from '../utils/audioFx';

export const TimelineWorkflow: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      step: "01",
      title: "Vision & Footage Ingestion",
      subtitle: "Pre-Production & Asset Organization",
      description: "Careful review of all raw footage, organizing bins by scenes, synchronizing multi-camera angles, and selecting the hero music track that dictates the energy of the cut.",
      deliverables: ["Asset Bin Organization", "Audio Track Selection", "4K Editing Proxy Generation", "Pacing & Story Outline"],
      software: ["Premiere Pro", "DaVinci Resolve"],
      turnaround: "Hours 0-12",
      icon: Film,
      accent: "cyan"
    },
    {
      step: "02",
      title: "Rhythm Assembly & Hook Cut",
      subtitle: "Frame-Accurate Beat Synchronization",
      description: "Assembling the narrative backbone with strict attention to the 3-second hook. Cutting frame-accurately on musical transients and layering speed ramps to sustain viewer retention.",
      deliverables: ["High-Impact Hook Draft", "Beat-Matched Transitions", "Speed Ramps & Velocity Edits", "Rough Cut Review"],
      software: ["Premiere Pro", "CapCut Pro"],
      turnaround: "Day 1-2",
      icon: Scissors,
      accent: "purple"
    },
    {
      step: "03",
      title: "Color Science & Sound Immersion",
      subtitle: "Cinematic Grade & Acoustic Impact",
      description: "Transforming flat log profiles into rich, cinematic Rec.709 colors with natural skin tones and film halation. Layering tactile sound design with sub-bass impacts, whooshes, and pristine vocal polish.",
      deliverables: ["DaVinci Rec.709 Color Grade", "Atmospheric Foley & SFX", "Multi-Track Sound Mixing", "-14 LUFS Audio Normalization"],
      software: ["DaVinci Resolve", "Adobe Audition"],
      turnaround: "Day 2-3",
      icon: Palette,
      accent: "amber"
    },
    {
      step: "04",
      title: "4K Master & Platform Delivery",
      subtitle: "Final Polish & Social Optimization",
      description: "Final quality control across calibrated studio monitors and mobile displays. Exporting crisp 4K 60FPS masters and platform-specific 9:16 vertical cuts optimized for zero compression loss on Instagram.",
      deliverables: ["ProRes 422HQ Archive Master", "Instagram 9:16 Optimized MP4", "High-Retention Subtitles", "Client Revision Round"],
      software: ["After Effects", "Media Encoder"],
      turnaround: "Final Delivery",
      icon: Sparkles,
      accent: "emerald"
    },
  ];

  const current = steps[activeStep];
  const CurrentIcon = current.icon;

  return (
    <section id="timeline" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-[#0A0C11] border-t border-white/5">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-6 border-b border-white/10">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs tracking-widest uppercase">
              <Layers className="w-4 h-4" />
              <span>THE PRODUCTION PROCESS</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-white">
              CREATIVE <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">WORKFLOW</span>
            </h2>
            <p className="text-sm text-slate-400 max-w-xl">
              From raw camera dump to high-converting 4K master: a methodical 4-stage pipeline built for reliability and speed.
            </p>
          </div>

          <div className="mt-4 md:mt-0 font-mono text-xs text-slate-400">
            TURNAROUND: <strong className="text-cyan-400 font-bold">24-48 HOURS AVAILABLE</strong>
          </div>
        </div>

        {/* Step Selector Pills */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            const isActive = activeStep === idx;
            return (
              <button
                key={idx}
                onClick={() => {
                  playClick();
                  setActiveStep(idx);
                }}
                className={`p-4 sm:p-5 rounded-2xl text-left transition-all cursor-pointer relative overflow-hidden border ${
                  isActive
                    ? 'bg-white/[0.06] border-cyan-400/50 shadow-xl shadow-cyan-500/10'
                    : 'bg-white/[0.02] border-white/5 hover:border-white/15 hover:bg-white/[0.04]'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-xs font-mono font-bold ${isActive ? 'text-cyan-400' : 'text-slate-500'}`}>
                    PHASE {item.step}
                  </span>
                  <Icon className={`w-4 h-4 ${isActive ? 'text-cyan-400' : 'text-slate-500'}`} />
                </div>
                <h4 className="font-bold text-white text-sm sm:text-base leading-snug line-clamp-1">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-400 mt-1 line-clamp-1">
                  {item.subtitle}
                </p>

                {isActive && (
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-cyan-400 to-indigo-500" />
                )}
              </button>
            );
          })}
        </div>

        {/* Active Stage Detailed Showcase Card */}
        <div className="glass-panel-glow rounded-3xl p-6 sm:p-10 border border-white/10 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
                    STAGE {current.step} OF 04
                  </span>
                  <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-cyan-400" />
                    Timeline: {current.turnaround}
                  </span>
                </div>

                <h3 className="font-display font-black text-2xl sm:text-4xl text-white">
                  {current.title}
                </h3>
                <p className="text-sm font-medium text-cyan-400">
                  {current.subtitle}
                </p>
              </div>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                {current.description}
              </p>

              {/* Deliverables Checklist */}
              <div className="space-y-2.5 pt-2">
                <p className="text-xs font-mono text-slate-400 uppercase font-semibold">
                  Stage Deliverables & Quality Standards:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {current.deliverables.map((d, i) => (
                    <div key={i} className="flex items-center gap-2.5 p-3 rounded-xl bg-white/[0.03] border border-white/5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span className="text-xs font-medium text-slate-200">{d}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Metric / Software Card */}
            <div className="lg:col-span-5 space-y-4">
              <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 space-y-5">
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <span className="text-xs font-mono text-slate-400">PRIMARY TOOLS</span>
                  <Cpu className="w-4 h-4 text-cyan-400" />
                </div>

                <div className="flex flex-wrap gap-2">
                  {current.software.map((sw, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1.5 rounded-xl bg-cyan-500/10 text-cyan-300 font-semibold text-xs border border-cyan-500/20"
                    >
                      {sw}
                    </span>
                  ))}
                </div>

                <div className="pt-2 border-t border-white/5 space-y-2">
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-400">Milestone Progress</span>
                    <span className="text-cyan-400 font-bold">{((activeStep + 1) / 4) * 100}% Complete</span>
                  </div>
                  <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden p-[1px]">
                    <div 
                      className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-indigo-500 transition-all duration-500"
                      style={{ width: `${((activeStep + 1) / 4) * 100}%` }}
                    />
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <button
                    onClick={() => {
                      playClick();
                      setActiveStep((prev) => (prev > 0 ? prev - 1 : steps.length - 1));
                    }}
                    className="px-3.5 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-xs text-slate-300 font-medium transition-colors cursor-pointer"
                  >
                    ← Previous Phase
                  </button>
                  <button
                    onClick={() => {
                      playClick();
                      setActiveStep((prev) => (prev < steps.length - 1 ? prev + 1 : 0));
                    }}
                    className="px-4 py-1.5 rounded-xl bg-gradient-to-r from-cyan-400 to-indigo-500 text-black text-xs font-bold transition-all cursor-pointer shadow-md"
                  >
                    Next Phase →
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
