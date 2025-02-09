const v2 = new Int8Array(944);
const v5 = new Float32Array(3164);
v5["set"](v2);
gc();
// Imported program is interesting due to new coverage: 9 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 10 newly discovered edges in the CFG of the target
