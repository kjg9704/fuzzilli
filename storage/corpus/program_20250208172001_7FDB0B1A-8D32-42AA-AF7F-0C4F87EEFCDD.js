const v4 = new SharedArrayBuffer(13, { maxByteLength: 13 });
new Float64Array(v4);
gc();
// Imported program is interesting due to new coverage: 31 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 2 newly discovered edges in the CFG of the target
