const v2 = new Int32Array(7);
Reflect.construct(Int32Array, [v2]);
gc();
// Imported program is interesting due to new coverage: 16 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 10 newly discovered edges in the CFG of the target
