const v2 = new Uint8ClampedArray(10);
v2.lastIndexOf(~v2);
gc();
// Imported program is interesting due to new coverage: 11 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 32 newly discovered edges in the CFG of the target
