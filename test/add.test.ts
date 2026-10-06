import { expect, test } from 'vitest';
import { add } from '../src/add.ts';

test('adds 1 + 2', () => {
  expect(add(1, 2)).toBe(3);
});
