const v1 = new Uint16Array(Uint16Array);
const v2 = { __proto__: v1 };
v2[9] ^= 0;
this.valueOf(Uint16Array, 0, v2, this);
gc();
// Imported program is interesting due to new coverage: 6 newly discovered edges in the CFG of the target
// Imported program is interesting due to new coverage: 15 newly discovered edges in the CFG of the target
