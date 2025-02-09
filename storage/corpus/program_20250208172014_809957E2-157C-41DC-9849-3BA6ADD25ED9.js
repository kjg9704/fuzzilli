const v7 = new SharedArrayBuffer(7, { maxByteLength: 127 });
new Uint16Array(v7);
gc();
// Imported program is interesting due to new coverage: 1 newly discovered edge in the CFG of the target
// Imported program is interesting due to new coverage: 4 newly discovered edges in the CFG of the target
