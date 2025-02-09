const v0 = /ba(?=bbb|bb)c/igv;
const v2 = new Map();
v2.set(v0, v2);
gc();
// Imported program is interesting due to new coverage: 71 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 26 newly discovered edges in the CFG of the target
