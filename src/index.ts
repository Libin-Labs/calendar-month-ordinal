export function monthOrdinal(year: number, month: number): number {
  if (!Number.isSafeInteger(year) || !Number.isInteger(month) || month < 1 || month > 12)
    throw new RangeError('Expected integer year and month 1 through 12');
  const value = year * 12 + (month - 1);
  if (!Number.isSafeInteger(value)) throw new RangeError('Ordinal exceeds safe integer range');
  return value;
}
export function fromMonthOrdinal(ordinal: number): { year: number; month: number } {
  if (!Number.isSafeInteger(ordinal)) throw new TypeError('Expected safe integer ordinal');
  const year = Math.floor(ordinal / 12),
    month = (((ordinal % 12) + 12) % 12) + 1;
  return { year, month };
}
