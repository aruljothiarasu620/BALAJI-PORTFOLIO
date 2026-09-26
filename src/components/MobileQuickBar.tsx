import React from 'react';
import { Film, MessageCircle, Phone, Sparkles } from 'lucide-react';
import { playClick } from '../utils/audioFx';

interface MobileQuickBarProps {
  onOpenExportModal: () => void;
  onExploreWork: () => void;
}

export const MobileQuickBar: React.FC<MobileQuickBarProps> = ({ 
  onOpenExportModal, 
  onExploreWork 
}) => {
  const whatsappUrl = "https://wa.me/919840602461?text=Hi%20Balaji,%20I%20saw%20your%20video%20editor%20portfolio%20and%20would%20like%20to%20discuss%20a%20project!";

  return (
    <aside 
      aria-label="Quick contact and navigation bar"
      className="lg:hidden fixed bottom-3 left-3 right-3 z-40 max-w-md mx-auto"
    >
      <div className="bg-[#0B0D14]/95 backdrop-blur-2xl border border-cyan-500/25 rounded-2xl p-1.5 shadow-[0_12px_40px_rgba(0,0,0,0.85),0_0_20px_rgba(0,212,255,0.15)] flex items-center justify-between gap-1.5">
        
        {/* Reels Work Button */}
        <button
          onClick={() => {
            playClick();
            onExploreWork();
          }}
          className="flex-1 py-2 px-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] active:scale-95 text-slate-300 hover:text-white flex flex-col items-center justify-center gap-1 transition-all border border-white/5"
        >
          <Film className="w-4 h-4 text-cyan-400" />
          <span className="text-[10px] font-semibold tracking-tight">Reels</span>
        </button>

        {/* WhatsApp Direct */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={playClick}
          className="flex-1 py-2 px-2.5 rounded-xl bg-emerald-500/15 hover:bg-emerald-500/25 active:scale-95 text-emerald-400 flex flex-col items-center justify-center gap-1 transition-all border border-emerald-500/20"
        >
          <MessageCircle className="w-4 h-4 text-emerald-400" />
          <span className="text-[10px] font-semibold tracking-tight">WhatsApp</span>
        </a>

        {/* Direct Call */}
        <a
          href="tel:+919840602461"
          onClick={playClick}
          className="flex-1 py-2 px-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] active:scale-95 text-slate-300 hover:text-white flex flex-col items-center justify-center gap-1 transition-all border border-white/5"
        >
          <Phone className="w-4 h-4 text-indigo-400" />
          <span className="text-[10px] font-semibold tracking-tight">Call</span>
        </a>

        {/* Book an Edit CTA */}
        <button
          onClick={() => {
            playClick();
            onOpenExportModal();
          }}
          className="flex-1 py-2 px-2.5 rounded-xl bg-gradient-to-r from-cyan-400 to-indigo-600 active:scale-95 text-black font-bold flex flex-col items-center justify-center gap-1 shadow-md shadow-cyan-500/20 transition-all"
        >
          <Sparkles className="w-4 h-4 fill-black text-black" />
          <span className="text-[10px] font-black tracking-tight">Book</span>
        </button>

      </div>
    </aside>
  );
};
