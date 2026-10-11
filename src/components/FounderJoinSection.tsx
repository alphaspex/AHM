import React, { useState } from 'react';
import { 
  MessageCircle, 
  Copy, 
  Check, 
  Store, 
  MapPin, 
  Tag, 
  ExternalLink,
  ShieldCheck,
  Sparkles
} from 'lucide-react';
import { ALGERIAN_WILAYAS, PRODUCT_CATEGORIES } from '../data/landingData';

export const FounderJoinSection: React.FC = () => {
  const [storeName, setStoreName] = useState<string>('');
  const [selectedWilaya, setSelectedWilaya] = useState<string>('16 - الجزائر');
  const [selectedCategory, setSelectedCategory] = useState<string>('أزياء وملابس رجالية ونسائية');
  const [copied, setCopied] = useState<boolean>(false);

  // Default WhatsApp template message specified in user brief
  const baseMessage = `مرحباً AHM، أريد الانضمام لقائمة الانتظار وحجز مكاني ضمن أول 100 تاجر مؤسس.
- اسم المتجر: ${storeName.trim() || '__________'}
- الولاية: ${selectedWilaya}
- نوع المنتجات: ${selectedCategory}`;

  // WhatsApp click handler
  const handleOpenWhatsApp = () => {
    const encodedText = encodeURIComponent(baseMessage);
    const whatsappUrl = `https://wa.me/?text=${encodedText}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const handleCopyText = async () => {
    try {
      await navigator.clipboard.writeText(baseMessage);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
    }
  };

  return (
    <section id="join-section" className="py-24 bg-gradient-to-b from-[#020d15] via-[#051c2c] to-[#020d15] relative overflow-hidden border-t border-[#0e3752]/70 islamic-pattern">
      
      {/* Decorative subtle ambient lights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00d26a]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Heading */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-[#00d26a] bg-[#00d26a]/10 border border-[#00d26a]/30 px-3.5 py-1.5 rounded-full">
            <Sparkles className="w-3.5 h-3.5" />
            <span>عرض التأسيس مفتوح الآن</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-['Cairo'] tracking-tight">
            احجز مكانك الآن ضمن أول 100 تاجر مؤسس
          </h2>

          <p className="text-[#cbd5e1] text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            استفد من شهرين مجاناً بدون اشتراك، ووسام "تاجر مؤسس" الدائم، وحماية كاملة لهامش ربحك من خسائر الشحن المرجّع.
          </p>
        </div>

        {/* Interactive Customizer Card */}
        <div className="p-6 sm:p-8 rounded-3xl bg-[#041725] border border-[#0e3752] shadow-[0_0_50px_rgba(0,180,216,0.12)] space-y-6">
          
          <div className="border-b border-[#0e3752] pb-4">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <Store className="w-4 h-4 text-[#00d26a]" />
              <span>تخصيص بيانات متجرك (تُرسل مجهزة تلقائياً):</span>
            </h3>
            <span className="text-xs text-[#94a3b8]">
              يمكنك كتابة بياناتك هنا أو إرسال الرسالة كما هي والتعديل في تطبيق الواتساب مباشرة.
            </span>
          </div>

          {/* Form Fields */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            
            {/* Store Name */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-[#cbd5e1] flex items-center gap-1.5">
                <Store className="w-3.5 h-3.5 text-[#00b4d8]" />
                اسم المتجر:
              </label>
              <input
                type="text"
                value={storeName}
                onChange={(e) => setStoreName(e.target.value)}
                placeholder="مثال: متجر الأصالة"
                className="w-full px-3.5 py-2.5 text-xs bg-[#020e18] border border-[#0e3752] rounded-xl text-white placeholder-[#64748b] focus:outline-none focus:border-[#00d26a]"
              />
            </div>

            {/* Wilaya (69 Algerian Wilayas) */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-[#cbd5e1] flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#00b4d8]" />
                الولاية:
              </label>
              <select
                value={selectedWilaya}
                onChange={(e) => setSelectedWilaya(e.target.value)}
                className="w-full px-3.5 py-2.5 text-xs bg-[#020e18] border border-[#0e3752] rounded-xl text-white focus:outline-none focus:border-[#00d26a] cursor-pointer"
              >
                {ALGERIAN_WILAYAS.map((w) => (
                  <option key={w} value={w} className="bg-[#020e18]">
                    {w}
                  </option>
                ))}
              </select>
            </div>

            {/* Category */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-[#cbd5e1] flex items-center gap-1.5">
                <Tag className="w-3.5 h-3.5 text-[#00b4d8]" />
                نوع المنتجات:
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-3.5 py-2.5 text-xs bg-[#020e18] border border-[#0e3752] rounded-xl text-white focus:outline-none focus:border-[#00d26a] cursor-pointer"
              >
                {PRODUCT_CATEGORIES.map((c) => (
                  <option key={c} value={c} className="bg-[#020e18]">
                    {c}
                  </option>
                ))}
              </select>
            </div>

          </div>

          {/* Prepared Message Box Preview */}
          <div className="space-y-2 pt-2">
            <div className="flex items-center justify-between text-xs text-[#94a3b8]">
              <span className="font-semibold text-[#cbd5e1]">الرسالة المجهزة تلقائياً عند النقر:</span>
              <button
                onClick={handleCopyText}
                className="flex items-center gap-1.5 text-[#00d26a] hover:text-[#1df27f] transition-colors cursor-pointer text-xs"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-[#00d26a]" />
                    <span>تم النسخ بنجاح!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>نسخ نص الرسالة</span>
                  </>
                )}
              </button>
            </div>

            <pre className="p-4 rounded-2xl bg-[#020e18] border border-[#0e3752] text-xs sm:text-sm text-[#cbd5e1] font-sans whitespace-pre-wrap leading-relaxed select-all">
              {baseMessage}
            </pre>
          </div>

          {/* Primary CTA Button */}
          <div className="pt-2">
            <button
              onClick={handleOpenWhatsApp}
              className="w-full py-4 px-6 text-sm sm:text-base font-black text-[#020d15] bg-[#00d26a] hover:bg-[#1df27f] rounded-2xl shadow-[0_0_25px_rgba(0,210,106,0.35)] hover:shadow-[0_0_35px_rgba(0,210,106,0.5)] transition-all flex items-center justify-center gap-3 cursor-pointer group"
            >
              <MessageCircle className="w-5 h-5 text-[#020d15] group-hover:scale-110 transition-transform" />
              <span>الانضمام لقائمة الانتظار وحجز مكان ضمن 100 تاجر مؤسس عبر الواتساب 🚀</span>
              <ExternalLink className="w-4 h-4 opacity-75" />
            </button>
          </div>

          {/* Trust points */}
          <div className="flex flex-wrap items-center justify-center gap-6 pt-2 text-xs text-[#94a3b8]">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#00d26a]" />
              <span>تأكيد مباشر وفوري</span>
            </div>
            <span aria-hidden="true" className="text-[#0e3752]">·</span>
            <div>
              <span>مجموعة خاصة مغلقة</span>
            </div>
            <span aria-hidden="true" className="text-[#0e3752]">·</span>
            <div>
              <span className="text-[#00d26a] font-bold">بدون أي تكاليف مسبقة</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
