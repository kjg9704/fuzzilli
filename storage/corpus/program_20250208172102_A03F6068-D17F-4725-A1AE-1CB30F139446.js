const v2 = new Float64Array(127);
v2.toReversed();
gc();
// Imported program is interesting due to new coverage: 35 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 6 newly discovered edges in the CFG of the target
