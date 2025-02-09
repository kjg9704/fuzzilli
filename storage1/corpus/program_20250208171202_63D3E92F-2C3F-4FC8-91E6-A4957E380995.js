function f0(a1) {
    return a1;
}
const v4 = new Float32Array(17);
v4.sort(f0);
gc();
// Imported program is interesting due to new coverage: 2 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 2 newly discovered edges in the CFG of the target
