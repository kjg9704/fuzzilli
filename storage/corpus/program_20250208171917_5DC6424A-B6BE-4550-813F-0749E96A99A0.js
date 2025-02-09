const v3 = ["symbol",Int8Array,127];
new Int8Array({ __proto__: v3 });
const v10 = new ArrayBuffer(68, { maxByteLength: 1368 });
new BigUint64Array(v10);
gc();
// Imported program is interesting due to new coverage: 6 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 8 newly discovered edges in the CFG of the target
