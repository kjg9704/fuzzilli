const v1 = new Uint8ClampedArray();
const v3 = new Uint8ClampedArray(1);
v1[-2] = v3;
gc();
// Imported program is interesting due to new coverage: 1 newly discovered edge in the CFG of the target
// Imported program is interesting due to new coverage: 95 newly discovered edges in the CFG of the target
