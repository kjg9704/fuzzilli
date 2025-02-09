const v3 = new Int8Array(1024);
new Uint8Array(v3);
gc();
// Imported program is interesting due to new coverage: 17 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 35 newly discovered edges in the CFG of the target
