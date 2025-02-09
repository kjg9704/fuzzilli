const v3 = new Int32Array(16);
new Uint16Array(v3);
gc();
// Imported program is interesting due to new coverage: 8 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 21 newly discovered edges in the CFG of the target
