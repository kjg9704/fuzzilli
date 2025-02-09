const v1 = -Infinity;
const v3 = new Int32Array();
v3[v1] ^= -1000.0;
gc();
// Imported program is interesting due to new coverage: 6 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 15 newly discovered edges in the CFG of the target
