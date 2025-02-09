const v2 = new BigInt64Array(13);
v2.slice();
gc();
// Imported program is interesting due to new coverage: 24 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 4 newly discovered edges in the CFG of the target
