import React, { useEffect } from 'react';
import { 
  X, 
  ExternalLink, 
  Clock, 
  Layers, 
  Film, 
  Cpu, 
  Sparkles, 
  Share2,
  Check,
  Play
} from 'lucide-react';
import { Project } from '../types';
import { playClick } from '../utils/audioFx';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onRequestSimilar: (title: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onRequestSimilar }) => {
  const [copied, setCopied] = React.useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  const handleShare = () => {
    playClick();
    if (navigator.clipboard) {
      navigator.clipboard.writeText(project.reelUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-2xl animate-in fade-in duration-200">
      {/* Backdrop click to close */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-4xl max-h-[92vh] bg-[#0C0E16] border border-white/10 rounded-3xl shadow-2xl overflow-hidden flex flex-col z-10">
        
        {/* Header */}
        <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between shrink-0 bg-white/[0.02]">
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            <h4 className="text-sm font-semibold text-white truncate max-w-xs sm:max-w-md">
              {project.title}
            </h4>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              className="px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 text-xs flex items-center gap-1.5 transition-colors border border-white/10 cursor-pointer"
              title="Copy Reel Link"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Share2 className="w-3.5 h-3.5 text-slate-400" />}
              <span className="hidden sm:inline">{copied ? "Link Copied" : "Share"}</span>
            </button>

            <button
              onClick={() => {
                playClick();
                onClose();
              }}
              className="p-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors border border-white/10 cursor-pointer"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Body */}
        <div className="overflow-y-auto p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Reel Video Frame Column */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center">
            <div className="w-full max-w-[320px] aspect-[9/16] bg-black rounded-2xl overflow-hidden border border-white/10 relative shadow-2xl flex flex-col items-center justify-center">
              
              <iframe
                src={`https://www.instagram.com/reel/${project.reelId.replace('-alt', '')}/embed/captioned/`}
                className="w-full h-full border-0 rounded-2xl"
                title={project.title}
                allowTransparency={true}
                allow="encrypted-media"
                loading="lazy"
              />

              {/* Direct Open in Instagram pill */}
              <div className="absolute bottom-3 left-3 right-3 z-10">
                <a
                  href={project.reelUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-3 rounded-xl bg-black/85 hover:bg-black backdrop-blur-md border border-cyan-400/40 text-cyan-300 text-xs font-semibold flex items-center justify-center gap-2 shadow-xl transition-all"
                >
                  <span>Open directly in Instagram</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Details Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2.5">
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 uppercase">
                  {project.category}
                </span>
                <span className="text-xs text-slate-400 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-slate-400" />
                  {project.duration}
                </span>
                <span className="text-xs font-medium text-emerald-400 ml-auto flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  Mastered Cut
                </span>
              </div>

              <h3 className="font-display font-black text-2xl sm:text-3xl text-white">
                {project.title}
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Techniques & Software Pills */}
            <div className="space-y-3 text-xs">
              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2">
                <span className="text-slate-400 block text-xs font-medium flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-purple-400" />
                  Techniques & Editorial Focus
                </span>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-lg bg-white/5 text-slate-200 border border-white/10 text-xs font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2">
                <span className="text-slate-400 block text-xs font-medium flex items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5 text-cyan-400" />
                  Software Workflow
                </span>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.software.map((sw, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-lg bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 text-xs font-medium"
                    >
                      {sw}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 space-y-3">
              <a
                href={project.reelUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={playClick}
                className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-cyan-400 to-indigo-500 hover:opacity-95 text-black font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20 transition-all cursor-pointer"
              >
                <span>Watch on Instagram</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <button
                onClick={() => {
                  playClick();
                  onRequestSimilar(project.title);
                  onClose();
                }}
                className="w-full py-3 px-4 rounded-xl bg-white/5 hover:bg-white/10 text-white font-medium text-xs border border-white/10 flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span>Request Similar Edit for Your Project</span>
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
