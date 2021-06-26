import { Temporal } from 'proposal-temporal';
import getDayFromWestern from '../generators/get-day-from-western';

const monthCode = (inputDate: Temporal.PlainDate) => {
    const date = getDayFromWestern(inputDate);
    return date.month.monthCode;
};

export default monthCode;
