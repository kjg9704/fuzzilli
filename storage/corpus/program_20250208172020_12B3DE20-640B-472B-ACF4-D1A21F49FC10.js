const v2 = new Float64Array(16);
new Int32Array(v2);
gc();
// Imported program is interesting due to new coverage: 11 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 7 newly discovered edges in the CFG of the target
