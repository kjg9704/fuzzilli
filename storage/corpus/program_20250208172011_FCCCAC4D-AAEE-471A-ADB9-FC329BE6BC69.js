const v3 = new Uint8ClampedArray(2);
const v5 = new Uint8Array();
v3[-1] = 2.220446049250313e-16;
try {
    v5.set(v3);
} catch(e7) {
}
gc();
// Imported program is interesting due to new coverage: 7 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 10 newly discovered edges in the CFG of the target
