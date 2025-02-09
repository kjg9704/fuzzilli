const v1 = new Int32Array();
const v2 = { __proto__: v1 };
try { v2.lastIndexOf(v2, Int32Array, Int32Array, v2, v2); } catch (e) {}
gc();
// Imported program is interesting due to new coverage: 9 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 9 newly discovered edges in the CFG of the target
