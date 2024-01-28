export interface IMonth {
  number: number;
  description: string;
  days: number;
}

const MonthOptions: IMonth[] = [
  {
    number: 1,
    description: "Tháng 1",
    days: 31,
  },
  {
    number: 2,
    description: "Tháng 2",
    days: 28,
  },
  {
    number: 3,
    description: "Tháng 3",
    days: 31,
  },
  {
    number: 4,
    description: "Tháng 4",
    days: 30,
  },
  {
    number: 5,
    description: "Tháng 5",
    days: 31,
  },
  {
    number: 6,
    description: "Tháng 6",
    days: 30,
  },
  {
    number: 7,
    description: "Tháng 7",
    days: 31,
  },
  {
    number: 8,
    description: "Tháng 8",
    days: 31,
  },
  {
    number: 9,
    description: "Tháng 9",
    days: 30,
  },
  {
    number: 10,
    description: "Tháng 10",
    days: 31,
  },
  {
    number: 11,
    description: "Tháng 11",
    days: 30,
  },
  {
    number: 12,
    description: "Tháng 12",
    days: 31,
  },
];

export default MonthOptions;