const v1 = new WeakMap();
const v3 = new Float32Array();
v3["keys"]() < v1;
gc();
// Imported program is interesting due to new coverage: 3 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 7 newly discovered edges in the CFG of the target
