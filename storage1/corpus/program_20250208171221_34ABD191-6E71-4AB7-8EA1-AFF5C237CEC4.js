new Uint32Array(257);
const v5 = new Float32Array(129);
new Uint8ClampedArray(4096);
const v9 = /u/mgdy;
const v10 = /mC(ab|cde)+/imgsy;
/((((.).).).)/udy;
function f12() {
    return v10;
}
function f13(a14, a15) {
    const v22 = {
        [a15]: f12,
        set d(a17) {
            const v18 = { __proto__: v5, [v9]: a15, g: a15 };
            try {
                a14.compile();
            } catch(e21) {
            }
        },
        [a14]: 129,
    };
    return v22;
}
const v23 = f13(v9);
const v24 = f13();
const v25 = f13();
v24.g = 257;
try {
    f12();
} catch(e27) {
}
let v28 = 0;
do {
    Object.defineProperty(v25, "c", { configurable: true, get: f12 });
    v23.d = v23;
    new Uint8ClampedArray();
    new Uint8Array();
    new Float64Array();
    v28++;
} while (v28 < 7)
gc();
// Imported program is interesting due to new coverage: 9 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 3 newly discovered edges in the CFG of the target
