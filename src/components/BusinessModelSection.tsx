import React, { useState } from 'react';
import { 
  Award, 
  Coins, 
  Calendar, 
  CheckCircle2, 
  Palmtree, 
  ShieldCheck, 
  Calculator,
  MessageCircle
} from 'lucide-react';

interface BusinessModelSectionProps {
  onJoinClick: () => void;
}

export const BusinessModelSection: React.FC<BusinessModelSectionProps> = ({ onJoinClick }) => {
  // Interactive Merchant Savings Calculator
  const [monthlyOrders, setMonthlyOrders] = useState<number>(120);
  const [deliveryPayRatio, setDeliveryPayRatio] = useState<number>(40); // 40% Delivery Pay, 60% COD
  const [returnRate, setReturnRate] = useState<number>(25); // typical 25% return rate on social media

  // Return cost average in Algeria
  const estimatedReturnedOrders = Math.round(monthlyOrders * (returnRate / 100));
  const deliveryPayOrders = Math.round(monthlyOrders * (deliveryPayRatio / 100));
  const codOrders = monthlyOrders - deliveryPayOrders;
  
  // Traditional loss on returns: typical 800 DZD per return
  const traditionalReturnLoss = estimatedReturnedOrders * 800;
  // Under AHM with Delivery Pay coverage and 0 DZD return platform fee
  const ahmSavedLoss = Math.round(traditionalReturnLoss * (deliveryPayRatio / 100));

  return (
    <section id="business-model" className="py-20 bg-[#03131f] border-b border-[#0e3752]/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="flex items-center gap-2 text-xs font-bold text-[#00d26a]">
            <Coins className="w-4 h-4 text-[#00d26a]" />
            <span>النموذج التنظيمي والتأسيسي (Business Structure)</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white font-['Cairo'] tracking-tight">
            شراكة عادلة قائمة على الأداء الحقيقي وليس على استنزاف الاشتراكات
          </h2>
          <p className="text-[#cbd5e1] text-sm sm:text-base leading-relaxed">
            صُمم نموذج أعمال AHM ليدعم نمو التاجر الجزائري ويحميه من التكاليف المجهولة أو الدفع المسبق لخدمات لم تنتج مبيعات حقيقية.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Pillar 1: عرض التأسيس */}
          <div className="p-7 rounded-3xl bg-gradient-to-b from-[#06293e] to-[#031422] border border-[#00d26a]/40 space-y-6 flex flex-col justify-between relative shadow-[0_0_30px_rgba(0,210,106,0.15)]">
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-[#00d26a]/15 border border-[#00d26a]/40 flex items-center justify-center text-[#00d26a]">
                  <Award className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono font-bold text-[#00d26a]">أول 100 تاجر فقط</span>
              </div>

              <div>
                <h3 className="text-xl font-black text-white font-['Cairo'] mb-2">
                  عرض التأسيس الحصري
                </h3>
                <p className="text-xs text-[#94a3b8]">
                  مزايا استثنائية لأول 100 تاجر ينضمون للمنصة لبناء اللبنة الأولى.
                </p>
              </div>

              <div className="space-y-3 text-xs sm:text-sm">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#00d26a] shrink-0 mt-0.5" />
                  <span className="text-[#e2e8f0]">
                    <strong className="text-[#00d26a]">إعفاء كامل</strong> من الاشتراك الشهري لمدة شهرين مجاناً.
                  </span>
                </div>

                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#00d26a] shrink-0 mt-0.5" />
                  <span className="text-[#e2e8f0]">
                    منح وسام <strong className="text-[#facc15]">"تاجر مؤسس"</strong> علني على واجهة المتجر لبناء الأسبقية والثقة.
                  </span>
                </div>

                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#00d26a] shrink-0 mt-0.5" />
                  <span className="text-[#e2e8f0]">
                    الانضمام المباشر لـ <strong className="text-white">مجموعة الواتساب المغلقة</strong> للتواصل والتطوير التشاركي.
                  </span>
                </div>
              </div>
            </div>

            <button
              onClick={onJoinClick}
              className="mt-4 w-full py-3.5 text-xs sm:text-sm font-bold text-[#020d15] bg-[#00d26a] hover:bg-[#1df27f] rounded-xl transition-all shadow-[0_0_15px_rgba(0,210,106,0.3)] flex items-center justify-center gap-2 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              <span>احجز مقعدك كتاجر مؤسس</span>
            </button>
          </div>

          {/* Pillar 2: التكاليف التشغيلية العادية */}
          <div className="p-7 rounded-3xl bg-[#041725] border border-[#0e3752] space-y-6 flex flex-col justify-between">
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-[#062135] border border-[#0e3752] flex items-center justify-center text-[#00b4d8]">
                  <Coins className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono text-[#94a3b8]">تسعير شفاف</span>
              </div>

              <div>
                <h3 className="text-xl font-black text-white font-['Cairo'] mb-2">
                  التكاليف التشغيلية العادية
                </h3>
                <p className="text-xs text-[#94a3b8]">
                  رسوم واضحة ومحددة لا تفاجئك بفواتير خفية بعد انتهاء الشهرين المجانيين.
                </p>
              </div>

              <div className="space-y-3.5 text-xs sm:text-sm">
                <div className="p-3 rounded-2xl bg-[#020e18] border border-[#0e3752] flex justify-between items-center">
                  <span className="text-[#cbd5e1]">اشتراك ثابت رمزي:</span>
                  <span className="font-mono font-bold text-white text-sm">800 دج / شهرياً</span>
                </div>

                <div className="p-3 rounded-2xl bg-[#020e18] border border-[#0e3752] flex justify-between items-center">
                  <span className="text-[#cbd5e1]">عمولة COD (ناجح فقط):</span>
                  <span className="font-mono font-bold text-[#00d26a] text-sm">30 دج</span>
                </div>

                <div className="p-3 rounded-2xl bg-[#020e18] border border-[#0e3752] flex justify-between items-center">
                  <span className="text-[#cbd5e1]">عمولة Delivery Pay (ناجح):</span>
                  <span className="font-mono font-bold text-[#00b4d8] text-sm">20 دج</span>
                </div>

                <div className="p-3 rounded-2xl bg-[#00d26a]/10 border border-[#00d26a]/30 flex justify-between items-center">
                  <span className="text-[#00d26a] font-bold">الطلبات المرجعة أو الملغاة:</span>
                  <span className="font-mono font-black text-[#00d26a] text-sm">0 دج</span>
                </div>
              </div>
            </div>

            <p className="text-[11px] text-[#94a3b8] text-center">
              لا ندين التاجر على طرد رفضه الزبون أو فشل تسليمه.
            </p>
          </div>

          {/* Pillar 3: مرونة التسديد ووضع العطلة */}
          <div className="p-7 rounded-3xl bg-[#041725] border border-[#0e3752] space-y-6 flex flex-col justify-between">
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-[#062135] border border-[#0e3752] flex items-center justify-center text-[#00b4d8]">
                  <Calendar className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono text-[#00d26a] font-bold">مهلة 75 يوماً</span>
              </div>

              <div>
                <h3 className="text-xl font-black text-white font-['Cairo'] mb-2">
                  مرونة التسديد ووضع العطلة
                </h3>
                <p className="text-xs text-[#94a3b8]">
                  نظام يراعي الدورة النقدية ومواسم عمل التاجر الحقيقي.
                </p>
              </div>

              <div className="space-y-3.5 text-xs sm:text-sm">
                <div className="space-y-1.5">
                  <span className="font-bold text-[#e2e8f0] block">مهلة مرنة حتى 75 يوماً:</span>
                  <p className="text-[#cbd5e1] leading-relaxed text-xs">
                    تصفية المديونية عبر تحويل بسيط في BaridiMob أو CCP مع مهلة كافية لتحصيل أموالك من شركات الشحن.
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl bg-[#020e18] border border-[#0e3752] space-y-1.5">
                  <div className="flex items-center gap-2 text-[#facc15] font-bold text-xs">
                    <Palmtree className="w-4 h-4" />
                    <span>تفعيل "وضع العطلة" (Vacation Mode)</span>
                  </div>
                  <p className="text-[#94a3b8] text-xs leading-relaxed">
                    إمكانية تجميد نشاط المتجر مؤقتاً أثناء السفر أو نفاذ المخزون لحفظ بياناتك وتقييماتك دون حذف أو غرامات.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center gap-3 text-xs text-[#94a3b8] font-mono">
              <ShieldCheck className="w-4 h-4 text-[#00d26a]" />
              <span>دفع محلي آمن BaridiMob / CCP</span>
            </div>
          </div>

        </div>

        {/* Interactive Return-Loss Savings Calculator */}
        <div className="p-6 sm:p-8 rounded-3xl bg-[#041725] border border-[#0e3752] space-y-6 shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#0e3752]">
            <div>
              <h3 className="text-lg font-bold text-white flex items-center gap-2 font-['Cairo']">
                <Calculator className="w-5 h-5 text-[#00d26a]" />
                <span>حاسبة توفير خسائر الشحن المرجّع (Retour) التقديرية</span>
              </h3>
              <p className="text-xs text-[#94a3b8] mt-1">
                شاهد كم تحمي منصة AHM هامش ربحك عند تحويل جزء من زبائنك لـ Delivery Pay وإلغاء عمولة المرجعات:
              </p>
            </div>
            <span className="text-xs font-mono text-[#00d26a] bg-[#00d26a]/10 px-3 py-1.5 rounded-xl border border-[#00d26a]/30">
              حساب ميداني واقعي
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Sliders */}
            <div className="lg:col-span-7 space-y-5">
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-[#cbd5e1]">متوسط عدد طلباتك الشهرية:</span>
                  <span className="font-mono text-[#00d26a] font-bold">{monthlyOrders} طرد / شهر</span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="500"
                  step="10"
                  value={monthlyOrders}
                  onChange={(e) => setMonthlyOrders(Number(e.target.value))}
                  className="w-full accent-[#00d26a] bg-[#020e18] rounded-lg cursor-pointer"
                />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-[#cbd5e1]">نسبة الشحن المرجّع المعتادة لديك (Retour):</span>
                  <span className="font-mono text-[#fb7185] font-bold">{returnRate}%</span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="50"
                  step="5"
                  value={returnRate}
                  onChange={(e) => setReturnRate(Number(e.target.value))}
                  className="w-full accent-[#fb7185] bg-[#020e18] rounded-lg cursor-pointer"
                />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-[#cbd5e1]">نسبة الزبائن المحولين لـ Delivery Pay بفضل الخصم:</span>
                  <span className="font-mono text-[#00b4d8] font-bold">{deliveryPayRatio}%</span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="90"
                  step="5"
                  value={deliveryPayRatio}
                  onChange={(e) => setDeliveryPayRatio(Number(e.target.value))}
                  className="w-full accent-[#00b4d8] bg-[#020e18] rounded-lg cursor-pointer"
                />
              </div>
            </div>

            {/* Savings Output */}
            <div className="lg:col-span-5 p-6 rounded-2xl bg-[#020e18] border border-[#0e3752] space-y-4 text-center sm:text-right">
              <span className="text-xs text-[#94a3b8] block font-mono">التوفير المالي المباشر لهامش ربحك:</span>
              
              <div className="p-4 rounded-xl bg-[#00d26a]/10 border border-[#00d26a]/30 text-center space-y-1">
                <span className="text-xs text-[#00d26a] font-bold">خسائر شحن مرجع محمية شهرياً:</span>
                <div className="text-3xl font-black text-[#00d26a] font-mono tracking-tight">
                  {ahmSavedLoss.toLocaleString()} دج
                </div>
                <span className="text-[11px] text-[#94a3b8] block">
                  بدلاً من ضياعها في تكلفة التوصيل الضائعة
                </span>
              </div>

              <div className="flex justify-between text-xs text-[#cbd5e1] border-t border-[#0e3752] pt-3">
                <span>عمولة AHM على المرجعات:</span>
                <span className="font-bold text-[#00d26a] font-mono">0 دج تماماً</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
