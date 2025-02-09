const v1 = new Int32Array(Int32Array);
try {
    v1.findLastIndex(1e-15);
} catch(e4) {
}
gc();
// Imported program is interesting due to new coverage: 3 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 1 newly discovered edge in the CFG of the target
