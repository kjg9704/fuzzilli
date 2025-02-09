function f0() {
    return f0;
}
const v1 = f0.toSource(f0);
v1.toSource(v1, f0);
gc();
