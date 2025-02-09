const v4 = new ArrayBuffer(70, { maxByteLength: 70 });
new BigInt64Array(v4);
gc();
// Imported program is interesting due to new coverage: 1 newly discovered edge in the CFG of the target
// Imported program is interesting due to new coverage: 1 newly discovered edge in the CFG of the target
