try {
    const v2 = {};
    Object.defineProperty(v2, Symbol.iterator, { writable: true, value: Symbol });
    new WeakMap(v2);
} catch(e5) {
}
function f6() {
    return Symbol;
}
try {
    const v8 = {};
    v8[Symbol.iterator] = f6;
    new Float32Array(v8);
} catch(e11) {
}
gc();
