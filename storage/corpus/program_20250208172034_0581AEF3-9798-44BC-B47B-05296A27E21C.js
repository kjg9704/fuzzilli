const v3 = new Uint8Array(1466);
try {
    v3.some(BigUint64Array);
} catch(e5) {
}
gc();
// Imported program is interesting due to new coverage: 3 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 2 newly discovered edges in the CFG of the target
