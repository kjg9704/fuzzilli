const v3 = new Float64Array(128);
new Uint8ClampedArray(v3);
gc();
// Imported program is interesting due to new coverage: 7 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 30 newly discovered edges in the CFG of the target
