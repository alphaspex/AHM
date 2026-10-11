import React from 'react';
import { 
  MessageCircle, 
  Zap, 
  ShieldCheck, 
  Sparkles, 
  Infinity as InfinityIcon, 
  RefreshCw, 
  Flame, 
  CheckCircle2, 
  QrCode 
} from 'lucide-react';

interface HeroSectionProps {
  onJoinClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onJoinClick }) => {
  return (
    <section className="relative pt-14 pb-20 overflow-hidden border-b border-[#0e3752]/70 bg-gradient-to-b from-[#020d15] via-[#051c2c] to-[#020d15] islamic-pattern">
      {/* Subtle atmospheric glow matching user design */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#00d26a]/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-1/3 left-10 w-[450px] h-[450px] bg-[#00b4d8]/10 rounded-full blur-[130px] pointer-events-none" />

      {/* Islamic geometric background watermarks in subtle line art */}
      <div className="absolute top-8 left-8 text-[#00d26a]/5 pointer-events-none select-none hidden lg:block">
        <svg width="280" height="280" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.5">
          <rect x="20" y="20" width="60" height="60" />
          <rect x="20" y="20" width="60" height="60" transform="rotate(45 50 50)" />
          <circle cx="50" cy="50" r="38" />
          <circle cx="50" cy="50" r="25" />
          <circle cx="50" cy="50" r="12" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top editorial kicker */}
        <div className="flex items-center gap-2 text-xs font-semibold text-[#00d26a] mb-6">
          {/* Islamic 8-point geometric star mini badge */}
          <div className="w-5 h-5 text-[#00d26a] flex items-center justify-center">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
              <rect x="5" y="5" width="14" height="14" rx="1" />
              <rect x="5" y="5" width="14" height="14" rx="1" transform="rotate(45 12 12)" />
            </svg>
          </div>
          <span className="font-bold">AHM — السوق الجزائري الأمين</span>
          <span aria-hidden="true" className="text-[#0e3752]">·</span>
          <span className="text-[#94a3b8]">التجارة الإلكترونية العادلة في 69 ولاية</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Main content column */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-[1.3] tracking-tight font-['Cairo'] text-balance">
              بيئة تجارية متوازنة تضمن حق التاجر وتوفر تسوق آمن ومريح للمشتري
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-[#cbd5e1] leading-relaxed font-normal">
              توفر منصة AHM سوقاً جاهزاً يربط المتاجر الموثوقة بالمشترين الجادين مباشرة. حلول عملية لتجنب نزيف التكاليف الثابتة في الاشتراكات وتجارب الإعلانات غير المضمونة، مع حماية كاملة لهامش ربح التاجر من خسائر الشحن المرجّع.
            </p>

            {/* Direct CTA Button */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onJoinClick}
                className="px-6 py-4 text-sm sm:text-base font-black text-[#020d15] bg-[#00d26a] hover:bg-[#1df27f] rounded-xl shadow-[0_0_25px_rgba(0,210,106,0.35)] hover:shadow-[0_0_35px_rgba(0,210,106,0.5)] transition-all flex items-center justify-center gap-3 cursor-pointer group"
              >
                <MessageCircle className="w-5 h-5 text-[#020d15] group-hover:scale-110 transition-transform" />
                <span>استكشف المنصة وانضم لـ 100 تاجر مؤسس عبر الواتساب 🚀</span>
              </button>

              <a
                href="#features"
                className="px-5 py-4 text-sm font-semibold text-[#e2e8f0] hover:text-white bg-[#061e30]/80 hover:bg-[#0a2c46]/80 border border-[#0e3752] rounded-xl transition-all flex items-center justify-center gap-2"
              >
                <Zap className="w-4 h-4 text-[#00b4d8]" />
                <span>اكتشف كيف يعمل النظام</span>
              </a>
            </div>

            {/* Unboxed Proof / Value Strip */}
            <div className="pt-4 border-t border-[#0e3752]/70 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-[#94a3b8]">
              <div className="flex items-center gap-1.5 text-[#e2e8f0]">
                <ShieldCheck className="w-4 h-4 text-[#00d26a]" />
                <span>0 دج عمولة على المرجعات</span>
              </div>
              <span aria-hidden="true" className="text-[#0e3752]">·</span>
              <div className="flex items-center gap-1.5 text-[#e2e8f0]">
                <span className="font-bold text-[#00d26a]">شهران مجاناً</span>
                <span>لأول 100 متجر</span>
              </div>
              <span aria-hidden="true" className="text-[#0e3752]">·</span>
              <div className="flex items-center gap-1.5 text-[#e2e8f0]">
                <span>توثيق حقيقي برقم الـ SIM</span>
              </div>
            </div>

          </div>

          {/* Visual Carrier: NO FACTORY PHOTOS! Vector Tech & Trust Showcase inspired by the uploaded visual theme */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border border-[#0e3752] bg-gradient-to-b from-[#061d2d] to-[#03131f] p-7 shadow-[0_0_40px_rgba(0,180,216,0.15)] space-y-6">
              
              {/* Concentric Tech Radar Glow Rings (like in the uploaded reference) */}
              <div className="relative flex items-center justify-between pb-5 border-b border-[#0e3752]/80">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#041624] border border-[#00d26a]/40 flex items-center justify-center text-[#00d26a] shadow-[0_0_20px_rgba(0,210,106,0.2)]">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6">
                      <rect x="5" y="5" width="14" height="14" rx="1" />
                      <rect x="5" y="5" width="14" height="14" rx="1" transform="rotate(45 12 12)" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-base font-black text-white font-['Cairo']">
                      نظام التوازن التجاري الذكي
                    </h3>
                    <span className="text-xs text-[#00b4d8] font-mono">AHM Verified Protocol</span>
                  </div>
                </div>

                <div className="w-8 h-8 rounded-full border border-[#00b4d8]/40 bg-[#00b4d8]/10 flex items-center justify-center text-[#00b4d8]">
                  <Sparkles className="w-4 h-4" />
                </div>
              </div>

              {/* 4 Iconic Circular Pillars matching the 4 circular pillars in the uploaded image */}
              <div className="grid grid-cols-2 gap-3.5 pt-1">
                
                {/* Pillar 1: الشفافية والنزاهة */}
                <div className="p-3.5 rounded-2xl bg-[#041522]/90 border border-[#0e3752]/70 space-y-2">
                  <div className="w-9 h-9 rounded-full border border-[#00d26a]/40 bg-[#00d26a]/10 flex items-center justify-center text-[#00d26a]">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div className="text-xs font-bold text-white font-['Cairo']">الشفافية أولاً</div>
                  <div className="text-[11px] text-[#94a3b8] leading-tight">مبنية على النزاهة والمصداقية الحية</div>
                </div>

                {/* Pillar 2: قابلية التوسع */}
                <div className="p-3.5 rounded-2xl bg-[#041522]/90 border border-[#0e3752]/70 space-y-2">
                  <div className="w-9 h-9 rounded-full border border-[#00b4d8]/40 bg-[#00b4d8]/10 flex items-center justify-center text-[#00b4d8]">
                    <InfinityIcon className="w-4 h-4" />
                  </div>
                  <div className="text-xs font-bold text-white font-['Cairo']">قابلة للتوسع</div>
                  <div className="text-[11px] text-[#94a3b8] leading-tight">مصممة للنمو اللامحدود للتاجر</div>
                </div>

                {/* Pillar 3: نظام ذاتي التنظيف */}
                <div className="p-3.5 rounded-2xl bg-[#041522]/90 border border-[#0e3752]/70 space-y-2">
                  <div className="w-9 h-9 rounded-full border border-[#00d26a]/40 bg-[#00d26a]/10 flex items-center justify-center text-[#00d26a]">
                    <RefreshCw className="w-4 h-4" />
                  </div>
                  <div className="text-xs font-bold text-white font-['Cairo']">نظام ذاتي التنظيف</div>
                  <div className="text-[11px] text-[#94a3b8] leading-tight">يكتشف المخالفات وينزل أوجه القصور</div>
                </div>

                {/* Pillar 4: حرق تشغيل صفر */}
                <div className="p-3.5 rounded-2xl bg-[#041522]/90 border border-[#0e3752]/70 space-y-2">
                  <div className="w-9 h-9 rounded-full border border-[#00b4d8]/40 bg-[#00b4d8]/10 flex items-center justify-center text-[#00b4d8]">
                    <Flame className="w-4 h-4" />
                  </div>
                  <div className="text-xs font-bold text-white font-['Cairo']">حرق تشغيل صفر</div>
                  <div className="text-[11px] text-[#94a3b8] leading-tight">0 دج على المرجعات وحماية الأرباح</div>
                </div>

              </div>

              {/* Bottom Quote & Trust Note */}
              <div className="p-4 rounded-2xl bg-[#020d15]/80 border border-[#0e3752]/90 flex items-center justify-between text-xs">
                <div className="space-y-0.5">
                  <div className="text-[#00d26a] font-bold">مبنية من أجل الجزائر.</div>
                  <div className="text-[#00b4d8] font-bold">مصممة من أجل المستقبل.</div>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-[#94a3b8] font-mono">
                  <CheckCircle2 className="w-4 h-4 text-[#00d26a]" />
                  <span>69 ولاية</span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
