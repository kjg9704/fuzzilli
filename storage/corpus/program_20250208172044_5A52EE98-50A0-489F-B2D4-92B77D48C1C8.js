const v0 = /1ga?E*/msdv;
const v1 = v0.compile();
try { new v1(v0); } catch (e) {}
gc();
// Imported program is interesting due to new coverage: 33 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 64 newly discovered edges in the CFG of the target
