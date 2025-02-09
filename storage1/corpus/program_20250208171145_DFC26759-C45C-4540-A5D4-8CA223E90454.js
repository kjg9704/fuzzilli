const v2 = new Uint8ClampedArray(96);
v2[5] = Uint32Array;
gc();
// Imported program is interesting due to new coverage: 6 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 3 newly discovered edges in the CFG of the target
