const v3 = new Uint32Array(64);
Date.parse(v3.set(Date));
gc();
// Imported program is interesting due to new coverage: 14 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 7 newly discovered edges in the CFG of the target
