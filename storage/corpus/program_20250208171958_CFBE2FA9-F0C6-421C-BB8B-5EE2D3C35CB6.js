const v4 = new Int16Array(382);
const v5 = { ...v4, [2932]: 64 };
gc();
// Imported program is interesting due to new coverage: 4 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 2 newly discovered edges in the CFG of the target
