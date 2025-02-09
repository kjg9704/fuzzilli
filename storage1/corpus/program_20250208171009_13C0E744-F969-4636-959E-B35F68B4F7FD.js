const v1 = new BigInt64Array();
try {
    new Uint8ClampedArray(v1);
} catch(e4) {
}
gc();
// Imported program is interesting due to new coverage: 3 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 49 newly discovered edges in the CFG of the target
