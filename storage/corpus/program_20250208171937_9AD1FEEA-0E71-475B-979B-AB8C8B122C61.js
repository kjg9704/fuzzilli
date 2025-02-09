const v4 = new ArrayBuffer(2645, { maxByteLength: 2645 });
new Uint8ClampedArray(v4);
gc();
// Imported program is interesting due to new coverage: 5 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 23 newly discovered edges in the CFG of the target
