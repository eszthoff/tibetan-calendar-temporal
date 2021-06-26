import { daysInMonth } from '../days-in-month';
import TibetanCalendar from '..';
import { Temporal } from 'proposal-temporal';

describe('daysInMonth', () => {
    const calendar = new TibetanCalendar();
    it.skip('should return the correct number with wage input', () => {
        expect(daysInMonth({ year: 2148, month: 5, day: 1, calendar })).toBe(
            29
        );
        expect(daysInMonth({ year: 2148, month: 6, day: 1, calendar })).toBe(
            30
        );
        // first of a double month
        expect(daysInMonth({ year: 2148, month: 9, day: 1, calendar })).toBe(
            29
        );
    });
    it('should return the correct number with exact input', () => {
        expect(
            // @ts-ignore
            Temporal.PlainDate.from({
                year: 2148,
                monthCode: 'M05R0',
                day: 3,
                calendar,
            }).daysInMonth
        ).toBe(29);
        expect(
            // @ts-ignore
            Temporal.PlainDate.from({
                year: 2148,
                monthCode: 'M06R0',
                day: 3,
                calendar,
            }).daysInMonth
        ).toBe(30);
        // expect(
        //     daysInMonth({
        //         year: 2148,
        //         monthCode: 'M09R1',
        //         day: 3,
        //         calendar,
        //     })
        // ).toBe(29);
        // expect(
        //     daysInMonth({
        //         year: 2148,
        //         monthCode: 'M09R2',
        //         day: 3,
        //         calendar,
        //     })
        // ).toBe(30);
    });
});
