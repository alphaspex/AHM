import React from 'react';
import { Zap, UserCheck, Camera, ShieldCheck, Scale } from 'lucide-react';

interface QuickNavBadgesProps {
  onSelectBadge: (id: string) => void;
  activeBadge: string;
}

export const QuickNavBadges: React.FC<QuickNavBadgesProps> = ({ onSelectBadge, activeBadge }) => {
  const navItems = [
    {
      id: 'feature-safe-shopping',
      icon: Zap,
      label: 'تسوّق آمن، مخصّص و سريع',
      subtext: 'دليل المتاجر وفهرس المنتجات'
    },
    {
      id: 'feature-identity',
      icon: UserCheck,
      label: 'توثيق هويّة العملاء',
      subtext: 'ربط بروتوكول SIM عبر WhatsApp'
    },
    {
      id: 'feature-camera',
      icon: Camera,
      label: 'نظام تتبع صور حيّة للمنتجات',
      subtext: 'لا يتسامح AHM مع الغشّ والتعديل'
    },
    {
      id: 'feature-delivery-pay',
      icon: ShieldCheck,
      label: 'حماية حقوق الزبون ومزايا Delivery Pay',
      subtext: 'دفع مسبق للشحن مع خصم تشجيعي'
    },
    {
      id: 'feature-points-system',
      icon: Scale,
      label: 'نظام حماية البائع الصادق & ردع الغشاش',
      subtext: 'قواعد شفافة بين COD و Delivery Pay'
    }
  ];

  return (
    <section id="quick-nav" className="py-8 bg-[#041522] border-b border-[#0e3752]/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex items-center justify-between gap-4 mb-4">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-[#00d26a] tracking-wider">شريط العناوين السريعة</span>
            <span aria-hidden="true" className="text-[#0e3752]">·</span>
            <span className="text-xs text-[#94a3b8]">انقر للتنقل الفوري للشرح التفصيلي</span>
          </div>
          <span className="text-xs text-[#00b4d8] font-mono">5 ركائز أساسية</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeBadge === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onSelectBadge(item.id)}
                className={`p-3.5 rounded-xl text-right transition-all cursor-pointer flex flex-col justify-between border ${
                  isActive
                    ? 'bg-[#062438] border-[#00d26a] text-white shadow-[0_0_20px_rgba(0,210,106,0.18)]'
                    : 'bg-[#03131f] border-[#0e3752]/70 hover:border-[#00b4d8]/50 text-[#cbd5e1] hover:text-white'
                }`}
              >
                <div className="flex items-center justify-between gap-2 mb-2">
                  <div className={`p-1.5 rounded-lg ${isActive ? 'bg-[#00d26a]/20 text-[#00d26a]' : 'bg-[#061d2d] text-[#00b4d8]'}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] font-mono text-[#00b4d8]">🔗 انتقال</span>
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold leading-tight mb-1">
                    {item.label}
                  </h4>
                  <p className="text-[11px] text-[#94a3b8] leading-snug">
                    {item.subtext}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

      </div>
    </section>
  );
};
