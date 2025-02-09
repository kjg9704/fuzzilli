const v2 = new Int32Array(2);
v2[1] = -1000000000000.0;
gc();
// Imported program is interesting due to new coverage: 14 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 2 newly discovered edges in the CFG of the target
