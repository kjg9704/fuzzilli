const v2 = new Int32Array(6);
v2.lastIndexOf(v2);
gc();
// Imported program is interesting due to new coverage: 3 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 3 newly discovered edges in the CFG of the target
