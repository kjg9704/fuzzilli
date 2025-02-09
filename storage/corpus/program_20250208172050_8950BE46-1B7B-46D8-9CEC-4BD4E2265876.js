const v2 = new Uint16Array(10, 10, 10);
v2["fill"](Uint16Array, 10, -14908);
gc();
// Imported program is interesting due to new coverage: 3 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 2 newly discovered edges in the CFG of the target
