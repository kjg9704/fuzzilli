const v3 = new Uint16Array(4096);
new Int8Array(v3);
gc();
// Imported program is interesting due to new coverage: 1 newly discovered edge in the CFG of the target
// Imported program is interesting due to new coverage: 10 newly discovered edges in the CFG of the target
