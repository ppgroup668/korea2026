import { useEffect, useRef, useState } from 'react';
import { Check, Copy, MessageSquareShare } from 'lucide-react';
import { ItineraryCard } from './components/ItineraryCard';
import { SeoulBackdrop } from './components/SeoulBackdrop';
import {
  FILTER_TABS,
  ITINERARY_DAYS,
  formatWhatsAppText,
  type DayFilterId,
} from './data/itinerary';
import { copyToClipboard } from './utils/clipboard';

export default function App() {
  const [activeFilter, setActiveFilter] = useState<DayFilterId>('all');
  const [copiedAddressId, setCopiedAddressId] = useState<string | null>(null);
  const [whatsappCopied, setWhatsappCopied] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const addressTimerRef = useRef<number | null>(null);
  const whatsappTimerRef = useRef<number | null>(null);
  const toastTimerRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (addressTimerRef.current) window.clearTimeout(addressTimerRef.current);
      if (whatsappTimerRef.current) window.clearTimeout(whatsappTimerRef.current);
      if (toastTimerRef.current) window.clearTimeout(toastTimerRef.current);
    };
  }, []);

  const showToast = (message: string) => {
    setToastMessage(message);
    if (toastTimerRef.current) {
      window.clearTimeout(toastTimerRef.current);
    }
    toastTimerRef.current = window.setTimeout(() => {
      setToastMessage(null);
    }, 2600);
  };

  const handleCopyAddress = async (dayId: string, address: string) => {
    const ok = await copyToClipboard(address);
    if (ok) {
      setCopiedAddressId(dayId);
      showToast(`已複製韓文地址：${address}`);
      if (addressTimerRef.current) {
        window.clearTimeout(addressTimerRef.current);
      }
      addressTimerRef.current = window.setTimeout(() => {
        setCopiedAddressId(null);
      }, 2200);
    } else {
      showToast('複製失敗，請手動選取韓文地址複製。');
    }
  };

  const handleCopyWhatsApp = async (copyAll: boolean) => {
    const targetDays =
      copyAll || activeFilter === 'all'
        ? ITINERARY_DAYS
        : ITINERARY_DAYS.filter((day) => day.id === activeFilter);
    const formatted = formatWhatsAppText(targetDays);
    const ok = await copyToClipboard(formatted);

    if (ok) {
      setWhatsappCopied(true);
      showToast(
        copyAll || activeFilter === 'all'
          ? '已複製全部 4 日 WhatsApp 行程文字'
          : `已複製 ${targetDays[0]?.shortDate ?? ''} 當日 WhatsApp 行程文字`
      );
      if (whatsappTimerRef.current) {
        window.clearTimeout(whatsappTimerRef.current);
      }
      whatsappTimerRef.current = window.setTimeout(() => {
        setWhatsappCopied(false);
      }, 2400);
    } else {
      showToast('複製失敗，請檢查瀏覽器剪貼簿權限。');
    }
  };

  const handleQuickNav = (id: DayFilterId) => {
    setActiveFilter(id);
    const el = document.getElementById('itinerary-grid');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const visibleDays =
    activeFilter === 'all'
      ? ITINERARY_DAYS
      : ITINERARY_DAYS.filter((day) => day.id === activeFilter);

  return (
    <div className="relative min-h-screen flex flex-col text-white">
      <SeoulBackdrop />

      {/* Top Navigation Bar (3-zone contract, <= 15% mobile height) */}
      <header className="sticky top-0 z-30 border-b border-white/15 bg-neutral-950/90 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between gap-4 sm:gap-8">
          <a
            href="#top"
            onClick={(e) => {
              e.preventDefault();
              setActiveFilter('all');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="text-base sm:text-lg font-extrabold tracking-tight text-white whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-500"
          >
            SEOUL 2026
          </a>

          <nav
            aria-label="行程快速導覽"
            className="hidden md:flex items-center gap-6 text-sm font-medium text-neutral-300"
          >
            <button
              type="button"
              onClick={() => handleQuickNav('all')}
              className={`hover:text-white transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                activeFilter === 'all' ? 'text-white underline underline-offset-8 decoration-orange-500 decoration-2' : ''
              }`}
            >
              行程總覽
            </button>
            <button
              type="button"
              onClick={() => handleQuickNav('day1')}
              className={`hover:text-white transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                activeFilter === 'day1' ? 'text-white underline underline-offset-8 decoration-orange-500 decoration-2' : ''
              }`}
            >
              25/11 弘大
            </button>
            <button
              type="button"
              onClick={() => handleQuickNav('day2')}
              className={`hover:text-white transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                activeFilter === 'day2' ? 'text-white underline underline-offset-8 decoration-orange-500 decoration-2' : ''
              }`}
            >
              26/11 聖水
            </button>
            <button
              type="button"
              onClick={() => handleQuickNav('day3')}
              className={`hover:text-white transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                activeFilter === 'day3' ? 'text-white underline underline-offset-8 decoration-orange-500 decoration-2' : ''
              }`}
            >
              27/11 廣藏
            </button>
            <button
              type="button"
              onClick={() => handleQuickNav('day4')}
              className={`hover:text-white transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                activeFilter === 'day4' ? 'text-white underline underline-offset-8 decoration-orange-500 decoration-2' : ''
              }`}
            >
              28/11 明洞
            </button>
          </nav>

          <button
            type="button"
            onClick={() => handleCopyWhatsApp(true)}
            className={`inline-flex items-center justify-center gap-2 min-h-[40px] px-3.5 sm:px-4 py-2 text-xs sm:text-sm font-semibold rounded-sm transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500 ${
              whatsappCopied
                ? 'bg-emerald-600 text-white'
                : 'bg-orange-600 hover:bg-orange-500 active:bg-orange-700 text-white'
            }`}
          >
            {whatsappCopied ? (
              <>
                <Check className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span>已複製行程</span>
              </>
            ) : (
              <>
                <MessageSquareShare className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span className="sm:hidden">複製 WhatsApp</span>
                <span className="hidden sm:inline">一鍵複製 WhatsApp 行程文字</span>
              </>
            )}
          </button>
        </div>
      </header>

      {/* Main Content Container */}
      <main id="top" className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 pt-8 sm:pt-12 pb-16">
      {/* Hero Header Section */}
        <section aria-labelledby="page-title" className="pb-8 border-b border-white/25">
          <p className="text-xs sm:text-sm font-semibold text-white/95 tracking-wide font-mono-tabular drop-shadow-sm">
            2026.11.25 – 11.28
            <span className="mx-2 text-white/60" aria-hidden="true">·</span>
            4日3夜
            <span className="mx-2 text-white/60" aria-hidden="true">·</span>
            14人同行
          </p>

          <h1
            id="page-title"
            className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight max-w-3xl [text-wrap:balance] drop-shadow-md"
          >
            首爾四日三夜行程及晚餐預訂安排
          </h1>

          {/* 4-Column High-Contrast Summary Strip */}
          <dl className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/25 border border-white/25 shadow-lg shadow-indigo-950/30">
            <div className="bg-neutral-950/75 backdrop-blur-sm px-4 py-3.5 sm:px-5 sm:py-4">
              <dt className="text-xs font-medium text-neutral-300">行程日期</dt>
              <dd className="mt-1 text-sm sm:text-base font-bold text-white font-mono-tabular">
                2026.11.25 – 11.28
              </dd>
            </div>
            <div className="bg-neutral-950/75 backdrop-blur-sm px-4 py-3.5 sm:px-5 sm:py-4">
              <dt className="text-xs font-medium text-neutral-300">團隊人數</dt>
              <dd className="mt-1 text-sm sm:text-base font-bold text-white font-mono-tabular">
                14 人
              </dd>
            </div>
            <div className="bg-neutral-950/75 backdrop-blur-sm px-4 py-3.5 sm:px-5 sm:py-4">
              <dt className="text-xs font-medium text-neutral-300">晚餐預訂</dt>
              <dd className="mt-1 text-sm sm:text-base font-bold text-white font-mono-tabular">
                3 晚已確認餐廳
              </dd>
            </div>
            <div className="bg-neutral-950/75 backdrop-blur-sm px-4 py-3.5 sm:px-5 sm:py-4">
              <dt className="text-xs font-medium text-neutral-300">預訂時段</dt>
              <dd className="mt-1 text-sm sm:text-base font-bold text-white font-mono-tabular">
                每晚 7:00 PM
              </dd>
            </div>
          </dl>
        </section>

        {/* Date Filter Tabs & Status Count Bar */}
        <section
          aria-label="日期篩選控制列"
          className="mt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
        >
          <div
            role="tablist"
            aria-label="行程日期篩選"
            className="flex items-center gap-1.5 overflow-x-auto no-scrollbar p-1 bg-neutral-950/55 backdrop-blur-md border border-white/25 rounded-sm"
          >
            {FILTER_TABS.map((tab) => {
              const isActive = activeFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  role="tab"
                  type="button"
                  aria-selected={isActive}
                  onClick={() => setActiveFilter(tab.id)}
                  className={`min-h-[40px] px-3.5 sm:px-4 py-2 text-xs sm:text-sm font-semibold rounded-sm transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500 ${
                    isActive
                      ? 'bg-white text-neutral-950 shadow-sm'
                      : 'text-neutral-200 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          <div className="flex items-center justify-between md:justify-end gap-4 text-xs sm:text-sm text-white">
            <span className="font-mono-tabular font-semibold px-3 py-1.5 bg-neutral-950/55 backdrop-blur-md border border-white/20 rounded-sm">
              顯示 {visibleDays.length} / {ITINERARY_DAYS.length} 日行程
            </span>
            {activeFilter !== 'all' && (
              <button
                type="button"
                onClick={() => handleCopyWhatsApp(false)}
                className="inline-flex items-center gap-1.5 min-h-[40px] px-3.5 py-1.5 text-xs font-semibold text-white bg-neutral-950/75 hover:bg-neutral-900 backdrop-blur-md border border-white/25 rounded-sm transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
              >
                <Copy className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                <span>複製當日 WhatsApp</span>
              </button>
            )}
          </div>
        </section>

        {/* Itinerary Cards Grid */}
        <section
          id="itinerary-grid"
          aria-label="每日行程與餐廳預訂卡片"
          className={`mt-6 scroll-mt-20 grid gap-6 items-stretch ${
            visibleDays.length === 1
              ? 'grid-cols-1 max-w-2xl'
              : 'grid-cols-1 lg:grid-cols-2'
          }`}
        >
          {visibleDays.map((day) => (
            <ItineraryCard
              key={day.id}
              day={day}
              isAddressCopied={copiedAddressId === day.id}
              onCopyAddress={handleCopyAddress}
            />
          ))}
        </section>
      </main>

      {/* Quiet Editorial Footer */}
      <footer className="border-t border-white/10 bg-neutral-950/80 py-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs text-neutral-400">
          <span>首爾四日三夜行程及晚餐預訂安排（14人團）</span>
          <span className="font-mono-tabular">2026.11.25 – 2026.11.28 · SEOUL</span>
        </div>
      </footer>

      {/* Accessible Floating Copy Confirmation Toast */}
      {toastMessage && (
        <div
          role="status"
          aria-live="polite"
          className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50 max-w-[calc(100vw-2rem)] px-4 py-3 bg-neutral-950 text-white border border-white/25 shadow-2xl rounded-sm flex items-center gap-2.5 text-sm font-medium"
        >
          <Check className="h-4 w-4 text-emerald-400 shrink-0" aria-hidden="true" />
          <span className="truncate">{toastMessage}</span>
        </div>
      )}
    </div>
  );
}
