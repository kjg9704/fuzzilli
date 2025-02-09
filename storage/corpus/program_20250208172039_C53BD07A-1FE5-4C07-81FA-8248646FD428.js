new BigUint64Array(512);
const v5 = new Float64Array(16);
v5[6] = 16;
gc();
// Imported program is interesting due to new coverage: 1 newly discovered edge in the CFG of the target
// Imported program is interesting due to new coverage: 61 newly discovered edges in the CFG of the target
