export type DayFilterId = 'all' | 'day1' | 'day2' | 'day3' | 'day4';

export interface DinnerReservation {
  restaurantName: string;
  koreanAddress: string;
  chineseAddress: string;
  googleMapsUrl: string;
  reservationNote: string;
  platform: string;
  coordinator: string;
  time: string;
  guests: string;
}

export interface ItineraryDay {
  id: Exclude<DayFilterId, 'all'>;
  dayNumber: string;
  dayTitle: string;
  shortDate: string;
  fullDate: string;
  routeSummary: string;
  statusText: string;
  hasDinnerBooking: boolean;
  dinner?: DinnerReservation;
  departureSummary?: string;
}

export const FILTER_TABS: Array<{ id: DayFilterId; label: string }> = [
  { id: 'all', label: '全部行程' },
  { id: 'day1', label: 'Day 1 25/11' },
  { id: 'day2', label: 'Day 2 26/11' },
  { id: 'day3', label: 'Day 3 27/11' },
  { id: 'day4', label: 'Day 4 28/11' },
];

export const ITINERARY_DAYS: ItineraryDay[] = [
  {
    id: 'day1',
    dayNumber: '01',
    dayTitle: '第一天',
    shortDate: '25/11',
    fullDate: '2026.11.25 (週三)',
    routeSummary: '弘大 行街 + 肉君金春培 林道直營店',
    statusText: '已確認預訂',
    hasDinnerBooking: true,
    dinner: {
      restaurantName: '肉君金春培 林道直營店',
      koreanAddress: '서울특별시 마포구 서강로13길 31-2 1층',
      chineseAddress: '首尔特别市麻浦区西江路 13 街 31-2 1 楼',
      googleMapsUrl:
        'https://www.google.com/maps/search/?api=1&query=%EC%84%9C%EC%9A%B8%ED%8A%B9%EB%B3%84%EC%8B%9C+%EB%A7%88%ED%8F%AC%EA%B5%AC+%EC%84%9C%EA%B0%95%EB%A1%9C13%EA%B8%B8+31-2',
      reservationNote: 'WONG LUK KWAN 將分享 CATCHTABLE 的預訂。',
      platform: 'CATCHTABLE',
      coordinator: 'WONG LUK KWAN',
      time: '晚上 7:00',
      guests: '14 人',
    },
  },
  {
    id: 'day2',
    dayNumber: '02',
    dayTitle: '第二天',
    shortDate: '26/11',
    fullDate: '2026.11.26 (週四)',
    routeSummary: '南大門 + 狎歐亭 + 孝子洞烤肉 聖水站店',
    statusText: '已確認預訂',
    hasDinnerBooking: true,
    dinner: {
      restaurantName: '孝子洞烤肉 聖水站店',
      koreanAddress: '서울특별시 성동구 연무장5가길 25 SKVI타워 101,102호',
      chineseAddress: '首爾特別市城東區練武場 5Ga 街 25 號，SKVI 大樓 1 樓 101、102 號',
      googleMapsUrl:
        'https://www.google.com/maps/search/?api=1&query=%EC%84%9C%EC%9A%B8%ED%8A%B9%EB%B3%84%EC%8B%9C+%EC%84%B1%EB%8F%99%EA%B5%AC+%EC%97%B0%EB%AC%B4%EC%9E%A55%EA%B0%80%EA%B8%B8+25+SKVI%ED%83%80%EC%9B%8C',
      reservationNote: 'WONG LUK KWAN 將分享 CATCHTABLE 的預訂。',
      platform: 'CATCHTABLE',
      coordinator: 'WONG LUK KWAN',
      time: '晚上 7:00',
      guests: '14 人',
    },
  },
  {
    id: 'day3',
    dayNumber: '03',
    dayTitle: '第三天',
    shortDate: '27/11',
    fullDate: '2026.11.27 (週五)',
    routeSummary: '廣藏 + 聖水洞 + 花蟹世界',
    statusText: '已確認預訂',
    hasDinnerBooking: true,
    dinner: {
      restaurantName: '花蟹世界',
      koreanAddress: '서울특별시 마포구 어울마당로 136-3 2층',
      chineseAddress: '首爾特別市麻浦区 어울마당路 136-3，2 樓',
      googleMapsUrl:
        'https://www.google.com/maps/search/?api=1&query=%EC%84%9C%EC%9A%B8%ED%8A%B9%EB%B3%84%EC%8B%9C+%EB%A7%88%ED%8F%AC%EA%B5%AC+%EC%96%B4%EC%9A%B8%EB%A7%88%EB%8B%B9%EB%A1%9C+136-3',
      reservationNote: 'AutoReserve APP 預訂 by Calvin Wong',
      platform: 'AutoReserve APP',
      coordinator: 'Calvin Wong',
      time: '晚上 7:00',
      guests: '14 人',
    },
  },
  {
    id: 'day4',
    dayNumber: '04',
    dayTitle: '第四天',
    shortDate: '28/11',
    fullDate: '2026.11.28 (週六)',
    routeSummary: '明洞 + 酒店集合',
    statusText: '返程集合日',
    hasDinnerBooking: false,
    departureSummary: '明洞自由活動及採購，其後返回酒店集合出發。',
  },
];

export function formatWhatsAppText(days: ItineraryDay[]): string {
  const header = '【首爾四日三夜行程及晚餐預訂安排（14人團）】\n日期：2026.11.25 - 11.28\n';
  const blocks = days.map((day) => {
    if (!day.hasDinnerBooking || !day.dinner) {
      return [
        `【${day.shortDate} ${day.dayTitle}｜${day.routeSummary}】`,
        `- 日期：${day.fullDate}`,
        `- 行程：${day.routeSummary}`,
      ].join('\n');
    }

    const d = day.dinner;
    return [
      `【${day.shortDate} ${day.dayTitle}｜${day.routeSummary} ✅】`,
      `- 餐廳：${d.restaurantName}`,
      `- 韓文地址：${d.koreanAddress}`,
      `- 中文地址：${d.chineseAddress}`,
      `- Google Map：${d.googleMapsUrl}`,
      `- 預訂備註：${d.reservationNote}`,
      `- 日期：${day.fullDate}`,
      `- 時間：${d.time}`,
      `- 用餐人數：${d.guests}`,
    ].join('\n');
  });

  return `${header}\n${blocks.join('\n\n')}`;
}
