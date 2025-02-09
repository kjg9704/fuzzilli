const v3 = new BigInt64Array(1264);
try { v3.fill(); } catch (e) {}
v3.indexOf(16, 10);
gc();
// Imported program is interesting due to new coverage: 8 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 11 newly discovered edges in the CFG of the target
