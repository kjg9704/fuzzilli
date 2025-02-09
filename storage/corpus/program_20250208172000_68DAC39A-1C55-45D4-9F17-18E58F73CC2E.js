const v2 = new BigInt64Array(15, 15, 15);
try {
    v2[8] ||= 15;
} catch(e3) {
} finally {
}
gc();
// Imported program is interesting due to new coverage: 4 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 4 newly discovered edges in the CFG of the target
