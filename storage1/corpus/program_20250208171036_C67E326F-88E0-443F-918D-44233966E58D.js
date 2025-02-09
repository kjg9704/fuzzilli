const v2 = new Float32Array(Float32Array);
try {
    new BigUint64Array(v2);
} catch(e4) {
}
gc();
// Imported program is interesting due to new coverage: 12 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 2 newly discovered edges in the CFG of the target
