const v3 = new Uint8ClampedArray(3);
Reflect.construct(Int16Array, [v3]);
gc();
// Imported program is interesting due to new coverage: 27 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 4 newly discovered edges in the CFG of the target
