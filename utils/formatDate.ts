function getTheMonthName(month: number): string {
  switch(month) {
    case 1: return "Tháng 1";
    case 2: return "Tháng 2";
    case 3: return "Tháng 3";
    case 4: return "Tháng 4";
    case 5: return "Tháng 5";
    case 6: return "Tháng 6";
    case 7: return "Tháng 7";
    case 8: return "Tháng 8";
    case 9: return "Tháng 9";
    case 10: return "Tháng 10";
    case 11: return "Tháng 11";
    case 12: return "Tháng 12";
    default: return "mês";
  }
}

export function getCurrentDay(date: Date): string {
  return date.getDate().toString();
};

export function getCurrentMonth(date: Date): string {
  return getTheMonthName((date.getMonth() + 1));
};

export function getCurrentYear(date: Date): number {
  return date.getFullYear();
};

export default function formatDate(date: Date): string {
  const day: string = date.getDate().toString();
  const month: string = getTheMonthName((date.getMonth() + 1));

  return "Ngày " + day + " " + month;
};