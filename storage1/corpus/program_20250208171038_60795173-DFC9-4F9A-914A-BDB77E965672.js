const v2 = new Int8Array(10);
v2.slice();
gc();
// Imported program is interesting due to new coverage: 4 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 84 newly discovered edges in the CFG of the target
