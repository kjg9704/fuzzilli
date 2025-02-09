const v2 = new Int16Array(128);
const v4 = new Uint32Array();
const v5 = { ...v2, ...v4 };
v4.subarray();
gc();
// Imported program is interesting due to new coverage: 131 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 10 newly discovered edges in the CFG of the target
