function f0() {
    return f0;
}
const v3 = new Uint8ClampedArray(172);
v3.toSorted(f0);
gc();
// Imported program is interesting due to new coverage: 32 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 26 newly discovered edges in the CFG of the target
