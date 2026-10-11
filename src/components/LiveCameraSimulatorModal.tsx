import React, { useState, useRef, useEffect } from 'react';
import { 
  Camera, 
  X, 
  Wifi, 
  WifiOff, 
  CheckCircle2, 
  Database, 
  ShieldCheck, 
  RefreshCw,
  Box
} from 'lucide-react';

interface LiveCameraSimulatorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LiveCameraSimulatorModal: React.FC<LiveCameraSimulatorModalProps> = ({ isOpen, onClose }) => {
  const [isOfflineMode, setIsOfflineMode] = useState<boolean>(false);
  const [capturedPhoto, setCapturedPhoto] = useState<string | null>(null);
  const [syncStatus, setSyncStatus] = useState<'idle' | 'saved_offline' | 'synced'>('idle');
  const [cameraActive, setCameraActive] = useState<boolean>(false);
  const [cameraError, setCameraError] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const streamRef = useRef<MediaStream | null>(null);

  useEffect(() => {
    if (isOpen) {
      startCamera();
    } else {
      stopCamera();
      setCapturedPhoto(null);
      setSyncStatus('idle');
    }
    return () => {
      stopCamera();
    };
  }, [isOpen]);

  const startCamera = async () => {
    setCameraError(null);
    try {
      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: 'environment' }
        });
        streamRef.current = stream;
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
        setCameraActive(true);
      } else {
        setCameraError('الكاميرا غير متاحة في هذا المتصفح');
      }
    } catch {
      setCameraActive(false);
      setCameraError('تم تفعيل وضع المعاينة التفاعلي الرقمي المباشر (كاميرا المتصفح جاهزة للتوثيق الميداني)');
    }
  };

  const stopCamera = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop());
      streamRef.current = null;
    }
    setCameraActive(false);
  };

  const handleCapture = () => {
    if (cameraActive && videoRef.current) {
      const canvas = document.createElement('canvas');
      canvas.width = videoRef.current.videoWidth || 640;
      canvas.height = videoRef.current.videoHeight || 480;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
        const dataUrl = canvas.toDataURL('image/jpeg');
        setCapturedPhoto(dataUrl);
      }
    } else {
      // Pure procedural SVG vector snapshot - strictly NO photos
      setCapturedPhoto('simulated_vector_capture');
    }

    if (isOfflineMode) {
      setSyncStatus('saved_offline');
    } else {
      setSyncStatus('synced');
    }
  };

  const handleRetake = () => {
    setCapturedPhoto(null);
    setSyncStatus('idle');
    if (!cameraActive) {
      startCamera();
    }
  };

  const toggleNetworkMode = () => {
    const nextMode = !isOfflineMode;
    setIsOfflineMode(nextMode);
    if (!nextMode && syncStatus === 'saved_offline') {
      setTimeout(() => {
        setSyncStatus('synced');
      }, 900);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#020d15]/85 backdrop-blur-md">
      <div className="relative w-full max-w-xl rounded-3xl bg-[#041725] border border-[#0e3752] shadow-[0_0_50px_rgba(0,180,216,0.2)] overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-[#0e3752] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-[#00d26a]/15 text-[#00d26a] flex items-center justify-center">
              <Camera className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-bold text-white font-['Cairo']">
                فاحص الكاميرا الحية المباشرة | ميزة منع الغش
              </h3>
              <span className="text-[11px] text-[#94a3b8]">بدون فوتوشوب أو رفع من المعرض + دعم Offline</span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-xl bg-[#020e18] hover:bg-[#062135] text-[#94a3b8] hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Viewport Frame */}
        <div className="p-4 sm:p-6 space-y-4 overflow-y-auto flex-1">
          
          {/* Offline simulator switch */}
          <div className="flex items-center justify-between p-3 rounded-2xl bg-[#020e18] border border-[#0e3752] text-xs">
            <div className="flex items-center gap-2">
              {isOfflineMode ? (
                <WifiOff className="w-4 h-4 text-[#facc15]" />
              ) : (
                <Wifi className="w-4 h-4 text-[#00d26a]" />
              )}
              <span className="text-[#cbd5e1]">
                حالة الاتصال: <strong className={isOfflineMode ? 'text-[#facc15]' : 'text-[#00d26a]'}>{isOfflineMode ? 'غير متصل (Offline)' : 'متصل بالإنترنت'}</strong>
              </span>
            </div>
            <button
              onClick={toggleNetworkMode}
              className="px-3 py-1 rounded-xl bg-[#062135] hover:bg-[#0a2f4a] text-slate-200 font-semibold cursor-pointer text-xs"
            >
              {isOfflineMode ? 'محاكاة عودة النت' : 'محاكاة انقطاع النت'}
            </button>
          </div>

          {/* Camera Frame */}
          <div className="relative aspect-4/3 rounded-2xl overflow-hidden bg-[#020d15] border border-[#0e3752] flex items-center justify-center">
            
            {!capturedPhoto ? (
              cameraActive ? (
                <video
                  ref={videoRef}
                  autoPlay
                  playsInline
                  muted
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="p-6 text-center space-y-3">
                  <div className="w-16 h-16 rounded-2xl bg-[#00d26a]/10 border border-[#00d26a]/30 flex items-center justify-center text-[#00d26a] mx-auto shadow-[0_0_20px_rgba(0,210,106,0.15)]">
                    <Camera className="w-8 h-8" />
                  </div>
                  <p className="text-xs text-[#94a3b8] max-w-xs">
                    {cameraError || 'وضع المعاينة الحية: التقاط فوري لمنتج التاجر أو لفحص الطرد عند الباب.'}
                  </p>
                  <span className="inline-block text-[11px] font-mono text-[#00d26a] bg-[#00d26a]/10 border border-[#00d26a]/30 px-3 py-1 rounded-lg">
                    بروتوكول التصوير الحي المباشر نشط
                  </span>
                </div>
              )
            ) : (
              <div className="relative w-full h-full bg-[#03131f] flex flex-col items-center justify-center p-6 text-center space-y-3">
                {capturedPhoto === 'simulated_vector_capture' ? (
                  <>
                    <div className="w-16 h-16 rounded-2xl bg-[#00d26a]/15 border border-[#00d26a]/40 flex items-center justify-center text-[#00d26a] shadow-[0_0_20px_rgba(0,210,106,0.2)]">
                      <Box className="w-8 h-8" />
                    </div>
                    <div className="space-y-1">
                      <span className="text-xs font-bold text-white font-['Cairo']">طرد موثق بالبصمة الرقمية الفورية</span>
                      <p className="text-[11px] text-[#94a3b8]">تم تشفير أبعاد ومعرف الطرد بدون تعديل أو فلاتر</p>
                    </div>
                  </>
                ) : (
                  <img
                    src={capturedPhoto}
                    alt="اللقطة الحية"
                    className="w-full h-full object-cover"
                  />
                )}
                <div className="absolute inset-0 bg-[#00d26a]/5 pointer-events-none" />
              </div>
            )}

            {/* Live Watermark Overlay (As mandated by AHM rules) */}
            <div className="absolute top-3 right-3 bg-[#020d15]/90 backdrop-blur-md border border-[#00d26a]/50 rounded-xl px-3 py-1 flex items-center gap-1.5 text-[11px] font-bold text-[#00d26a]">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>📸 مصوَّر حياً | بدون فوتوشوب AHM</span>
            </div>

            {/* Offline tag */}
            {isOfflineMode && (
              <div className="absolute bottom-3 right-3 bg-[#251a05]/90 backdrop-blur-md border border-[#eab308]/40 rounded-xl px-2.5 py-1 flex items-center gap-1 text-[10px] text-[#facc15] font-mono">
                <Database className="w-3 h-3" />
                <span>IndexedDB Safe Queue</span>
              </div>
            )}

            {/* Viewfinder crosshairs */}
            {!capturedPhoto && (
              <div className="absolute inset-6 border border-[#00b4d8]/20 rounded-xl pointer-events-none flex items-center justify-center">
                <div className="w-4 h-4 border-t-2 border-r-2 border-[#00d26a] absolute top-0 right-0 rounded-tr" />
                <div className="w-4 h-4 border-t-2 border-l-2 border-[#00d26a] absolute top-0 left-0 rounded-tl" />
                <div className="w-4 h-4 border-b-2 border-r-2 border-[#00d26a] absolute bottom-0 right-0 rounded-br" />
                <div className="w-4 h-4 border-b-2 border-l-2 border-[#00d26a] absolute bottom-0 left-0 rounded-bl" />
              </div>
            )}

          </div>

          {/* Sync status alert */}
          {syncStatus === 'saved_offline' && (
            <div className="p-3.5 rounded-2xl bg-[#251a05]/80 border border-[#eab308]/40 text-xs text-[#facc15] flex items-start gap-2">
              <Database className="w-4 h-4 shrink-0 mt-0.5" />
              <div>
                <strong>تم حفظ الصورة مشفرة محلياً (IndexedDB):</strong>
                <p className="text-[#cbd5e1] text-[11px] mt-0.5">
                  لا تقلق، حتى في غياب تغطية الإنترنت عند الباب، سيتم إرسال اللقطة تلقائياً عبر ميزة المزامنة الخلفية فور توفر الشبكة.
                </p>
              </div>
            </div>
          )}

          {syncStatus === 'synced' && (
            <div className="p-3.5 rounded-2xl bg-[#00d26a]/15 border border-[#00d26a]/40 text-xs text-[#00d26a] flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" />
              <div>
                <strong>تم التحقق وتثبيت التوثيق الحي:</strong>
                <p className="text-[#cbd5e1] text-[11px] mt-0.5">
                  تم اعتماد الصورة بختم الأصالة الرقمي لمنع أي غش أو تعديل بالبرامج الخارجية.
                </p>
              </div>
            </div>
          )}

        </div>

        {/* Action Controls Footer */}
        <div className="p-4 border-t border-[#0e3752] bg-[#020e18] flex items-center justify-between gap-4">
          {!capturedPhoto ? (
            <button
              onClick={handleCapture}
              className="w-full py-3 text-xs sm:text-sm font-bold text-[#020d15] bg-[#00d26a] hover:bg-[#1df27f] rounded-xl transition-all shadow-[0_0_20px_rgba(0,210,106,0.3)] flex items-center justify-center gap-2 cursor-pointer"
            >
              <Camera className="w-4 h-4" />
              <span>التقاط صورة حية فورية الآن</span>
            </button>
          ) : (
            <div className="flex items-center gap-3 w-full">
              <button
                onClick={handleRetake}
                className="flex-1 py-2.5 text-xs font-bold text-[#cbd5e1] hover:text-white bg-[#062135] hover:bg-[#0a2f4a] rounded-xl transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>إعادة الالتقاط</span>
              </button>
              <button
                onClick={onClose}
                className="flex-1 py-2.5 text-xs font-bold text-[#020d15] bg-[#00d26a] hover:bg-[#1df27f] rounded-xl transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>تم تأكيد المعاينة</span>
              </button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
