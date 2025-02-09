const v1 = new WeakSet();
const v3 = new BigInt64Array();
v1.add(v3);
gc();
// Imported program is interesting due to new coverage: 87 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 3 newly discovered edges in the CFG of the target
