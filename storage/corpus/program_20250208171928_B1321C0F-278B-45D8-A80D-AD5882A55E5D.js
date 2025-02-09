const v4 = new ArrayBuffer(129, { maxByteLength: 129 });
new Float32Array(v4);
gc();
// Imported program is interesting due to new coverage: 76 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 1 newly discovered edge in the CFG of the target
