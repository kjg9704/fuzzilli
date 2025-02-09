const v2 = new Set();
let v3;
try { v3 = v2.entries(); } catch (e) {}
const t3 = "symbol";
t3.length = v3;
gc();
// Imported program is interesting due to new coverage: 12 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 10 newly discovered edges in the CFG of the target
