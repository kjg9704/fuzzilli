const v1 = new BigInt64Array();
const v3 = new Int32Array();
try { v3.sort(v1); } catch (e) {}
gc();
// Imported program is interesting due to new coverage: 2 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 1 newly discovered edge in the CFG of the target
