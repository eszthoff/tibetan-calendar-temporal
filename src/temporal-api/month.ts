import { Temporal } from 'proposal-temporal';
import getDayFromWestern from '../generators/get-day-from-western';

const month = (inputDate: Temporal.PlainDate) => {
    const date = getDayFromWestern(inputDate);
    return date.month;
};

export default month;
