import React, { useState } from 'react';
import { 
  Play, 
  ExternalLink, 
  Clock, 
  Sparkles,
  Layers,
  ArrowUpRight,
  SlidersHorizontal
} from 'lucide-react';
import { projects, projectCategories } from '../data/projects';
import { Project } from '../types';
import { playClick } from '../utils/audioFx';

interface ProjectsProps {
  onSelectProject: (project: Project) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [hoveredProjectId, setHoveredProjectId] = useState<number | null>(null);

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  const handleCategoryChange = (category: string) => {
    playClick();
    setSelectedCategory(category);
  };

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-[#07080B] border-t border-white/5">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-6 border-b border-white/10">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs tracking-widest uppercase">
              <Layers className="w-4 h-4" />
              <span>PORTFOLIO & SOCIAL REELS</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-white">
              FEATURED <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-300 to-purple-400">WORK</span>
            </h2>
            <p className="text-sm text-slate-400 max-w-xl">
              A curated selection of social edits, event films, promos, and motion-led stories — built around pacing, sound, and visual clarity.
            </p>
          </div>

          <div className="mt-4 md:mt-0">
            <span className="text-xs font-mono text-slate-400 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
              Selected work: <strong className="text-cyan-400 font-semibold">{projects.length} projects</strong>
            </span>
          </div>
        </div>

        {/* Filter Category Tabs - Smooth horizontal swipe on mobile */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap touch-scroll">
          {projectCategories.map((category) => {
            const isActive = selectedCategory === category;
            const count = category === 'All' 
              ? projects.length 
              : projects.filter(p => p.category === category).length;

            return (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`px-3.5 sm:px-4 py-2 rounded-xl text-xs font-medium transition-all flex items-center gap-1.5 sm:gap-2 cursor-pointer shrink-0 ${
                  isActive
                    ? 'bg-gradient-to-r from-cyan-400 to-indigo-500 text-black font-bold shadow-lg shadow-cyan-500/20'
                    : 'bg-white/5 text-slate-300 hover:text-white hover:bg-white/10 border border-white/10'
                }`}
              >
                <span>{category}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                  isActive ? 'bg-black/20 text-black font-bold' : 'bg-white/10 text-slate-400'
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid - 2 columns on mobile, 4 on desktop */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6">
          {filteredProjects.map((project) => {
            const isHovered = hoveredProjectId === project.id;
            return (
              <div
                key={project.id}
                onMouseEnter={() => setHoveredProjectId(project.id)}
                onMouseLeave={() => setHoveredProjectId(null)}
                className="glass-panel rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 hover:border-cyan-400/40 transition-all duration-500 group hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-cyan-500/10 flex flex-col relative"
              >
                {/* Visual Thumbnail Area */}
                <div 
                  onClick={() => {
                    playClick();
                    onSelectProject(project);
                  }}
                  className="relative aspect-[9/14] bg-black overflow-hidden cursor-pointer flex items-center justify-center select-none"
                >
                  {/* Real Instagram Reel Video Thumbnail Image */}
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.style.display = 'none';
                    }}
                  />

                  {/* Dark Vignette Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0C0E16] via-black/20 to-black/50 group-hover:via-black/10 transition-all duration-300" />

                  {/* Center Play Button Overlay */}
                  <div className="relative z-20 flex flex-col items-center gap-1.5">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-cyan-400 text-black flex items-center justify-center transition-all duration-300 shadow-xl group-hover:scale-110">
                      <Play className="w-4 h-4 sm:w-5 sm:h-5 ml-0.5 fill-black" />
                    </div>
                    <span className="hidden sm:inline-block text-[10px] font-semibold text-slate-200 bg-black/70 backdrop-blur-md px-3 py-0.5 rounded-full border border-white/20 tracking-wide opacity-0 group-hover:opacity-100 transition-opacity">
                      Watch Reel
                    </span>
                  </div>

                  {/* Top Badges */}
                  <div className="absolute top-2.5 sm:top-3.5 left-2.5 sm:left-3.5 right-2.5 sm:right-3.5 flex items-center justify-between z-20 gap-1">
                    <span className="text-[9px] sm:text-[10px] font-semibold px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full bg-black/75 backdrop-blur-md text-white border border-white/15 uppercase truncate">
                      {project.category}
                    </span>
                    <span className="text-[9px] sm:text-[10px] font-mono px-1.5 sm:px-2.5 py-0.5 sm:py-1 rounded-full bg-black/75 backdrop-blur-md text-cyan-300 border border-cyan-400/30 flex items-center gap-1 shrink-0">
                      <Clock className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-cyan-400" />
                      {project.duration}
                    </span>
                  </div>

                  {/* Bottom Synced badge */}
                  <div className="absolute bottom-2.5 sm:bottom-3.5 left-2.5 sm:left-3.5 right-2.5 sm:right-3.5 flex items-center justify-between z-20">
                    <span className="text-[9px] sm:text-[10px] font-mono text-slate-300 bg-black/75 backdrop-blur-md px-1.5 sm:px-2 py-0.5 rounded-md border border-white/10">
                      #{project.id}
                    </span>
                    <span className="text-[9px] sm:text-[10px] font-semibold text-emerald-400 bg-black/75 backdrop-blur-md px-1.5 sm:px-2.5 py-0.5 rounded-md border border-emerald-500/30 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      <span className="hidden xs:inline">Beat-Sync</span>
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-3 sm:p-5 flex-1 flex flex-col justify-between bg-[#0F1118]">
                  <div className="space-y-1">
                    <h3 
                      onClick={() => {
                        playClick();
                        onSelectProject(project);
                      }}
                      className="font-display font-bold text-white text-xs sm:text-base group-hover:text-cyan-400 transition-colors cursor-pointer line-clamp-1"
                    >
                      {project.title}
                    </h3>
                    <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed hidden sm:block">
                      {project.description}
                    </p>
                  </div>

                  {/* Skill & Software Tags */}
                  <div className="mt-2.5 sm:mt-4 pt-2 sm:pt-3 border-t border-white/5 space-y-2">
                    <div className="hidden xs:flex flex-wrap gap-1">
                      {project.skills.slice(0, 1).map((sk, idx) => (
                        <span
                          key={idx}
                          className="text-[9px] sm:text-[10px] px-1.5 sm:px-2 py-0.5 rounded-md bg-white/[0.04] text-slate-300 border border-white/5 truncate max-w-full"
                        >
                          {sk}
                        </span>
                      ))}
                      {project.software.slice(0, 1).map((sw, idx) => (
                        <span
                          key={idx}
                          className="text-[9px] sm:text-[10px] px-1.5 sm:px-2 py-0.5 rounded-md bg-purple-500/15 text-purple-300 border border-purple-500/20 font-medium truncate max-w-full"
                        >
                          {sw}
                        </span>
                      ))}
                    </div>

                    {/* Action buttons */}
                    <div className="flex items-center gap-1.5 sm:gap-2 pt-0.5">
                      <button
                        onClick={() => {
                          playClick();
                          onSelectProject(project);
                        }}
                        className="flex-1 py-1.5 sm:py-2 rounded-lg sm:rounded-xl bg-white/5 hover:bg-cyan-400 hover:text-black text-white text-[11px] sm:text-xs font-semibold flex items-center justify-center gap-1 transition-all cursor-pointer border border-white/10 hover:border-cyan-400"
                      >
                        <span>Details</span>
                      </button>

                      <a
                        href={project.reelUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={playClick}
                        title="Open on Instagram"
                        className="p-1.5 sm:p-2 rounded-lg sm:rounded-xl bg-white/5 hover:bg-gradient-to-tr hover:from-amber-500 hover:via-rose-500 hover:to-purple-600 hover:text-white text-slate-400 transition-all cursor-pointer border border-white/10"
                      >
                        <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      </a>
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
