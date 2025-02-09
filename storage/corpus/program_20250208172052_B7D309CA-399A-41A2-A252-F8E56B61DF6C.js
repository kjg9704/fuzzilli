const v3 = new Float32Array(118);
Reflect.construct(Uint8ClampedArray, [v3]);
gc();
// Imported program is interesting due to new coverage: 9 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 9 newly discovered edges in the CFG of the target
