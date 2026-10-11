import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface HeaderProps {
  onJoinClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onJoinClick }) => {
  return (
    <header className="sticky top-0 z-50 bg-[#020d15]/90 backdrop-blur-md border-b border-[#0e3752]/70 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-8">
        
        {/* Zone 1: Single-element brand wordmark with Islamic 8-point star */}
        <a 
          href="#" 
          className="flex items-center gap-3 text-slate-100 hover:text-white transition-colors whitespace-nowrap shrink-0 group"
        >
          {/* Islamic 8-point geometric star icon from user's image */}
          <div className="w-10 h-10 rounded-xl bg-[#062032] border border-[#00d26a]/40 flex items-center justify-center text-[#00d26a] group-hover:border-[#00d26a] transition-colors shadow-[0_0_15px_rgba(0,210,106,0.15)]">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5">
              <rect x="5" y="5" width="14" height="14" rx="1" />
              <rect x="5" y="5" width="14" height="14" rx="1" transform="rotate(45 12 12)" />
            </svg>
          </div>
          <span className="text-xl font-black tracking-tight text-white font-['Cairo']">
            AHM <span className="text-[#00d26a] font-bold text-base mr-1">السوق الجزائري الأمين</span>
          </span>
        </a>

        {/* Zone 2: Clean single-line text nav links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300">
          <a href="#quick-nav" className="hover:text-[#00d26a] transition-colors whitespace-nowrap shrink-0">
            العناوين السريعة
          </a>
          <a href="#features" className="hover:text-[#00d26a] transition-colors whitespace-nowrap shrink-0">
            الميزات الميدانية
          </a>
          <a href="#credibility" className="hover:text-[#00d26a] transition-colors whitespace-nowrap shrink-0">
            مؤشرات المصداقية
          </a>
          <a href="#workflow" className="hover:text-[#00d26a] transition-colors whitespace-nowrap shrink-0">
            تتبع الطلبيات
          </a>
          <a href="#business-model" className="hover:text-[#00d26a] transition-colors whitespace-nowrap shrink-0">
            نموذج التأسيس
          </a>
          <a href="#faq" className="hover:text-[#00d26a] transition-colors whitespace-nowrap shrink-0">
            الأسئلة الشائعة
          </a>
        </nav>

        {/* Zone 3: Single primary action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onJoinClick}
            className="px-5 py-2.5 text-xs sm:text-sm font-bold text-[#020d15] bg-[#00d26a] hover:bg-[#1df27f] rounded-xl shadow-[0_0_20px_rgba(0,210,106,0.3)] hover:shadow-[0_0_25px_rgba(0,210,106,0.45)] transition-all flex items-center gap-2 whitespace-nowrap shrink-0 cursor-pointer"
          >
            <span>انضم كتاجر مؤسس</span>
            <ArrowLeft className="w-4 h-4" />
          </button>
        </div>

      </div>
    </header>
  );
};
