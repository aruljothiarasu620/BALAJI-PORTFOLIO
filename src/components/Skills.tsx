import React from 'react';
import { 
  Film, 
  Palette, 
  Sparkles, 
  Volume2, 
  Type, 
  RefreshCw, 
  Layers, 
  Cpu, 
  CheckCircle2, 
  SlidersHorizontal 
} from 'lucide-react';
import { skills, softwareSuite } from '../data/skills';

export const Skills: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Film': return Film;
      case 'Palette': return Palette;
      case 'Sparkles': return Sparkles;
      case 'Volume2': return Volume2;
      case 'Type': return Type;
      case 'RefreshCw': return RefreshCw;
      default: return Layers;
    }
  };

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-[#07080B] border-t border-white/5">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-6 border-b border-white/10">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs tracking-widest uppercase">
              <Cpu className="w-4 h-4" />
              <span>CREATIVE STACK & EXPERTISE</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-white">
              SKILLS & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">SOFTWARE</span>
            </h2>
          </div>
          <p className="text-sm text-slate-400 mt-2 md:mt-0 font-medium">
            Industry-standard tools • Fast GPU-accelerated 4K delivery
          </p>
        </div>

        {/* SOFTWARE PROFICIENCY SECTION */}
        <div className="glass-panel p-6 sm:p-10 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden">
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 pb-4 border-b border-white/10">
            <div>
              <span className="text-xs font-mono text-cyan-400 tracking-wider uppercase font-semibold">CORE EDITING SOFTWARE</span>
              <h3 className="text-2xl font-black font-display text-white mt-1">Mastered Editing Applications</h3>
            </div>
            <p className="text-xs text-slate-400 mt-2 sm:mt-0 font-medium">
              Calibrated Color Workspace & 4K Proxy Pipelines
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {softwareSuite.map((sw, index) => (
              <div
                key={index}
                className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/15 hover:bg-white/[0.04] transition-all group"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <div 
                      className="w-10 h-10 rounded-xl flex items-center justify-center font-bold font-mono text-sm border shadow-sm"
                      style={{ 
                        backgroundColor: `${sw.color}15`, 
                        borderColor: `${sw.color}40`,
                        color: sw.color 
                      }}
                    >
                      {sw.name.substring(0, 2).toUpperCase()}
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-base group-hover:text-cyan-400 transition-colors">
                        {sw.name}
                      </h4>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/5 text-slate-300 border border-white/10">
                        {sw.badge}
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="font-mono font-bold text-lg text-white">{sw.level}%</span>
                  </div>
                </div>

                <p className="text-xs text-slate-300 mt-2.5 mb-3.5 leading-relaxed">
                  {sw.role}
                </p>

                {/* Progress Bar with software color accent */}
                <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden p-[1px]">
                  <div
                    className="h-full rounded-full transition-all duration-1000 ease-out"
                    style={{
                      width: `${sw.level}%`,
                      backgroundColor: sw.color,
                      boxShadow: `0 0 10px ${sw.color}60`
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* EDITORIAL SKILLS CARDS */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-mono tracking-widest text-slate-300 uppercase font-bold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400 inline-block" />
              EDITORIAL CAPABILITIES
            </h3>
            <span className="text-xs text-slate-400 font-medium">Precision timeline mastery</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {skills.map((skill, index) => {
              const Icon = getIcon(skill.iconName);
              return (
                <div
                  key={index}
                  className="glass-panel p-6 rounded-2xl border border-white/5 hover:border-cyan-400/40 transition-all duration-300 group hover:-translate-y-1 hover:shadow-xl relative overflow-hidden"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-400 group-hover:text-black transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-white text-base group-hover:text-cyan-400 transition-colors font-display">
                          {skill.name}
                        </h4>
                        <span className="text-[11px] font-mono text-slate-400">{skill.tools}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="font-mono font-bold text-base text-cyan-400">{skill.level}%</span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-300 mb-4 leading-relaxed line-clamp-2">
                    {skill.description}
                  </p>

                  {/* Progress Bar */}
                  <div className="space-y-1">
                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-indigo-500"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
