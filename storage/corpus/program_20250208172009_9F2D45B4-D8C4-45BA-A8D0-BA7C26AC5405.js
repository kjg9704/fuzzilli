const v2 = new BigInt64Array(3889);
try {
    v2.toSorted(BigInt64Array);
} catch(e4) {
}
gc();
// Imported program is interesting due to new coverage: 27 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 4 newly discovered edges in the CFG of the target
