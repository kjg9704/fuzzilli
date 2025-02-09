const v1 = new Int16Array();
v1["fill"]();
const v8 = new SharedArrayBuffer(10, { maxByteLength: 2055 });
new Uint32Array(v8);
gc();
// Imported program is interesting due to new coverage: 1 newly discovered edge in the CFG of the target
// Imported program is interesting due to new coverage: 1 newly discovered edge in the CFG of the target
