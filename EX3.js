//EX3

function countDigits(n) {
  let count = 0;

  if (n === 0) return 1;

  while (n > 0) {
    count++;
    n = (n / 10) | 0;
  }

  return count;
}
