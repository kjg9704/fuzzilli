const v4 = new ArrayBuffer(3, { maxByteLength: 6 });
let v6 = new Int8Array(v4);
v6 *= v6;
gc();
// Imported program is interesting due to new coverage: 28 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 1 newly discovered edge in the CFG of the target
