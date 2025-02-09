function f0(a1, a2, a3, a4) {
    try {
        ("boolean").concat("boolean", f0, a3, "boolean");
        eval("boolean");
    } catch(e9) {
    }
}
const v13 = new Uint8Array(3753);
const v14 = new Uint8ClampedArray(Uint8ClampedArray, ...v13);
f0(Uint8Array, undefined, v14, Uint8ClampedArray);
gc();
