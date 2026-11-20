import { Check, CheckCircle2, Clock, Copy, ExternalLink, MapPin, Users, Utensils } from 'lucide-react';
import type { ItineraryDay } from '../data/itinerary';

interface ItineraryCardProps {
  day: ItineraryDay;
  isAddressCopied: boolean;
  onCopyAddress: (dayId: string, address: string) => void;
}

export function ItineraryCard({ day, isAddressCopied, onCopyAddress }: ItineraryCardProps) {
  const dinner = day.dinner;

  return (
    <article
      aria-labelledby={`day-heading-${day.id}`}
      className="flex flex-col justify-between bg-white text-neutral-950 border border-neutral-200 shadow-2xl shadow-black/30 rounded-sm overflow-hidden transition-transform duration-150 ease-out"
    >
      <div>
        {/* Card Header: Unboxed metadata + sharp route title */}
        <header className="px-6 pt-6 pb-5 border-b border-neutral-200">
          <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-medium text-neutral-500">
            <div className="flex items-center gap-2 font-mono-tabular">
              <span className="font-bold text-neutral-950">DAY {day.dayNumber}</span>
              <span aria-hidden="true">·</span>
              <span>{day.dayTitle}</span>
              <span aria-hidden="true">·</span>
              <span>{day.fullDate}</span>
            </div>

            <div className="flex items-center gap-1.5 text-xs font-semibold text-neutral-900">
              <CheckCircle2
                className={`h-3.5 w-3.5 shrink-0 ${
                  day.hasDinnerBooking ? 'text-emerald-700' : 'text-neutral-700'
                }`}
                aria-hidden="true"
              />
              <span>{day.statusText}</span>
            </div>
          </div>

          <h2
            id={`day-heading-${day.id}`}
            className="mt-3 text-xl sm:text-2xl font-bold tracking-tight text-neutral-950 leading-snug"
          >
            {day.routeSummary}
          </h2>
        </header>

        {/* Body Content */}
        {day.hasDinnerBooking && dinner ? (
          <div className="divide-y divide-neutral-200">
            {/* Dinner Restaurant & Reservation Summary */}
            <div className="px-6 py-5">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold text-neutral-500">晚餐餐廳</p>
                  <p className="mt-1 text-lg sm:text-xl font-bold text-neutral-950 flex items-center gap-2">
                    <Utensils className="h-4 w-4 text-orange-700 shrink-0" aria-hidden="true" />
                    <span>{dinner.restaurantName}</span>
                  </p>
                </div>
              </div>

              {/* Tabular Key Facts Grid */}
              <dl className="mt-5 grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-4 pt-4 border-t border-neutral-100">
                <div>
                  <dt className="text-xs font-medium text-neutral-500">預訂時間</dt>
                  <dd className="mt-1 flex items-center gap-1.5 text-sm font-semibold text-neutral-950 font-mono-tabular">
                    <Clock className="h-3.5 w-3.5 text-neutral-500 shrink-0" aria-hidden="true" />
                    <span>{dinner.time}</span>
                  </dd>
                </div>

                <div>
                  <dt className="text-xs font-medium text-neutral-500">用餐人數</dt>
                  <dd className="mt-1 flex items-center gap-1.5 text-sm font-semibold text-neutral-950 font-mono-tabular">
                    <Users className="h-3.5 w-3.5 text-neutral-500 shrink-0" aria-hidden="true" />
                    <span>{dinner.guests}</span>
                  </dd>
                </div>

                <div className="col-span-2 sm:col-span-1">
                  <dt className="text-xs font-medium text-neutral-500">預訂平台 / 負責人</dt>
                  <dd className="mt-1 text-sm font-semibold text-neutral-950">
                    {dinner.platform} · {dinner.coordinator}
                  </dd>
                </div>
              </dl>

              {/* Reservation Note */}
              <div className="mt-4 pt-3 border-t border-neutral-100 text-sm text-neutral-700">
                <span className="font-semibold text-neutral-950">預訂備註：</span>
                <span>{dinner.reservationNote}</span>
              </div>
            </div>

            {/* Korean & Chinese Addresses */}
            <div className="px-6 py-5 bg-neutral-50/80 space-y-3.5">
              <div>
                <p className="text-xs font-semibold text-neutral-500">韓文地址（的士 / 地圖專用）</p>
                <p className="mt-1 font-kr text-base font-bold text-neutral-950 tracking-tight break-words select-all">
                  {dinner.koreanAddress}
                </p>
              </div>

              <div>
                <p className="text-xs font-semibold text-neutral-500">中文地址</p>
                <p className="mt-1 text-sm text-neutral-700 leading-relaxed">
                  {dinner.chineseAddress}
                </p>
              </div>
            </div>
          </div>
        ) : (
          /* Day 4 Non-dinner Departure Card */
          <div className="px-6 py-6 space-y-4">
            <dl className="grid grid-cols-2 gap-4 pb-4 border-b border-neutral-100">
              <div>
                <dt className="text-xs font-medium text-neutral-500">當日日期</dt>
                <dd className="mt-1 text-sm font-semibold text-neutral-950 font-mono-tabular">
                  {day.fullDate}
                </dd>
              </div>
              <div>
                <dt className="text-xs font-medium text-neutral-500">團隊人數</dt>
                <dd className="mt-1 flex items-center gap-1.5 text-sm font-semibold text-neutral-950 font-mono-tabular">
                  <Users className="h-3.5 w-3.5 text-neutral-500 shrink-0" aria-hidden="true" />
                  <span>14 人</span>
                </dd>
              </div>
            </dl>

            <div>
              <p className="text-xs font-semibold text-neutral-500">行程安排</p>
              <p className="mt-1.5 text-base font-medium text-neutral-900 leading-relaxed">
                {day.departureSummary}
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Action Bar */}
      {day.hasDinnerBooking && dinner ? (
        <footer className="px-6 py-4 bg-white border-t border-neutral-200 grid grid-cols-1 sm:grid-cols-2 gap-3">
          <a
            href={dinner.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 min-h-[44px] px-4 py-2.5 text-sm font-semibold text-white bg-neutral-950 hover:bg-neutral-800 active:bg-neutral-900 rounded-sm transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 whitespace-nowrap"
          >
            <MapPin className="h-4 w-4 shrink-0" aria-hidden="true" />
            <span>開啟 Google Maps</span>
            <ExternalLink className="h-3.5 w-3.5 opacity-75 shrink-0" aria-hidden="true" />
          </a>

          <button
            type="button"
            onClick={() => onCopyAddress(day.id, dinner.koreanAddress)}
            className={`inline-flex items-center justify-center gap-2 min-h-[44px] px-4 py-2.5 text-sm font-semibold rounded-sm border transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 whitespace-nowrap cursor-pointer ${
              isAddressCopied
                ? 'bg-emerald-700 text-white border-emerald-700'
                : 'bg-white text-neutral-950 border-neutral-950 hover:bg-neutral-100 active:bg-neutral-200'
            }`}
          >
            {isAddressCopied ? (
              <>
                <Check className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span>已複製韓文地址</span>
              </>
            ) : (
              <>
                <Copy className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span>一鍵複製韓文地址</span>
              </>
            )}
          </button>
        </footer>
      ) : (
        <footer className="px-6 py-4 bg-neutral-50 border-t border-neutral-200 flex items-center justify-between text-xs font-medium text-neutral-600">
          <span>當日無集體晚餐預訂安排</span>
          <span className="font-mono-tabular text-neutral-900 font-semibold">明洞 · 酒店集合</span>
        </footer>
      )}
    </article>
  );
}
