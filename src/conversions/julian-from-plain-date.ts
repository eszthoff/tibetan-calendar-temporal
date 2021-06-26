import { Temporal } from 'proposal-temporal';
import { MS_IN_YEAR, MIN_IN_DAY, JULIAN_TO_UNIX } from '../constants';
import { getDateStr } from '../helpers';

/**
 * get Julian date from Temportal.PlainDate
 *
 * @property {Temporal.PlainDate} date - the date object to be converted
 * @return {number} - julian date
 */
const julianFromPlainDate = (date: Temporal.PlainDate): number => {
    return date.withCalendar('julian').day;
};

export default julianFromPlainDate;
