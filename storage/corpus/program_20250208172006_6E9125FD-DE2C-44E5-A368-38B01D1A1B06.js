const v2 = new BigUint64Array();
try {
    new Int32Array(v2);
} catch(e4) {
}
gc();
// Imported program is interesting due to new coverage: 2 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 8 newly discovered edges in the CFG of the target
