const v2 = new Uint8ClampedArray(128);
const t1 = 11;
t1.__proto__ = Int32Array;
try {
const t0 = 1546;
t0(Uint8ClampedArray, v2, 128, 11, v2);
} catch (e) {}
for (let i = 0; i < 5; i++) {
    new Uint8ClampedArray(v2);
}
gc();
// Imported program is interesting due to new coverage: 3 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 5 newly discovered edges in the CFG of the target
