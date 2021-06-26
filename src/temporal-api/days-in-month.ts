import { Temporal } from 'proposal-temporal';
import {
    monthCountFromTibetan,
    trueDateFromMonthCountDay as getTrueDate,
} from '../conversions';

export const daysInMonth = (input: any): number => {
    const date = Temporal.PlainDate.from(input);

    // @ts-ignore
    const monthCount = monthCountFromTibetan(date);
    const jdFirst = 1 + Math.floor(getTrueDate(30, monthCount - 1));
    const jdLast = Math.floor(getTrueDate(30, monthCount));
    console.log(jdFirst, jdLast);
    return jdLast - jdFirst + 1;
};
