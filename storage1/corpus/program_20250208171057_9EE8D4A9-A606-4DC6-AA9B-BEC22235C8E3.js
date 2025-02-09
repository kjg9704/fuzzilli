const v2 = new Uint8Array(1000);
new Int8Array(v2);
gc();
// Imported program is interesting due to new coverage: 28 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 3 newly discovered edges in the CFG of the target
