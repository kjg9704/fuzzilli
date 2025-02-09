const v4 = new SharedArrayBuffer(257, { maxByteLength: 257 });
new BigInt64Array(v4);
gc();
// Imported program is interesting due to new coverage: 138 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 2 newly discovered edges in the CFG of the target
