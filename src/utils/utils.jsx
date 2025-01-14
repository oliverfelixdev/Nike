// Linear interpolation
export const lerp = (a, b, n) => (1 - n) * a + n * b;

export const distance = (x1, y1, x2, y2) => {
  var a = x1 - x2;
  var b = y1 - y2;

  return Math.hypot(a, b);
};
