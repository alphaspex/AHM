import React, { useState } from 'react';
import { 
  UserCheck, 
  Store, 
  CheckCircle2, 
  XCircle, 
  AlertTriangle, 
  ShieldAlert, 
  Award, 
  Clock, 
  SlidersHorizontal,
  Info
} from 'lucide-react';
import { CUSTOMER_CREDIBILITY_PROFILES, MERCHANT_CREDIBILITY_PROFILES } from '../data/landingData';

export const CredibilityProfilesSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'customer' | 'merchant' | 'simulator'>('customer');

  // Simulator state
  const [simCodSuccess, setSimCodSuccess] = useState<number>(5);
  const [simCodFailed, setSimCodFailed] = useState<number>(1);
  const [simDelivSuccess, setSimDelivSuccess] = useState<number>(3);
  const [simDelivFailed, setSimDelivFailed] = useState<number>(0);
  const [simAccountDays, setSimAccountDays] = useState<number>(45);

  // Compute simulator diagnosis
  const getSimDiagnosis = () => {
    if (simAccountDays <= 7 && simCodFailed >= 1 && simCodSuccess === 0) {
      return {
        level: 'danger',
        label: 'حساب حديث ذو مخاطرة عالية (طلب كيدي محتمل)',
        color: 'text-[#fb7185] border-[#e11d48]/40 bg-[#230910]/70',
        recommendation: 'يُنصح بعدم إرسال الطرد إلا بعد دفع مصاريف الشحن مسبقاً (Delivery Pay) أو تأكيد هاتفي صارم.'
      };
    }
    if (simDelivFailed >= 3) {
      return {
        level: 'danger',
        label: 'مخالفات موثقة بالصور الحية',
        color: 'text-[#fb7185] border-[#e11d48]/40 bg-[#230910]/70',
        recommendation: 'نسبة شكاوى مصورة مرتفعة عند الاستلام. يجب فحص الصور المرفوعة على البروفايل.'
      };
    }
    if (simCodFailed > simCodSuccess && simDelivSuccess === 0) {
      return {
        level: 'warning',
        label: 'نسبة رفض عالية في COD — زبون متردد',
        color: 'text-[#facc15] border-[#eab308]/40 bg-[#251a05]/70',
        recommendation: 'مؤشر أصفر للتاجر: اشترط تفعيل Delivery Pay مع خصم تشجيعي لتأمين مصاريف الشحن.'
      };
    }
    return {
      level: 'positive',
      label: 'عميل / متجر موثوق وموصى به',
      color: 'text-[#00d26a] border-[#00d26a]/40 bg-[#00d26a]/10',
      recommendation: 'سجل ممتاز ونسبة التزام عالية بالاستلام ومطابقة المعايير. أولوية في المعالجة.'
    };
  };

  const simResult = getSimDiagnosis();

  return (
    <section id="credibility" className="py-20 bg-[#03131f] border-b border-[#0e3752]/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Heading */}
        <div className="max-w-3xl space-y-3">
          <div className="flex items-center gap-2 text-xs font-bold text-[#00d26a]">
            <Award className="w-4 h-4 text-[#00d26a]" />
            <span>نماذج حية لواجهات مؤشرات المصداقية (العملاء والتجار)</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white font-['Cairo'] tracking-tight">
            كيف يحول نظام النقاط البيانات المعقدة إلى شارات بصرية مبسطة؟
          </h2>
          <p className="text-[#cbd5e1] text-sm sm:text-base leading-relaxed">
            تُظهر الشاشات الآتية كيف يحول نظام النقاط البيانات المعقدة إلى شارات بصرية مبسطة تساعد التاجر والمشتري على اتخاذ قرار سريع وآمن دون جداول جافة أو تعقيد.
          </p>
        </div>

        {/* Streamlined Interactive Switcher (Segmented Control) */}
        <div className="flex items-center gap-1.5 p-1.5 bg-[#020e18] border border-[#0e3752] rounded-2xl w-full sm:w-fit">
          <button
            onClick={() => setActiveTab('customer')}
            className={`flex-1 sm:flex-none px-4 py-2.5 text-xs sm:text-sm font-bold rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer ${
              activeTab === 'customer'
                ? 'bg-[#00d26a] text-[#020d15] shadow-[0_0_15px_rgba(0,210,106,0.25)]'
                : 'text-[#94a3b8] hover:text-white'
            }`}
          >
            <UserCheck className="w-4 h-4" />
            <span>واجهات مصداقية العملاء</span>
          </button>
          
          <button
            onClick={() => setActiveTab('merchant')}
            className={`flex-1 sm:flex-none px-4 py-2.5 text-xs sm:text-sm font-bold rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer ${
              activeTab === 'merchant'
                ? 'bg-[#00d26a] text-[#020d15] shadow-[0_0_15px_rgba(0,210,106,0.25)]'
                : 'text-[#94a3b8] hover:text-white'
            }`}
          >
            <Store className="w-4 h-4" />
            <span>واجهات مصداقية التجار</span>
          </button>

          <button
            onClick={() => setActiveTab('simulator')}
            className={`flex-1 sm:flex-none px-4 py-2.5 text-xs sm:text-sm font-bold rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer ${
              activeTab === 'simulator'
                ? 'bg-[#00d26a] text-[#020d15] shadow-[0_0_15px_rgba(0,210,106,0.25)]'
                : 'text-[#94a3b8] hover:text-white'
            }`}
          >
            <SlidersHorizontal className="w-4 h-4" />
            <span>محاكي الحساب التفاعلي</span>
          </button>
        </div>

        {/* Tab 1: Customer Credibility Profiles */}
        {activeTab === 'customer' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between text-xs text-[#94a3b8] border-b border-[#0e3752] pb-3">
              <span className="font-semibold text-white">أولاً: واجهات مصداقية العملاء (Customer Credibility Profiles)</span>
              <span className="text-[#00b4d8]">تنسيق انسيابي سريع ومباشر</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {CUSTOMER_CREDIBILITY_PROFILES.map((profile) => (
                <div 
                  key={profile.id}
                  className="rounded-3xl bg-[#041725] border border-[#0e3752] p-6 flex flex-col justify-between space-y-6 hover:border-[#00b4d8]/40 transition-all shadow-md"
                >
                  {/* Top Header Card */}
                  <div className="space-y-4">
                    <div className="flex items-start justify-between gap-3">
                      <div className="space-y-1">
                        <span className="text-xs text-[#00b4d8] block font-mono">بروفايل زبون</span>
                        <h3 className="text-base font-black text-white font-['Cairo']">
                          {profile.title}
                        </h3>
                      </div>
                      
                      {profile.statusType === 'positive' && (
                        <div className="p-2 rounded-xl bg-[#00d26a]/10 text-[#00d26a] border border-[#00d26a]/30">
                          <CheckCircle2 className="w-5 h-5" />
                        </div>
                      )}
                      {profile.statusType === 'warning' && (
                        <div className="p-2 rounded-xl bg-[#eab308]/10 text-[#facc15] border border-[#eab308]/30">
                          <AlertTriangle className="w-5 h-5" />
                        </div>
                      )}
                      {profile.statusType === 'danger' && (
                        <div className="p-2 rounded-xl bg-[#e11d48]/10 text-[#fb7185] border border-[#e11d48]/30">
                          <ShieldAlert className="w-5 h-5" />
                        </div>
                      )}
                    </div>

                    {/* Status diagnostic banner */}
                    <div className={`p-2.5 rounded-xl border text-xs font-bold ${
                      profile.statusType === 'positive'
                        ? 'bg-[#00d26a]/10 border-[#00d26a]/30 text-[#00d26a]'
                        : profile.statusType === 'warning'
                        ? 'bg-[#eab308]/10 border-[#eab308]/30 text-[#facc15]'
                        : 'bg-[#e11d48]/10 border-[#e11d48]/30 text-[#fb7185]'
                    }`}>
                      {profile.statusLabel}
                    </div>

                    {/* Fluid Indicators (NO TABLES) */}
                    <div className="space-y-2.5 pt-2">
                      {profile.accountAge && (
                        <div className="flex items-center justify-between p-3 rounded-2xl bg-[#020e18] border border-[#0e3752] text-xs">
                          <span className="text-[#94a3b8] flex items-center gap-1.5">
                            <Clock className="w-3.5 h-3.5 text-[#00b4d8]" />
                            عمر الحساب
                          </span>
                          <span className="font-bold text-[#facc15] font-mono">{profile.accountAge}</span>
                        </div>
                      )}

                      <div className="flex items-center justify-between p-3 rounded-2xl bg-[#020e18] border border-[#0e3752] text-xs">
                        <span className="text-[#cbd5e1]">سجل الدفع عند الاستلام (COD)</span>
                        <div className="flex items-center gap-3 font-mono font-bold">
                          <span className="text-[#00d26a] flex items-center gap-1">
                            {profile.codSuccess} <CheckCircle2 className="w-3.5 h-3.5" />
                          </span>
                          <span className="text-[#0e3752]">|</span>
                          <span className="text-[#fb7185] flex items-center gap-1">
                            {profile.codFailed} <XCircle className="w-3.5 h-3.5" />
                          </span>
                        </div>
                      </div>

                      {profile.deliveryPaySuccess !== undefined && (
                        <div className="flex items-center justify-between p-3 rounded-2xl bg-[#020e18] border border-[#0e3752] text-xs">
                          <span className="text-[#cbd5e1]">سجل Delivery Pay (مسبق)</span>
                          <div className="flex items-center gap-3 font-mono font-bold">
                            <span className="text-[#00d26a] flex items-center gap-1">
                              {profile.deliveryPaySuccess} <CheckCircle2 className="w-3.5 h-3.5" />
                            </span>
                            <span className="text-[#0e3752]">|</span>
                            <span className="text-[#fb7185] flex items-center gap-1">
                              {profile.deliveryPayFailed} <XCircle className="w-3.5 h-3.5" />
                            </span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Field Analysis & Explanation */}
                  <div className="pt-4 border-t border-[#0e3752]/80 space-y-2">
                    <span className="text-xs font-bold text-[#00b4d8] flex items-center gap-1.5">
                      <Info className="w-3.5 h-3.5 text-[#00b4d8]" />
                      التحليل والتوضيح الميداني:
                    </span>
                    <p className="text-xs text-[#cbd5e1] leading-relaxed">
                      {profile.explanation}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 2: Merchant Credibility Profiles */}
        {activeTab === 'merchant' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between text-xs text-[#94a3b8] border-b border-[#0e3752] pb-3">
              <span className="font-semibold text-white">ثانياً: واجهات مصداقية التجار (Merchant Credibility Profiles)</span>
              <span className="text-[#00b4d8]">تنسيق انسيابي سريع ومباشر</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {MERCHANT_CREDIBILITY_PROFILES.map((profile) => (
                <div 
                  key={profile.id}
                  className="rounded-3xl bg-[#041725] border border-[#0e3752] p-6 flex flex-col justify-between space-y-6 hover:border-[#00b4d8]/40 transition-all shadow-md"
                >
                  {/* Top Header Card */}
                  <div className="space-y-4">
                    <div className="flex items-start justify-between gap-3">
                      <div className="space-y-1">
                        <span className="text-xs text-[#00b4d8] block font-mono">واجهة متجر معتمد</span>
                        <h3 className="text-lg font-black text-white font-['Cairo']">
                          {profile.title}
                        </h3>
                      </div>
                      
                      {profile.statusType === 'positive' ? (
                        <div className="p-2.5 rounded-xl bg-[#00d26a]/10 text-[#00d26a] border border-[#00d26a]/30">
                          <Award className="w-6 h-6 text-[#00d26a]" />
                        </div>
                      ) : (
                        <div className="p-2.5 rounded-xl bg-[#e11d48]/10 text-[#fb7185] border border-[#e11d48]/30">
                          <ShieldAlert className="w-6 h-6 text-[#fb7185]" />
                        </div>
                      )}
                    </div>

                    {/* Status diagnostic banner */}
                    <div className={`p-2.5 rounded-xl border text-xs font-bold ${
                      profile.statusType === 'positive'
                        ? 'bg-[#00d26a]/10 border-[#00d26a]/30 text-[#00d26a]'
                        : 'bg-[#e11d48]/10 border-[#e11d48]/30 text-[#fb7185]'
                    }`}>
                      {profile.statusLabel}
                    </div>

                    {/* Fluid Indicators (NO TABLES) */}
                    <div className="space-y-2.5 pt-2">
                      <div className="flex items-center justify-between p-3.5 rounded-2xl bg-[#020e18] border border-[#0e3752] text-xs sm:text-sm">
                        <span className="text-[#cbd5e1]">سجل الدفع عند الاستلام (COD)</span>
                        <div className="flex items-center gap-3 font-mono font-bold text-sm">
                          <span className="text-[#00d26a] flex items-center gap-1">
                            {profile.codSuccess} <CheckCircle2 className="w-4 h-4" />
                          </span>
                          <span className="text-[#0e3752]">|</span>
                          <span className="text-[#fb7185] flex items-center gap-1">
                            {profile.codFailed} <XCircle className="w-4 h-4" />
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between p-3.5 rounded-2xl bg-[#020e18] border border-[#0e3752] text-xs sm:text-sm">
                        <span className="text-[#cbd5e1]">سجل Delivery Pay (تقييمات بالصور الحية عند الباب)</span>
                        <div className="flex items-center gap-3 font-mono font-bold text-sm">
                          <span className="text-[#00d26a] flex items-center gap-1">
                            {profile.deliveryPaySuccess} <CheckCircle2 className="w-4 h-4" />
                          </span>
                          <span className="text-[#0e3752]">|</span>
                          <span className="text-[#fb7185] flex items-center gap-1">
                            {profile.deliveryPayFailed} <XCircle className="w-4 h-4" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Field Analysis & Explanation */}
                  <div className="pt-4 border-t border-[#0e3752]/80 space-y-2">
                    <span className="text-xs font-bold text-[#00b4d8] flex items-center gap-1.5">
                      <Info className="w-3.5 h-3.5 text-[#00b4d8]" />
                      التحليل والتوضيح الميداني:
                    </span>
                    <p className="text-xs sm:text-sm text-[#cbd5e1] leading-relaxed">
                      {profile.explanation}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 3: Interactive Credibility Simulator */}
        {activeTab === 'simulator' && (
          <div className="p-6 sm:p-8 rounded-3xl bg-[#041725] border border-[#0e3752] space-y-8 shadow-xl">
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-white font-['Cairo'] flex items-center gap-2">
                <SlidersHorizontal className="w-5 h-5 text-[#00d26a]" />
                <span>محاكي تقييم السمعة والمصداقية التفاعلي</span>
              </h3>
              <p className="text-xs sm:text-sm text-[#94a3b8]">
                اختبر بنفسك كيف يحلل نظام AHM أي سجل طلبات ويصدر التوصية المباشرة للتاجر أو المشتري:
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Controls Column */}
              <div className="lg:col-span-7 space-y-5">
                
                {/* Age */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs">
                    <span className="text-[#cbd5e1] font-semibold">عمر الحساب:</span>
                    <span className="font-mono text-[#00d26a] font-bold">{simAccountDays} يوم</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="180"
                    value={simAccountDays}
                    onChange={(e) => setSimAccountDays(Number(e.target.value))}
                    className="w-full accent-[#00d26a] bg-[#020e18] rounded-lg cursor-pointer"
                  />
                </div>

                {/* COD Success / Failed */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-[#020e18] border border-[#0e3752] space-y-2">
                    <label className="text-xs text-[#cbd5e1] font-medium block">
                      طلبات COD ناجحة (استلام):
                    </label>
                    <div className="flex items-center gap-2">
                      <button 
                        onClick={() => setSimCodSuccess(Math.max(0, simCodSuccess - 1))}
                        className="w-8 h-8 rounded-lg bg-[#062135] hover:bg-[#0a2f4a] text-white font-bold flex items-center justify-center cursor-pointer"
                      >-</button>
                      <span className="font-mono text-lg font-bold text-[#00d26a] flex-1 text-center">{simCodSuccess}</span>
                      <button 
                        onClick={() => setSimCodSuccess(simCodSuccess + 1)}
                        className="w-8 h-8 rounded-lg bg-[#062135] hover:bg-[#0a2f4a] text-white font-bold flex items-center justify-center cursor-pointer"
                      >+</button>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#020e18] border border-[#0e3752] space-y-2">
                    <label className="text-xs text-[#cbd5e1] font-medium block">
                      طلبات COD مرفوضة (عدم استلام):
                    </label>
                    <div className="flex items-center gap-2">
                      <button 
                        onClick={() => setSimCodFailed(Math.max(0, simCodFailed - 1))}
                        className="w-8 h-8 rounded-lg bg-[#062135] hover:bg-[#0a2f4a] text-white font-bold flex items-center justify-center cursor-pointer"
                      >-</button>
                      <span className="font-mono text-lg font-bold text-[#fb7185] flex-1 text-center">{simCodFailed}</span>
                      <button 
                        onClick={() => setSimCodFailed(simCodFailed + 1)}
                        className="w-8 h-8 rounded-lg bg-[#062135] hover:bg-[#0a2f4a] text-white font-bold flex items-center justify-center cursor-pointer"
                      >+</button>
                    </div>
                  </div>
                </div>

                {/* Delivery Pay Success / Failed */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-[#020e18] border border-[#0e3752] space-y-2">
                    <label className="text-xs text-[#cbd5e1] font-medium block">
                      Delivery Pay ناجح (مطابق):
                    </label>
                    <div className="flex items-center gap-2">
                      <button 
                        onClick={() => setSimDelivSuccess(Math.max(0, simDelivSuccess - 1))}
                        className="w-8 h-8 rounded-lg bg-[#062135] hover:bg-[#0a2f4a] text-white font-bold flex items-center justify-center cursor-pointer"
                      >-</button>
                      <span className="font-mono text-lg font-bold text-[#00d26a] flex-1 text-center">{simDelivSuccess}</span>
                      <button 
                        onClick={() => setSimDelivSuccess(simDelivSuccess + 1)}
                        className="w-8 h-8 rounded-lg bg-[#062135] hover:bg-[#0a2f4a] text-white font-bold flex items-center justify-center cursor-pointer"
                      >+</button>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#020e18] border border-[#0e3752] space-y-2">
                    <label className="text-xs text-[#cbd5e1] font-medium block">
                      Delivery Pay مخالف (صور حية سلبية):
                    </label>
                    <div className="flex items-center gap-2">
                      <button 
                        onClick={() => setSimDelivFailed(Math.max(0, simDelivFailed - 1))}
                        className="w-8 h-8 rounded-lg bg-[#062135] hover:bg-[#0a2f4a] text-white font-bold flex items-center justify-center cursor-pointer"
                      >-</button>
                      <span className="font-mono text-lg font-bold text-[#fb7185] flex-1 text-center">{simDelivFailed}</span>
                      <button 
                        onClick={() => setSimDelivFailed(simDelivFailed + 1)}
                        className="w-8 h-8 rounded-lg bg-[#062135] hover:bg-[#0a2f4a] text-white font-bold flex items-center justify-center cursor-pointer"
                      >+</button>
                    </div>
                  </div>
                </div>

              </div>

              {/* Diagnosis Output Column */}
              <div className="lg:col-span-5 p-6 rounded-2xl bg-[#020e18] border border-[#0e3752] space-y-5">
                <span className="text-xs font-mono text-[#00b4d8] block">نتيجة الفحص الآلي في AHM</span>
                
                <div className={`p-4 rounded-xl border ${simResult.color} space-y-2`}>
                  <div className="text-sm font-bold flex items-center gap-2">
                    {simResult.level === 'positive' && <CheckCircle2 className="w-5 h-5 text-[#00d26a]" />}
                    {simResult.level === 'warning' && <AlertTriangle className="w-5 h-5 text-[#facc15]" />}
                    {simResult.level === 'danger' && <ShieldAlert className="w-5 h-5 text-[#fb7185]" />}
                    <span>{simResult.label}</span>
                  </div>
                </div>

                <div className="space-y-3 text-xs">
                  <div className="flex justify-between py-2 border-b border-[#0e3752] text-[#cbd5e1]">
                    <span>معدل تسليم COD:</span>
                    <span className="font-mono font-bold text-white">
                      {simCodSuccess + simCodFailed > 0 
                        ? Math.round((simCodSuccess / (simCodSuccess + simCodFailed)) * 100) 
                        : 0}%
                    </span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-[#0e3752] text-[#cbd5e1]">
                    <span>رصيد نقاط Delivery Pay الحية:</span>
                    <span className="font-mono font-bold text-[#00d26a]">+{simDelivSuccess} إيجابي / -{simDelivFailed} سلبي</span>
                  </div>
                </div>

                <div className="pt-2">
                  <span className="text-xs font-bold text-[#94a3b8] block mb-1">الإجراء النظامي الموصى به:</span>
                  <p className="text-xs text-[#cbd5e1] leading-relaxed bg-[#031422] p-3.5 rounded-xl border border-[#0e3752]">
                    {simResult.recommendation}
                  </p>
                </div>

              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
