import React from 'react';
import { 
  Zap, 
  Store, 
  Layers, 
  UserCheck, 
  Smartphone, 
  Camera, 
  ShieldAlert, 
  ShieldCheck, 
  CreditCard, 
  CheckCircle2, 
  XCircle, 
  Scale, 
  Eye
} from 'lucide-react';

interface FeaturesSectionProps {
  onOpenLiveCameraDemo: () => void;
}

export const FeaturesSection: React.FC<FeaturesSectionProps> = ({ onOpenLiveCameraDemo }) => {
  return (
    <section id="features" className="py-20 bg-[#020d15] border-b border-[#0e3752]/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="flex items-center gap-2 text-xs font-bold text-[#00d26a]">
            <Zap className="w-4 h-4 text-[#00d26a]" />
            <span>الشرح التفصيلي للميزات والحلول الميدانية</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white font-['Cairo'] tracking-tight">
            حلول هندسية صُممت خصيصاً لمعالجة أزمات التجارة الإلكترونية في الجزائر
          </h2>
          <p className="text-[#94a3b8] text-sm sm:text-base leading-relaxed">
            تجاوزنا الأنماط التقليدية التي تستنزف ميزانية التاجر وتخذل المشتري، وبنينا نظاماً يعالج جذور مشاكل الطرود المرجعة والاحتيال.
          </p>
        </div>

        {/* Feature A: تسوّق آمن، مخصّص و سريع */}
        <div id="feature-safe-shopping" className="p-6 sm:p-8 rounded-3xl bg-[#041725] border border-[#0e3752] space-y-6 shadow-lg">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#0e3752]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#062438] border border-[#00d26a]/30 flex items-center justify-center text-[#00d26a]">
                <Store className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-black text-white font-['Cairo']">
                  أ. تسوّق آمن، مخصّص و سريع
                </h3>
                <span className="text-xs text-[#94a3b8]">مساران ذكيان لتلبية سلوكيات الشراء المختلفة</span>
              </div>
            </div>
            <div className="flex items-center gap-2 text-xs text-[#94a3b8]">
              <span className="font-mono text-[#00d26a] font-bold">بدون مزادات إعلانية</span>
              <span aria-hidden="true" className="text-[#0e3752]">·</span>
              <span className="text-[#00b4d8]">توجيه مباشر</span>
            </div>
          </div>

          <p className="text-[#cbd5e1] text-sm sm:text-base leading-relaxed">
            تتيح المنصة مسارين لتصفح المنتجات والمتاجر لتلبية مختلف سلوكيات الشراء:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Track 1: Store Directory */}
            <div className="p-5 rounded-2xl bg-[#020e18] border border-[#0e3752] space-y-3">
              <div className="flex items-center gap-2 text-[#00d26a] font-bold text-sm">
                <Store className="w-4 h-4" />
                <h4>دليل المتاجر (Store Directory)</h4>
              </div>
              <p className="text-xs sm:text-sm text-[#cbd5e1] leading-relaxed">
                يمنح التاجر مساحة مستقلة تعرض برانده ومنتجاته فقط، لتفادي تشتيت الزبون بإعلانات المنافسين أو المقارنات العشوائية. رابط مباشر لمتجرك يعزز هوية علامتك التجارية.
              </p>
            </div>

            {/* Track 2: Product Catalog */}
            <div className="p-5 rounded-2xl bg-[#020e18] border border-[#0e3752] space-y-3">
              <div className="flex items-center gap-2 text-[#00b4d8] font-bold text-sm">
                <Layers className="w-4 h-4" />
                <h4>فهرس المنتجات (Product Catalog)</h4>
              </div>
              <p className="text-xs sm:text-sm text-[#cbd5e1] leading-relaxed">
                تنظيم دقيق عبر فئات رئيسية وفرعية وتخصصات دقيقة، لتوصيل الزبون الذي يبحث عن قطعة محددة إلى منتجك مباشرة دون الحاجة لاستنزاف الميزانية في مزادات الإعلانات الممولة.
              </p>
            </div>
          </div>
        </div>

        {/* Feature B: توثيق هويّة العملاء */}
        <div id="feature-identity" className="p-6 sm:p-8 rounded-3xl bg-[#041725] border border-[#0e3752] space-y-6 shadow-lg">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#0e3752]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#062438] border border-[#00d26a]/30 flex items-center justify-center text-[#00d26a]">
                <UserCheck className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-black text-white font-['Cairo']">
                  ب. توثيق هويّة العملاء
                </h3>
                <span className="text-xs text-[#94a3b8]">ربط بروتوكول الحسابات وتأكيد الطلبات بشريحة الـ SIM و WhatsApp</span>
              </div>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-[#00d26a]">
              <Smartphone className="w-4 h-4" />
              <span className="font-mono">رقم حقيقي وموثق</span>
            </div>
          </div>

          <p className="text-[#cbd5e1] text-sm sm:text-base leading-relaxed">
            ربط بروتوكول فتح الحسابات وتأكيد الطلبات آلياً برقم هاتف الـ SIM المحلي عبر تطبيق WhatsApp.
          </p>

          {/* Pain Point Addressed */}
          <div className="p-5 rounded-2xl bg-[#230910]/70 border border-[#e11d48]/30 space-y-2">
            <div className="flex items-center gap-2 text-[#fb7185] font-bold text-xs sm:text-sm">
              <ShieldAlert className="w-4 h-4 text-[#fb7185] shrink-0" />
              <span>الألم الميداني المعالج:</span>
            </div>
            <p className="text-xs sm:text-sm text-[#cbd5e1] leading-relaxed pr-6">
              القضاء على مشكلة الحسابات الوهمية والطلبات الكيدية على شبكات التواصل الاجتماعي، والتي كانت تتسبب في خروج طرود لزبائن غير موجودين وتحميل التاجر رسوم شحن مجانية. كل طلب يصدر من رقم هاتف جزائري حقيقي وموثق مسبقاً.
            </p>
          </div>
        </div>

        {/* Feature C: نظام تتبع صور حيّة للمنتجات */}
        <div id="feature-camera" className="p-6 sm:p-8 rounded-3xl bg-[#041725] border border-[#0e3752] space-y-6 shadow-lg">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#0e3752]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#062438] border border-[#00d26a]/30 flex items-center justify-center text-[#00d26a]">
                <Camera className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-black text-white font-['Cairo']">
                  ج. نظام تتبع صور حيّة للمنتجات
                </h3>
                <span className="text-xs text-[#00d26a] font-bold">📸 لا يتسامح AHM مع الغشّ | بدون تعديل</span>
              </div>
            </div>
            <button
              onClick={onOpenLiveCameraDemo}
              className="px-4 py-2 text-xs font-bold text-[#00d26a] hover:text-white bg-[#02131f] hover:bg-[#062438] border border-[#00d26a]/40 rounded-xl flex items-center gap-2 transition-colors cursor-pointer"
            >
              <Eye className="w-3.5 h-3.5 text-[#00b4d8]" />
              <span>معاينة فاحص الكاميرا الحية</span>
            </button>
          </div>

          <p className="text-[#cbd5e1] text-sm sm:text-base leading-relaxed">
            تعتمد المنصة على فتح كاميرا المتصفح المباشرة لالتقاط صورة حية للمنتج عند إضافته من طرف التاجر، بدلاً من رفع صور من المعرض.
          </p>

          {/* Pain Point Addressed */}
          <div className="p-5 rounded-2xl bg-[#230910]/70 border border-[#e11d48]/30 space-y-2">
            <div className="flex items-center gap-2 text-[#fb7185] font-bold text-xs sm:text-sm">
              <ShieldAlert className="w-4 h-4 text-[#fb7185] shrink-0" />
              <span>الألم الميداني المعالج:</span>
            </div>
            <p className="text-xs sm:text-sm text-[#cbd5e1] leading-relaxed pr-6">
              إنهاء التنافس غير الشريف مع أصحاب الصور المستوردة والمعدلة بتطبيقات الفوتوشوب، والتي كانت تصدم الزبون عند الاستلام وتتسبب في رفض الطرد وفقدان الثقة في الشراء الإلكتروني. المشتري يرى السلعة الواقعية كما هي تماماً.
            </p>
          </div>
        </div>

        {/* Feature D: حماية حقوق الزبون ومزايا اختيار Delivery Pay */}
        <div id="feature-delivery-pay" className="p-6 sm:p-8 rounded-3xl bg-[#041725] border border-[#0e3752] space-y-6 shadow-lg">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#0e3752]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#062438] border border-[#00d26a]/30 flex items-center justify-center text-[#00d26a]">
                <CreditCard className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-black text-white font-['Cairo']">
                  د. حماية حقوق الزبون ومزايا اختيار Delivery Pay
                </h3>
                <span className="text-xs text-[#94a3b8]">الدفع المسبق لتكاليف التوصيل مع خصم تشجيعي</span>
              </div>
            </div>
            <div className="flex items-center gap-2 text-xs text-[#00b4d8] font-mono">
              <span>BaridiMob</span>
              <span aria-hidden="true" className="text-[#0e3752]">·</span>
              <span>CCP</span>
              <span aria-hidden="true" className="text-[#0e3752]">·</span>
              <span>Sofizpay</span>
            </div>
          </div>

          <p className="text-[#cbd5e1] text-sm sm:text-base leading-relaxed">
            يتيح هذا الخيار للمشتري دفع مصاريف الشحن مسبقاً عبر وسائط الدفع المعتمدة (BaridiMob / CCP / Sofizpay)، مع احتفاظ التاجر بالحرية الكاملة لتحديد قيمة الخصم التشجيعي الذي يمنحه للزبون على سعر السلعة.
          </p>

          {/* Pain Point Addressed */}
          <div className="p-5 rounded-2xl bg-[#230910]/70 border border-[#e11d48]/30 space-y-2">
            <div className="flex items-center gap-2 text-[#fb7185] font-bold text-xs sm:text-sm">
              <ShieldAlert className="w-4 h-4 text-[#fb7185] shrink-0" />
              <span>الألم الميداني المعالج:</span>
            </div>
            <p className="text-xs sm:text-sm text-[#cbd5e1] leading-relaxed pr-6">
              حماية هامش ربح التاجر من ظاهرة "غيرت رأيي عند باب المنزل"، حيث تكون تكلفة التوصيل مغطاة بالكامل مسبقاً، وفي المقابل يحصل الزبون الجاد على خفض ملموس وأولوية في معالجة طلبيه.
            </p>
          </div>
        </div>

        {/* Feature E: نظام حماية البائع الصادق ونظام ردع التاجر الغشاش */}
        <div id="feature-points-system" className="p-6 sm:p-8 rounded-3xl bg-[#041725] border border-[#0e3752] space-y-6 shadow-lg">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#0e3752]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#062438] border border-[#00d26a]/30 flex items-center justify-center text-[#00d26a]">
                <Scale className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-black text-white font-['Cairo']">
                  هـ. نظام حماية البائع الصادق ونظام ردع التاجر الغشاش
                </h3>
                <span className="text-xs text-[#94a3b8]">نظام النقاط الإيجابية والسلبية بقواعد عادلة وشفافة</span>
              </div>
            </div>
            <span className="text-xs font-semibold text-[#00d26a]">قواعد حاسمة تفصل بين Delivery Pay و COD</span>
          </div>

          <p className="text-[#cbd5e1] text-sm sm:text-base leading-relaxed">
            قواعد محددة وشفافة تفصل بين طلبات الدفع عند الاستلام (COD) وطلبات الدفع المسبق للشحن (Delivery Pay) لبناء سمعة موثوقة:
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            
            {/* Case 1: Delivery Pay Rules */}
            <div className="p-6 rounded-2xl bg-[#020e18] border border-[#0e3752] space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#0e3752]">
                <h4 className="text-base font-bold text-white flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#00d26a]" />
                  <span>في حالات Delivery Pay:</span>
                </h4>
                <span className="text-xs text-[#00d26a] font-mono">دفع مسبق للشحن</span>
              </div>

              <div className="space-y-3 text-xs sm:text-sm">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#00d26a] shrink-0 mt-0.5" />
                  <p className="text-[#cbd5e1] leading-relaxed">
                    <strong className="text-white">النقاط الإيجابية:</strong> عند استلام الزبون للطلب ومطابقته للمواصفات مع مسح الـ QR Code، يحصل المتجر والزبون على <span className="font-mono text-[#00d26a] font-bold">(+1 نقطة إيجابية)</span>.
                  </p>
                </div>

                <div className="flex items-start gap-2.5">
                  <XCircle className="w-4 h-4 text-[#fb7185] shrink-0 mt-0.5" />
                  <p className="text-[#cbd5e1] leading-relaxed">
                    <strong className="text-white">النقاط السلبية:</strong> يحق للمشتري عند وصول منتج مخالف التقاط صورة حية للمنتج عند الباب (حتى عند انقطاع الإنترنت عبر ميزة الحفظ والتمرير الآلي)، وتسجيل <span className="font-mono text-[#fb7185] font-bold">(-1 نقطة سلبية)</span> في خانة Delivery Pay على بروفايل المتجر مع إظهار الصورة علناً للجمهور.
                  </p>
                </div>
              </div>

              {/* Delivery Pay Pain point */}
              <div className="pt-3 border-t border-[#0e3752]/80">
                <p className="text-xs text-[#94a3b8] leading-relaxed">
                  <span className="font-bold text-[#cbd5e1]">الألم المعالج:</span> ردع التجار الغشاشين بشفافية علنية، مع حماية البائع الصادق من التجميد الآلي المباشر الذي قد يستغله المنافسون الحاقدون عبر بلاغات كيدية.
                </p>
              </div>
            </div>

            {/* Case 2: COD Rules */}
            <div className="p-6 rounded-2xl bg-[#020e18] border border-[#0e3752] space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#0e3752]">
                <h4 className="text-base font-bold text-white flex items-center gap-2">
                  <Zap className="w-4 h-4 text-[#00b4d8]" />
                  <span>في حالات COD:</span>
                </h4>
                <span className="text-xs text-[#00b4d8] font-mono">الدفع عند الاستلام</span>
              </div>

              <div className="space-y-3 text-xs sm:text-sm">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#00d26a] shrink-0 mt-0.5" />
                  <p className="text-[#cbd5e1] leading-relaxed">
                    <strong className="text-white">النقاط الإيجابية:</strong> يحصل الزبون الذي يستلم طرده ويمسح الـ QR على <span className="font-mono text-[#00d26a] font-bold">(+1 نقطة ثقة إيجابية)</span> في حسابه.
                  </p>
                </div>

                <div className="flex items-start gap-2.5">
                  <XCircle className="w-4 h-4 text-[#fb7185] shrink-0 mt-0.5" />
                  <p className="text-[#cbd5e1] leading-relaxed">
                    <strong className="text-white">النقاط السلبية:</strong> يقتصر حق التقييم للمشتري على التقييم الإيجابي فقط عند الاستلام. وفي حال كذب الزبون وادعائه الاستلام دون دفع، يرفع التاجر بلاغاً يتسبب في خصم تلقائي لـ <span className="font-mono text-[#fb7185] font-bold">(-3 طلبات مرفوضة)</span> في سجل الزبون.
                  </p>
                </div>
              </div>

              {/* COD Pain point */}
              <div className="pt-3 border-t border-[#0e3752]/80">
                <p className="text-xs text-[#94a3b8] leading-relaxed">
                  <span className="font-bold text-[#cbd5e1]">الألم المعالج:</span> حماية التجار من ادعاءات زبائن الـ COD الذين لم يدفعوا شيئاً من جيبهم، ومنع استغلال نظام التقييم الكيدي ضد المتاجر.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
