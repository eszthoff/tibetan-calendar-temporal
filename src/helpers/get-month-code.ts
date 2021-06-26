import { CHOOSE_MAIN } from '../constants/config';
import {
    MonthCode,
    MonthInYearWage,
    MonthNum,
    MonthStr,
} from '../types/dateDescriptions';
import isDoubledMonth from './is-doubled-month';

export const getMonthCode = (inputMonth: MonthInYearWage): MonthCode => {
    const isDouble = isDoubledMonth(inputMonth.year, inputMonth.month);
    const monthStr = String(inputMonth.month).padStart(2, '0') as MonthStr;
    return isDouble
        ? (`M${monthStr}R${CHOOSE_MAIN}` as MonthCode)
        : (`M${monthStr}R0` as MonthCode);
};

export const getMonthCodeFromLegacy = (
    month: MonthNum,
    isDoubledMonth: boolean,
    isLeapMonth: boolean
) => {
    const monthStr = String(month).padStart(2, '0') as MonthStr;
    let monthCode;
    if (!isDoubledMonth) {
        monthCode = `M${monthStr}R0`;
    } else if (isLeapMonth) {
        monthCode = `M${monthStr}R1`;
    } else {
        monthCode = `M${monthStr}R2`;
    }

    return monthCode as MonthCode;
};

export const getLegacyFromMonthCode = (monthCode: MonthCode) => {
    console.log(monthCode);
    const match = monthCode.match(/M(\d\d)R(\d)/);
    return {
        month: Number(match[1]),
        isDoubledMonth: Number(match[2]) !== 0,
        isLeapMonth: Number(match[2]) === 1,
    };
};
