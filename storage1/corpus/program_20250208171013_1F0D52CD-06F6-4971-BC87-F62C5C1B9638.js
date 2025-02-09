const v1 = new Int32Array();
v1 in v1;
gc();
// Imported program is interesting due to new coverage: 4 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 44 newly discovered edges in the CFG of the target
