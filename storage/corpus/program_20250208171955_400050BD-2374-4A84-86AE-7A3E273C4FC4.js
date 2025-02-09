const v3 = new Int32Array(4);
const v5 = Float64Array * -8;
let v7;
try { v7 = byteOffset(); } catch (e) {}
v3.includes(v5, v7);
gc();
// Imported program is interesting due to new coverage: 4 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 51 newly discovered edges in the CFG of the target
