import { Temporal } from 'proposal-temporal';
import { julianFromTibetan } from '../conversions';
import { getLegacyFromMonthCode } from '../helpers';
import { MonthCode } from '../types/dateDescriptions';
import { daysInMonth } from './days-in-month';
import getDayFromWestern from '../generators/get-day-from-western';

export default class TibetanCalendar extends Temporal.Calendar {
    constructor() {
        super('iso8601');
    }

    toString() {
        return 'tibetan';
    }

    dateFromFields(
        { year, monthCode, day },
        options: object
    ): Temporal.PlainDate {
        const julian = julianFromTibetan(year, monthCode, day);
        const julianDate = Temporal.PlainDate.from({
            year: -4753,
            month: 1,
            day: 1,
            calendar: 'gregory',
        }).add({ days: julian });
        const isoFields = julianDate.getISOFields();
        return super.dateFromFields(
            // @ts-ignore
            {
                year: isoFields.isoYear,
                month: isoFields.isoMonth,
                day: isoFields.isoDay,
            },
            options
        );
    }

    // @ts-ignore
    daysInMonth(input: Temporal.PlainDate) {
        return daysInMonth(input);
    }

    monthCode(inputDate: Temporal.PlainDate) {
        const date = getDayFromWestern(inputDate);
        return date.month.monthCode;
    }
}
