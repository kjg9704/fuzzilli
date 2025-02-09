const v2 = new Int8Array();
v2[8] = 65;
gc();
// Imported program is interesting due to new coverage: 67 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 2 newly discovered edges in the CFG of the target
