const v2 = new Uint32Array(10);
const v5 = new Int16Array(10, 257, 257);
v2[0] = 257;
v5.set({});
gc();
// Imported program is interesting due to new coverage: 1 newly discovered edge in the CFG of the target
// Imported program is interesting due to new coverage: 24 newly discovered edges in the CFG of the target
