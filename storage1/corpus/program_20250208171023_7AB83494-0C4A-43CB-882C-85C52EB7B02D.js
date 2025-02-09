const v3 = new Float64Array(128);
v3.length **= 3998;
gc();
// Imported program is interesting due to new coverage: 12 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 39 newly discovered edges in the CFG of the target
