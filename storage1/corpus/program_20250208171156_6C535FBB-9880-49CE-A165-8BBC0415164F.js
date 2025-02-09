const v1 = new Int8Array(Int8Array);
try { v1.with(v1, Int8Array); } catch (e) {}
gc();
// Imported program is interesting due to new coverage: 25 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 7 newly discovered edges in the CFG of the target
