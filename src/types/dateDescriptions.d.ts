import { MONTH_CODES } from '../constants';

type MonthCode = keyof typeof MONTH_CODES;

type MonthNum = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
type MonthStr =
    | '01'
    | '02'
    | '03'
    | '04'
    | '05'
    | '06'
    | '07'
    | '08'
    | '09'
    | '10'
    | '11'
    | '12';

type MonthInYearWage = {
    year: number;
    month: MonthNum;
};

type MonthInYearWithCode = {
    year: number;
    monthCode: MonthCode;
};

type MonthInYear = MonthInYearWage | MonthInYearWithCode;
