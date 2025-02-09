function f1() {
    return f1;
}
const v2 = [f1];
const v3 = { __proto__: v2 };
v3.with(Uint8ClampedArray, v3);
gc();
