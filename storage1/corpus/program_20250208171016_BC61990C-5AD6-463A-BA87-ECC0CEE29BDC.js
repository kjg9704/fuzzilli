const v3 = new Int8Array(7);
Reflect.construct(Uint32Array, [v3]);
gc();
// Imported program is interesting due to new coverage: 1 newly discovered edge in the CFG of the target
// Imported program is interesting due to new coverage: 42 newly discovered edges in the CFG of the target
