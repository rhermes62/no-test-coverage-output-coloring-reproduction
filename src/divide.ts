// Intentionally never imported by a test — should render red in the coverage report.
export function divide(a: number, b: number): number {
  if (b === 0) {
    throw new Error('division by zero');
  }
  return a / b;
}
