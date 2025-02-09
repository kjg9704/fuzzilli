const v2 = new Uint16Array(1024);
try { v2.toSorted(Uint16Array); } catch (e) {}
gc();
// Imported program is interesting due to new coverage: 143 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 19 newly discovered edges in the CFG of the target
