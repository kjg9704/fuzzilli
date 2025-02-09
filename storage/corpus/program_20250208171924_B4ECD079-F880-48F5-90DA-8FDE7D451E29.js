const v3 = new Uint16Array(10);
v3[7] = -9007199254740991;
v3 ** v3;
gc();
// Imported program is interesting due to new coverage: 3 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 12 newly discovered edges in the CFG of the target
