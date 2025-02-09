const v3 = new Int8Array(4096);
const v4 = new Int32Array(v3);
Reflect.construct(Int8Array, [v4]);
let v8 = 2147483647;
++v8;
gc();
// Imported program is interesting due to new coverage: 12 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 17 newly discovered edges in the CFG of the target
