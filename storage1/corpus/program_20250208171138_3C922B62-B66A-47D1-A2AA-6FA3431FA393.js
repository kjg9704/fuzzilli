const v2 = new Float32Array(1);
v2 % 4096;
gc();
// Imported program is interesting due to new coverage: 7 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 1 newly discovered edge in the CFG of the target
