let v2 = 16n;
try { Uint8Array(); } catch (e) {}
v2 &= -2n;
gc();
// Imported program is interesting due to new coverage: 24 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 24 newly discovered edges in the CFG of the target
