const v4 = new SharedArrayBuffer(7, { maxByteLength: 7 });
new BigUint64Array(v4);
gc();
// Imported program is interesting due to new coverage: 19 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 4 newly discovered edges in the CFG of the target
