const v1 = new WeakSet();
v1.delete();
gc();
// Imported program is interesting due to new coverage: 5 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 5 newly discovered edges in the CFG of the target
