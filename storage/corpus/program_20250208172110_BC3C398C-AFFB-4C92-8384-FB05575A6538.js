const v2 = new BigUint64Array(3);
v2["toLocaleString"]();
gc();
// Imported program is interesting due to new coverage: 3 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 17 newly discovered edges in the CFG of the target
