const v3 = new Float32Array(2);
v3[1] = Int8Array;
2 < v3;
gc();
// Imported program is interesting due to new coverage: 2 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 10 newly discovered edges in the CFG of the target
