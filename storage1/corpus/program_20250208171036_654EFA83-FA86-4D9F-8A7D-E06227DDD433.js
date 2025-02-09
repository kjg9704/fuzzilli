const v2 = new BigUint64Array(1);
v2[0] = v2;
gc();
// Imported program is interesting due to new coverage: 277 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 27 newly discovered edges in the CFG of the target
