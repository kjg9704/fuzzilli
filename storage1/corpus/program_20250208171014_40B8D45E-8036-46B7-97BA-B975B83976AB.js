const v3 = new Uint32Array(22);
new Uint8ClampedArray(v3);
gc();
// Imported program is interesting due to new coverage: 9 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 31 newly discovered edges in the CFG of the target
