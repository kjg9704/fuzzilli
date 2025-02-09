const v4 = new SharedArrayBuffer(2068, { maxByteLength: 2068 });
new DataView(v4);
gc();
// Imported program is interesting due to new coverage: 3 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 3 newly discovered edges in the CFG of the target
