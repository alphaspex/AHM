/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { QuickNavBadges } from './components/QuickNavBadges';
import { FeaturesSection } from './components/FeaturesSection';
import { CredibilityProfilesSection } from './components/CredibilityProfilesSection';
import { OrderWorkflowSection } from './components/OrderWorkflowSection';
import { BusinessModelSection } from './components/BusinessModelSection';
import { FaqSection } from './components/FaqSection';
import { FounderJoinSection } from './components/FounderJoinSection';
import { LiveCameraSimulatorModal } from './components/LiveCameraSimulatorModal';
import { Footer } from './components/Footer';

export default function App() {
  const [activeBadge, setActiveBadge] = useState<string>('feature-safe-shopping');
  const [isLiveCameraModalOpen, setIsLiveCameraModalOpen] = useState<boolean>(false);

  const scrollToJoinSection = () => {
    const el = document.getElementById('join-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectBadge = (id: string) => {
    setActiveBadge(id);
    const targetElement = document.getElementById(id);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <div className="min-h-screen bg-[#020d15] text-slate-100 flex flex-col font-['Cairo',sans-serif] selection:bg-[#00d26a]/30 selection:text-[#00d26a]">
      {/* Top Header */}
      <Header onJoinClick={scrollToJoinSection} />

      {/* Main Page Flow */}
      <main className="flex-1">
        {/* 1. الواجهة الرئيسية (Hero Section) */}
        <HeroSection onJoinClick={scrollToJoinSection} />

        {/* 2. شريط العناوين السريعة (Quick Navigation Badges) */}
        <QuickNavBadges 
          onSelectBadge={handleSelectBadge} 
          activeBadge={activeBadge} 
        />

        {/* 3. الشرح التفصيلي للميزات (مع معالجة الألم الميداني) */}
        <FeaturesSection 
          onOpenLiveCameraDemo={() => setIsLiveCameraModalOpen(true)} 
        />

        {/* 4. نماذج حية لواجهات مؤشرات المصداقية (العملاء والتجار) */}
        <CredibilityProfilesSection />

        {/* 5. تنظيم وتتبع سير الطلبيات الآلي */}
        <OrderWorkflowSection />

        {/* 6. النموذج التنظيمي والتأسيسي (Business Structure) */}
        <BusinessModelSection onJoinClick={scrollToJoinSection} />

        {/* 7. الأسئلة الشائعة والإجراءات التفصيلية (FAQ & Operating Rules) */}
        <FaqSection />

        {/* 8. رابط الانضمام المباشر (Conversion Section) */}
        <FounderJoinSection />
      </main>

      {/* Live Camera & Offline Simulator Modal */}
      <LiveCameraSimulatorModal
        isOpen={isLiveCameraModalOpen}
        onClose={() => setIsLiveCameraModalOpen(false)}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
}
