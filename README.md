# React Image VS Raw Javascript Base Benchmark

## Description

This Project is a simple render element benchmark to see append only situations in the DOM.

Will Virtual DOM really benefit us without premature optimizations or depth knowledge in react ?

There may be faster ways of using React.

Please Open a PR if you know a faster way to do it!

## Base compiled production bin size

- React : 192 kB
- Raw JS : 6 kB

## Machine Specs

The following results are provided by :

Macbook Pro Mid-2010
2.4 GHz Intel Core i5
4 GB 1067 MHz DDR3
500 gb Samsung 320 SSD

## Results

Time to Draw 1000 Images in Append only mode.

Using concat arrays for React as we must keep the collection idempotent.

-----------------------------------------------------
| Iteration | React             | Raw JS            |
|-----------|-------------------|-------------------|
| 1         | 389.0550000000003 | 81.02000000000001 |
| 2         | 374.0650000000005 | 43.91499999999996 |
| 3         | 550.914999999999  | 45.03499999999985 |
| 4         | 507.2949999999982 | 51.18499999999767 |
| 5         | 546.4000000000015 | 51.83000000000174 |
| 6         | 592.8549999999996 | 51.80999999999767 |
| 7         | 684.4400000000023 | 54.63499999999476 |
| 8         | 691.359999999997  | 52.14499999998952 |
| 9         | 831.2050000000017 | 50.49499999999534 |
-----------------------------------------------------

