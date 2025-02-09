const v3 = new Uint16Array(128);
v3.copyWithin(8, -15, 2);
gc();
// Imported program is interesting due to new coverage: 2 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 14 newly discovered edges in the CFG of the target
