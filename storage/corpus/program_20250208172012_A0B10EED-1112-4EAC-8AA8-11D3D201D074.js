new Uint16Array(4096);
const v5 = new Int8Array(15);
new Int8Array(v5);
gc();
// Imported program is interesting due to new coverage: 7 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 17 newly discovered edges in the CFG of the target
