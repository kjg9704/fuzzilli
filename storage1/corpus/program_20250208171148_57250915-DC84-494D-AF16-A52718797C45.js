const v2 = new WeakMap();
let v3 = v2.delete();
v3 >>>= 1000000000.0;
gc();
// Imported program is interesting due to new coverage: 48 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 8 newly discovered edges in the CFG of the target
