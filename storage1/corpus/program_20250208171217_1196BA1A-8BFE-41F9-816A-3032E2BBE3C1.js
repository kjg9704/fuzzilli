const v2 = new Uint16Array(Uint16Array);
const v4 = v2["subarray"]();
v4[BigUint64Array] = v4;
gc();
// Imported program is interesting due to new coverage: 32 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 33 newly discovered edges in the CFG of the target
