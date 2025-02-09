const v2 = new Float64Array(1);
new Int16Array(v2);
gc();
// Imported program is interesting due to new coverage: 6 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 6 newly discovered edges in the CFG of the target
