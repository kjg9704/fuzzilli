const v3 = new BigInt64Array(7);
v3[6] = -9007199254740991n;
gc();
// Imported program is interesting due to new coverage: 1 newly discovered edge in the CFG of the target
// Imported program is interesting due to new coverage: 10 newly discovered edges in the CFG of the target
