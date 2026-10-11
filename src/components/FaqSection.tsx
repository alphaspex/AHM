import React, { useState } from 'react';
import { 
  HelpCircle, 
  ChevronDown, 
  ChevronUp, 
  Search, 
  Store, 
  UserCheck, 
  WifiOff
} from 'lucide-react';
import { MERCHANT_FAQS, BUYER_FAQS, FaqItem } from '../data/landingData';

export const FaqSection: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'merchant' | 'buyer'>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [expandedIds, setExpandedIds] = useState<Set<string>>(new Set(['m-faq-1', 'b-faq-3']));

  const allFaqs: FaqItem[] = [...MERCHANT_FAQS, ...BUYER_FAQS];

  const filteredFaqs = allFaqs.filter((item) => {
    const matchesCategory = filter === 'all' || item.category === filter;
    const matchesSearch = 
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleExpand = (id: string) => {
    setExpandedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  return (
    <section id="faq" className="py-20 bg-[#020d15] border-b border-[#0e3752]/70">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs font-bold text-[#00d26a]">
            <HelpCircle className="w-4 h-4 text-[#00d26a]" />
            <span>الأسئلة الشائعة والإجراءات التفصيلية (FAQ & Operating Rules)</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white font-['Cairo'] tracking-tight">
            دليل القواعد والإجراءات التشغيلية الميدانية الشاملة
          </h2>
          <p className="text-[#94a3b8] text-sm sm:text-base leading-relaxed">
            إجابات دقيقة ومفصلة لكل استفسار وإجراء قد يخطر ببال التاجر أو المشتري، لضمان الشفافية المطلقة من اليوم الأول.
          </p>
        </div>

        {/* Filter Tabs and Search Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          
          {/* Segmented Category Buttons */}
          <div className="flex items-center gap-1.5 p-1 bg-[#020e18] border border-[#0e3752] rounded-2xl">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 text-xs font-bold rounded-xl transition-colors cursor-pointer ${
                filter === 'all' ? 'bg-[#062135] text-white shadow-sm' : 'text-[#94a3b8] hover:text-white'
              }`}
            >
              جميع الأسئلة ({allFaqs.length})
            </button>
            <button
              onClick={() => setFilter('merchant')}
              className={`px-4 py-2 text-xs font-bold rounded-xl transition-colors flex items-center gap-1.5 cursor-pointer ${
                filter === 'merchant' ? 'bg-[#00d26a] text-[#020d15] shadow-sm' : 'text-[#94a3b8] hover:text-white'
              }`}
            >
              <Store className="w-3.5 h-3.5" />
              <span>إجراءات التجار ({MERCHANT_FAQS.length})</span>
            </button>
            <button
              onClick={() => setFilter('buyer')}
              className={`px-4 py-2 text-xs font-bold rounded-xl transition-colors flex items-center gap-1.5 cursor-pointer ${
                filter === 'buyer' ? 'bg-[#00b4d8] text-[#020d15] shadow-sm' : 'text-[#94a3b8] hover:text-white'
              }`}
            >
              <UserCheck className="w-3.5 h-3.5" />
              <span>إجراءات المشترين ({BUYER_FAQS.length})</span>
            </button>
          </div>

          {/* Search Box */}
          <div className="relative w-full sm:w-72">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="ابحث في الأسئلة أو الكلمات..."
              className="w-full px-4 py-2.5 pr-10 text-xs bg-[#041725] border border-[#0e3752] rounded-xl text-white placeholder-[#64748b] focus:outline-none focus:border-[#00d26a] transition-colors"
            />
            <Search className="w-4 h-4 text-[#64748b] absolute right-3 top-3" />
          </div>

        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {filteredFaqs.length === 0 ? (
            <div className="p-8 text-center rounded-2xl bg-[#041725] border border-[#0e3752] text-[#94a3b8] text-sm">
              لم يتم العثور على أسئلة تطابق بحثك. جرّب كلمات أخرى.
            </div>
          ) : (
            filteredFaqs.map((faq) => {
              const isExpanded = expandedIds.has(faq.id);
              const isMerchant = faq.category === 'merchant';

              return (
                <div
                  key={faq.id}
                  className={`rounded-3xl border transition-all ${
                    isExpanded 
                      ? 'bg-[#041725] border-[#00d26a]/40 shadow-lg' 
                      : 'bg-[#03131f] border-[#0e3752] hover:border-[#00b4d8]/40'
                  }`}
                >
                  <button
                    onClick={() => toggleExpand(faq.id)}
                    className="w-full p-5 sm:p-6 text-right flex items-start justify-between gap-4 cursor-pointer"
                  >
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2">
                        <span className={`text-[11px] font-bold font-mono ${isMerchant ? 'text-[#00d26a]' : 'text-[#00b4d8]'}`}>
                          {isMerchant ? 'أسئلة التجار' : 'أسئلة المشترين'}
                        </span>
                        {faq.id === 'b-faq-3' && (
                          <span className="text-[11px] text-[#facc15] flex items-center gap-1 font-mono">
                            <WifiOff className="w-3 h-3" /> ميزة أوفلاين (IndexedDB)
                          </span>
                        )}
                      </div>
                      <h3 className="text-sm sm:text-base font-bold text-white leading-snug font-['Cairo']">
                        {faq.question}
                      </h3>
                    </div>

                    <div className="p-1.5 rounded-xl bg-[#020e18] text-[#94a3b8] shrink-0 mt-1">
                      {isExpanded ? (
                        <ChevronUp className="w-4 h-4 text-[#00d26a]" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </div>
                  </button>

                  {isExpanded && (
                    <div className="px-5 sm:px-6 pb-6 pt-2 border-t border-[#0e3752]/70">
                      <p className="text-xs sm:text-sm text-[#cbd5e1] leading-relaxed bg-[#020e18] p-4 rounded-2xl border border-[#0e3752]/60">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

      </div>
    </section>
  );
};
