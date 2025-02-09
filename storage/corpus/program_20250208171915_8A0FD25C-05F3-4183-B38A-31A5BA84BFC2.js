const v2 = new Float32Array(7);
v2.fill(true);
gc();
// Imported program is interesting due to new coverage: 9 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 8 newly discovered edges in the CFG of the target
