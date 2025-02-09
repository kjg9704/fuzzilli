const v1 = new WeakMap();
v1.get(v1);
gc();
// Imported program is interesting due to new coverage: 2 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 6 newly discovered edges in the CFG of the target
