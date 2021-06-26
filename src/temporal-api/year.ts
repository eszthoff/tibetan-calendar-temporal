import { Temporal } from 'proposal-temporal';
import getDayFromWestern from '../generators/get-day-from-western';

const year = (inputDate: Temporal.PlainDate) => {
    const date = getDayFromWestern(inputDate);
    return date.year;
};

export default year;
