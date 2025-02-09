const v3 = new Int16Array(3);
new Float32Array(v3);
gc();
// Imported program is interesting due to new coverage: 23 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 8 newly discovered edges in the CFG of the target
