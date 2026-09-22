var mask = 1 & 2;

if (mask == 1) mask = 0;

for (const key in { a: 1 }) {
  mask += key.length;
}
