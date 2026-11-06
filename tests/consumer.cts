import * as api from '@lp-labs/calendar-month-ordinal';
import { monthOrdinal } from '@lp-labs/calendar-month-ordinal';
console.log(monthOrdinal(2024, 3));
// @ts-expect-error invalid argument must be rejected by declarations
api.monthOrdinal('2024', 1);
