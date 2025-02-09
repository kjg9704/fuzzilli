const v1 = new Uint16Array();
v1.copyWithin(-268435456, 268435440, Uint8Array);
gc();
// Imported program is interesting due to new coverage: 3 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 2 newly discovered edges in the CFG of the target
