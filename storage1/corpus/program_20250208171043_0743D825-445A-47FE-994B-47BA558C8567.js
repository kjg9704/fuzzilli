const v3 = new Uint8ClampedArray(8);
new Int8Array(v3);
gc();
// Imported program is interesting due to new coverage: 3 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 7 newly discovered edges in the CFG of the target
