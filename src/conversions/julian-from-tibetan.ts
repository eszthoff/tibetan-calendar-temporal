import monthCountFromTibetan from './month-count-from-tibetan';
import getTrueDate from './true-date-from-month-count-day';
import { getLegacyFromMonthCode } from '../helpers';
import { MonthCode } from '../types/dateDescriptions';

/**
 * Gives the Julian date for a Tibetan year, month number (leap or not) and Tibetan day.
 *
 * Does not check that the tibetan day actually exists:
 *  - If given the date of a skipped day, will return the same Julian date as the day before.
 *  - If given the date of a duplicate day, returns the Julian date of the second of the two.
 *
 * @param {number} year - Tibetan year
 * @param {number} monthCode - Tibetan month code
 * @param {number} day - Tibetan day
 * @returns {number} - Julian date
 */
const julianFromTibetan = (
    year: number,
    monthCode: MonthCode,
    day: number
): number => {
    const monthCount = monthCountFromTibetan({
        year,
        monthCode,
    });

    return Math.floor(getTrueDate(day, monthCount));
};

export default julianFromTibetan;
