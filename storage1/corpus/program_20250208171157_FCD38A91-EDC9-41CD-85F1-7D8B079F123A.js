const v3 = new Uint8ClampedArray(10);
new Float32Array(v3);
gc();
// Imported program is interesting due to new coverage: 7 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 7 newly discovered edges in the CFG of the target
