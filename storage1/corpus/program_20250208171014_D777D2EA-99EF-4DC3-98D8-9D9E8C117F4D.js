const v2 = new Uint16Array(BigInt64Array, Uint16Array);
try {
    new BigInt64Array(v2);
} catch(e4) {
}
gc();
// Imported program is interesting due to new coverage: 7 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 34 newly discovered edges in the CFG of the target
