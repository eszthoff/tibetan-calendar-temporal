// calendrical constants: month calculations

// beginning of epoch based on Kalachakra. Used as 0 for month counts since this time
export const YEAR0 = 806 as const;
export const MONTH0 = 3 as const;
// constants given in Svante's article
export const BETA_STAR = 61 as const;
export const BETA = 123 as const;
// const P1 = 77 / 90;
// const P0 = 139 / 180;
// const ALPHA = 1 + 827 / 1005;

// calendrical constants: day calculations
// mean date
export const M0 = 2015501 + 4783 / 5656;
export const M1 = 167025 / 5656;
export const M2 = M1 / 30;
// mean sun
export const S0 = 743 / 804;
export const S1 = 65 / 804;
export const S2 = S1 / 30;
// anomaly moon
export const A0 = 475 / 3528;
export const A1 = 253 / 3528;
export const A2 = 1 / 28;

// fixed tables
export const MOON_TAB = [0, 5, 10, 15, 19, 22, 24, 25] as const;
export const SUN_TAB = [0, 6, 10, 11] as const;
