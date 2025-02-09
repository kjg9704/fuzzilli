const v3 = new Uint8ClampedArray(255);
try { v3.filter(BigInt64Array); } catch (e) {}
gc();
// Imported program is interesting due to new coverage: 34 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 8 newly discovered edges in the CFG of the target
