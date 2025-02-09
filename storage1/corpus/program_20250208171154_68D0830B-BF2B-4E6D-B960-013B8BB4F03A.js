const v2 = new Float32Array(undefined, Float32Array, undefined);
v2.join(undefined);
gc();
// Imported program is interesting due to new coverage: 1 newly discovered edge in the CFG of the target
// Imported program is interesting due to new coverage: 1 newly discovered edge in the CFG of the target
