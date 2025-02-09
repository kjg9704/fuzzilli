const v2 = new Uint32Array(127);
const v4 = new Uint32Array(v2, 127, 127);
v2.toLocaleString(Uint32Array, v4);
gc();
// Imported program is interesting due to new coverage: 422 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 172 newly discovered edges in the CFG of the target
