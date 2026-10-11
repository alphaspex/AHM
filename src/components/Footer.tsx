import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-14 bg-[#020d15] border-t border-[#0e3752]/70 text-[#94a3b8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-[#0e3752]/60">
          
          {/* Brand mark with Islamic geometric star */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#062032] border border-[#00d26a]/40 flex items-center justify-center text-[#00d26a] shadow-[0_0_15px_rgba(0,210,106,0.15)]">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5">
                <rect x="5" y="5" width="14" height="14" rx="1" />
                <rect x="5" y="5" width="14" height="14" rx="1" transform="rotate(45 12 12)" />
              </svg>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-lg font-black text-white font-['Cairo']">AHM</span>
              <span className="text-xs text-[#00d26a] font-bold">السوق الجزائري الأمين</span>
            </div>
          </div>

          {/* Quick links */}
          <nav className="flex flex-wrap items-center gap-6 text-xs text-[#94a3b8]">
            <a href="#features" className="hover:text-[#00d26a] transition-colors">الميزات والحلول</a>
            <a href="#credibility" className="hover:text-[#00d26a] transition-colors">مؤشرات المصداقية</a>
            <a href="#workflow" className="hover:text-[#00d26a] transition-colors">تتبع الطلبيات</a>
            <a href="#business-model" className="hover:text-[#00d26a] transition-colors">نموذج التأسيس</a>
            <a href="#faq" className="hover:text-[#00d26a] transition-colors">الأسئلة الشائعة</a>
          </nav>
        </div>

        {/* Quiet disclaimer and copyright */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#94a3b8]">
          <p>
            منصة AHM — بيئة تجارية متوازنة تضمن حق التاجر وتوفر تسوق آمن ومريح للمشتري عبر كافة ولايات الجزائر الـ 58.
          </p>
          <div className="flex items-center gap-4 text-[#00b4d8] font-mono">
            <span>© {new Date().getFullYear()} AHM Marketplace DZ</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
