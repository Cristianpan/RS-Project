export function ceilingWithPrecision(num: number, precision = 0): number {
  const factor = Math.pow(10, precision);
  return Math.ceil(num * factor) / factor;
}