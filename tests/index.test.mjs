import assert from 'node:assert/strict';
import test from 'node:test';
import * as api from '../dist/esm/index.js';
test('computes ordinal', () => {
  assert.equal(api.monthOrdinal(2024, 1), 24288);
});
test('round trips date parts', () => {
  const o = api.monthOrdinal(2025, 12);
  assert.deepEqual(api.fromMonthOrdinal(o), { year: 2025, month: 12 });
});
test('handles year zero', () => {
  assert.equal(api.monthOrdinal(0, 1), 0);
});
test('handles negative years', () => {
  assert.deepEqual(api.fromMonthOrdinal(-1), { year: -1, month: 12 });
});
test('handles month boundary', () => {
  assert.deepEqual(api.fromMonthOrdinal(12), { year: 1, month: 1 });
});
test('rejects invalid month', () => {
  assert.throws(() => api.monthOrdinal(2024, 0), RangeError);
});
