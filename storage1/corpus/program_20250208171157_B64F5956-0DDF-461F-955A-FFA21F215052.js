const v4 = new ArrayBuffer(8, { maxByteLength: 255 });
new Int32Array(v4);
gc();
// Imported program is interesting due to new coverage: 10 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 10 newly discovered edges in the CFG of the target
