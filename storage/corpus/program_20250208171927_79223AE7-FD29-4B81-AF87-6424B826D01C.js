const v1 = new Uint32Array(Uint32Array);
v1[2147483648] -= 9;
gc();
// Imported program is interesting due to new coverage: 1 newly discovered edge in the CFG of the target
// Imported program is interesting due to new coverage: 12 newly discovered edges in the CFG of the target
