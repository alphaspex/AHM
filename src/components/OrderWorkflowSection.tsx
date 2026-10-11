import React, { useState } from 'react';
import { 
  FileText, 
  QrCode, 
  Truck, 
  CheckCircle, 
  Coins, 
  HelpCircle 
} from 'lucide-react';

export const OrderWorkflowSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      num: '01',
      title: 'إنشاء الطلب وتوثيق الهوية',
      summary: 'تأكيد فوري عبر رقم SIM الحقيقي في WhatsApp لمنع الحسابات الوهمية.',
      icon: FileText,
      detail: 'يقوم الزبون بطلب المنتج سواء من دليل المتاجر أو الفهرس، ويتم التحقق من رقم الـ SIM المحلي تلقائياً دون الحاجة لملء استمارات طويلة.'
    },
    {
      num: '02',
      title: 'تجهيز الطرد وملصق الـ QR الموحد',
      summary: 'توليد ملصق QR يطبع في السيبر بـ 10 إلى 20 دج فقط دون تكلفة طابعة حرارية.',
      icon: QrCode,
      detail: 'يجمع النظام ملصقات اليوم في صفحة A4 واحدة سهلة الإرسال للسيبر بنقرة واتساب واحدة، جاهزة للقص والإلصاق على علب الشحن.'
    },
    {
      num: '03',
      title: 'مسح الرمز وانطلاق الشحن',
      summary: 'مسح الهاتف للـ QR يحدث حالة الطلب ويرسل إشعاراً آلياً بالمسار للزبون.',
      icon: Truck,
      detail: 'بمجرد تمرير الهاتف ومسح الرمز، يتأكد النظام من خروج الطرد مع شركة التوصيل المعتمدة وتحديث التتبع اللحظي فوراً.'
    },
    {
      num: '04',
      title: 'التسليم عند الباب والتصوير الحي',
      summary: 'فصل ذكي بين الدفع عند الاستلام (COD) والدفع المسبق (Delivery Pay).',
      icon: CheckCircle,
      detail: 'في Delivery Pay، يمسح الزبون الـ QR (+1 نقطة)، وفي حال وجود عيب تلتقط الكاميرا المباشرة صورة حية (-1 نقطة علنية). وفي COD يتأكد الاستلام بعد تحصيل المال.'
    },
    {
      num: '05',
      title: 'التسوية المالية واحتساب النقاط',
      summary: '0 دج على المرجعات، ومهلة مرونة تصل إلى 75 يوماً للتسديد.',
      icon: Coins,
      detail: 'تقتطع عمولة النجاح فقط (30 دج لـ COD / 20 دج لـ Delivery Pay)، وتُضاف نقاط السمعة الإيجابية لحساب التاجر والزبون تلقائياً.'
    }
  ];

  return (
    <section id="workflow" className="py-20 bg-[#020d15] border-b border-[#0e3752]/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="flex items-center gap-2 text-xs font-bold text-[#00d26a]">
            <Truck className="w-4 h-4 text-[#00d26a]" />
            <span>تنظيم وتتبع سير الطلبيات الآلي</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white font-['Cairo'] tracking-tight">
            سير خطى الطلب الآلي من لحظة الإنشاء حتى تصفية الحساب
          </h2>
          <p className="text-[#cbd5e1] text-sm sm:text-base leading-relaxed">
            تتمتع منصة AHM بنظام ذكي يعالج مختلف الحالات والإجراءات التشغيلية آلياً؛ حيث ينظم خطى الطلب من لحظة إنشائه وحتى وصوله وتصفية حسابه، مما يضمن سير العملية بسلاسة وحماية كاملة لحقوق الطرفين دون تدخل يدوي معقد.
          </p>
        </div>

        {/* Workflow Streamlined Steps */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isSelected = activeStep === idx;
            return (
              <div
                key={step.num}
                onClick={() => setActiveStep(idx)}
                className={`p-5 rounded-3xl border transition-all cursor-pointer flex flex-col justify-between space-y-4 ${
                  isSelected
                    ? 'bg-[#062438] border-[#00d26a] shadow-[0_0_25px_rgba(0,210,106,0.2)]'
                    : 'bg-[#041725] border-[#0e3752] hover:border-[#00b4d8]/40'
                }`}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-[#00d26a]">{step.num}</span>
                    <div className={`p-2 rounded-2xl ${isSelected ? 'bg-[#00d26a]/20 text-[#00d26a]' : 'bg-[#020e18] text-[#00b4d8]'}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>
                  <h3 className="text-sm font-bold text-white font-['Cairo']">
                    {step.title}
                  </h3>
                  <p className="text-xs text-[#94a3b8] leading-relaxed">
                    {step.summary}
                  </p>
                </div>

                <div className="pt-2 border-t border-[#0e3752]/70 flex items-center justify-between text-[11px] text-[#00b4d8]">
                  <span>{isSelected ? 'المرحلة المحددة' : 'انقر للتفاصيل'}</span>
                  {idx < steps.length - 1 && (
                    <span className="hidden md:inline font-bold">←</span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Step Detail Callout */}
        <div className="p-6 rounded-3xl bg-[#041725] border border-[#0e3752] flex flex-col sm:flex-row sm:items-center justify-between gap-6 shadow-lg">
          <div className="space-y-1.5">
            <span className="text-xs text-[#00d26a] font-bold block">
              شرح تشغيلي معمّق للمرحلة ({steps[activeStep].num} — {steps[activeStep].title}):
            </span>
            <p className="text-sm text-[#cbd5e1] leading-relaxed">
              {steps[activeStep].detail}
            </p>
          </div>

          <a
            href="#faq"
            className="px-4 py-2.5 text-xs font-bold text-[#cbd5e1] hover:text-white bg-[#020e18] hover:bg-[#062438] border border-[#0e3752] rounded-xl transition-colors flex items-center gap-2 whitespace-nowrap shrink-0 self-start sm:self-center"
          >
            <HelpCircle className="w-4 h-4 text-[#00b4d8]" />
            <span>عرض الحالات التفصيلية في الأسئلة الشائعة</span>
          </a>
        </div>

      </div>
    </section>
  );
};
