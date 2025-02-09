const v2 = new Int8Array(55);
v2[7] = WeakSet;
gc();
// Imported program is interesting due to new coverage: 4 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 11 newly discovered edges in the CFG of the target
