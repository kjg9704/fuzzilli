function* f1(a2, a3) {
    return f1;
}
const t3 = f1(-2147483647, -2147483647);
t3.d >>= -2147483647;
gc();
