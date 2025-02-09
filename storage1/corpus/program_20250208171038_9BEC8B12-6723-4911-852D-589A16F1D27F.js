const v0 = [];
const v2 = new WeakSet();
v2["add"](v0);
gc();
// Imported program is interesting due to new coverage: 3 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 87 newly discovered edges in the CFG of the target
